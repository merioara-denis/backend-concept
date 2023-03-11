import { Express } from "express";
import { Controllers } from "./controllers";

// **** Program **** //

export function main(app: Express) {
  app.use("/countries", new Controllers.Countries().build());

  // -------------------------------------------------------- //

  app.use("/post", new Controllers.Posts().build());
}
