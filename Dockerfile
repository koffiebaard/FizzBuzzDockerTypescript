FROM node:16 as base

WORKDIR /home/node/app

COPY package*.json ./
COPY . .

RUN npm i

FROM base as production

ENV NODE_PATH=./build

RUN npm run build
