#!/bin/bash

CWD=$(cd -P -- "$(dirname -- "$0")" && pwd -P)
cd $CWD

javac PrintTimezones.java
java PrintTimezones > ../test/javatimezones.txt
