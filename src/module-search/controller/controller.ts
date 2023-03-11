import { Models } from "../models";

export class Controller extends Models.IController {
  public constructor(services: Models.Services) {
    super(services);
  }

  public find: Models.IController["find"] = async (req, res) => {
    const text = req.query.text ?? "";

    const result = await this.repository.find(text);

    return res.json(result);
  };

  /* #region Этот код необходим для данной среды разработки */
  public build = () => {
    this.route.get("/find", this.find);

    return this.route;
  };
  /* #endregion */
}
