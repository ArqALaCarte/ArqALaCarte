FROM node:6.10
ENV HOME=/home/app
WORKDIR $HOME
COPY . $HOME
RUN npm install -g angular-cli@1.0.0-beta.28.3 && npm cache clean
RUN npm install
EXPOSE 4200 80 8080
CMD npm start
