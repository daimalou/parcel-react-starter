# Parcel React Starter

A simplest React starter based on Parcel.


## Some VS Code Plugin

[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

[Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Include

[React](https://reactjs.org) 16.8.1

[React-Dom](https://reactjs.org) 16.8.1

[Sass](https://sass-lang.com/install) 1.17.0

[Postcss-Modules](https://github.com/css-modules/postcss-modules) 1.4.1

[Autoprefixer](https://github.com/postcss/autoprefixer) 9.4.7

[Parcel](https://parceljs.org/) 1.11.0

### Babel 7.X and Plugins:

[@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)

[@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react)

[@babel/plugin-proposal-class-properties](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties)

[@babel/plugin-proposal-export-default-from](https://babeljs.io/docs/en/babel-plugin-proposal-export-default-from)


## CSS Modules Config
Open `.postcssrc` file.

```json
{
  "modules": true,
  "plugins": {
    "autoprefixer": {
      "grid": true
    }
  }
}
```

`"modules": true`  -use camelCase classname in scss and js file.

`"modules": false` - use kebab-case classname like normal.

## Download

```
git clone https://github.com/daimalou/simple-parcel-react-starter
cd parcel-react-starter 
yarn or npm i
```

## Run

```
yarn dev && yarn build
npm run dev && npm run build
```

## Link

[Parcel Documentation](https://parceljs.org/getting_started.html)

## License

MIT
