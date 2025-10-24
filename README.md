# 🅰️ Angular Nx E-commerce Project Notes

## 🧩 Required Setup

> Ensure the following tools are installed before proceeding:

- **Node.js** (LTS Version)  
- **Angular CLI** (LTS Version)  
- **Editor:** [Visual Studio Code](https://code.visualstudio.com/)

---

## ⚙️ Nx Commands

| Command | Description |
|----------|--------------|
| `npx create-nx-workspace@latest` | Create a new Nx workspace |
| `npx nx run angularNxEcom:serve:development` | Serve the Angular app in development mode |
| `npx nx run angularNxEcom:lint` | Run lint checks |
| `npm install bootstrap@5.3.3 @popperjs/core@2.11.8` | Install Bootstrap and Popper.js |
| `npm install @ngrx/store@19.0.0 @ngrx/effects@19.0.0 @ngrx/store-devtools@19.0.0` | Install NgRx Store, effects, entity & devtool |
| `npx nx graph` | This command help to see architecture |

---

## 📘 Chapter 1 — Theory and Initial Project Setup

**Versions Used**
- Nx: `v20`
- Node.js: `v20.11.1`
- Bootstrap: `v5.3.3`
- Popper.js: `v2.11.8`

**Steps Completed**
- ✅ Created new workspace: **`angularNxEcom`**  
- ✅ Updated project prefix in `project.json` and ESLint configuration  
- ✅ Added `"buildable": true` configuration in `nx.json`  
- ✅ Created a new **`home`** library inside the `libs/` folder  
- ✅ Initialized a new GitHub repository and pushed all initial commits  

> [!NOTE]  
> Explore the `ng-ddd-plugin` for better domain-driven design integration.  

---

### 🧾 Commit Message Convention

Use the **"de facto industry standard"** (Conventional Commits) for clean and scalable version history.

#### 🧱 Example Table

| Type | Meaning | Example |
|------|----------|----------|
| **feat** | A new feature | `feat(profile): add profile picture upload` |
| **fix** | A bug fix | `fix(api): handle null response gracefully` |
| **chore** | Routine tasks or maintenance | `chore: update npm packages` |
| **refactor** | Code improvement without functional changes | `refactor(auth): simplify login flow` |
| **style** | Code style or formatting updates | `style: format files using prettier` |
| **docs** | Documentation changes | `docs(readme): update setup instructions` |
| **build** | Build changes | `build: configuraiton changes or packages added` |

---

## 📗 Chapter 2 — Shared Library and Reusable Components

**Work Completed**
- Created a **Shared Library** (`shared/`)  
- Developed a **`main-nav`** component within the shared library  
- Integrated **`shared-main-nav`** component inside the **root app component**

---
## 📗 Chapter 3 — Installation of NgRx and Creating Global core lib
- Installation of NgRx Store, effect, entity and devto0l v18.0.2
- Creating core library to hold global services, interceptors, and the root NgRx store.
- Integrated ngRx store, actions, reducer and effect in app.config.ts
- Create Actions and Reducer to update the store
- 

