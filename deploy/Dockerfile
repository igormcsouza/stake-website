FROM node:lts-alpine

# Install the service which is going to run the application
RUN npm install -g http-server

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

# Serve the http for being used
CMD [ "http-server", "dist" ]