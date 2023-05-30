FROM node:18-alpine

WORKDIR /user/app

COPY package*.json ./
RUN yarn install

COPY . .
EXPOSE 1337
ENV NODE_ENV=production
ENV DATABASE_URL=postgresql://postgres:abhtZtpOoqXvg4EUnyJb@containers-us-west-165.railway.app:6546/railway
ENV CLOUDINARY_NAME=dq6a7lv2s
ENV CLOUDINARY_KEY=136339939659823
ENV CLOUDINARY_SECRET=IP1moNuZnek4JHt2w-xcE5SuGvA
ENV CLOUDINARY_FOLDER=strapi 


RUN yarn build

CMD ["yarn", "start"]