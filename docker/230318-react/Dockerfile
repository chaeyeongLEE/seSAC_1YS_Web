#base image
FROM nginx:1.21-alpine
#뒤에는 버전을 적어주는것
#copy build files
COPY build /usr/share/nginx/html

#copy nginx config file
COPY nginx.conf /etc/nginx/conf.d/default.conf

#expose port
EXPOSE 80

#start nginx server
CMD [ "nginx","-g","daemon off;" ]

