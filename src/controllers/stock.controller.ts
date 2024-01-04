import { Request, Response } from "express";
import { getCurrentStockValue } from "../services/stock.service";

/**
 *
 * @param req req params *sku* must have value of stock needed to find current stock Level
 * @param res res will return stock object of Type<Stock> or error in case it doesn't find any
 */
export async function getCurrentStocks(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const responseData = await getCurrentStockValue(req.params.sku);
    res.status(200).send(responseData);
  } catch (error: unknown) {
    // Added this error encapsulation and avoid leakage as well
    if (error instanceof Error) {
      res
        .status(500)
        .send({ message: "Something went wrong. Please Contact Admin." });
    } else {
      res.status(500).send(error);
    }
  }
}
