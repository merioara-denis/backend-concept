/**
 * Setup express server.
 */

import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import express from "express";

import "express-async-errors";

import EnvVars from "@src/constants/EnvVars";
import { NodeEnvs } from "@src/constants/misc";
import { main } from "@src/main";

// **** Variables **** //

const app = express();

// **** Setup **** //

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(EnvVars.CookieProps.Secret));

// Show routes called in console during development
if (EnvVars.NodeEnv === NodeEnvs.Dev) {
  app.use(morgan("dev"));
}

// Security
if (EnvVars.NodeEnv === NodeEnvs.Production) {
  app.use(helmet());
} else {
  app.use(helmet({ contentSecurityPolicy: false }));
}

main(app);

// **** Export default **** //

export default app;
