import { Elysia } from "elysia";
import { KdmService } from "./kdm.service";
import { KdmModel } from "./kdm.model";

export const kdm = new Elysia({ prefix: "/kdms" })
  .get("/", async () => {
    return KdmService.findAll();
  })
  .get("/:id", async ({ params }) => {
    return KdmService.findOne(params.id);
  },{
    params: KdmModel.KdmParams
  })
  .post("/", async ({ body }) => {}, {
    body: KdmModel.KdmBody,
  })

