import { t } from 'elysia'
  
export namespace KdmModel {
  export const KdmBody = t.Object({
    name: t.String(),
  });

  // Define it as TypeScript type
  export type KdmBodyType = typeof KdmBody.static;

  export const KdmParams = t.Object({
    id: t.String(),
  });
}
