# E-commerce Product List

## Required functionality:

- [x] Products data is pulled in from a JSON like /resources/productlist.json.
- [x] Products are display in a responsive multi-column layout for mobile, tablet & desktop.
- [x] Product images should scale accordingly.
- [x] The list of products is wrapped by some basic layout.
- [x] You will provide some methods to filter the list of products by brand and type.

## Technical constraints:

React version 17, react-redux, node-sass, styled-components, typescript

## Bonus points:

- [x] You will provide some methods to sort the list of products.
- [ ] You will add some kind of pagination / load more functionality.
- [ ] You will write some basic tests for your JavaScript code using Jest.
- [ ] You create simple GraphQL server to get the products

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Docker build

`docker-compose up -d --build` to build images
