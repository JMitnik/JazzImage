FROM node:10-alpine

# Global settings
RUN \
    apk add --no-cache python make g++ && \
    apk add vips-dev fftw-dev --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/testing --repository http://dl-3.alpinelinux.org/alpine/edge/main && \
    rm -fR /var/cache/apk/*

WORKDIR /app
RUN npm install --global node-gyp gatsby-cli
COPY package*.json ./
RUN npm install

ENV API_URL=cms:1337

COPY . .

# This is the only file that matters in the post-build-image process
# CMD [ "./build.sh"]

COPY wait-for-it.sh /wait-for-it.sh
COPY build.sh /build.sh

RUN chmod +x /wait-for-it.sh
RUN chmod +x /build.sh
