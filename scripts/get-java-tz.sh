#!/usr/bin/env sh

CWD=$(cd -P -- "$(dirname -- "$0")" && pwd -P)
cd $CWD

javac PrintTimezones.java
java PrintTimezones > ../test/javatimezones.txt

java -version > ../test/java-version.txt 2>&1 
