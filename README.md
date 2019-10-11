This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`
```
.../> npm install
.../server/> npm install
```
Install dependencies for client and server.

### `npm start`
```
.../> npm start
.../server/> npm start
```
client: Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

server: Open [http://localhost:4000/ideas](http://localhost:4000/ideas) to view data from server.

### `MongoDB Compass`
* install mongodb and ["MongoDB Compass"](https://www.mongodb.com/products/compass)
* create a database locally, database name: reactaxios, collection name: ideas

### `mongoimport`
```
.../> mongoimport --db=reactaxios --collection=ideas --file=ideas.json
```
Import documents in ideas.json to your mongodb database "reactaxios" in the collection "ideas".

### `mongoexport`
```
.../> mongoexport --db=reactaxios --collection=ideas --out=your-ideas.json
```
If you add your own ideas to the database, you can also export them to a JSON file for the back-up.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
