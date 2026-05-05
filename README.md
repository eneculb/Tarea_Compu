TAREA 2 - Clean Architecture en Node.js
Este proyecto corresponde a una aplicación básica desarrollada en Node.js, organizada con una estructura inspirada en el patrón de diseño Clean Architecture o Arquitectura Limpia.
La gracia de esta arquitectura es separar el proyecto por responsabilidades, para que no quede todo mezclado en un solo archivo.
La aplicación ejecuta un mensaje simple de “Hola Mundo”, pero separando el código en distintas capas para mostrar cómo se puede ordenar un proyecto de forma más limpia y mantenible.

QQUÉ ES CLEAN ARCHITECTURE?

Clean Architecture es una forma de organizar un proyecto en distintas capas, esto permite que el proyecto sea más ordenado y que en el futuro sea más fácil modificar una parte sin romper todo lo demás.
La idea principal es que la parte más importante del sistema, que sería el dominio, no dependa de cosas externas como interfaces, frameworks, bases de datos u otros elementos técnicos.
En palabras simples, el dominio debería funcionar por sí solo, sin importar cómo se muestre el resultado o desde dónde se ejecute el programa.

EXPLICACIÓN DE CARPETAS

- domain/
La carpeta domain contiene la parte principal del sistema.
En este caso, ahí está el archivo holaDominio.js, que se encarga de definir el mensaje que se va a mostrar.
Esta capa sería la más interna de la arquitectura, por lo mismo no debería depender de las otras carpetas.

-application/
La carpeta application contiene la lógica que conecta el dominio con el resto del programa.
En este proyecto, el archivo holaApp.js toma el mensaje definido en el dominio y lo prepara para que pueda ser usado por la interfaz.

-interfaces/
La carpeta interfaces representa la parte que se comunica con el exterior.
En este caso, holaInterfaz.js recibe el resultado desde la capa de aplicación y lo muestra por consola.

-index.js
El archivo index.js es el archivo principal del proyecto.
Desde aquí parte la ejecución del programa y se llama a la interfaz para que se muestre el mensaje final.

FLUJO DE EJECUCIÓN

El flujo del programa sería el siguiente: index.js->interfaces/holaInterfaz.js->application/holaApp.js->domain/holaDominio.js->Hola Mundo
Primero se ejecuta index.js, luego se llama a la interfaz, después a la capa de aplicación y finalmente se obtiene el mensaje desde el dominio.

POR QUÉ USAR ESTA ESTRUCTURA?

Se usa esta estructura porque ayuda a mantener el código más ordenado y fácil de entender, separar el código en capas permite ver cómo se podría organizar una aplicación más grande.
Por ejemplo, si más adelante se quisiera cambiar la forma en que se muestra el mensaje, solo habría que modificar la parte de interfaces, sin tocar directamente la lógica principal del dominio.

INSTALACIÓN DEL PROYECTO

Para ejecutar el proyecto, primero se deben instalar las dependencias con: npm install

EJECUCIÓN DEL PROYECTO

Para iniciar la aplicación, se debe ejecutar: npm start
Al ejecutar el programa, se mostrará el mensaje: Hola Mundo

CONCLUSIÓN

En conclusión, este proyecto permite entender cómo funciona la idea principal de Clean Architecture dentro de una aplicación en Node.js.
La separación en carpetas ayuda a ver que cada parte del sistema tiene una responsabilidad distinta.
La capa de dominio se encarga de la lógica principal, la capa de aplicación coordina esa lógica y la capa de interfaces permite mostrar el resultado al usuario.
Gracias a esta organización, el código queda más ordenado, más fácil de leer y preparado para crecer en el futuro.
Además, esta estructura permite que si más adelante se quiere cambiar la forma en que se muestra el mensaje, agregar una BDD o incluir nuevas funciones, no sea necesario modificar todo el proyecto, solo setrabajaría sobre la capa correspondiente.
Por lo tanto, Clean Architecture es una buena práctica para desarrollar proyectos más mantenibles, claros y escalables, incluso cuando se parte desde una aplicación simple como esta.
