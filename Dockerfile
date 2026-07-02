# Utiliza una imagen base ligera de Node.js basada en Alpine Linux.
# Esto reduce el tamaño de la imagen y minimiza la superficie de ataque.
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor.
# Todos los comandos posteriores se ejecutarán desde esta ruta.
WORKDIR /app

# Copia únicamente los archivos de dependencias.
# De esta forma Docker puede aprovechar la caché de capas
# si el código cambia pero las dependencias no.
COPY package.json package-lock.json ./

# Instala las dependencias de la aplicación definidas
# en package.json y package-lock.json.
RUN npm install

# Copia el resto de archivos del proyecto al contenedor.
COPY . .

# Informa de que la aplicación escuchará en el puerto 3000.
# No abre el puerto, simplemente lo documenta.
EXPOSE 3000

# Comando que se ejecutará cuando se inicie el contenedor.
# Lanza la aplicación utilizando el script "start"
# definido en el archivo package.json.
CMD ["npm", "start"]
