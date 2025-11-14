import { Elysia } from "elysia";
import { HamoService } from "./hamo.service";
import { HamoModel } from "./hamo.model";

export const hamo = new Elysia({ prefix: "/hamos" })
  .get("/", async () => {
    return HamoService.findAll();
  })
  .get("/:id", async ({ params }) => {
    return HamoService.findOne(params.id);
  },{
    params: HamoModel.HamoParams
  })
  .post("/", async ({ body }) => {}, {
    body: HamoModel.HamoBody,
  })

