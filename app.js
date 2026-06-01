// Lógica de la aplicación para consulta de notas de múltiples actividades

document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("student-code-input");
    const clearBtn = document.getElementById("clear-btn");
    const searchErrorMsg = document.getElementById("search-error-msg");
    
    const welcomeContainer = document.getElementById("welcome-container");
    const resultContainer = document.getElementById("result-container");
    const noSubmissionContainer = document.getElementById("no-submission-container");
    const errorContainer = document.getElementById("error-container");
    const resultLayout = document.querySelector(".result-layout");

    // Tab Buttons
    const tabTribunal = document.getElementById("tab-tribunal");
    const tabComic = document.getElementById("tab-comic");
    const tabCohete = document.getElementById("tab-cohete");
    const tabTragamonedas = document.getElementById("tab-tragamonedas");
    const tabTinkercad = document.getElementById("tab-tinkercad");

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
    let currentStudent = null;
    let activeTab = "tribunal"; // "tribunal", "comic", "cohete", "tragamonedas" or "tinkercad"

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

    // Tab Event Listeners
    tabTribunal.addEventListener("click", () => {
        if (activeTab === "tribunal") return;
        activeTab = "tribunal";
        setActiveTabBtn();
        renderActiveTab();
    });

    tabComic.addEventListener("click", () => {
        if (activeTab === "comic") return;
        activeTab = "comic";
        setActiveTabBtn();
        renderActiveTab();
    });

    tabCohete.addEventListener("click", () => {
        if (activeTab === "cohete") return;
        activeTab = "cohete";
        setActiveTabBtn();
        renderActiveTab();
    });

    tabTragamonedas.addEventListener("click", () => {
        if (activeTab === "tragamonedas") return;
        activeTab = "tragamonedas";
        setActiveTabBtn();
        renderActiveTab();
    });

    tabTinkercad.addEventListener("click", () => {
        if (activeTab === "tinkercad") return;
        activeTab = "tinkercad";
        setActiveTabBtn();
        renderActiveTab();
    });

    function setActiveTabBtn() {
        tabTribunal.classList.toggle("active", activeTab === "tribunal");
        tabComic.classList.toggle("active", activeTab === "comic");
        tabCohete.classList.toggle("active", activeTab === "cohete");
        tabTragamonedas.classList.toggle("active", activeTab === "tragamonedas");
        tabTinkercad.classList.toggle("active", activeTab === "tinkercad");
    }

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
        if (typeof STUDENT_DATA === "undefined") {
            console.error("STUDENT_DATA is not loaded!");
            errorContainer.style.display = "block";
            return;
        }

        const student = STUDENT_DATA.find(s => s.codigo === code);

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
        
        // Calculate and show Average grade
        const avg = (student.notas.tribunal.nota + 
                     student.notas.comic.nota + 
                     student.notas.cohete.nota + 
                     student.notas.tragamonedas.nota + 
                     student.notas.tinkercad.nota) / 5.0;
        studentAverageEl.textContent = avg.toFixed(2);

        // Show main result container
        resultContainer.style.display = "block";

        // Render current active tab content
        renderActiveTab();
    }

    function renderActiveTab() {
        if (!currentStudent) return;

        let activityData;
        if (activeTab === "tribunal") {
            activityData = currentStudent.notas.tribunal;
            feedbackTitleEl.innerHTML = `<i class="fa-solid fa-scale-balanced text-tribunal"></i> Retroalimentación: Tribunal de Robótica`;
            scoreCardTitleEl.textContent = "Tribunal de Robótica";
        } else if (activeTab === "comic") {
            activityData = currentStudent.notas.comic;
            feedbackTitleEl.innerHTML = `<i class="fa-solid fa-images text-comic"></i> Retroalimentación: Cómic con IA`;
            scoreCardTitleEl.textContent = "Cómic con IA Generativa";
        } else if (activeTab === "cohete") {
            activityData = currentStudent.notas.cohete;
            feedbackTitleEl.innerHTML = `<i class="fa-solid fa-rocket text-cohete"></i> Retroalimentación: Lanzamiento de Cohete`;
            scoreCardTitleEl.textContent = "Lanzamiento de Cohete";
        } else if (activeTab === "tragamonedas") {
            activityData = currentStudent.notas.tragamonedas;
            feedbackTitleEl.innerHTML = `<i class="fa-solid fa-gamepad text-tragamonedas"></i> Retroalimentación: Robot Tragamonedas`;
            scoreCardTitleEl.textContent = "Robot Tragamonedas";
        } else {
            activityData = currentStudent.notas.tinkercad;
            feedbackTitleEl.innerHTML = `<i class="fa-solid fa-microchip text-tinkercad"></i> Retroalimentación: Actividad Tinkercad`;
            scoreCardTitleEl.textContent = "Actividad Tinkercad";
        }

        // Check if student submitted this specific activity
        if (activityData.nota > 0.0) {
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
            // Grade is 0.0, show "No submission warning" while keeping tab controls visible
            resultLayout.style.display = "none";
            
            noSubStudentNameEl.textContent = currentStudent.nombre;
            noSubStudentCodeEl.textContent = currentStudent.codigo;
            
            const warningTextEl = noSubmissionContainer.querySelector(".warning-details p");
            if (activeTab === "tribunal") {
                warningTextEl.innerHTML = `No se encontró registro de tu participación o entrega en los grupos de la actividad <strong>"Tribunal de Robótica"</strong>.`;
            } else if (activeTab === "comic") {
                warningTextEl.innerHTML = `No se encontró registro de tu participación o entrega en los grupos de la actividad <strong>"Cómic con IA Generativa"</strong>.`;
            } else if (activeTab === "cohete") {
                warningTextEl.innerHTML = `No se encontró registro de tu participación o entrega en la actividad <strong>"Lanzamiento de Cohete"</strong>.`;
            } else if (activeTab === "tragamonedas") {
                warningTextEl.innerHTML = `No se encontró registro de tu participación o entrega en la actividad del <strong>"Robot Tragamonedas"</strong>.`;
            } else {
                warningTextEl.innerHTML = `No se encontró registro de tu participación o entrega en la <strong>"Actividad Tinkercad"</strong>.`;
            }
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

        // Choose rubric items based on activity
        const tribunalItems = [
            { name: "Comprensión de las Leyes", weight: "20%" },
            { name: "Análisis del Conflicto", weight: "25%" },
            { name: "Responsabilidad", weight: "20%" },
            { name: "Solución Propuesta", weight: "20%" },
            { name: "Normativa Real", weight: "15%" }
        ];

        const comicItems = [
            { name: "Narrativa y Guion", weight: "25%" },
            { name: "Uso de IA Generativa", weight: "25%" },
            { name: "Calidad Visual", weight: "20%" },
            { name: "Reflexión Crítica", weight: "20%" },
            { name: "Trabajo en Equipo", weight: "10%" }
        ];

        const coheteItems = [
            { name: "Desempeño Práctico", weight: "100%" }
        ];

        const tragamonedasItems = [
            { name: "Desempeño Práctico", weight: "100%" }
        ];

        const tinkercadItems = [
            { name: "Desempeño Práctico", weight: "100%" }
        ];

        let activeItems;
        if (activityType === "tribunal") {
            activeItems = tribunalItems;
        } else if (activityType === "comic") {
            activeItems = comicItems;
        } else if (activityType === "cohete") {
            activeItems = coheteItems;
        } else if (activityType === "tragamonedas") {
            activeItems = tragamonedasItems;
        } else {
            activeItems = tinkercadItems;
        }

        rubricIndicatorsContainer.innerHTML = "";
        activeItems.forEach(item => {
            const fillWidth = (score / 5.0 * 100).toFixed(0) + "%";
            
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
        if (typeof STUDENT_DATA === "undefined" || STUDENT_DATA.length === 0) return;

        const total = STUDENT_DATA.length;
        let sumAverages = 0;
        let passedCount = 0;

        let sumTribunal = 0;
        let sumComic = 0;
        let sumCohete = 0;
        let sumTragamonedas = 0;
        let sumTinkercad = 0;

        STUDENT_DATA.forEach(s => {
            const studentAvg = (s.notas.tribunal.nota +
                                s.notas.comic.nota +
                                s.notas.cohete.nota +
                                s.notas.tragamonedas.nota +
                                s.notas.tinkercad.nota) / 5.0;
            sumAverages += studentAvg;
            if (studentAvg >= 3.0) passedCount++;

            sumTribunal += s.notas.tribunal.nota;
            sumComic += s.notas.comic.nota;
            sumCohete += s.notas.cohete.nota;
            sumTragamonedas += s.notas.tragamonedas.nota;
            sumTinkercad += s.notas.tinkercad.nota;
        });

        const courseAverage = sumAverages / total;
        const passRate = (passedCount / total) * 100;

        // Activity averages
        const actAverages = [
            { name: "Tribunal", avg: sumTribunal / total },
            { name: "Cómic con IA", avg: sumComic / total },
            { name: "Lanzamiento Cohete", avg: sumCohete / total },
            { name: "Robot Tragamonedas", avg: sumTragamonedas / total },
            { name: "Tinkercad", avg: sumTinkercad / total }
        ];

        // Find activity with highest average
        let bestAct = actAverages[0];
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
        if (typeof STUDENT_DATA === "undefined") return;

        docenteTableBody.innerHTML = "";

        STUDENT_DATA.forEach(s => {
            const avg = (s.notas.tribunal.nota +
                         s.notas.comic.nota +
                         s.notas.cohete.nota +
                         s.notas.tragamonedas.nota +
                         s.notas.tinkercad.nota) / 5.0;

            const tr = document.createElement("tr");
            tr.setAttribute("data-code", s.codigo);

            tr.innerHTML = `
                <td class="cell-code">${s.codigo}</td>
                <td class="cell-name">${s.nombre}</td>
                <td class="cell-grade ${s.notas.tribunal.nota < 3.0 ? 'grade-fail' : ''}" data-activity="tribunal">${s.notas.tribunal.nota.toFixed(1)}</td>
                <td class="cell-grade ${s.notas.comic.nota < 3.0 ? 'grade-fail' : ''}" data-activity="comic">${s.notas.comic.nota.toFixed(1)}</td>
                <td class="cell-grade ${s.notas.cohete.nota < 3.0 ? 'grade-fail' : ''}" data-activity="cohete">${s.notas.cohete.nota.toFixed(1)}</td>
                <td class="cell-grade ${s.notas.tragamonedas.nota < 3.0 ? 'grade-fail' : ''}" data-activity="tragamonedas">${s.notas.tragamonedas.nota.toFixed(1)}</td>
                <td class="cell-grade ${s.notas.tinkercad.nota < 3.0 ? 'grade-fail' : ''}" data-activity="tinkercad">${s.notas.tinkercad.nota.toFixed(1)}</td>
                <td class="cell-average ${avg < 3.0 ? 'grade-fail' : ''}">${avg.toFixed(2)}</td>
            `;

            docenteTableBody.appendChild(tr);
        });

        // Add inline editing events to cells
        makeCellsEditable();
    }

    function makeCellsEditable() {
        const cells = docenteTableBody.querySelectorAll(".cell-grade");
        
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
                    const student = STUDENT_DATA.find(st => st.codigo === code);
                    if (student) {
                        student.notas[activity].nota = newValue;
                    }

                    // Update cell content
                    this.classList.remove("cell-grade-editing");
                    this.textContent = newValue.toFixed(1);
                    this.classList.toggle("grade-fail", newValue < 3.0);

                    // Recalculate row average
                    const newAvg = (student.notas.tribunal.nota +
                                    student.notas.comic.nota +
                                    student.notas.cohete.nota +
                                    student.notas.tragamonedas.nota +
                                    student.notas.tinkercad.nota) / 5.0;
                    
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

        // Map data for sheet
        const sheetData = STUDENT_DATA.map(s => {
            const avg = (s.notas.tribunal.nota +
                         s.notas.comic.nota +
                         s.notas.cohete.nota +
                         s.notas.tragamonedas.nota +
                         s.notas.tinkercad.nota) / 5.0;

            return {
                "Código": parseInt(s.codigo),
                "Nombre Completo": s.nombre,
                "Correo Institucional": s.correo,
                "Programa": getProgramName(s.programa),
                "Tribunal": s.notas.tribunal.nota,
                "Cómic IA": s.notas.comic.nota,
                "Lanzamiento Cohete": s.notas.cohete.nota,
                "Robot Tragamonedas": s.notas.tragamonedas.nota,
                "Tinkercad": s.notas.tinkercad.nota,
                "Promedio Final": Math.round(avg * 100) / 100
            };
        });

        // Create sheet & workbook
        const ws = XLSX.utils.json_to_sheet(sheetData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Consolidado Notas");

        // Adjust column widths
        const wscols = [
            { wch: 12 }, // Código
            { wch: 35 }, // Nombre
            { wch: 38 }, // Correo
            { wch: 30 }, // Programa
            { wch: 12 }, // Tribunal
            { wch: 12 }, // Comic
            { wch: 15 }, // Cohete
            { wch: 15 }, // Tragamonedas
            { wch: 12 }, // Tinkercad
            { wch: 15 }  // Promedio
        ];
        ws['!cols'] = wscols;

        // Save workbook as file
        XLSX.writeFile(wb, "Reporte_Consolidado_Calificaciones_Robotica.xlsx");
    });
});
