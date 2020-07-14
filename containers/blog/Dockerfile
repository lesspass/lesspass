FROM node:lts AS builder
LABEL maintainer="LessPass <contact@lesspass.com>"
LABEL name="LessPass Blog" 
WORKDIR /opt/blog
COPY package.json yarn.lock ./
RUN yarn install
COPY . /opt/blog
RUN yarn build
FROM nginx:alpine
COPY --from=builder /opt/blog/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]