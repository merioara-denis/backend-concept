import jsonfile from "jsonfile";

import { Module } from "@src/module-search";

// **** Types **** //

type IDb = Module.Models.Country[];

// **** Class **** //

export class Repository implements Module.Models.IRepository {
  protected readonly _dbFileName = "table.json";

  protected open(): Promise<IDb> {
    const request = jsonfile.readFile(
      __dirname + "\\" + this._dbFileName
    ) as Promise<IDb>;

    return request;
  }

  public find = async (text: string) => {
    if (text.length < 3) return [];

    const collection = await this.open();

    const _text = text.toLowerCase();

    const result = collection.filter((c) =>
      c.name.toLowerCase().includes(_text)
    );

    return result;
  };
}
