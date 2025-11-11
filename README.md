# elysiajs/cli

`elysiajs/cli` is a **CLI Tool** for automatically generating modules in ElysiaJS projects. It allows you to create a complete module with all the essential files (Controller, Service, Model) in one command.

---

## Project Structure After Creating a Module

When creating a new module, the files will be generated as follows:

```
src/
  modules/
    <moduleName>/
      <moduleName>.controller.ts   // Elysia controller
      <moduleName>.service.ts      // Module's service
      <moduleName>.model.ts        // Module's model
```

Example for a module named `auth`:

```
src/
  modules/
    auth/
      auth.controller.ts
      auth.service.ts
      auth.model.ts
```

---

## Features

* Quickly create modules without manually writing files.
* Automatically updates `index.ts` with import statements and `app.use(...)`.
* Fully compatible with Bun and ElysiaJS.
* Works from any location because all paths use `process.cwd()`.

---

## Usage

### Creating a New Module

Open your terminal at the project root and run:

```bash
npx elysiacli 
```


This will generate the `auth` module with the three main files inside `src/modules/auth/` and automatically update `src/index.ts`.

### Example in Code After Module Creation

```ts
import { auth } from "./modules/auth/auth.controller";

app.use(auth);
```

---

## Notes

* If the module already exists, a warning will appear and files will not be overwritten.
* The CLI works from any location because all paths rely on `process.cwd()`.

---

## Requirements

* Node.js or Bun (fully compatible with Bun).
* ElysiaJS project.
