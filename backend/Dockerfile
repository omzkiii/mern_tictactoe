FROM node:20
WORKDIR /app

COPY package*.json ./
RUN npm ci


COPY . .

EXPOSE 5000 5000

CMD ["npm","run","prod","--","--host","0.0.0.0"]
