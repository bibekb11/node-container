    FROM node:10.18.0
    WORKDIR /usr/mnt/syntasso-js-engine

    COPY package*.json ./
    RUN npm install

    COPY . .
    EXPOSE 8080
    CMD ["node", "server.js"]