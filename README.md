Transactions - Stocks => Available Stocks.
=============================


## Description
The objective is to create a function which is able to return the current stock levels for a given SKU by combining the data in these two files.

## Getting Started

### Prerequisites
NodeJs

### Installation
Clone the repository and install dependencies with the following commands:

```sh
git clone https://github.com/toseefrehan92/stock-inventory
cd stock-inventory
npm install

```


## Running the Project

Execute the project with:

```
npm start
```
Server gets Started, and the server listening on `http://localhost:8000`. (you can add .env to pass custom PORT)

## Usage

### Checking Stock Levels
With the server running, you can check the stock level of an SKU by navigating to:

```
 http://localhost:8000//api/v1/stocks/{SKU}
```
`{SKU}` will be actual SKU identifier you want to see stock of, e.g., `MQO013465/10/41`.

## Scripts

Test and Dev Scripts

`npm run start` - Starts the server.

`npm run dev` - Run Typescript server.

`npm run build` - Compiles TypeScript code to ES2016.

`npm run test` - Executes the test suites.

`npm run format` - Formats all files according to linting configurations.

`npm run lint` - Check Linting error if any.