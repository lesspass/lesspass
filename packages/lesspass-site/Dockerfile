FROM node:lts AS builder
MAINTAINER "LessPass <contact@lesspass.com>"
LABEL name="LessPass Frontend" 
WORKDIR /frontend
COPY package.json yarn.lock ./
RUN yarn install
COPY . /frontend
RUN yarn build
FROM nginx:alpine
COPY --from=builder /frontend/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]