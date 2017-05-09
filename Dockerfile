FROM teracy/angular-cli
COPY . /app/
WORKDIR app/
RUN npm install --unsafe-perm ||   ((if [ -f npm-debug.log ]; then       cat npm-debug.log;     fi) && false)
CMD npm start
