import { promises } from "fs";

/**
 *
 * @param filePath is required to read file from
 * @returns Reads file from  path and returns JSON
 */
export async function readFiles<T>(filePath: string) {
  const data = await promises.readFile(filePath, "utf8");
  return JSON.parse(data) as T;
}
