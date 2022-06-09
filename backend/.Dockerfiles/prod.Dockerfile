FROM node:alpine

ENV PORT=3001
# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./
# Install depedencies 
RUN yarn
COPY . .
RUN yarn run transpile
COPY knexfile.ts ./dist

USER node

CMD [ "node", "-r", "ts-node/register" ,"./dist/src/index.js" ]