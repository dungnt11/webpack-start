Starter template for js developer

```
npm init -y
npm i -D @babel/core @babel/preset-env babel-loader babel-polyfill css-loader html-loader html-webpack-plugin node-sass sass-loader style-loader webpack webpack-cli webpack-dev-server
npx install-peerdeps --dev eslint-config-airbnb
```

Edit package.json:
```
"scripts": {
  "dev": "webpack-dev-server --mode development --open",
  "build": "webpack --mode production"
},
```

Run
```
npm run dev
```