FROM node:alpine
RUN apk add --no-cache python make g++
WORKDIR /product_list
COPY package.json /product_list
COPY yarn.lock /product_list
RUN yarn install
COPY . /product_list
CMD ["yarn", "start"]