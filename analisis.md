# Identificación de Objetos Predefinidos

1. Diferencia entre `window` y objetos nativos globales

Diferencia entre `window` y objetos nativos globales (`Math`,`JSON`)
- **`window` (BOM - Browser Object Model):** Es un objeto que nos da directamente el navegador. Sirve para controlar todo lo relacionado con la ventana y el entorno del usuario (pantalla, url actual, abrir o cerrar pestañas, historial o saber qué navegador está usando). Si se ejecuta código JavaScript fuera del navegador, `window` no existe.

- **Objetos nativos globales (`Math`, `JSON`, `Array`, `Date`...):** Son objetos que vienen incorporados de serie en el propio lenguaje de JavaScript. No dependen para nada del navegador. Sirven para trabajar con datos o hacer cálculos lógicos (operaciones matemáticas con `Math` o parsear datos con `JSON`). Funcionan exactamente igual en cualquier sitio donde se ejecute JavaScript.

- **¿Por qué no hace falta escribir `window.Math`?**
  En el navegador, `window` tiene **ámbito global**. Todas las funciones y objetos nativos globales se exponen automáticamente como propiedades de este objeto (`window.Math === Math`). Cuando un identificador no se encuentra en el ámbito local, el motor de JavaScript lo busca directamente en el objeto global, haciendo inncesearia la inclusión del prefijo `window`.

---

## 2. Clasificación de instrucciones

| Instrucción | Categoría | Justificación |
| --- |--- | --- |
| `window.open()` | **BOM** | Método propio del objeto `window` para abrir y configurar nuevas ventanas o pestañas secundarias en el navegador. |
| `parseFloat()` | **Objeto nativo de JS** | Función nativa de JavaScript para convertir cadenas de texto a números decimales. En el navegador cuelga del objeto global, pero pertenece a ECMAScript. |
| `Math.floor()` | **Objeto nativo de JS** | Método estático del objeto intrínseco `Math` para redondear un número hacia abajo al entero anterior. |
| `navigator.userAgent` | **BOM** | Propiedad de solo lectura del objeto `navigator` dado por el navegador para obtener la cadena de identificación del cliente y el sistema operativo. |