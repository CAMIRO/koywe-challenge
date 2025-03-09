# Koywe Challenge

instrucciones para construir y ejecutar la aplicación tanto en un contenedor Docker como de forma local.

## Construcción y Ejecución con Docker

### 1. Construir la Imagen

Ejecuta el siguiente comando para construir la imagen de Docker:

```sh
podman build -t koywe-challenge .
```

### 2. Ejecutar el Contenedor

Una vez construida la imagen, inicia el contenedor con el siguiente comando:

```sh
podman run -d -p 3000:3000 --name koywe-challenge-container koywe-challenge
```

Esto mapeará el puerto 3000 del contenedor al puerto 3000 de tu máquina anfitriona.

### 3. Verificar que la Aplicación está Corriendo

Puedes verificar que la aplicación se está ejecutando correctamente accediendo en tu navegador a:

[http://localhost:3000](http://localhost:3000)

O usando curl en la terminal:

```sh
curl http://localhost:3000
```

## Ejecución Local (Sin Docker)

Si prefieres ejecutar la aplicación directamente en tu máquina sin Docker, sigue estos pasos:

### 1. Instalar Dependencias (si no lo has hecho)

```sh
npm install
```

### 2. Compilar el Proyecto

```sh
npm run build
```

### 3. Ejecutar la Aplicación

En Modo Producción:

```sh
npm run start:prod
```

En Modo Desarrollo:

```sh
npm run start:dev
```
