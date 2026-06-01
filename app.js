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
});
