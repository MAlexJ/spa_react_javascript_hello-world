# React/JavaScript: Basic User Authentication Code Sample

configuration
app: ["Full-Stack Security: React/JavaScript + Spring WebFlux/Java](https://developer.auth0.com/resources/code-samples/full-stack/hello-world/basic-access-control/spa/react-javascript/spring-webflux-java)

### Springboot project setup

create .env file with properties:

```
REACT_APP_AUTH0_DOMAIN=.....dev......
REACT_APP_AUTH0_CLIENT_ID=....ID.....
REACT_APP_AUTH0_CALLBACK_URL=....my.site.com/callback
REACT_APP_API_SERVER_URL=....my.site.com
REACT_APP_AUTH0_AUDIENCE=....my.site.com
```

### Docker

info: https://www.youtube.com/watch?v=dfTco9hmXEM&t=364s

command:

```
docker build -t react-example . 
docker run -d -p 3000:3000 --name react-example-container react-example:latest
```

### Hosting React app

Render is a cloud platform that offers a variety of services for developers, including hosting for web applications,
databases, and static sites. Render aims to simplify the process of deploying and scaling applications by providing a
user-friendly interface and seamless integration with popular development tools.

Deploy for Free - https://render.com/ <br>
You can deploy instances of some Render services <br>
link: https://docs.render.com/free

Deploying a Spring Boot Application with Docker Image on Render <br>
tutorial: https://medium.com/@nithinsudarsan/deploying-a-spring-boot-application-with-docker-image-on-render-com-9a87f5ce5f72

### UptimeRobot: Monitor anything

UptimeRobot is a website monitoring service that checks the status of your websites, servers, and other online services
at regular intervals. It notifies you if any of your monitored services go down, helping you to quickly address any
issues and minimize downtime.

link: https://uptimerobot.com/ <br>

### Calendar

link: https://api.daypilot.org/

#### DayPilot.Calendar.weekStarts

The first day of week in the week view can be set using the weekStarts property.

Possible values:
a number representing the day of week:

```
(0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 =
Saturday) "Auto" (default)
```

The automatic mode uses the current locale to determine the first day of week.

link: https://api.daypilot.org/daypilot-calendar-weekstarts/

#### Time Format

timeFormat