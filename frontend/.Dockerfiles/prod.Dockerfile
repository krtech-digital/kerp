FROM node:current-alpine3.14 as build

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
COPY .env.prod /usr/src/app/
COPY next.config.js /usr/src/app/
RUN yarn install 
COPY . .
RUN yarn run build 
RUN yarn run export

FROM nginx:1.21.6-alpine
COPY --from=build --chown=nginx:nginx /usr/src/app/out/ /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]