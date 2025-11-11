#!/usr/bin/env node
import { Command } from "commander";
import inquirer from "inquirer";
import { generateModule } from "./generateModule.js";
import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pkgPath = join(__dirname, "../package.json"); // دا بيدل على نسخة المكتبة نفسها
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));

const program = new Command();

program
  .name("elysiacli")
  .description("🧩 CLI tool to generate Elysia.js modules easily.")
  .version(pkg.version, "-v, --version", "Show CLI version");

program
  .command("module <name>")
  .description("Create a new module (controller, service, model)")
  .action(async (name) => {
    console.log(`⚙️  Generating module '${name}'...`);
    await generateModule(name);
  });

// 🧭 Interactive mode if no args provided
if (process.argv.length <= 2) {
  console.log("🔗 GitHub Repository: \x1b[36mhttps://github.com/mo7amed4a/elysia-cli\x1b[0m\n");
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "command",
      message: "What do you want to do?",
      choices: [
        { name: "Generate new module", value: "module" },
        { name: "Exit", value: "exit" },
      ],
    },
    {
      type: "input",
      name: "moduleName",
      message: "Enter module name:",
      when: (ans) => ans.command === "module",
      validate: (val) => (val ? true : "Please enter a valid name"),
    },
  ]);

  if (answers.command === "module") {
    await generateModule(answers.moduleName);
  } else {
    console.log("👋 Bye!");
    process.exit(0);
  }
} else {
  program.parse(process.argv);
}
