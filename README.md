# Gestor de Correlatividades de Materias

Aplicación web para gestionar y visualizar las correlatividades entre materias de la carrera de Física. Permite marcar qué materias tienen aprobados los parciales o finales, y muestra automáticamente qué materias están habilitadas para cursar.

## Características

- Visualización clara de todas las materias organizadas por año
- Marcado de materias con:
  - ✅ Final aprobado
  - 📝 Parciales aprobados
  - 📚 Pendiente de aprobación
- Actualización en tiempo real de las materias habilitadas según las correlatividades
- Interfaz intuitiva y responsiva con Tailwind CSS
- Sin dependencias externas más allá de Tailwind CSS

## Cómo usar

1. Abre `index.html` en tu navegador
2. Las materias se muestran agrupadas por año
3. Para cada materia, puedes marcar:
   - "Parciales" si has aprobado los parciales pero no el final
   - "Final" si has aprobado la materia
4. Al marcar una materia, se actualizarán automáticamente las materias que dependen de ella
5. Las materias habilitadas para cursar se mostrarán en la sección "Materias Habilitadas"

## Estructura del proyecto

- `index.html` - Estructura principal de la aplicación
- `app.js` - Lógica de la aplicación (materias, correlatividades y estado)
- `styles.css` - Estilos personalizados

## Tecnologías utilizadas

- HTML5
- JavaScript (ES6+)
- [Tailwind CSS](https://tailwindcss.com/) para los estilos

## Licencia

Este proyecto está bajo la [Licencia Apache 2.0](LICENSE).