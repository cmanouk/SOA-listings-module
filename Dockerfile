FROM node:14
WORKDIR /scores-app
COPY package.json .
RUN npm i --production
COPY . .
EXPOSE 3010
CMD ["node", "./server/index.js"]