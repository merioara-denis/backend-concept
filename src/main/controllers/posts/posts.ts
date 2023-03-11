import express, { Request, Response } from "express";
import { Module } from "@src/module-search";
import { Repository } from "./repository";

// **** Types **** //

type Settings = {
  timezone: string;
  language: string;
};

type Key = keyof Settings;

interface IPosts extends Module.Models.IController {
  settings: (
    req: Request,
    res: Response
  ) => Response<any, Record<Key, Settings[Key]>>;
}

// **** Controller **** //

export class Posts extends Module.Controller implements IPosts {
  public constructor() {
    super({
      route: express.Router(),
      repository: new Repository(),
    });

    this.route.get("/settings", this.settings);
  }

  public settings: IPosts["settings"] = (req, res) => {
    return res.json({
      timezone: "+03:00",
      language: "ru_ru",
    });
  };
}
