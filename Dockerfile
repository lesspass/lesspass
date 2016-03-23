FROM node:argon

RUN mkdir -p /frontend
WORKDIR /frontend

COPY package.json /frontend/
RUN npm install

COPY . /frontend
RUN npm run build

EXPOSE 8080
CMD [ "npm", "start" ]
