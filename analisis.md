# Identificación de Objetos Predefinidos

1. Diferencia entre `window` y objetos nativos globales (`Math`,`JSON`)
- **`window` (BOM - Browser Object Model):** Es un objeto que nos da directamente el navegador. Sirve para controlar todo lo relacionado con la ventana y el entorno del usuario (pantalla, url actual, abrir o cerrar pestañas, historial o saber qué navegador está usando). Si se ejecuta código JavaScript fuera del navegador, `window` no existe.

- **Objetos nativos globales (`Math`, `JSON`, `Array`, `Date`...):** Son objetos que vienen incorporados de serie en el propio lenguaje de JavaScript. No dependen para nada del navegador. Sirven para trabajar con datos o hacer cálculos lógicos (operaciones matemáticas con `Math` o parsear datos con `JSON`). Funcionan exactamente igual en cualquier sitio donde se ejecute JavaScript.

- **¿Por qué no hace falta escribir `window.Math`?**
  En el navegador, `window` tiene **ámbito global**. Todas las funciones y objetos nativos globales se exponen automáticamente como propiedades de este objeto (`window.Math === Math`). Cuando un identificador no se encuentra en el ámbito local, el motor de JavaScript lo busca directamente en el objeto global, haciendo inncesearia la inclusión del prefijo `window`.
