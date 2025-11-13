# Entornos-de-desarrollo--GitHub-Pages

Planificación: Para pensar que ibamos a hacer hicimos una lluvia de idea, algunas resultaban algo complejas mientras que otras no llegaban de encajar, es ahí que descubrimos las API's, así que nos pusimos curiosos e investigamos las diversas API's que nos encontrabamos, hasta que dimos con OpenWeather, una APi que nos permitia saber el tiempo que hacia alrededor del mundo. Elegimos esta ya que junto a ella apareció una gran idea, que dependiendo del tiempo que hiciera en cada lugar el fondo cambiara adecuandose a este. 

Así dió inicio a nuestro trabajo de crear una aplicación del tiempo: el usuario escribe el nombre de una ciudad y la página muestra el clima actual. Según el tiempo que haga, el fondo cambia (si era soleado fondo azul, si era nublado gris, si era de noche azul oscuro,etc)

Usuarios dentro de la aplicación:

-Usuario general: Puede buscar una ciudad y ver el clima actual (temperatura, estado, si es de nocheo día).

-Administrador: Sería la persona encargada de mantener la aplicación, actualizar el diseño o mejorar el código cuando sea necesario.

Requisitos de la aplicación:

-Permitir al usuario escribir el nombre de una ciudad y consultar el clima actual.

-Mostrar información como temperatura y estado del cielo.

-Cambiar el fondo automáticamente según el tipo de clima.

Diseño:
Nuestra aplicación sigue la estructura típica de cliente-servidor.
De forma sencilla, el cliente es la parte que el usuario ve y con la que interactúa (la web). Cuando el usuario escribe una ciudad, el cliente envía una petición a un servidor, que en este caso es la API del tiempo.
El servidor responde con los datos del clima y el cliente los muestra de forma visual con HTML, CSS y JavaScript.

Aunque GitHub Pages solo sirve archivos estáticos (HTML, CSS, JS), la comunicación con la API mantiene la idea de cliente-servidor, ya que la web sigue pidiendo datos a un servicio externo y mostrando la respuesta al usuario.

###
#Esta parte del despliegue es provisional, si la quereis que sea asi en general o que cada uno ponga su punto de vista.

Despliegue:

Primero subimos todos los archivos del proyecto al repositorio de GitHub, y después activamos la opción de Pages desde la configuración del repositorio, seleccionando la rama main.

Al principio tuvimos que ajustar un par de cosas, como las rutas de los archivos o el nombre del index.html, pero una vez todo estuvo en orden, la página se cargó perfectamente.
Ver cómo la aplicación funcionaba directamente desde una URL pública fue bastante motivador, ya que podiamos comprobar que los cambios se actualizaban automáticamente cada vez que hacíamos un nuevo commit o merge.

En resumen, la experiencia con GitHub Pages fue al principio algo complicada, pero según pasabamos el timepo en ella nos ibamos acostumbrando, eso si, aún nos falta por aprender.
###
