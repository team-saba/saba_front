FROM node:16-alpine3.11
WORKDIR /app/front
COPY package.json .
RUN npm install --force
COPY . .
CMD ["npm", "start"]
EXPOSE 3000