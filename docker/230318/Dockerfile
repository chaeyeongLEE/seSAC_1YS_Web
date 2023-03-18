
# FROM mysql

# ENV MYSQL_ROOT_PASSWORD=1234

# EXPOSE 3309



# 부모 이미지 지정
FROM node:16
#작업 디렉토리 생성
WORKDIR /app
#소스추가
COPY . /app
#패키지 설치
RUN npm install
#포트매핑
EXPOSE 8000
#실행명령
CMD [ "node", "index.js" ]
