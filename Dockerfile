FROM django:onbuild

RUN apt-get update && apt-get install -y \
  netcat

CMD ./start.sh
