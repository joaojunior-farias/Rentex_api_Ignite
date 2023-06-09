import { Request, Response } from "express"
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";


class ListCategoriesController {
    constructor(private listCategoriesUseCase: ListCategoriesUseCase) {

    }

    handle(req: Request, res: Response): Response {
        const listCategories = this.listCategoriesUseCase.execute();

        return res.status(200).json(listCategories);
    }

}

export { ListCategoriesController }