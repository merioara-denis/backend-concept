import { Request, Response, Router } from "express";

// **** Repository **** //

export type Country = {
  name: string;
  region: string;
};

export interface IRepository {
  find: (text: string) => Promise<Country[]>;
}

// **** Controller **** //

export type Services = {
  route: Router;
  repository: IRepository;
};

export abstract class IController {
  public route: Router;
  public repository: IRepository;

  public constructor({ route, repository }: Services) {
    this.route = route;
    this.repository = repository;
  }

  public abstract find: (
    req: Request<
      unknown,
      unknown,
      unknown,
      {
        text: string;
      }
    >,
    res: Response
  ) => Promise<Response<any, Record<string, any>>>;

  public abstract build: () => Router;
}
