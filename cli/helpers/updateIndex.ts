import fs from "fs/promises";
import path from "path";

export async function updateIndex(moduleName: string) {
  const indexPath = path.join(process.cwd(), "src", "index.ts");

  let indexContent: string;
  try {
    indexContent = await fs.readFile(indexPath, "utf8");
  } catch (err) {
    console.error("❌ not found: src/index.ts");
    process.exit(1);
  }

  const importLine = `import { ${moduleName} } from "./modules/${moduleName}/${moduleName}.controller";\n`;

  if (!indexContent.includes(importLine)) {
    indexContent = importLine + indexContent;

    if (indexContent.includes(".listen(")) {
      indexContent = indexContent.replace(
        /\.listen\(/,
        `.use(${moduleName})\n  .listen(`
      );
    } else {
      indexContent += `\napp.use(${moduleName});\n`;
    }

    await fs.writeFile(indexPath, indexContent, "utf8");
    console.log(`✅ index.ts has been updated and '${moduleName}' was added.`);
  } else {
    console.log(`⚠️ The module '${moduleName}' already exists in index.ts.`);
  }
}
