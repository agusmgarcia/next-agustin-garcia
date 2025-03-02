# Agustin Garcia

The app is deployed here: <https://agusmgarcia.github.io/next-agustin-garcia/>

[![Deploy application](https://github.com/agusmgarcia/next-agustin-garcia/actions/workflows/deploy-app.yml/badge.svg)](https://github.com/agusmgarcia/next-agustin-garcia/actions/deploy-app.yml)

This is a personal web site to show the technologies I have worked for and the technologies I use

## Getting started

Clone the repository in your local machine

```bash
git clone https://github.com/agusmgarcia/next-agustin-garcia.git
```

Install dependencies

```bash
cd next-agustin-garcia
npm i
```

> Make sure to have exported an environment variable called `NODE_AUTH_TOKEN`. Its value should be your GitHub PAT.

Start the project

```bash
npm start
```

## Deployments

Every time a new tag is created with the pattern **v**_x.x.x_, the code will be built and deployed to the firebase app service automatically.

Create and deploy a new tag using the following commands:

```bash
npm run deploy
```

Some of the technologies used to build this project were:

- [Imgix](https://imgix.com/)
- [NextJS](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind](https://tailwindcss.com)
