FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm i -g http-server yarn

RUN yarn install

RUN yarn build

EXPOSE 8080
CMD [ "http-server", "dist" , "-p", "8080" ]

