FROM node:16  # Choose a suitable Node.js version

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD [ "node", "server.js" ]
