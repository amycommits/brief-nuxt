FROM postgres:9.6.17

RUN apt-get update
RUN apt-get install -y curl

RUN curl -sL https://deb.nodesource.com/setup_13.x | bash -
RUN apt-get install -y nodejs

RUN mkdir -p /home/nuxt
WORKDIR /home/nuxt
COPY . /home/nuxt


RUN npm install
