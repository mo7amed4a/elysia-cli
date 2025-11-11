import { t } from 'elysia'
  
export namespace KkkkkkkModel {
  export const KkkkkkkBody = t.Object({
    name: t.String(),
  });

  // Define it as TypeScript type
  export type KkkkkkkBodyType = typeof KkkkkkkBody.static;

  export const KkkkkkkParams = t.Object({
    id: t.String(),
  });
}
