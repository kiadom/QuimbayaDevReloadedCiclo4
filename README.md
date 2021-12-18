<p align="center">
    <img src="https://github.com/kiadom/QuimbayaDevReloadedCiclo4/blob/main/images/logoheader.png" width="50%" />
</p>

# Sprint 5
En la rama main se encuentra el código final del Sprint 5 (Finalización del Proyecto). Los pasos para ejecutar el proyecto son:

- [Crear el Entorno de Trabajo](#crear-el-entorno-de-trabajo)
- [Instalar los Módulos](#instalar-los-modulos)
- [Crear el Archivo de Variables de Entorno](#crear-el-archivo-de-variables-de-entorno)
- [Iniciar el Servidor](#iniciar-el-servidor)
- [Explorar las Funcionalidades](#explorar-las-funcionalidades)

<br>

## Crear el Entorno de Trabajo

Se puede obtener el proyecto descargandolo, clonandolo, haciendole un fork o pull, lo importante es tenerlo localmente. Abrir dos proyecto en Visual Studio Code, uno dentro de la carpeta frontend y otro dentro de la carpeta backend. Los pasos siguientes se deben hacer en cada una de las dos carpetas

## Instalar los Módulos

Todos los módulos del proyecto se instalaron usando YARN, por lo tanto en una consola de Visual Studio Code ejecutar el comando:
```yarn install```
Esto creará la carpeta node_modules

## Crear el Archivo de Variables de Entorno

Solamente dentro de la carpeta backend, en la raiz del proyecto crear un arhivo con nombre .env (si, empieza con .) en ese archivo escribir la cadena de conexión que se usará para conectarse a la base de datos. Allí escribir la siguiente linea:
```DATABASE_URL = "DATABASE_URL = "mongodb+srv://JuanMa:rb0erxcyqfdv2aEo@proyectociclo4.cq67b.mongodb.net/GestionProyectos?retryWrites=true&w=majority"```
```PORT = 4000"```

## Iniciar el Servidor

El servidor se inicia usando YARN, ejecutar en la consola de Visual Studio Code el comando:
```yarn start```
El proyecto backend mostrará por consola el mensaje "Conexion Exitosa" y el proyecto frontend abrirá el navegador con el index de la aplicación.

## Explorar las Funcionalidades

Ya puede crear un usuario con diferentes roles y dependiendo del rol, crear proyectos, inscribirse a los mismos, añadir avances y observaciones, editarlas e interactuar con los diferentes modulos del Sistema de Información y Soporte a la Gestión de Proyectos de Investigación

<p align="center">
    <img src="https://github.com/kiadom/QuimbayaDevReloadedCiclo4/blob/main/images/footerlogin.png" width="100%" />
</p>
