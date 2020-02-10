PROYECTO 1 - Tópicos especiales en telemática

¿CUAL ES LA PROBLEMÁTICA QUE QUIERE RESOLVER?
Se requiere registro y visualización de los datos producidos por los sensores de un dispositivo arduino en una aplicación web

¿CUALES SON LOS REQUISITOS FUNCIONALES DE LA APP?
Almacenar los datos de los sensores en una base de datos 
Autenticación
Visualizar los datos almacenados de un arduino en específico

¿CUALES SON LOS REQUISITOS NO FUNCIONALES DE LA APP?

¿QUÉ TECNOLOGÍA DE DESARROLLO UTILIZÓ?
Se utilizaron frameworks modernos que aplican el patrón de diseño MVC para desarrollar aplicaciones web y se utilizó persistencia básica de datos en una base de datos noSQL.

INTERFACES Y OTROS
JWT
Postman


4.1 EN EL BACKEND?
Node js
Express
Mongodb 

4.2 EN EL FRONTEND?
Vue js
Css Bootstrap

¿CUALES SON Y CUAL ES LA ESPECIFICACIÓN DE LOS SERVICIOS API REST DEL BACKEND?
Las API REST de esta aplicación brindan los servicios de login, registro, almacenamiento de datos en la base de datos y petición de datos de la misma, de la siguiente forma:
Login:
Ruta “/login”, recibe como datos las credenciales del usuario y devuelve la confirmación del login o un error de login

Registro:
Ruta “/registration”, recibe los datos del usuario a registrar y devuelve una confirmación de registro o un error general

Almacenamiento de datos:
Ruta “/receiving”, recibe los datos de los sensores: Temperatura, humedad, identificación del arduino que está almacenando los datos y devuelve una confirmación del almacenamiento

Consulta de datos:
Ruta “data”, recibe la identificación del arduino y del usuario que hace la consulta y devuelve una lista de todos los registros hechos por ese arduino

¿CÓMO REALIZÓ LA AUTENTICACIÓN DE LOS SERVICIOS API REST?
Para los procesos de autenticación se utiliza Json Web Token (JWT) en el manejo de las sesiones y la seguridad

¿CUALES SON LAS PRINCIPALES DIFICULTADES QUE TUVO AL DESARROLLAR EL PROYECTO?
El desconocimiento de nuevos patrones y estructuras de aplicaciones, por ejemplo, la separación total del frontend y el backend. También los protocolos de seguridad de los navegadores y el envío de datos a través de http debido a los headers y demas requerimientos de seguridad

7.1 POR DESCONOCIMIENTO DE LA TECNOLOGÍA?
Tecnologías para frontend como Vue y JWT para autenticación eran totalmente desconocidas por lo que supusieron mayor esfuerzo y tiempo para aprenderlas

7.2 ¿QUÉ CONCEPTOS O FUNDAMENTOS NO SABE PARA PODER DESARROLLAR ESTE PROYECTO?
La estructura de separación total de frontend y backend y los requerimientos de seguridad de los browsers al enviar información a través de http

¿CUALES FUERON LOS PRINCIPALES APRENDIZAJES DEL PROYECTO 1?
Nuevas tecnologías, prácticas de desarrollo, conceptos y experiencia
