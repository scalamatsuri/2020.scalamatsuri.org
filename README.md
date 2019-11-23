# 2020.scalamatsuri.org

> 2020.scalamatsuri.org Nuxt.js project

![](https://github.com/scalamatsuri/2020.scalamatsuri.org/workflows/deploy/badge.svg)
![](https://github.com/scalamatsuri/2020.scalamatsuri.org/workflows/verify/badge.svg)

## Build Setup

### Install nodenv

Currently this project Node.js version is managed via [`.node-version`](.node-version) (e.g. [nodenv](https://github.com/nodenv/nodenv) ).

If you use Mac and want to use nodenv,

```bash
$ brew install nodenv

$ nodenv init

$ nodenv install x.x.x #please refer to .node-version under this project

$ node -v #check the version is same as .node-verson .
```

## Build and start devlopment local server 

```bash
# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ yarn dev
```

## Build for production

```bash
# build for production and launch server
$ yarn run build

$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## source directory

[nuxt_src/](./nuxt_src/)
