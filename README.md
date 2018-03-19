# stackbuilders-react--todo-exercise

For the purpose of this project, this repo contains a pre-built JavaScript bundle containing the react 'To Do App'. Additionally, the bundle may be generated following the instructions in the 'Building for development' section.


### This project uses
* Node.js 6.0.0+
* React 16
* Webpack 3
* Babel Cli

### To use

You'll need to have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed in your system.
Fork and clone the project:

```
$ git clone https://github.com/flema1/stackbuilders-react--todo-exercise.git
```

Then install the dependencies:

```
$ npm install
```
### Project Structure 
```yml
  root directory:
  ├── client:
  │   │   # only react app files here
  │   ├── app:
  │   │   # static files
  │   ├── public:
  │   │   ├── bundle.js 
  │   │   ├── index.html 
  │   │   └── styles.css    
  │   ├── entry.js
  │   └── index.js
  └── webpack.config.js
```
### Executing the Bundle.js in an HTML Template

Copy the pre-built bundle.js and styles.css files located in the `client/public` directory. 

Serve the bundle.js file in an HTML template as below.

CSS assets may be included with `<link>` tags in the HTML head.

```html
!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Todo App</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div id="root">
    </div>
  </body>
    <script src="bundle.js"></script>
</html>
```

### Building for development
Below the commands to build the bundle file and serve locally.

Invoke Webpack without any arguments:

```bash
$ webpack
```


Run build locally:

```
$ npm start
```

And open the web browser to <http://localhost:8080/>. To use the To Do app!



# Additional Notes


### What is Webpack

Webpack is a front-end tool to build JavaScript module scripts for browsers.

Webpack needs a configuration file called `webpack.config.js` which is just a CommonJS module.

Here's an example webpack config.

```javascript
// webpack.config.js
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  }
};
```
