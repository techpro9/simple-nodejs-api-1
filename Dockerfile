FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install && npm test
COPY . .
EXPOSE 3000
CMD ["npm", "start"]