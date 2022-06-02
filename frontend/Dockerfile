FROM node:current-alpine3.14

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/

RUN yarn install 

COPY . .

RUN yarn run build 

CMD ["yarn", "start"]