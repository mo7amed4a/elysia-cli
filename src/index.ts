import { hamo } from "./modules/hamo/hamo.controller";
import { kkkkkkk } from "./modules/kkkkkkk/kkkkkkk.controller";
import { ui } from "./modules/ui/ui.controller";
import { kdm } from "./modules/kdm/kdm.controller";
import Elysia from "elysia";

console.log("kfmkfm");
const app = new Elysia().use(kdm).use(ui).use(kkkkkkk).use(hamo).listen(95995);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
