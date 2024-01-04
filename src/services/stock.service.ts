import { Stock, StockModel } from "../models/stock";
import { Transaction } from "../models/transaction";

import { readFiles } from "../utils/fs.utils";

const STOCK_FILE_PATH = "./data/stock.json";
const TRANSACTION_FILE_PATH = "./data/transactions.json";

/**
 * 
 * @param stockString is the string against which stock level will be returned
 * @returns Stock type Object having current levels of provided stock
 */
export async function getCurrentStockValue(
  stockString: string,
): Promise<Stock> {
    /**
     * Next two lines read JSON files from the path provided at top 
     */
  const stockData: Stock[] = await readFiles<Stock[]>(STOCK_FILE_PATH);
  const transactionData: Transaction[] = await readFiles<Transaction[]>(
    TRANSACTION_FILE_PATH,
  );
  // stockOut is a number value of stock value avaialbe in transactions file
  const stockOut: number =
    transactionData
      .filter(({ sku }: { sku: string }) => sku === stockString)
      .reduce(
        (sum: number = 0, record: Transaction) =>
          sum + (record.type === "order" ? record.qty : -record.qty),
        0,
      ) || 0;

  // intialStock is a number value of stock value avaialbe in stock file
  const intialStock: number =
    stockData.find((item: Stock) => item.sku === stockString)?.stock || 0;

  //To throw an error where the SKU does not exist in the `transactions.json` and `stock.json`
  if (!intialStock && !stockOut) {
    throw { message: `SKU: ${stockString} does not exist` };
  }

  const stock: number = intialStock - stockOut;

  // returing stock object with values
  return new StockModel({ sku: stockString, stock });
}
