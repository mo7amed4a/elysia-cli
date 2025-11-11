import { getSingularAndPlural } from "./capitalize";

export function getControllerTemplate(name: string): string {
  const { capitalizedSingular, plural, singular } = getSingularAndPlural(name);

  return `import { Elysia } from "elysia";
import { ${capitalizedSingular}Service } from "./${name}.service";
import { ${capitalizedSingular}Model } from "./${name}.model";

export const ${singular} = new Elysia({ prefix: "/${plural}" })
  .get("/", async () => {
    return ${capitalizedSingular}Service.findAll();
  })
  .get("/:id", async ({ params }) => {
    return ${capitalizedSingular}Service.findOne(params.id);
  },{
    params: ${capitalizedSingular}Model.${capitalizedSingular}Params
  })
  .post("/", async ({ body }) => {}, {
    body: ${capitalizedSingular}Model.${capitalizedSingular}Body,
  })

`;
}

export function getServiceTemplate(name: string): string {
  const { capitalizedSingular } = getSingularAndPlural(name);
  return `export abstract class ${capitalizedSingular}Service {
  static async findAll() {
    // TODO: Add logic here
    return [];
  }

  static async findOne(id: string) {
    // TODO: Add logic here
    return { id };
  }
}
`;
}

export function getModelTemplate(name: string): string {
  const { capitalizedSingular } = getSingularAndPlural(name);
  return `import { t } from 'elysia'
  
export namespace ${capitalizedSingular}Model {
  export const ${capitalizedSingular}Body = t.Object({
    name: t.String(),
  });

  // Define it as TypeScript type
  export type ${capitalizedSingular}BodyType = typeof ${capitalizedSingular}Body.static;

  export const ${capitalizedSingular}Params = t.Object({
    id: t.String(),
  });
}
`;
}
