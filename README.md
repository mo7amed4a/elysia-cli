# elysia-cli

`elysia-cli` is a **CLI tool** designed to simplify and speed up module creation in **ElysiaJS** projects.  
It automatically generates a **Controller**, **Service**, and **Model** inside one folder, and updates your `index.ts` file automatically — allowing you to focus on writing logic instead of setting up files.

---

## 🚀 Why Use elysia-cli?

* Speeds up module development.
* No need to manually create files.
* Automatically updates `index.ts` with imports and `app.use(...)`.
* Fully compatible with **Node.js** and **Bun**.
* Works from anywhere in the project using `process.cwd()`.

---

## ⚡ Usage

### 1. Using the CLI directly

Open your terminal at the project root and run:

```bash
npx elysiacli module <module-name>
```

Example:

```bash
npx elysiacli module auth
```

> This will create the `auth` module with the following files:

```
src/
  modules/
    auth/
      auth.controller.ts
      auth.service.ts
      auth.model.ts
```

And automatically update `src/index.ts`.

---

### 2. Interactive Mode

You can also run:

```bash
npx elysiacli
```

You will be prompted with options:

* **Generate new module** – to create a new module.
* **Exit** – to quit the CLI.

---

### 3. Using the Generated Module in Your Code

After creating the module, you can import and use it like this:

```ts
import { auth } from "./modules/auth/auth.controller";

app.use(auth);
```

---

## ⚙️ Key Features

* Prevents overwriting if a module with the same name already exists.
* All paths are based on `process.cwd()`, so it works from any location.
* Fully compatible with **Bun** and **Node.js**.

---

## 📂 Project Structure After Module Creation

```
src/
  modules/
    <moduleName>/
      <moduleName>.controller.ts
      <moduleName>.service.ts
      <moduleName>.model.ts
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

## 🔧 Requirements

* Node.js or Bun.
* An existing ElysiaJS project.
