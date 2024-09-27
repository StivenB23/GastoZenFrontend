# Imagen base
FROM node:18

# Establecer el directorio de trabajo en la imagen
WORKDIR  /app

# Copiar los archivos de la aplicación al contenedor
COPY package*.json /app/

# Instalar solo las dependencias de producción
RUN npm i 

# Copiar el código fuente de la aplicación al contenedor
COPY . /app/

# Compilar el proyecto
# RUN npm run build

# Configurar la variable de entorno NODE_ENV
#ARG NODE_ENV
#ENV NODE_ENV $NODE_ENV

# Copiar el archivo .env correspondiente según NODE_ENV
#RUN cp .env.$NODE_ENV /app/.env

# Exponer el puerto que utiliza la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación según NODE_ENV
CMD ["npm", "run", "dev"]