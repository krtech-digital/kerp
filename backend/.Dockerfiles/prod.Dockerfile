FROM node:alpine

ENV PORT=3001
# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./
# Install depedencies 
RUN yarn
COPY . .
RUN yarn run transpile

# Bundle app source
COPY --chown=node:node ./dist .

USER node

CMD [ "node", "./dist/src/index.js" ]