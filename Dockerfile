FROM node:18-alpine

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun i

COPY . .

EXPOSE 3001

CMD [ "bun", "start" ]