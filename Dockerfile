FROM node:argon-slim

RUN mkdir -p /frontend
WORKDIR /frontend

COPY package.json /frontend/
RUN npm install --production --ignore-scripts --unsafe-perm
RUN npm install --only=dev --ignore-scripts --unsafe-perm

COPY . /frontend
RUN npm run build

EXPOSE 8080
CMD [ "npm", "start" ]
