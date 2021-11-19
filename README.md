<p align="center">
    <img src="https://github.com/kiadom/QuimbayaDevReloadedCiclo4/blob/main/images/logoheader.png" width="50%" />
</p>

# Sprint 2
En la rama main se encuentra el código final del SPrint 2 (Creación y Modelamiento en Bases de Datos en MongoDB). Los pasos para ejecutar el proyecto son:

- [Crear el Entorno de Trabajo](#entorno-trabajo)
- [Instalar los Módulos](#instalar-modulos)
- [Crear el Archivo de Variables de Entorno](#variables-entorno)
- [Iniciar el Servidor](#iniciar-servidor)
- [Crear Documentos](#crear-documentos)
- [Consultar Documentos](#consultar-documentos)

<br>

## Crear el Entorno de Trabajo

Abrir el proyecto en Visual Studio Code. Se puede obtener el proyecto descargandolo, clonandolo, haciendole un fork o pull, lo importante es tenerlo localmente.

## Instalar los Módulos

Todos los módulos del proyecto se instalaron usando YARN, por lo tanto en una consola de Visual Studio Code ejecutar el comando:
```yarn install```
Esto creará la carpeta node_modules

## Crear el Archivo de Variables de Entorno

en la raiz del proyecto crear un arhivo con nombre .env (si, empieza con .) en ese archivo escribir la cadena de conexión que se usará para conectarse a la base de datos. Allí escribir la siguiente linea:
```DATABASE_URL = "mongodb+srv://admin:yIfAdobZ4peQmJ4N@proyectociclo4.cq67b.mongodb.net/VerificacionTutorSprint2?retryWrites=true&w=majority"```

## Iniciar el Servidor

El servidor se inicia usando YARN, ejecutar en la consola de Visual Studio Code el comando:
```yarn start```
Si en la consola sale el mensaje "Conexion Exitosa" es que la configuración del entorno y cadena de conexión ha sido satisfactoria. Ya se pueden realizar inserciones de documentos en Mongo y consulta de los mismos.

## Crear Documentos

En el archivo index.ts quitarle el comentario a la linea 143 (crearRegistros();), detener el servidor y volver a ejecutarlo. Se crearán la colección VerificacionTutorSprint2 y los documentos, Advances, Inscriptions, Objectives, Observations, Projects y Users.

## Consultar Documento

En el archivo index.ts quitarle el comentario a la linea 144 (realizarConsultas();) y comentarear la linea 143 que se descomentareo previamente, detener el servidor y volver a ejecutarlo. Se harán diferentes consultas que se mostrarán en consola.

<p align="center">
    <img src="https://github.com/kiadom/QuimbayaDevReloadedCiclo4/blob/main/images/footerlogin.png" width="100%" />
</p>
