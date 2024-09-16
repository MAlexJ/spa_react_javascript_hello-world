# React/JavaScript: Basic User Authentication Code Sample

configuration
app: ["Full-Stack Security: React/JavaScript + Spring WebFlux/Java](https://developer.auth0.com/resources/code-samples/full-stack/hello-world/basic-access-control/spa/react-javascript/spring-webflux-java)

### Springboot project setup

create .env file with properties:

```
REACT_APP_ROUTE=http://localhost:3000
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

https://api.daypilot.org/daypilot-date-parse/

### React

#### component: BrowserRouter

basename: string

The base URL for all locations. 
If your app is served from a sub-directory on your server, you’ll want to set this to the sub-directory. 
A properly formatted basename should have a leading slash, but no trailing slash.

link: https://v5.reactrouter.com/web/api/BrowserRouter

#### hook: useLocation

How to Pass Data Across Routes with React Router

URL parameters are a good way of passing data from page to page in a React application.
But what if you don't want that data to show in your URL?
Here's a great way to achieve that using the useLocation hook that React Router provides.

link: https://dev.to/olabisi09/how-to-pass-data-across-routes-with-react-router-53jm

#### hook: useState

Two way binding more than one input in React Hooks

link: https://stackoverflow.com/questions/61373904/two-way-binding-more-than-one-input-in-react-w-hooks

The hooks and handler:

```
const [message, setMessage] = useState("");
const [newUser, setNewUser] = useState("");
const handleChange = e =>
    e.target.name === "message"
        ? setMessage(e.target.value)
        : e.target.name === "user"
        ? setNewUser(e.target.value)
        : "";
```

The inputs:

```
<input name="message" value={message} onChange={handleChange} />
<input name="user" value={newUser} onChange={handleChange} />
```

two options:

```
import React, { useState } from "react";
import "./styles.css";

export default function App() {
    const [message, setMessage] = useState("");
    const [newUser, setNewUser] = useState("");

    const handleChange = e =>
        e.target.name === "message"
            ? setMessage(e.target.value)
            : e.target.name === "user"
            ? setNewUser(e.target.value)
            : "";

    const [message2, setMessage2] = useState("");
    const [newUser2, setNewUser2] = useState("");
    const handleChange2 = (e, name) =>
        name === "message" ? setMessage2(e.target.value) : name === "user" ? setNewUser2(e.target.value) : "";

    return (
        <div className="App">
            <h2>Option 1</h2>
            <input name="message" value={message} onChange={handleChange} />
            <input name="user" value={newUser} onChange={handleChange} />
            <hr />
            <h2>Option 2</h2>
            <input value={message2} onChange={e => handleChange2(e, "message")} />
            <input value={newUser2} onChange={e => handleChange2(e, "user")} />
            <hr />
        </div>
    );
}
```
