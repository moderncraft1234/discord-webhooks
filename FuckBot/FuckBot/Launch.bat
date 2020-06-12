@echo off

title FuckBot
java -server -Xmx1G -XX:+UseG1GC -XX:MaxGCPauseMillis=1 -Dfile.encoding=UTF-8 -jar FuckBot.jar