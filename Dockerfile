FROM node:15.13-alpine
WORKDIR /core
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]