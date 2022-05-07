export const actionStructure = (modelName: string) => {
  return (
    `import { Action } from '@ngrx/store';
import { ${modelName} } from '../models/${modelName.toLowerCase()}.model';
import { Update } from '@ngrx/entity';

export const LOAD_${modelName.toUpperCase()}S = 'LOAD_${modelName.toUpperCase()}S';
export const LOAD_${modelName.toUpperCase()}S_SUCCESS = 'LOAD_${modelName.toUpperCase()}S_SUCCESS';
export const LOAD_${modelName.toUpperCase()}S_FAIL = 'LOAD_${modelName.toUpperCase()}S_FAIL';
export const LOAD_${modelName.toUpperCase()} = 'LOAD_${modelName.toUpperCase()}';
export const LOAD_${modelName.toUpperCase()}_SUCCESS = 'LOAD_${modelName.toUpperCase()}_SUCCESS';
export const LOAD_${modelName.toUpperCase()}_FAIL = 'LOAD_${modelName.toUpperCase()}_FAIL';
export const CREATE_${modelName.toUpperCase()} = 'CREATE_${modelName.toUpperCase()}';
export const CREATE_${modelName.toUpperCase()}_SUCCESS = 'CREATE_${modelName.toUpperCase()}_SUCCESS';
export const CREATE_${modelName.toUpperCase()}_FAIL = 'CREATE_${modelName.toUpperCase()}_FAIL';
export const UPDATE_${modelName.toUpperCase()} = 'UPDATE_${modelName.toUpperCase()}';
export const UPDATE_${modelName.toUpperCase()}_SUCCESS = 'UPDATE_${modelName.toUpperCase()}_SUCCESS';
export const UPDATE_${modelName.toUpperCase()}_FAIL = 'UPDATE_${modelName.toUpperCase()}_FAIL';
export const DELETE_${modelName.toUpperCase()} = 'DELETE_${modelName.toUpperCase()}';
export const DELETE_${modelName.toUpperCase()}_SUCCESS = 'DELETE_${modelName.toUpperCase()}_SUCCESS';
export const DELETE_${modelName.toUpperCase()}_FAIL = 'DELETE_${modelName.toUpperCase()}_FAIL';

export class Load${modelName}s implements Action {
    readonly type = LOAD_${modelName.toUpperCase()}S;
}

export class Load${modelName}sSuccess implements Action {
    readonly type = LOAD_${modelName.toUpperCase()}S_SUCCESS;
    constructor(public payload: ${modelName}[]) {}
}

export class Load${modelName}sFail implements Action {
    readonly type = LOAD_${modelName.toUpperCase()}S_FAIL;
    constructor(public payload: string) {}
}

export class Load${modelName} implements Action {
    readonly type = LOAD_${modelName.toUpperCase()};
    constructor(public payload: string) {}
}

export class Load${modelName}Success implements Action {
    readonly type = LOAD_${modelName.toUpperCase()}_SUCCESS;
    constructor(public payload: ${modelName}) {}
}

export class Load${modelName}Fail implements Action {
    readonly type = LOAD_${modelName.toUpperCase()}_FAIL;
    constructor(public payload: string) {}
}

export class Create${modelName} implements Action {
    readonly type = CREATE_${modelName.toUpperCase()};
    constructor(public payload: ${modelName}) {}
}

export class Create${modelName}Success implements Action {
    readonly type = CREATE_${modelName.toUpperCase()}_SUCCESS;
    constructor(public payload: ${modelName}) {}
}

export class Create${modelName}Fail implements Action {
    readonly type = CREATE_${modelName.toUpperCase()}_FAIL;
    constructor(public payload: string) {}
}

export class Update${modelName} implements Action {
    readonly type = UPDATE_${modelName.toUpperCase()};
    constructor(public payload: ${modelName}) {}
}

export class Update${modelName}Success implements Action {
    readonly type = UPDATE_${modelName.toUpperCase()}_SUCCESS;
    constructor(public payload: Update<${modelName}>) {}
}

export class Update${modelName}Fail implements Action {
    readonly type = UPDATE_${modelName.toUpperCase()}_FAIL;
    constructor(public payload: string) {}
}

export class Delete${modelName} implements Action {
    readonly type = DELETE_${modelName.toUpperCase()};
    constructor(public payload: string) {}
}

export class Delete${modelName}Success implements Action {
    readonly type = DELETE_${modelName.toUpperCase()}_SUCCESS;
    constructor(public payload: string) {}
}

export class Delete${modelName}Fail implements Action {
    readonly type = DELETE_${modelName.toUpperCase()}_FAIL;
    constructor(public payload: string) {}
}

export type ${modelName}Actions = Load${modelName} | Load${modelName}Success| Load${modelName}Fail |
                             Load${modelName}s | Load${modelName}sSuccess | Load${modelName}sFail |
                             Create${modelName} | Create${modelName}Success | Create${modelName}Fail | 
                             Update${modelName} | Update${modelName}Success | Update${modelName}Fail |
                             Delete${modelName} | Delete${modelName}Success | Delete${modelName}Fail;`
  );
};
