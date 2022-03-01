## Sample Monorepo App w/ Typescript

### Installation

`yarn install`


### Motivations

This is a sample PoC for monorepo development. Goals are to have a TS/React/Webpack build but focus on *Developer Experience*

How can we develop in a monorepo but make the experience great?

### Pre-requisites

During exploration, it is great to use Verdaccio to deploy to a private registry
* [https://verdaccio.org/](https://verdaccio.org/)

```bash
$ yarn install global verdaccio
$ verdaccio
```



### Yarn

This repo uses Yarn V2

```bash
npm install -g yarn

yarn set version berry

yarn set version latest # use the latest version (v2/v3)

yarn set version classic # use the V1 versions
```

Read more here: 
* [https://yarnpkg.com/getting-started/migration](https://yarnpkg.com/getting-started/migration)
* [https://yarnpkg.com/cli/set/version](https://yarnpkg.com/cli/set/version)

```
# .yarnrc.yml
npmRegistryServer: "http://localhost:4873"
```



### During Development

`yarn server dev`

`yarn ui dev`

Note - You don't need to pre-compile the `packages/common` code.  This is because of Typescript References.

### Running Main "server"

`yarn server start`:  Runs the sample "server"

`yarn ui start`:  Starts the UI


### Articles

[https://github.com/CryogenicPlanet/typescript-monorepo-example](https://github.com/CryogenicPlanet/typescript-monorepo-example)

[https://github.com/yakkomajuri/react-from-scratch](https://github.com/yakkomajuri/react-from-scratch)




### Publishing

TBD - probably use lerna 