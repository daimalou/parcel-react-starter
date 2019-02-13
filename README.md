# Parcel React Starter

A simplest React Starter based on Parcel.


## I Use VS Code Plugin

[Prettier - Code formatter](https://github.com/prettier/prettier-vscode)

Eslint 

## Include

[React](https://reactjs.org) 16.8.1

[React-Dom](https://reactjs.org)16.8.1

Babel 7.X and Plugins:

[@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)

[@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react)

[@babel/plugin-proposal-class-properties](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties)

[@babel/plugin-proposal-export-default-from](https://babeljs.io/docs/en/babel-plugin-proposal-export-default-from)

[Sass](https://sass-lang.com/install) 1.17.0

[Postcss-Modules](https://github.com/css-modules/postcss-modules) 1.4.1

[Autoprefixer](https://github.com/postcss/autoprefixer) 9.4.7

[Parcel](https://parceljs.org/)

## CSS Modules Config
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
Default is true -use camelCase in Scss file.
Change `ture` to `false` - you can use kebab-case.

## Download
```
git clone https://github.com/daimalou/parcel-react-starter 
cd parcel-react-starter 
yarn or npm i
```
## Run
```
yarn dev && yarn build
npm run dev && npm run build
```

## License
MIT
