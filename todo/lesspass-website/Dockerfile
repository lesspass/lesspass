FROM node:14-alpine AS builder
LABEL maintainer="LessPass <contact@lesspass.com>"
LABEL name="LessPass Frontend"
WORKDIR /opt/frontend
COPY package.json ./
RUN yarn install
COPY . /opt/frontend
RUN yarn build:static
RUN yarn build
FROM nginx:alpine
COPY --from=builder /opt/frontend/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
