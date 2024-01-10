FROM node:20-alpine

RUN apk add --no-cache bash 

WORKDIR /usr/src/app

COPY index.js package*.json ./

RUN npm install

CMD ["node", "index.js"]