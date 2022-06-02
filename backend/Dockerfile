FROM node:14-slim

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN yarn

# If you are building your code for production
# RUN yarn ci --only=production

# Bundle app source
COPY . .

RUN yarn run build

EXPOSE 8080
CMD [ "yarn", "start"]
