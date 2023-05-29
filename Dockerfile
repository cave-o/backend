FROM node:18-alpine

WORKDIR /user/app

COPY package*.json ./
RUN yarn install

COPY . .
EXPOSE 1337
ENV NODE_ENV=production
ENV DATABASE_URL=postgresql://postgres:abhtZtpOoqXvg4EUnyJb@containers-us-west-165.railway.app:6546/railway
RUN yarn build
RUN yarn strapi import -f ./seed-data.tar.gz

CMD ["yarn", "start"]