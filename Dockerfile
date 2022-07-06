FROM node:15.13-alpine
WORKDIR /typescriptdemo
ENV PATH = "./typescriptdemo/node_modules/.bin:$PATH"
COPY package*.json ./
COPY package-lock.json ./
RUN npm run build
RUN npm i
COPY . ./
CMD ["npm", "start"]
