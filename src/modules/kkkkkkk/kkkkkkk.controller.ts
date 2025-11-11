import { Elysia } from "elysia";
import { KkkkkkkService } from "./kkkkkkk.service";
import { KkkkkkkModel } from "./kkkkkkk.model";

export const kkkkkkk = new Elysia({ prefix: "/kkkkkkks" })
  .get("/", async () => {
    return KkkkkkkService.findAll();
  })
  .get("/:id", async ({ params }) => {
    return KkkkkkkService.findOne(params.id);
  },{
    params: KkkkkkkModel.KkkkkkkParams
  })
  .post("/", async ({ body }) => {}, {
    body: KkkkkkkModel.KkkkkkkBody,
  })

