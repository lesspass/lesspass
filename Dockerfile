FROM node:argon-slim

RUN mkdir -p /frontend
WORKDIR /frontend

COPY package.json /frontend/
RUN npm install --production

COPY . /frontend

EXPOSE 8080
CMD [ "npm", "start" ]
