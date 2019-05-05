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

COPY . .

# This is the only file that matters in the post-build-image process
CMD [ "./build.sh"]
