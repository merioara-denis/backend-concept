import express from "express";
import { Module } from "@src/module-search";
import { Repository } from "./repository";

export class Countries extends Module.Controller {
  public constructor() {
    super({
      route: express.Router(),
      repository: new Repository(),
    });
  }
}
