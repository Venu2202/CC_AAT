FROM node:14

RUN npm install -g nodemon

WORKDIR /app

COPY package.json ./

RUN npm install   

EXPOSE 3000

COPY . .
    
CMD npm start 