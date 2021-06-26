import { Request, Response } from "express";
import { TagCreateService } from "../services/TagCreateService";

class TagCreateController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const createTagService = new TagCreateService();
    const tag = await createTagService.execute(name);

    return response.status(201).json(tag);
  }
}

export { TagCreateController };
