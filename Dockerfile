FROM node:argon

RUN mkdir -p /src
WORKDIR /src

COPY package.json /src/
RUN npm install

COPY . /src
RUN npm run build

EXPOSE 8080
CMD [ "npm", "start" ]
