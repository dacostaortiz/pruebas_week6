# Versión final de la estrategia pruebas de automatizadas

Para la entrega final, se consolidó el diseño y ejecución final de la estrategia de pruebas para la aplicación Ghost.
Dentro del presente repositorio, se encuentra el documento plantilla de la estrategia de pruebas, el cual se encuentra en la carpeta docs del presente repositorio. Junto a este documento describiendo la estrategia, se cuentra el diagrama ER de la base de datos de la aplicación Ghost v3.42.0, así como el diagramaGUI de la aplicación.

El trabajo durante las dos semanas se estructuró en dos fases, dado que por inconvenienes logísticos, el equipo de trabajo cambió al inicio de la semana 6:

**Fase 1**: Durante las primeras 5 semanas, se cuenta con 4 ingenieros testers senior, dedicados a llevar a cabo las tareas de: 

- Definir la estrategia de pruebas. 
- Elegir las herramientas a utilizar 
- Implementar el código de las pruebas automatizadas. 
- Plantear los escenarios para las pruebas de extremo a extremo. 
- Describir los escenarios en lenguaje Gherkin. 
- Implementar el código que ejecuta las pruebas e2e. 

**Fase 2**: Durante las 3 últimas semanas, se cuenta con 1 solo ingeniero tester el cual se dedicará a realizar las siguientes tareas: 

- Evaluar una nueva versión de Ghost. 
- Ajustar el código para la ejecución de los escenarios definidos para la versión anterior. 
- Realizar pruebas VRT. 
- Implementar escenarios de validación de datos 
    - Pool de datos a-priori 
    - Pool de datos (psedo) aleatorio. 
    - Escenario aleatorio. 

## Estructura del repositorio

El repositorio se encuentra dividido en diferentes directorios, los cuales se describen a continuación:

- **docs**: Contiene la documentación de la estrategia de pruebas, la cual se encuentra en formato PDF.
- **manuales**: Contiene las pruebas manuales y el formato inventario de pruebas manuales.
- **e2e**: Contiene las pruebas automatizadas de extremo a extremo.
- **reconocimiento**: Contiene las pruebas de reconocimiento de la aplicación.
- **validación**: Contiene las pruebas con los diferentes conjuntos datos de validación.


## Registro de incidencias

Las incidencias reportadas se encuentran en el siguiente link:
https://ghost24.atlassian.net/jira/software/projects/PAG2/boards/1/backlog 

También, se encuentra un archivo de reporte en la carpeta docs, con el nombre de "Defectos Reportados.pdf"