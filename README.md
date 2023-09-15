# ECMAScript

TC39 es un grupo de desarrolladores, académicos y hackers que están a cargo de revisar cada nueva propuesta o funcionalidad que cumpla con el estándar. El estándar es una serie de pasos que la nueva propuesta sigue para publicarla en la alguna versión de ECMAScript a futuro.

Etapas de una nueva propuesta para ECMAScript
Las etapas de una nueva propuesta para ECMAScript son:

Idea: Una inquietud del desarrollador.
Propuesta: Cómo y por qué la idea soluciona un problema.
Borrador: Todo lo que implica la nueva funcionalidad detalladamente.
Candidato: La funcionalidad es probada y desarrollada por el comité.
Preparada: La funcionalidad está lista para ser publicada.

#ES6
#ES10

Array.prototype.flat(nivel_de_profundidad): un nuevo método que nos permite aplanar arreglos.
Array.prototype.flatMap() lo mismo que flat con el beneficio de que primero manipular la data para luego poder aplanar.
String.prototype.trimStart() | String.prototype.trimEnd() permite quitar los espacios al inicio o al final dependiendo de la funciona.
try/catch: ahora puedes utilizarlo sin necesidad de especificaro como catch(error) sino directamente usarlo en el scope del catch.
Object.fromEntries() lo inverso a Object.entries(), es decir podemos convertir un objeto en una matriz clave/valor con Object.entries(), y hace lo inverso es decir de una matriz clave/valor a un objeto con Object.fromEntries().
Symbol.prototype.description: permite regresar el descripcion opcional del Symbol
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description