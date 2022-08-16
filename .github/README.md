# Agustin Garcia

The app is deployed here: [https://agustin-garcia.web.app/](https://agustin-garcia.web.app/)

[![Continuous Integration & Deployment](https://github.com/agusmgarcia/next-agustin-garcia/actions/workflows/continuous-integration-and-deployment.yml/badge.svg)](https://github.com/agusmgarcia/next-agustin-garcia/actions/workflows/continuous-integration-and-deployment.yml)

This is the personal page in which the author includes technologies he uses and companies he has worked for.

## Development environment

Clone the repository in your local machine

```bash
git clone https://github.com/agusmgarcia/next-agustin-garcia.git
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

Every time a new tag is created with the pattern **v**_x.x.x_, the code will be built and deployed to the firebase app service automatically.

Create and deploy a new tag using the following commands:

```bash
git tag vx.x.x
git push origin vx.x.x
```

> Replace x.x.x by the current version number.

## Technologies

Some of the technologies used to build this project were:

- [NextJS](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [Imgix](https://imgix.com/)
