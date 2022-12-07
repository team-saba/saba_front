FROM node:16-alpine3.11
WORKDIR /app/front

RUN npm install -g serve

RUN mkdir ./build
COPY ./build ./build

ENTRYPOINT ["serve", "-s", "build"]