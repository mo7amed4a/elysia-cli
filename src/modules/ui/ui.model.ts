import { t } from 'elysia'
  
export namespace UiModel {
  export const UiBody = t.Object({
    name: t.String(),
  });

  // Define it as TypeScript type
  export type UiBodyType = typeof UiBody.static;

  export const UiParams = t.Object({
    id: t.String(),
  });
}
