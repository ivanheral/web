FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json .
COPY yarn*.json .
RUN yarn install
COPY . .
RUN yarn dev

EXPOSE 80