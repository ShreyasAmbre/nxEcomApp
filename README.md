# 🅰️ Angular Nx E-commerce Project Notes

## Project Requirement 
- Project should get Scalable, Maintainable, Reusable
- Project should work on latest versions of technology
- Project code base should follow industry standards

## Project Objective 
- To learn & enjoy developing things that makes u grow and feel pride.

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
| `npx nx run angularNxEcom:serve:development` | Serve the Angular app in by default development mode |
| `npx nx run angularNxEcom:serve` | Serve the Angular app in development mode |
| `npx nx run angularNxEcom:lint` | Run lint checks |
| `npm install bootstrap@5.3.3` | Install Bootstrap |
| `npm install @ngrx/store@19.0.0 @ngrx/effects@19.0.0 @ngrx/store-devtools@19.0.0` | Install NgRx Store, effects, entity & devtool |
| `npx nx graph` | This command help to see architecture |

---

## 📘 Step 1 — Theory and Initial Project Setup

**Versions Used**
- Nx: `v20`
- Angular: `v19.2.0`
- Node.js: `v20.11.1`
- Bootstrap: `v5.3.3`

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

## 📗 Step 2 — Shared Library and Reusable Components

**Work Completed**
- Created a **Shared Library** (`shared/`)  
- Developed a **`main-nav`** component within the shared library  
- Integrated **`shared-main-nav`** component inside the **root app component**

---
## 📗 Step 3 — Installation of NgRx and Creating Global core lib
- Installation of NgRx Store, effect, entity and devto0l v18.0.2
- Creating core library to hold global services, interceptors, and the root NgRx store.
- Integrated ngRx store, actions, reducer and effect in app.config.ts
- Create Actions and Reducer to update the store

## 📗 Step 4 — Creating Architecture Foundation of Application 
- Created constants/endpoints file inside core
- Integration interceptor which concat baseUrl with endpoint in core
- Created appService/serivces for global level logic
- Created NgRx state & store for core and registered in app.config.ts
- Added Environment folder inside angularNxEcom/src and interface of environemnt in shared/models
- Created feature-shell library as an entry point for all the feature & added main-layout component

## 📗 Step 5 — Integration of fakeStoreApi's
- Added baseUrl in environment
- created product service and integrated category API and triggered that from component


## 📗 Step 6 — Integration of NgRx in feature shared-store
- This feature will be having a store which will be shared across all the feature 
- This store will only contain those data which is required to share other API calls and data will be isolted inside the feature only 
- Integrated getCategories and getAllProducts API from fakestoreapi.com in our hsared-store

## 📗 Step 7 — Added shared style for  and integrated inside apps
- Added base.scss, variables.scss, utitlity.scss
- Added product-card shared component so that we can use in Home & Product feature library
- Some configuration also changes

## 📗 Step 8 — Category Page 
- This should include filters and products listing based on category only 
- Create action, effects, reducer, effects to get product based on categoryName

## Step 8 - Login Feature UI & API integration and store data in gloabal store
- U should give a try to use withComponentInputBinding() which will help to show the user name, category name when passing data in route

## Step 9 - Product Detail Page 

## Step 10 - Cart Feature


## Future Development 
- Need to add resolver in home page 
- Need to add skelton loading in all pages
- create artifact pipes to load the images


