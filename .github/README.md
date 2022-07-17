# Agustin Garcia

The app is deployed here: [https://agustin-garcia.web.app/](https://agustin-garcia.web.app/)

[![Continuous Integration & Deployment](https://github.com/agusmgarcia/next-agustin-garcia/actions/workflows/continuous-integration-and-deployment.yml/badge.svg)](https://github.com/agusmgarcia/next-agustin-garcia/actions/workflows/continuous-integration-and-deployment.yml)

This is a simple web application to register money transactions grouped by categories.

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

Every time a new tag is created with the pattern **v**_x.x.x_, the code will be built and deployed to the firebase app service automatically. Let's assume the new version is _v1.0.2_.

Update the version in the [package.json](../package.json). Do not prepend the **v** in this case. Just set the numbers:

```jsonc
{
  ...
  // Example:
  "version": "1.0.2",
  ...
}
```

and run the install method to regenerate the [package-lock.json](../package-lock.json) file:

```bash
npm i
```

Then, create a new tag using this command.

```bash
# Example
git tag v1.0.2
git push --tags
```

> The last command will trigger a GitHub action to automatically build and deploy the application.

## Technologies

Some of the technologies used to build this project were:

- NextJS
- React
- Firebase
- Imgix
