Transactions - Stocks => Available Stocks.
=============================


## Description
The objective is to create a function which is able to return the current stock levels for a given SKU by combining the data in these two files.

### Modularity

The project likely has a modular file structure, organizing code based on features or functionalities. Each module may contain its own set of controllers, services, models, etc.


## Tech Stack:

### Node.js:
Used as the runtime environment.
### Express.js: 
Used as the web framework for handling HTTP requests.
### TypeScript: 
Providing static typing and improved development experience.
### Jest: 
Used for writing and running tests, ensuring code reliability.
### Husky: 
Configured webhooks to run pre-commit hooks for linting and testing, preventing bad commits.


## Static Code Analysis:

### Linting: 
Follows best practices for static code analysis, which includes linting.

## Data Handling:

### JSON Files: 
The project reads and processes data from JSON files, likely containing transaction and stock information.

## Testing:

### Jest Tests: 

This includes end-to-end tests using Jest to ensure the correctness of the codebase.

### Continuous Integration:
## Husky Webhooks: 
Integrated with Git hooks, running linting and testing before allowing commits. This ensures that only clean and tested code is pushed.


### Instructions to setup:-

Clone the repository and install dependencies with the following commands:

```sh
git clone https://github.com/toseefrehan92/stock-inventory
cd stock-inventory
npm install
npm start

```

Server gets Started, and the server listening on `http://localhost:8000`. (you can add .env to pass custom PORT)

## Checking Stock Levels
With the server running, you can check the stock level of an SKU by navigating to:

```
 http://localhost:8000//api/v1/stocks/{sku}
```
`{sku}` will be actual SKU identifier you want to see stock of, e.g., `RIR591697/68/41`, `OMH974988/04/66`, `MQO013465/68/34`.

## Scripts Available

Test and Dev Scripts

`npm run start` - Starts the server.

`npm run dev` - Run Typescript server.

`npm run build` - Compiles TypeScript code to ES2016.

`npm run test` - Executes the test suites.

`npm run format` - Formats all files according to linting configurations.

`npm run lint` - Check Linting error if any.