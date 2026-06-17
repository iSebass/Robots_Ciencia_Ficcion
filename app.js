// Lógica de la aplicación para consulta de notas de múltiples actividades
document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("student-code-input");
    const clearBtn = document.getElementById("clear-btn");
    const searchErrorMsg = document.getElementById("search-error-msg");
    const courseSelect = document.getElementById("course-select");
    
    const welcomeContainer = document.getElementById("welcome-container");
    const resultContainer = document.getElementById("result-container");
    const noSubmissionContainer = document.getElementById("no-submission-container");
    const errorContainer = document.getElementById("error-container");
    const resultLayout = document.querySelector(".result-layout");
    const activitiesInfoGrid = document.getElementById("activities-info-grid");
    const tabsContainer = document.getElementById("tabs-navigation-container");

    // Student Info Fields
    const studentNameEl = document.getElementById("student-name");
    const studentCodeEl = document.getElementById("student-code");
    const studentEmailEl = document.getElementById("student-email");
    const studentProgramBadge = document.getElementById("student-program-badge");
    const studentAverageEl = document.getElementById("student-average");
    
    // Activity Info Fields
    const feedbackTitleEl = document.getElementById("feedback-title");
    const studentFeedbackEl = document.getElementById("student-feedback");
    const scoreCardTitleEl = document.getElementById("score-card-title");
    
    // Score Fields
    const scoreValEl = document.getElementById("score-val");
    const radialBar = document.getElementById("radial-bar");
    const performanceBadgeContainer = document.getElementById("performance-badge-container");
    const rubricIndicatorsContainer = document.getElementById("rubric-indicators");

    // Warning / No-Sub fields
    const noSubStudentNameEl = document.getElementById("no-sub-student-name");
    const noSubStudentCodeEl = document.getElementById("no-sub-student-code");

    // App State Variables
    let currentCourseKey = localStorage.getItem("current_course_key") || "robots_ciencia_ficcion";
    let currentStudent = null;
    let activeTab = ""; // dynamic based on course activities

    // Initialize Course Select
    courseSelect.value = currentCourseKey;

    // Theme Management
    const savedTheme = localStorage.getItem("theme") || "dark-theme";
    document.body.className = savedTheme;
    updateThemeIcon(savedTheme);

    themeToggleBtn.addEventListener("click", () => {
        const currentTheme = document.body.className;
        const newTheme = currentTheme === "dark-theme" ? "light-theme" : "dark-theme";
        document.body.className = newTheme;
        localStorage.setItem("theme", newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        const icon = themeToggleBtn.querySelector("i");
        if (theme === "dark-theme") {
            icon.className = "fa-solid fa-sun";
        } else {
            icon.className = "fa-solid fa-moon";
        }
    }

    // Render Welcome Activities info
    function renderWelcomeActivities() {
        const activeCourse = COURSES_DATA[currentCourseKey];
        if (!activeCourse) return;

        activitiesInfoGrid.innerHTML = "";
        activeCourse.activities.forEach((act, index) => {
            const box = document.createElement("div");
            box.className = "act-info-box";
            box.innerHTML = `
                <h4><i class="fa-solid ${act.icon} ${act.colorClass}"></i> ${index + 1}. ${act.name}</h4>
                <p class="act-desc">${act.description}</p>
            `;
            activitiesInfoGrid.appendChild(box);
        });
    }

    // Initialize Welcome View
    renderWelcomeActivities();

    // Course select handler
    courseSelect.addEventListener("change", (e) => {
        currentCourseKey = e.target.value;
        localStorage.setItem("current_course_key", currentCourseKey);
        
        // Reset Search
        searchInput.value = "";
        clearBtn.style.display = "none";
        searchErrorMsg.style.display = "none";
        
        // Hide details and show welcome
        welcomeContainer.style.display = "block";
        resultContainer.style.display = "none";
        noSubmissionContainer.style.display = "none";
        errorContainer.style.display = "none";
        currentStudent = null;

        // Re-render activities for the new course
        renderWelcomeActivities();

        // Refresh teacher dashboard if visible
        if (docenteDashboard.style.display === "block") {
            showTeacherDashboard();
        }
    });

    // Input handlers
    searchInput.addEventListener("input", () => {
        if (searchInput.value.trim() !== "") {
            clearBtn.style.display = "block";
        } else {
            clearBtn.style.display = "none";
        }
        searchErrorMsg.style.display = "none";
    });

    clearBtn.addEventListener("click", () => {
        searchInput.value = "";
        clearBtn.style.display = "none";
        searchErrorMsg.style.display = "none";
        searchInput.focus();
    });

    // Form submission
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const codeQuery = searchInput.value.trim();
        if (!codeQuery) return;

        searchStudent(codeQuery);
    });

    function searchStudent(code) {
        // Hide all containers
        welcomeContainer.style.display = "none";
        resultContainer.style.display = "none";
        noSubmissionContainer.style.display = "none";
        errorContainer.style.display = "none";
        searchErrorMsg.style.display = "none";

        // Validate query
        if (!/^\d+$/.test(code)) {
            searchErrorMsg.textContent = "Por favor ingresa un código numérico válido.";
            searchErrorMsg.style.display = "block";
            welcomeContainer.style.display = "block";
            return;
        }

        // Check if data is loaded
        if (typeof COURSES_DATA === "undefined") {
            console.error("COURSES_DATA is not loaded!");
            errorContainer.style.display = "block";
            return;
        }

        const activeCourse = COURSES_DATA[currentCourseKey];
        if (!activeCourse) {
            errorContainer.style.display = "block";
            return;
        }

        const student = activeCourse.students.find(s => s.codigo === code);

        if (!student) {
            errorContainer.style.display = "block";
            currentStudent = null;
            return;
        }

        // Student found! Set state
        currentStudent = student;
        
        // Populate Student Header info (always visible regardless of tab)
        studentNameEl.textContent = student.nombre;
        studentCodeEl.textContent = student.codigo;
        studentEmailEl.textContent = student.correo;
        studentProgramBadge.textContent = getProgramName(student.programa);
        
        // Calculate and show weighted average grade
        let totalWeightedGrade = 0;
        let totalWeight = 0;
        activeCourse.activities.forEach(act => {
            const gradeObj = student.notas[act.id];
            const noteVal = gradeObj ? gradeObj.nota : 0.0;
            totalWeightedGrade += noteVal * act.weight;
            totalWeight += act.weight;
        });
        const avg = totalWeight > 0 ? (totalWeightedGrade / totalWeight) : 0.0;
        studentAverageEl.textContent = avg.toFixed(2);

        // Generate Tab Buttons Dynamically
        tabsContainer.innerHTML = "";
        activeCourse.activities.forEach((act, index) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = `tab-btn ${index === 0 ? "active" : ""}`;
            btn.innerHTML = `<i class="fa-solid ${act.icon}"></i> <span>${act.name}</span>`;
            btn.addEventListener("click", () => {
                activeTab = act.id;
                tabsContainer.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                renderActiveTab();
            });
            tabsContainer.appendChild(btn);
        });

        // Set initial active tab
        if (activeCourse.activities.length > 0) {
            activeTab = activeCourse.activities[0].id;
        }

        // Show main result container
        resultContainer.style.display = "block";

        // Render current active tab content
        renderActiveTab();
    }

    function renderActiveTab() {
        if (!currentStudent) return;

        const activeCourse = COURSES_DATA[currentCourseKey];
        if (!activeCourse) return;

        const actConfig = activeCourse.activities.find(a => a.id === activeTab);
        if (!actConfig) return;

        const activityData = currentStudent.notas[activeTab];

        feedbackTitleEl.innerHTML = `<i class="fa-solid ${actConfig.icon} ${actConfig.colorClass}"></i> Retroalimentación: ${actConfig.name}`;
        scoreCardTitleEl.textContent = actConfig.name;

        // Check if student has notes for this specific activity
        if (activityData && activityData.nota > 0.0) {
            // Show details panel, hide warning
            resultLayout.style.display = "grid";
            noSubmissionContainer.style.display = "none";

            // Populate specific activity fields
            studentFeedbackEl.textContent = activityData.retroalimentacion;
            scoreValEl.textContent = activityData.nota.toFixed(1);

            // Animate progress circle
            const maxCircleLength = 314.159;
            const percentage = activityData.nota / 5.0;
            const dashOffset = maxCircleLength * (1 - percentage);
            
            radialBar.style.strokeDashoffset = maxCircleLength;
            setTimeout(() => {
                radialBar.style.strokeDashoffset = dashOffset;
            }, 50);

            // Redraw performance badge & specific rubric criteria
            updatePerformanceMetrics(activityData.nota, activeTab);
        } else {
            // Grade is 0.0 or undefined, show "No submission warning" while keeping tab controls visible
            resultLayout.style.display = "none";
            
            noSubStudentNameEl.textContent = currentStudent.nombre;
            noSubStudentCodeEl.textContent = currentStudent.codigo;
            
            const warningTextEl = noSubmissionContainer.querySelector(".warning-details p");
            warningTextEl.innerHTML = `No se encontró registro de tu participación o entrega en la actividad <strong>"${actConfig.name}"</strong>.`;
            noSubmissionContainer.style.display = "block";
        }
    }

    function getProgramName(programCode) {
        const programs = {
            "3743": "Ingeniería de Sistemas",
            "3751": "Ingeniería Industrial",
            "3845": "Administración de Empresas",
            "3841": "Contaduría Pública",
            "3740": "Trabajo Social",
            "2724": "Tecnología en Desarrollo de Software",
            "2725": "Tecnología en Electrónica Industrial",
            "2712": "Tecnología en Alimentos",
            "2716": "Tecnología Agroambiental",
            "3643": "Nutrición y Dietética"
        };
        return programs[programCode] || `Programa ${programCode}`;
    }

    function updatePerformanceMetrics(score, activityType) {
        performanceBadgeContainer.className = "performance-badge";
        
        let label = "";
        let rubricClass = "";
        let fillClass = "";
        let textClass = "";

        if (score >= 4.5) {
            label = "Excelente";
            performanceBadgeContainer.classList.add("performance-sobresaliente");
            rubricClass = "Excelente";
            fillClass = "";
            textClass = "";
        } else if (score >= 3.8) {
            label = "Satisfactorio";
            performanceBadgeContainer.classList.add("performance-satisfactorio");
            rubricClass = "Satisfactorio";
            fillClass = "";
            textClass = "";
        } else if (score >= 3.0) {
            label = "Aceptable";
            performanceBadgeContainer.classList.add("performance-proceso");
            rubricClass = "Aceptable";
            fillClass = "warning-fill";
            textClass = "warning-text";
        } else {
            label = "En desarrollo";
            performanceBadgeContainer.classList.add("performance-insuficiente");
            rubricClass = "En desarrollo";
            fillClass = "danger-fill";
            textClass = "danger-text";
        }

        performanceBadgeContainer.textContent = label;

        // Choose rubric items based on activity configuration
        const activeCourse = COURSES_DATA[currentCourseKey];
        if (!activeCourse) return;

        const actConfig = activeCourse.activities.find(a => a.id === activityType);
        const activeItems = actConfig ? actConfig.rubrics : [];

        rubricIndicatorsContainer.innerHTML = "";
        activeItems.forEach(item => {
            const rubricHtml = `
                <div class="rubric-item">
                    <div class="rubric-info">
                        <span class="rubric-name">${item.name} (${item.weight})</span>
                        <span class="rubric-perf ${textClass}">${rubricClass}</span>
                    </div>
                    <div class="progress-track">
                        <div class="progress-fill ${fillClass}" style="width: 0%;"></div>
                    </div>
                </div>
            `;
            rubricIndicatorsContainer.insertAdjacentHTML("beforeend", rubricHtml);
        });

        // Animate fill widths
        setTimeout(() => {
            const fills = rubricIndicatorsContainer.querySelectorAll(".progress-fill");
            fills.forEach((fill, index) => {
                fill.style.width = (score / 5.0 * 100).toFixed(0) + "%";
            });
        }, 100);
    }

    // ==========================================
    // SECCIÓN DOCENTE: LÓGICA Y ESTADÍSTICAS
    // ==========================================

    // DOM Elements for Docente
    const docenteLoginTrigger = document.getElementById("docente-login-trigger");
    const loginModal = document.getElementById("login-modal");
    const closeLoginBtn = document.getElementById("close-login-btn");
    const loginForm = document.getElementById("login-form");
    const passwordInput = document.getElementById("teacher-password-input");
    const loginErrorMsg = document.getElementById("login-error-msg");

    const docenteDashboard = document.getElementById("docente-dashboard");
    const logoutBtn = document.getElementById("logout-btn");
    const exportExcelBtn = document.getElementById("export-excel-btn");
    const printReportBtn = document.getElementById("print-report-btn");
    const tableSearchInput = document.getElementById("table-search-input");
    const docenteTableBody = document.getElementById("docente-table-body");

    // Stats Labels
    const statTotalStudents = document.getElementById("stat-total-students");
    const statCourseAverage = document.getElementById("stat-course-average");
    const statPassRate = document.getElementById("stat-pass-rate");
    const statTopActivity = document.getElementById("stat-top-activity");

    // Check existing session
    if (sessionStorage.getItem("docente_session") === "true") {
        showTeacherDashboard();
    }

    docenteLoginTrigger.addEventListener("click", () => {
        if (sessionStorage.getItem("docente_session") === "true") {
            showTeacherDashboard();
        } else {
            loginModal.style.display = "flex";
            passwordInput.value = "";
            loginErrorMsg.style.display = "none";
            passwordInput.focus();
        }
    });

    closeLoginBtn.addEventListener("click", () => {
        loginModal.style.display = "none";
    });

    // Close modal on clicking outside content
    loginModal.addEventListener("click", (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = "none";
        }
    });

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const pwd = passwordInput.value.trim();
        if (pwd === "docente2026") {
            sessionStorage.setItem("docente_session", "true");
            loginModal.style.display = "none";
            showTeacherDashboard();
        } else {
            loginErrorMsg.style.display = "block";
            passwordInput.focus();
        }
    });

    logoutBtn.addEventListener("click", () => {
        sessionStorage.removeItem("docente_session");
        docenteDashboard.style.display = "none";
        welcomeContainer.style.display = "block";
        searchInput.value = "";
        clearBtn.style.display = "none";
    });

    function showTeacherDashboard() {
        // Hide student elements
        welcomeContainer.style.display = "none";
        resultContainer.style.display = "none";
        noSubmissionContainer.style.display = "none";
        errorContainer.style.display = "none";
        searchErrorMsg.style.display = "none";

        // Show dashboard
        docenteDashboard.style.display = "block";
        
        // Calculate metrics and populate table
        calculateCourseStatistics();
        renderConsolidatedTable();
    }

    function calculateCourseStatistics() {
        if (typeof COURSES_DATA === "undefined") return;

        const activeCourse = COURSES_DATA[currentCourseKey];
        if (!activeCourse || activeCourse.students.length === 0) return;

        const students = activeCourse.students;
        const total = students.length;
        let sumAverages = 0;
        let passedCount = 0;

        const activitySums = {};
        activeCourse.activities.forEach(act => {
            activitySums[act.id] = 0;
        });

        students.forEach(s => {
            let weightedGrade = 0;
            let totalWeight = 0;
            activeCourse.activities.forEach(act => {
                const noteVal = s.notas[act.id] ? s.notas[act.id].nota : 0.0;
                weightedGrade += noteVal * act.weight;
                totalWeight += act.weight;
                activitySums[act.id] += noteVal;
            });
            const studentAvg = totalWeight > 0 ? (weightedGrade / totalWeight) : 0;
            sumAverages += studentAvg;
            if (studentAvg >= 3.0) passedCount++;
        });

        const courseAverage = sumAverages / total;
        const passRate = (passedCount / total) * 100;

        // Activity averages
        const actAverages = activeCourse.activities.map(act => {
            return {
                name: act.name,
                avg: activitySums[act.id] / total
            };
        });

        // Find activity with highest average
        let bestAct = actAverages[0] || { name: "-", avg: 0 };
        actAverages.forEach(act => {
            if (act.avg > bestAct.avg) bestAct = act;
        });

        // Set text in UI
        statTotalStudents.textContent = total;
        statCourseAverage.textContent = courseAverage.toFixed(2);
        statPassRate.textContent = `${passRate.toFixed(1)}%`;
        statTopActivity.textContent = `${bestAct.name} (${bestAct.avg.toFixed(1)})`;
    }

    function renderConsolidatedTable() {
        if (typeof COURSES_DATA === "undefined") return;

        const activeCourse = COURSES_DATA[currentCourseKey];
        if (!activeCourse) return;

        // Render dynamic table headers
        const thead = document.getElementById("docente-table-head");
        let ths = `
            <tr>
                <th>Código</th>
                <th>Nombre Completo</th>
        `;
        let totalCourseWeight = 0;
        activeCourse.activities.forEach(act => totalCourseWeight += act.weight);

        activeCourse.activities.forEach(act => {
            let actualPercent = totalCourseWeight > 0 ? (act.weight / totalCourseWeight * 100) : 0;
            ths += `<th style="text-align: center;">${act.name}<br><span style="font-size: 0.85em; opacity: 0.8;">(${actualPercent.toFixed(1)}%)</span></th>`;
        });
        ths += `
                <th style="text-align: center;">Promedio Final</th>
            </tr>
        `;
        thead.innerHTML = ths;

        // Render dynamic table body
        docenteTableBody.innerHTML = "";

        activeCourse.students.forEach(s => {
            let weightedGrade = 0;
            let totalWeight = 0;
            activeCourse.activities.forEach(act => {
                const noteVal = s.notas[act.id] ? s.notas[act.id].nota : 0.0;
                weightedGrade += noteVal * act.weight;
                totalWeight += act.weight;
            });
            const avg = totalWeight > 0 ? (weightedGrade / totalWeight) : 0;

            const tr = document.createElement("tr");
            tr.setAttribute("data-code", s.codigo);

            let gradesTdHtml = "";
            activeCourse.activities.forEach(act => {
                const noteVal = s.notas[act.id] ? s.notas[act.id].nota : 0.0;
                gradesTdHtml += `
                    <td class="cell-grade ${noteVal < 3.0 ? 'grade-fail' : ''}" data-activity="${act.id}" style="text-align: center;">
                        ${noteVal.toFixed(1)}
                    </td>
                `;
            });

            tr.innerHTML = `
                <td class="cell-code">${s.codigo}</td>
                <td class="cell-name">${s.nombre}</td>
                ${gradesTdHtml}
                <td class="cell-average ${avg < 3.0 ? 'grade-fail' : ''}" style="text-align: center;">${avg.toFixed(2)}</td>
            `;

            docenteTableBody.appendChild(tr);
        });

        // Add inline editing events to cells
        makeCellsEditable();
    }

    function makeCellsEditable() {
        const cells = docenteTableBody.querySelectorAll(".cell-grade");
        const activeCourse = COURSES_DATA[currentCourseKey];
        if (!activeCourse) return;
        
        cells.forEach(cell => {
            cell.addEventListener("click", function() {
                // If already editing, do nothing
                if (this.classList.contains("cell-grade-editing")) return;

                const currentValue = parseFloat(this.textContent);
                const activity = this.getAttribute("data-activity");
                const row = this.closest("tr");
                const code = row.getAttribute("data-code");

                this.classList.add("cell-grade-editing");
                this.innerHTML = `<input type="number" min="0" max="5" step="0.1" value="${currentValue}">`;
                
                const input = this.querySelector("input");
                input.focus();
                input.select();

                const saveGrade = () => {
                    let newValue = parseFloat(input.value);
                    if (isNaN(newValue) || newValue < 0 || newValue > 5) {
                        alert("Por favor introduce una nota válida entre 0.0 y 5.0");
                        newValue = currentValue; // Revert
                    }

                    // Round to 1 decimal place
                    newValue = Math.round(newValue * 10) / 10;

                    // Update memory data
                    const student = activeCourse.students.find(st => st.codigo === code);
                    if (student) {
                        if (!student.notas[activity]) {
                            student.notas[activity] = { nota: 0.0, retroalimentacion: "" };
                        }
                        student.notas[activity].nota = newValue;
                    }

                    // Update cell content
                    this.classList.remove("cell-grade-editing");
                    this.textContent = newValue.toFixed(1);
                    this.classList.toggle("grade-fail", newValue < 3.0);

                    // Recalculate row average dynamically
                    let weightedGrade = 0;
                    let totalWeight = 0;
                    activeCourse.activities.forEach(act => {
                        const noteVal = student.notas[act.id] ? student.notas[act.id].nota : 0.0;
                        weightedGrade += noteVal * act.weight;
                        totalWeight += act.weight;
                    });
                    const newAvg = totalWeight > 0 ? (weightedGrade / totalWeight) : 0;
                    
                    const avgCell = row.querySelector(".cell-average");
                    avgCell.textContent = newAvg.toFixed(2);
                    avgCell.classList.toggle("grade-fail", newAvg < 3.0);

                    // Update courses statistics cards
                    calculateCourseStatistics();
                };

                input.addEventListener("blur", saveGrade);
                input.addEventListener("keydown", function(e) {
                    if (e.key === "Enter") {
                        saveGrade();
                    } else if (e.key === "Escape") {
                        this.classList.remove("cell-grade-editing");
                        cell.textContent = currentValue.toFixed(1);
                    }
                });
            });
        });
    }

    // Search filter for table
    tableSearchInput.addEventListener("input", function() {
        const query = this.value.toLowerCase().trim();
        const rows = docenteTableBody.querySelectorAll("tr");

        rows.forEach(row => {
            const code = row.querySelector(".cell-code").textContent.toLowerCase();
            const name = row.querySelector(".cell-name").textContent.toLowerCase();
            if (code.includes(query) || name.includes(query)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    });

    // Print report handler
    printReportBtn.addEventListener("click", () => {
        window.print();
    });

    // SheetJS Excel Exporter
    exportExcelBtn.addEventListener("click", () => {
        if (typeof XLSX === "undefined") {
            alert("La librería de exportación no se ha cargado correctamente. Inténtalo de nuevo.");
            return;
        }

        const activeCourse = COURSES_DATA[currentCourseKey];
        if (!activeCourse) return;

        // Map data for sheet
        const sheetData = activeCourse.students.map(s => {
            let weightedGrade = 0;
            let totalWeight = 0;
            activeCourse.activities.forEach(act => {
                const noteVal = s.notas[act.id] ? s.notas[act.id].nota : 0.0;
                weightedGrade += noteVal * act.weight;
                totalWeight += act.weight;
            });
            const avg = totalWeight > 0 ? (weightedGrade / totalWeight) : 0;

            const rowDataObj = {
                "Código": parseInt(s.codigo),
                "Nombre Completo": s.nombre,
                "Correo Institucional": s.correo,
                "Programa": getProgramName(s.programa)
            };

            // Add grades dynamically
            activeCourse.activities.forEach(act => {
                const noteVal = s.notas[act.id] ? s.notas[act.id].nota : 0.0;
                rowDataObj[`${act.name} (${(act.weight * 100).toFixed(0)}%)`] = noteVal;
            });

            rowDataObj["Promedio Final"] = Math.round(avg * 100) / 100;
            return rowDataObj;
        });

        // Create sheet & workbook
        const ws = XLSX.utils.json_to_sheet(sheetData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, `Consolidado ${activeCourse.name.slice(0, 15)}`);

        // Adjust column widths dynamically
        const wscols = [
            { wch: 12 }, // Código
            { wch: 35 }, // Nombre
            { wch: 38 }, // Correo
            { wch: 30 }  // Programa
        ];
        activeCourse.activities.forEach(() => {
            wscols.push({ wch: 20 });
        });
        wscols.push({ wch: 15 }); // Promedio Final
        ws['!cols'] = wscols;

        // Save workbook as file
        const safeName = activeCourse.name.replace(/[^a-zA-Z0-9]/g, "_");
        XLSX.writeFile(wb, `Reporte_Consolidado_Calificaciones_${safeName}.xlsx`);
    });
});
