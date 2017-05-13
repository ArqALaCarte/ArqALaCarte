FROM node:6.10
ENV HOME=/home/app
WORKDIR $HOME
COPY . $HOME
RUN npm install
EXPOSE 4200 3000
CMD npm start
