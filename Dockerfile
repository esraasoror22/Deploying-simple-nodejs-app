FROM node:alpine
WORKDIR /app
COPY *.json  ./
RUN npm install
COPY . ./
EXPOSE 3000
CMD ["npm","start"]

