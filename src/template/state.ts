// Ngrx State Generation
export const stateStructure = (modelName: string) => {
  return (
    `import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { ${modelName} } from "../models/${modelName.toLowerCase()}.model";

export interface ${modelName}State extends EntityState<${modelName}> {
    selected${modelName}Id: string | number;
    ids: Array<string> | Array<number>;
    entities: any;
    loading: boolean;
    loaded: boolean;
    creating: boolean;
    created: boolean;
    updating: boolean;
    updated: boolean;
    deleting: boolean;
    deleted: boolean;
    error: string;
}`
  );
};
