#!/usr/bin/env sh

####
# update script for moment and java

CWD=$(cd -P -- "$(dirname -- "$0")" && pwd -P)
cd $CWD

node ./get-moment-tz.js
sh ./get-java-tz.sh
