FROM node:20

WORKDIR /app

RUN npm i -g bun

COPY package.json bun.lockb ./

RUN bun i

COPY . .

EXPOSE 3001

CMD [ "bun", "start" ]