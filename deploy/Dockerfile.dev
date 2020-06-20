FROM node:lts-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080

# Serve the http for being used
CMD [ "npm", "run", "serve" ]