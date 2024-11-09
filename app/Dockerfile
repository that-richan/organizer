FROM denoland/deno:alpine-2.0.5

EXPOSE 80

WORKDIR /src
COPY . .
RUN deno install

WORKDIR /src/app
RUN deno task build

RUN apk update
RUN apk add curl nginx
COPY ./app/nginx.conf /etc/nginx/http.d/default.conf
CMD nginx -g 'daemon off;'