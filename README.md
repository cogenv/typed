## @cogenv/typed

Cogenv is a package that offers modern management to handle environmental variables!

`@cogenv/typed`, is a package that adds powers to the main `cogenv` package.

## Installation

Before using we have to install the package !

```bash
# For npm
npm install --save @cogenv/typed
```

For this package to function you will need to install the `@cogenv` core, I mean the `@cogenv/core` package, as follows.

```bash
# For npm
npm install --save @cogenv/core
```

Now we are ready to use this beautiful package!

## Usage

As I mentioned, `@cogenv/typed` depends on **`@cogenv/core`**.

Let's get it over with!

```js
const CogenvConfig = require('@cogenv/core');
const CogenvTyped = require('@cogenv/typed');

// To see the @cogenv/core options we recommend you to see their documentation !
const CogenvData = CogenvConfig();

CogenvTyped(CogenvData);
```

It's time to learn how to use your options, you only have one option!

| name | type   | default | optiosn                |
| ---- | ------ | ------- | ---------------------- |
| mode | string | `auto`  | `auto` or `customized` |

-  Mode `auto` : The **auto** mode will add the typing automatically.
-  Mode `customized` : The **customized** mode, allows to add custom types, if you don't assign any type, it will return as a string !

## ⭐ Support for

`@cogenv/typed` is an open source project licensed by [MIT](LICENSE). You can grow thanks to the sponsors and the support of the amazing sponsors. If you want to join them, [contact me here](mailto:helloyonicb@gmail.com).

## 🎩 Stay in touch

-  Author [Yoni Calsin](https://github.com/yoicalsin)
-  Twitter [Yoni Calsin](https://twitter.com/yoicalsin)

## Contributors

Gracias a los personas maravillosas que colaboran conmigo !

## 📜 License

`@cogenv/typed` under [License MIT.](LICENSE)
