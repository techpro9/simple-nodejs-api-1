FROM node:16-alpine
WORKDIR app
COPY . .
RUN npm install && npm test
EXPOSE 3000
CMD ["npm", "start"]