<p align="center">
    <img src="https://github.com/kiadom/QuimbayaDevReloadedCiclo4/blob/main/images/logoheader.png" width="50%" />
</p>

# Sprint 3
En la rama main se encuentra el código final del Sprint 3 (Desarrollo de backend). Los pasos para ejecutar el proyecto son:

- [Crear el Entorno de Trabajo](#crear-el-entorno-de-trabajo)
- [Instalar los Módulos](#instalar-los-modulos)
- [Crear el Archivo de Variables de Entorno](#crear-el-archivo-de-variables-de-entorno)
- [Iniciar el Servidor](#iniciar-el-servidor)
- [Ejecutar Querys y Mutations](#ejecutar-querys-y-mutations)

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
Si en la consola sale el mensaje "Conexion Exitosa" y "Servidor Listo" es que la configuración del entorno y cadena de conexión ha sido satisfactoria. Ya se pueden realizar consultas y ediciones en Mongo.

## Ejecutar Querys y Mutations

En el navegador de su preferencia ingresar la URL http://localhost:4000/graphql. Desde allí se pueden hacer consultas (Querys), inserciones y ediciones de datos (Mutations) según cada una de las historias de usuario.

<p align="center">
    <img src="https://github.com/kiadom/QuimbayaDevReloadedCiclo4/blob/main/images/footerlogin.png" width="100%" />
</p>
