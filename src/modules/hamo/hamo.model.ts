import { t } from 'elysia'
  
export namespace HamoModel {
  export const HamoBody = t.Object({
    name: t.String(),
  });

  // Define it as TypeScript type
  export type HamoBodyType = typeof HamoBody.static;

  export const HamoParams = t.Object({
    id: t.String(),
  });
}
