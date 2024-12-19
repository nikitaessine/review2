# Running end-to-end tests

**Attention:** Before running tests, make sure you have Node.js installed

There are two ways to run the e2e-tests:

## First Way: Using Node.js

1. Open a terminal and navigate to this `e2e-tests` directory.
2. Install depencies by running the following command:

```
npm install
```

3. Run the tests with:

```
npx cypress run
```

## Second Way: Using Docker (Tested on Windows only)

1. Open a terminal and navigate to this `e2e-tests` directory.
2. Install depencies by running the following command:

```
npm install
```

3. Run the following Docker command:

```
docker run -it -v ${PWD}:/e2e -w /e2e cypress/included:13.16.1 open --project . --config baseUrl=http://host.docker.internal:80 --browser chrome
```

**Attention**: The command syntax might be different on different operating
systems
