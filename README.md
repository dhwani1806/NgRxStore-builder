
# NgRx Store Builder

This package aims to generate code for ngrx store.



## Installation

Install ngrx-store-builder with npm

```bash
npm install ngrx-store-builder --save-dev
```

## Steps to Generate NgRx store

- Go to the directory where you want to generate ngrx files
- Run the following command

```
generate-ngrx-store
```
- You need to provide Model Name and Model Properties as CLI Inputs after you run the above command

## Folder Structure Of NgRx Generated Store
```
store
| 
|___actions //actions folder
|   |   modelName.action.ts
|___effects //effects folder
|   |   modelName.effect.ts
|___models //model folder
|   |   modelName.model.ts
|___reducers //reducer folder
|   |   modelName.reducer.ts
|___services //service folder
|   |   modelName.service.ts
|___states //states folder
|   |   modelName.state.ts
|___selectors //selectors folder
|   |   modelName.selector.ts
```