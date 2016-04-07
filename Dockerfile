# nodezoo-web

FROM node:4

#ADD . /
VOLUME microservice
WORKDIR microservice

EXPOSE 8000
EXPOSE 43000
EXPOSE 44000

CMD ["node","srv/app-dev.js","--seneca.options.tag=web","--seneca.log.all"]

# build and run:
# $ docker build -t nodezoo-web-00 .
# $ docker run -d -p 8000:8000 -p 43000:43000 -p 44000:44000 nodezoo-web-00
# local docker ip:
# $ docker-machine ip default




