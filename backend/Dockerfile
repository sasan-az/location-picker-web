FROM node:14-alpine

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . /app

EXPOSE 3200

CMD ["yarn", "start:dev"]
