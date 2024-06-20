# Usar una imagen base de Node.js
FROM node:20.14.0

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json al contenedor
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de la aplicación al contenedor
COPY . .

# Construir la aplicación Next.js
RUN npm run build

# Exponer el puerto en el que Next.js correrá
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
