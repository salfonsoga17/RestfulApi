# RestfulApi Node js y MySQL

Para realizar la ejecución de la api in localhost:

1. En la consola de comando posicionarse en la ubicación del proyecto, en donde clonamos el repositorio correspondiente: Utilizando el comando 'cd ..' .
2. Ejecutar el comando 'node src/index.js' para inicializar el servidor con el puerto 3000.
3. En el navegador web acceder por medio de la url al http://localhost:3000/person para garantizar la ejecución de la api correspondiente. La cual realiza la conexión a la base de datos person creada en MySQL y realiza la correspondiente consulta.

# RestfulApi ejecución con docker

1. Crear la imagen correspondiente con el comando 'docker build -t node-restapi .'
2. Visualizar que nuestra imagen se encuentre creada con el comando 'docker images'
3. Realizamos su ejecución por medio del comando 'docker run -it -p 4000:3000 node-restapi' al acceder a travez del navegador sera por medio del puerto 4000 http://localhost:4000/person

