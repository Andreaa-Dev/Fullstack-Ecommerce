FROM node:alpine
WORKDIR /app
COPY . .
CMD ["yarn","run","watch"]