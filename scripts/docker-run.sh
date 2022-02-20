#!/usr/bin/env sh 

CWD=$(cd -P -- "$(dirname -- "$0")" && pwd -P)

get_java_tz () {
  local CONTAINER=$1

  podman run -it --rm \
    --name jdk \
    -v "$CWD/..:/work" \
    $CONTAINER \
    sh /work/scripts/get-java-tz.sh
  
  npm t
}

get_java_tz docker.io/library/openjdk:19-jdk-slim
get_java_tz docker.io/library/openjdk:11-jdk-slim
get_java_tz docker.io/library/openjdk:8-jdk-slim
