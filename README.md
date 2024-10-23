# Resas Web App React.js(Typescript) Demonstration

- frontend: React 18.2.0(hooks / redux-toolkit /resas api)

- Environment: node.js 18.18.1

- test: Unit test using @testing-library/react

- lint: implement the prettier and Eslint

- husky

- deploy: used the Vercel

# Live Demo

https://resas-api-app.vercel.app/

## ❯ Getting Started

### Step 1: Get the Resas api key

you need to get the resas api key at following url.
go to [Resas](https://opendata.resas-portal.go.jp/) and register the account and get the api key.
set the env params like that

```bash
REACT_APP_API_KEY=...
```

### Step 2: Set up the Development Environment

You need to set up your development environment before you can do anything.

Install [Node.js and NPM](https://nodejs.org/en/download/)

Then setup your application environment.

```bash
npm install(or npm install --force)
```

```bash
npm start
```

> This installs all dependencies with npm. So after that your development environment is ready to use.

### Step 3: Unit Test

- Run `npm run test` to perform the unit test.

### Step 4: Format

- Run `npm run format` to format the code style.

### Step 5: Build

- Run `npm run build` to build the project.

## Key Features

- implement the responsive using raw CSS and styled component
- implement the standard architecture of React
- implement the all component unit test using mockstore and jest.
- use the redux to cache the data and add the loading bar during data-fetching.
- prevent the prefecture checkbox double click error.
- optimize the code using react hook such as useCallBack and useMemo.
- integrate the Eslint and Prettier, Husky for smart code style.
