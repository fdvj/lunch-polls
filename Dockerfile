FROM node:0.10.45

EXPOSE 80 443
ENV MONGO_URL='mongodb://localhost/lunchpolls'
ENV ROOT_URL='http://lunch.fernandodevega.net'
ENV MAIL_URL=''
ENV PORT=1337

RUN \
  apt-get update && \
  apt-get upgrade -y && \
  apt-get install -y nginx mongodb && mkdir -p /app

ADD nginx.conf /etc/nginx/sites-available/lunchpolls
ADD dist/ /app

WORKDIR /app

RUN \
  ln -s /etc/nginx/sites-available/lunchpolls /etc/nginx/sites-enabled/lunchpolls && \
  rm /etc/nginx/sites-enabled/default && \
  tar -xvzf /app/lunch-polls.tar.gz

WORKDIR /app/bundle/programs/server

RUN npm install

WORKDIR /app/bundle

ENTRYPOINT service nginx start && service mongodb start && node main.js