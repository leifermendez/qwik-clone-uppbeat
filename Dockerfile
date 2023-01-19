FROM node:18-alpine as node
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm i
RUN npm run build
ARG RAILWAY_STATIC_URL
ARG PUBLIC_URL
ARG PORT
EXPOSE ${PORT}
CMD ["npm", "run", "deploy"]