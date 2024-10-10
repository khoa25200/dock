#!/bin/bash

docker build -t khoa25200/dock:latest .

docker push khoa25200/dock:latest

ssh -i ~/.ssh/class3.pem ec2-user@13.229.93.83
docker pull khoa25200/dock:latest
docker stop dock-container
docker rm dock-container 

docker run -d --name dock-container -p 3000:3000 khoa25200/dock:latest
