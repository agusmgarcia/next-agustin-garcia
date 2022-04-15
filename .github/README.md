# Agustin Garcia

The app is deployed here: [https://agustin-garcia.web.app/](https://agustin-garcia.web.app/)

[![Deploy to firebase](https://github.com/agusss19/next-agustin-garcia/actions/workflows/deploy-site.yml/badge.svg)](https://github.com/agusss19/next-agustin-garcia/actions/workflows/deploy-site.yml)

This is a simple web application to register money transactions grouped by categories.

## Development environment

Clone the repository in your local machine

```bash
git clone https://github.com/agusss19/next-agustin-garcia.git
```

Install dependencies

```bash
cd next-agustin-garcia
npm i
```

Start the project

```bash
npm start
```

## CI/CD

Every time a new release is created, the code will be built and deployed it to the firebase app service automatically.

Before pushing a new version, update the version in the [package.json](./package.json).

```jsonc
{
  ...
  "version": "x.x.x",
  ...
}
```

## Technologies

Some of the technologies used to build this project were:

- NextJS
- React
- Firebase
