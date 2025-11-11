import { Elysia } from "elysia";
import { UiService } from "./ui.service";
import { UiModel } from "./ui.model";

export const ui = new Elysia({ prefix: "/uis" })
  .get("/", async () => {
    return UiService.findAll();
  })
  .get("/:id", async ({ params }) => {
    return UiService.findOne(params.id);
  },{
    params: UiModel.UiParams
  })
  .post("/", async ({ body }) => {}, {
    body: UiModel.UiBody,
  })

