FROM node:15

WORKDIR /app

#install app dependencies
COPY package*.json ./
RUN npm install 

#bundle app source
COPY . .
EXPOSE 3000

CMD ["npm", "start"]