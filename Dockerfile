FROM node:24-alpine
WORKDIR /app
COPY package.json .

ARG NODE_ENV
RUN if ["$NODE_ENV" = "development"]; \
        then npm install; \
        else npm install --only=producton; \
        fi

COPY . ./
ENV PORT=3000
EXPOSE $PORT
CMD ["node", "index.js"]