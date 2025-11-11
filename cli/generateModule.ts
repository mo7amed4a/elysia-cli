import fs from "fs/promises";
import path from "path";
import { getControllerTemplate, getServiceTemplate, getModelTemplate } from "./helpers/templates.js";
import { updateIndex } from "./helpers/updateIndex.js";

export async function generateModule(moduleName: string) {
  if (!moduleName) {
    console.error("❌ Please provide a module name");
    process.exit(1);
  }

  const moduleDir = path.join(process.cwd(), "src", "modules", moduleName);

  try {
    await fs.access(moduleDir);
    console.error(`⚠️ Module '${moduleName}' already exists`);
    process.exit(1);
  } catch {
    // not found folder
  }

  await fs.mkdir(moduleDir, { recursive: true });

  await fs.writeFile(
    path.join(moduleDir, `${moduleName}.controller.ts`),
    getControllerTemplate(moduleName)
  );

  await fs.writeFile(
    path.join(moduleDir, `${moduleName}.service.ts`),
    getServiceTemplate(moduleName)
  );

  await fs.writeFile(
    path.join(moduleDir, `${moduleName}.model.ts`),
    getModelTemplate(moduleName)
  );

  await updateIndex(moduleName);

  console.log(`✅ Module '${moduleName}' has been created successfully!`);
}
