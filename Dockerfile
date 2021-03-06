FROM node:14-alpine

# create destination directory
RUN mkdir -p /usr/src/nestjs
WORKDIR /usr/src/nestjs

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/nestjs/
RUN yarn install

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN yarn build

# expose 3000 on container
EXPOSE 3000

# start the app
CMD [ "yarn", "start:prod" ]