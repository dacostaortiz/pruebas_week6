# Cypress
*Nota: La variable de entorno ```ghostUrl``` está configurada en el repositorio para apuntar a la dirección http://localhost:2368*
## Aplicación Objetivo de pruebas

- Ghost version: 3.42.0
- Ghost version: 5.47.1

## Tecnologías utilizadas

- Node v14.17.0 & Node v18.15.0

- cypress v12.11.0

## Funcionalidades probadas

Para el trabajo de la semana 7. Dado que estoy trabajando solo, debido a diferencias irreconciliables entre dos de mis compañeros de equipo. Trabajé las siguientes funcionalidades de los escenarios de la versión 3.42.0 de Ghost, con datos generados a través de la herramienta mockaroo y almacenados en archivos csv.

- Crear cuentas nuevas

- Crear Posts nuevos

En la carpeta ```cypress/fixtures/data``` se encuentran los archivos csv generados los cuales son utilizados como oráculo de pruebas.


## Guía para la ejecución de pruebas con Cypress

1. En la raíz del repositorio correr ```npm install```

1. Correr el comando ```npm run cypress:open``` el cual abrirá un navegador de chrome.

1. Dar click en el menú E2E testing

1. Dar click en Start E2E Testing in Chrome (esto abrirá cypress en el proyecto)

1. En el menú de Specs se encuentran las funcionalidades con sus pruebas correspondientes (cada escenario de prueba está definido por separado en el código)

1. Ejecutar ghost de forma local en el puerto 2368 (si se quiere otro puerto o la url de ghost es distinta, modificar el valor en el archivo ```cypress.config.js```)

1. Para correr los escenarios, es neceario lanzar la versión correcta de ghost, se tienen dos directorios de escenarios, los de la versión 3.42.0 y los de la versión 5.47.1. Para lanzar la versión 3.42.0, se debe ejecutar el comando ```ghost start --development``` desde el directorio de la aplicación ghost. Para lanzar la versión 5.47.1, se debe ejecutar el comando ```ghost start``` desde el directorio de la aplicación ghost.

1. Es importante tener en cuenta que, para el correcto funcionamiento de las pruebas, no se debe tener creado ningún usuario. Para esto, se puede ejecutar el siguiente comando desde el directorio de la aplicación ghost ```rm content/data/ghost-local.db```

1. Por último, es importante seleccionar primero los escenarios de pruebas de creación (create) para que los demás escenarios se ejecuten de forma exitosa, de lo contrario, es necesario ejecutar el comando del punto anterior seguido del comando ```ghost restart```

## Funcionalidad 1: Creación de cuenta
![image](https://user-images.githubusercontent.com/123770672/236730675-2fce3999-95bf-4e99-8081-7d34c4675850.png)
### Escenario 1 (Negativo): Creación de cuenta con los datos vacíos
- Se ingresa a la página ```${ghostUrl}/ghost/#/setup/two```
- Se selecciona el botón para hacer submit al formulario sin llenar ninguno de los inputs

### Escenario 2 (Negativo): Creación de cuenta con email inválido
- Se ingresa a la página ```${ghostUrl}/ghost/#/setup/two```
- Se llenan los inputs del título del sitio, el nombre del usuario, el email con un email inválido y el de contraseña con una contraseña válida
- Se selecciona el botón para hacer submit al formulario

### Escenario 3 (Negativo): Creación de cuenta con contraseña de menos de 10 caracteres
- Se ingresa a la página ```${ghostUrl}/ghost/#/setup/two```
- Se llenan los inputs del título del sitio, el nombre del usuario, el email y el de contraseña con una contraseña de menos de 10 caracteres
- Se selecciona el botón para hacer submit al formulario

### Escenario 4 (Positivo): Creación de cuenta exitosa
- Se ingresa a la página ```${ghostUrl}/ghost/#/setup/two```
- Se llenan los inputs del título del sitio, el nombre del usuario, el email y el de contraseña con una contraseña vǻlida
- Se selecciona el botón para hacer submit al formulario
- Se da click al vínculo de saltar configuraciones
- Se cierra la sesión
- Se inicia la sesión nuevamente con el email y la contraseña registrados

## Funcionalidad 2: Creación de Posts
![image](https://user-images.githubusercontent.com/123770672/236731796-a1c30cc6-d672-403a-99f9-ed31c3272bcf.png)

### Escenario 5 (Positivo): Creación de post exitosa
- Se ingresa a la página ````${ghostUrl}/ghost/#/signin````
- Se inicia sesión con el email y contraseña registrados en la funcionalidad anterior
- Se da click al botón de crear posts
- Se llenan los textos para el título del post y el contenido del post
- Se da click al menú para Publicar el post
- Se da click en el botón para publicar el post
- Se vuelve a dar click en el botón de  crear posts.
- Se repite el proceso con el siguiente post.
- Cuando se terminan los datos, se cierra la sesión.

### Escenario 6 (Positivo): Creación de post exitosa sin título
- Se ingresa a la página ````${ghostUrl}/ghost/#/signin````
- Se inicia sesión con el email y contraseña registrados en la funcionalidad anterior
- Se da click al botón de crear posts
- Se llenan el contenido del post
- Se da click al menú para Publicar el post
- Se da click en el botón para publicar el post.

