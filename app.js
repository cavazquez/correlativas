// Datos de las materias con sus códigos, horas y correlatividades
const subjects = [
    { id: 1, name: 'Matemática 1', code: 'MAT1', theoryHours: 4, practiceHours: 5, requires: [], isCBC: true },
    { id: 2, name: 'Física 1', code: 'FIS1', theoryHours: 4, practiceHours: 5, requires: [], isCBC: true },
    { id: 3, name: 'Matemática 2', code: 'MAT2', theoryHours: 2, practiceHours: 3, requires: [], isCBC: true },
    { id: 4, name: 'Laboratorio 1', code: 'LAB1', theoryHours: 0, practiceHours: 0, labHours: 6, requires: [], isCBC: true },
    { id: 5, name: 'Matemática 3', code: 'MAT3', theoryHours: 4, practiceHours: 5, requires: [{ id: 1, finalRequired: false }], isCBC: false },
    { id: 6, name: 'Física 2', code: 'FIS2', theoryHours: 4, practiceHours: 5, requires: [{ id: 2, finalRequired: false }], isCBC: false },
    { id: 7, name: 'Física 3', code: 'FIS3', theoryHours: 4, practiceHours: 5, requires: [
        { id: 1, finalRequired: false },  // Parciales de Matemática 1
        { id: 2, finalRequired: true },   // Final de Física 1
        { id: 5, finalRequired: false }   // Parciales de Matemática 3
    ], isCBC: false },
    { id: 8, name: 'Laboratorio 2', code: 'LAB2', theoryHours: 0, practiceHours: 0, labHours: 6, requires: [
        { id: 2, finalRequired: false },  // Parciales de Física 1
        { id: 4, finalRequired: true }    // Final de Laboratorio 1
    ], isCBC: false },
    { id: 9, name: 'Física 4', code: 'FIS4', theoryHours: 4, practiceHours: 5, requires: [
        { id: 2, finalRequired: true },  // Final de Física 1
        { id: 6, finalRequired: false }, // Parciales de Física 2
        { id: 7, finalRequired: false }  // Parciales de Física 3
    ], isCBC: false },
    { id: 10, name: 'Laboratorio 3', code: 'LAB3', theoryHours: 0, practiceHours: 0, labHours: 6, requires: [
        { id: 4, finalRequired: true },  // Final de Laboratorio 1
        { id: 8, finalRequired: true },  // Final de Laboratorio 2
        { id: 6, finalRequired: false }, // Parciales de Física 2
        { id: 7, finalRequired: false }  // Parciales de Física 3
    ], isCBC: false },
    { id: 11, name: 'Cálculo Numérico', code: 'CN', theoryHours: 4, practiceHours: 5, requires: [
        { id: 1, finalRequired: true },  // Final de Matemática 1
        { id: 5, finalRequired: false }  // Parciales de Matemática 3
    ], isCBC: false },
    { id: 12, name: 'Matemática 4', code: 'MAT4', theoryHours: 6, practiceHours: 6, requires: [
        { id: 1, finalRequired: true },  // Final de Matemática 1
        { id: 5, finalRequired: false }  // Parciales de Matemática 3
    ], isCBC: false },
    { id: 13, name: 'Mecánica Clásica', code: 'MC', theoryHours: 4, practiceHours: 5, requires: [
        { id: 2, finalRequired: true },  // Final de Física 1
        { id: 3, finalRequired: true },  // Final de Matemática 2
        { id: 5, finalRequired: true },  // Final de Matemática 3
        { id: 7, finalRequired: false }  // Parciales de Física 3
    ], isCBC: false },
    { id: 14, name: 'Laboratorio 4', code: 'LAB4', theoryHours: 0, practiceHours: 0, labHours: 6, requires: [
        { id: 6, finalRequired: true },  // Final de Física 2
        { id: 7, finalRequired: true },  // Final de Física 3
        { id: 10, finalRequired: true }, // Final de Laboratorio 3
        { id: 9, finalRequired: false }  // Parciales de Física 4
    ], isCBC: false },
    { id: 15, name: 'Física Teórica 1', code: 'FT1', theoryHours: 4, practiceHours: 5, requires: [
        { id: 7, finalRequired: true },  // Final de Física 3
        { id: 9, finalRequired: false }, // Parciales de Física 4
        { id: 12, finalRequired: false }, // Parciales de Matemática 4
        { id: 13, finalRequired: false } // Parciales de Mecánica Clásica
    ], isCBC: false },
    { id: 16, name: 'Física Teórica 2', code: 'FT2', theoryHours: 4, practiceHours: 5, requires: [
        { id: 7, finalRequired: true },  // Final de Física 3
        { id: 9, finalRequired: false }, // Parciales de Física 4
        { id: 12, finalRequired: false }, // Parciales de Matemática 4
        { id: 13, finalRequired: false } // Parciales de Mecánica Clásica
    ], isCBC: false },
    { id: 17, name: 'Laboratorio 5', code: 'LAB5', theoryHours: 0, practiceHours: 0, labHours: 6, requires: [
        { id: 14, finalRequired: true }  // Final de Laboratorio 4
    ], isCBC: false },
    { id: 18, name: 'Física Teórica 3', code: 'FT3', theoryHours: 4, practiceHours: 5, requires: [
        { id: 7, finalRequired: true },  // Final de Física 3
        { id: 9, finalRequired: false }, // Parciales de Física 4
        { id: 13, finalRequired: false } // Parciales de Mecánica Clásica
    ], isCBC: false },
    { id: 19, name: 'Estructura de la Materia 1', code: 'EM1', theoryHours: 3, practiceHours: 3, requires: [
        { id: 7, finalRequired: true },  // Final de Física 3
        { id: 9, finalRequired: false }, // Parciales de Física 4
        { id: 12, finalRequired: false }, // Parciales de Matemática 4
        { id: 13, finalRequired: false } // Parciales de Mecánica Clásica
    ], isCBC: false },
    { id: 20, name: 'Laboratorio 6', code: 'LAB6', theoryHours: 0, practiceHours: 0, labHours: 12, requires: [
        { id: 17, finalRequired: true }  // Final de Laboratorio 5
    ], isCBC: false },
    { id: 21, name: 'Laboratorio 7', code: 'LAB7', theoryHours: 0, practiceHours: 0, labHours: 12, requires: [
        { id: 20, finalRequired: true }  // Final de Laboratorio 6
    ], isCBC: false },
    { id: 22, name: 'Estructura de la Materia 2', code: 'EM2', theoryHours: 3, practiceHours: 3, requires: [
        { id: 16, finalRequired: false }, // Parciales de Física Teórica 2
        { id: 18, finalRequired: false }  // Parciales de Física Teórica 3
    ], isCBC: false },
    { id: 23, name: 'Estructura de la Materia 3', code: 'EM3', theoryHours: 3, practiceHours: 3, requires: [
        { id: 16, finalRequired: false }, // Parciales de Física Teórica 2
        { id: 18, finalRequired: false }  // Parciales de Física Teórica 3
    ], isCBC: false },
    { id: 24, name: 'Estructura de la Materia 4', code: 'EM4', theoryHours: 3, practiceHours: 3, requires: [
        { id: 16, finalRequired: false }  // Parciales de Física Teórica 2
    ], isCBC: false }
];

// Estado de las materias (aprobadas, parciales, pendientes)
let subjectStatus = {};

// Guardar el estado en localStorage
function saveStatus() {
    localStorage.setItem('subjectStatus', JSON.stringify(subjectStatus));
}

// Cargar el estado desde localStorage
function loadStatus() {
    const savedStatus = localStorage.getItem('subjectStatus');
    if (savedStatus) {
        return JSON.parse(savedStatus);
    }
    return null;
}

// Inicializar el estado de las materias
function initializeStatus() {
    // Intentar cargar el estado guardado
    const savedStatus = loadStatus();
    if (savedStatus) {
        return savedStatus;
    }
    
    // Si no hay estado guardado, inicializar uno nuevo
    const status = {};
    subjects.forEach(subject => {
        status[subject.id] = { approved: false, partial: false, pending: true };
    });
    return status;
}

// Verificar si una materia está habilitada
function isSubjectEnabled(subject) {
    // Si no tiene correlativas, está habilitada
    if (subject.requires.length === 0) return true;
    
    // Verificar cada correlativa
    for (const req of subject.requires) {
        const status = subjectStatus[req.id];
        
        // Si la correlativa requiere final aprobado, verificar que esté aprobada
        if (req.finalRequired) {
            if (!status.approved) return false;
        } 
        // Si no requiere final, verificar que al menos tenga los parciales aprobados
        else {
            if (!(status.approved || status.partial)) return false;
        }
    }
    
    // Si pasó todas las verificaciones, la materia está habilitada
    return true;
}

// Actualizar el estado de una materia
function updateSubjectStatus(subjectId, statusType) {
    const status = subjectStatus[subjectId];
    
    // Si se hace clic en el mismo estado, volver a pendiente
    if ((statusType === 'partial' && status.partial) || 
        (statusType === 'approved' && status.approved)) {
        status.partial = false;
        status.approved = false;
        status.pending = true;
    } else {
        // Actualizar según el tipo de estado
        if (statusType === 'partial') {
            status.partial = true;
            status.approved = false;
            status.pending = false;
        } else if (statusType === 'approved') {
            status.partial = false;
            status.approved = true;
            status.pending = false;
        }
    }
    
    // Guardar el estado actualizado
    saveStatus();
    
    // Renderizar las materias actualizadas
    renderSubjects();
    updateEnabledSubjects();
}

// Renderizar la lista de materias
function renderSubjects() {
    const container = document.getElementById('subjects-container');
    container.innerHTML = '';
    
    // Agrupar materias por año (asumiendo que el ID es secuencial y cada 6 materias es un año)
    const years = {};
    subjects.forEach(subject => {
        const year = Math.ceil(subject.id / 6);
        if (!years[year]) years[year] = [];
        years[year].push(subject);
    });

    // Renderizar por año
    Object.entries(years).forEach(([year, yearSubjects]) => {
        const yearHeader = document.createElement('h3');
        yearHeader.className = 'text-xl font-semibold mt-6 mb-3 text-gray-700';
        yearHeader.textContent = `Año ${year}`;
        container.appendChild(yearHeader);

        yearSubjects.forEach(subject => {
            const status = subjectStatus[subject.id];
            const isEnabled = isSubjectEnabled(subject);
            
            const subjectElement = document.createElement('div');
            subjectElement.className = `subject-card p-4 border rounded-lg mb-4 transition-all duration-200 ${!isEnabled ? 'opacity-70 bg-gray-50' : status.approved ? 'bg-green-50 border-green-200' : status.partial ? 'bg-blue-50 border-blue-200' : 'bg-white'}`;
            
            let statusBadge = '';
            if (status.approved) {
                statusBadge = '<span class="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 border border-green-200">✅ Aprobado</span>';
            } else if (status.partial) {
                statusBadge = '<span class="px-2 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-800 border border-blue-100">📝 Parciales</span>';
            } else {
                statusBadge = '<span class="px-2 py-1 text-xs font-medium rounded-full bg-yellow-50 text-yellow-800 border border-yellow-100">⏳ Pendiente</span>';
            }

            // Mostrar horas
            let hoursInfo = [];
            if (subject.theoryHours > 0) hoursInfo.push(`T: ${subject.theoryHours}h`);
            if (subject.practiceHours > 0) hoursInfo.push(`P: ${subject.practiceHours}h`);
            if (subject.labHours > 0) hoursInfo.push(`L: ${subject.labHours}h`);
            
            subjectElement.innerHTML = `
                <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div class="flex-1">
                        <div class="flex items-center gap-2">
                            <h3 class="font-medium text-lg">${subject.name}</h3>
                            <span class="text-sm text-gray-500">(${subject.code})</span>
                            ${subject.isCBC ? '<span class="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">CBC</span>' : ''}
                        </div>
                        
                        <div class="flex flex-wrap items-center gap-2 mt-1 text-sm">
                            <div class="flex items-center gap-2">
                                ${statusBadge}
                                ${hoursInfo.length > 0 ? 
                                    `<span class="text-sm text-gray-500 bg-white/50 px-2 py-0.5 rounded">${hoursInfo.join(' | ')}</span>` : ''
                                }
                            </div>
                        </div>
                        
                        ${subject.requires.length > 0 ? 
                            `<div class="mt-2">
                                <p class="text-xs font-medium text-gray-600">Correlativas:</p>
                                <ul class="text-xs text-gray-600 list-disc list-inside">
                                    ${subject.requires.map(req => {
                                        const reqSubj = subjects.find(s => s.id === req.id);
                                        return `<li>${reqSubj.name}${req.finalRequired ? ' (final)' : ' (parcial)'}</li>`;
                                    }).join('')}
                                </ul>
                            </div>` : 
                            ''
                        }
                    </div>
                    
                    <div class="flex space-x-2 mt-3">
                        <button 
                            onclick="updateSubjectStatus(${subject.id}, 'partial')" 
                            class="px-3 py-1.5 text-xs rounded-full transition-all duration-200 ${status.partial ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm' : 'bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200'}"
                        >
                            📝 Parciales
                        </button>
                        <button 
                            onclick="updateSubjectStatus(${subject.id}, 'approved')" 
                            class="px-3 py-1.5 text-xs rounded-full transition-all duration-200 ${status.approved ? 'bg-green-600 text-white hover:bg-green-700 shadow-sm' : 'bg-green-50 text-green-600 hover:bg-green-100 border border-green-200'}"
                        >
                            ✅ Final
                        </button>
                    </div>
                </div>
            `;
            
            container.appendChild(subjectElement);
        });
    });
}

// Actualizar la lista de materias habilitadas
function updateEnabledSubjects() {
    const container = document.getElementById('enabled-subjects');
    container.innerHTML = '';
    
    // Obtener materias habilitadas y no aprobadas
    const enabledSubjects = subjects.filter(subject => {
        const status = subjectStatus[subject.id];
        return !status.approved && isSubjectEnabled(subject);
    });
    
    // Crear el contenedor de materias habilitadas
    const enabledContainer = document.createElement('div');
    enabledContainer.className = 'bg-white rounded-xl shadow-sm border border-gray-200 p-4';
    
    // Título de la sección
    const title = document.createElement('h2');
    title.className = 'text-lg font-semibold text-gray-800 mb-3 flex items-center';
    title.innerHTML = `
        <svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Materias Habilitadas
        <span class="ml-2 px-2 py-0.5 text-xs font-medium bg-green-100 text-green-800 rounded-full">
            ${enabledSubjects.length}
        </span>
    `;
    enabledContainer.appendChild(title);
    
    // Mostrar mensaje si no hay materias habilitadas
    if (enabledSubjects.length === 0) {
        const message = document.createElement('div');
        message.className = 'text-center py-4 text-sm text-gray-500';
        message.innerHTML = `
            <p>No hay materias habilitadas en este momento.</p>
            <p class="mt-1 text-xs">Aprobá las materias del CBC para desbloquear más opciones.</p>
        `;
        enabledContainer.appendChild(message);
        container.appendChild(enabledContainer);
        return;
    }

    // Mostrar las materias habilitadas
    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3';
    
    enabledSubjects.forEach(subject => {
        const card = document.createElement('div');
        card.className = 'group bg-white p-3 rounded-lg border border-green-100 hover:border-green-300 transition-all duration-200 cursor-pointer hover:shadow-md';
        card.innerHTML = `
            <div class="flex items-start justify-between">
                <div>
                    <h3 class="font-medium text-gray-800 group-hover:text-green-700">${subject.name}</h3>
                    <p class="text-xs text-gray-500">${subject.code}</p>
                </div>
                <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                    ${subject.theoryHours + (subject.practiceHours || 0) + (subject.labHours || 0)}h
                </span>
            </div>
        `;
        
        // Hacer clic en la tarjeta marca la materia como aprobada
        card.addEventListener('click', () => {
            updateSubjectStatus(subject.id, 'approved');
        });
        
        grid.appendChild(card);
    });
    
    enabledContainer.appendChild(grid);
    container.appendChild(enabledContainer);
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Cargar el estado guardado si existe
    const savedStatus = loadStatus();
    if (savedStatus) {
        // Asegurarse de que todas las materias tengan un estado
        subjects.forEach(subject => {
            if (!savedStatus[subject.id]) {
                savedStatus[subject.id] = { approved: false, partial: false, pending: true };
            }
        });
        subjectStatus = savedStatus;
    } else {
        // Inicializar un nuevo estado si no hay uno guardado
        subjectStatus = {};
        subjects.forEach(subject => {
            subjectStatus[subject.id] = { approved: false, partial: false, pending: true };
        });
    }
    
    renderSubjects();
    updateEnabledSubjects();
});

// Hacer las funciones accesibles globalmente
window.updateSubjectStatus = updateSubjectStatus;
