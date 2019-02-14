# Simple Parcel React Starter

Very Simple.


# VS Code Plugin

[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

[Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

# Include

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

[BrowsersList](https://github.com/browserslist/browserslist)

### Eslint and Plugins:

[eslint](https://github.com/eslint/eslint)

[babel-eslint](https://github.com/babel/babel-eslint)

[eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype)

[eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)

[eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)

[eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)

# Not Include

[@babel/plugin-syntax-dynamic-import](https://babeljs.io/docs/en/next/babel-plugin-syntax-dynamic-import.html) -Parcel Supported

[Jest](https://github.com/facebook/jest)

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

`"modules": false` - use kebab-case classname as usual.

## Download

```
git clone https://github.com/daimalou/simple-parcel-react-starter
cd simple-parcel-react-starter
yarn or npm i
```

## Dev && Build

```
yarn dev && yarn build
npm run dev && npm run build
```

## ScreenShot
![ScreenShot](./screenshot.png)

## Resource

[Parcel Documentation](https://parceljs.org/getting_started.html)

[Babel Plugins](https://babeljs.io/docs/en/plugins)

[Configuring ESLint](https://eslint.org/docs/user-guide/configuring#specifying-parser-options)

[eslint-config-react-app](https://www.npmjs.com/package/eslint-config-react-app) -Official Eslint Preset - [Issues#2377](https://github.com/facebook/create-react-app/issues/2377)

[babel-preset-react-app](https://www.npmjs.com/package/babel-preset-react-app) -Official Babel Preset - I never tried.

## License

MIT
