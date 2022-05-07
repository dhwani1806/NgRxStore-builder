export const selectorStructure = (modelName: string) => {
  return (
    `import { createSelector, createFeatureSelector } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter} from "@ngrx/entity";
import { ${modelName}State } from '../states/${modelName}.state';
import { ${modelName} } from '../models/${modelName.toLowerCase()}.model';

const ${modelName.toLowerCase()}Adapter: EntityAdapter<${modelName}> = createEntityAdapter<${modelName}>();

const get${modelName}sLoaded = (state: ${modelName}State) => state.loaded;
const get${modelName}sLoading = (state: ${modelName}State) => state.loading;
const get${modelName}sCreated = (state: ${modelName}State) => state.created;
const get${modelName}sCreating = (state: ${modelName}State) => state.creating;
const get${modelName}sError = (state: ${modelName}State) => state.error; 
const get${modelName}sUpdated = (state: ${modelName}State) => state.updated;
const get${modelName}sUpdating = (state: ${modelName}State) => state.updating;
const get${modelName}sDeleted = (state: ${modelName}State) => state.deleted;
const get${modelName}sDeleting = (state: ${modelName}State) => state.deleting;

export const select${modelName}sState = createFeatureSelector<${modelName}State>('${modelName}');

export const select${modelName}s = createSelector(select${modelName}sState, ${modelName.toLowerCase()}Adapter.getSelectors().selectAll);

export const selectCurrent${modelName} = createSelector(select${modelName}sState, (${modelName.toLowerCase()}State) => {
    if(!!${modelName.toLowerCase()}State) {
        if(${modelName.toLowerCase()}State.selected${modelName}Id) {
            return ${modelName.toLowerCase()}State.entities[${modelName.toLowerCase()}State.selected${modelName}Id];
        }
    }
    else {
        return null;
    }
});

export const select${modelName}Loaded = createSelector(select${modelName}sState, get${modelName}sLoaded);

export const select${modelName}Loading = createSelector(select${modelName}sState, get${modelName}sLoading);

export const select${modelName}Created = createSelector(select${modelName}sState, get${modelName}sCreated);

export const select${modelName}Creating = createSelector(select${modelName}sState, get${modelName}sCreating);

export const select${modelName}Updated = createSelector(select${modelName}sState, get${modelName}sUpdated);

export const select${modelName}Updating = createSelector(select${modelName}sState, get${modelName}sUpdating);

export const select${modelName}Deleted = createSelector(select${modelName}sState, get${modelName}sDeleted);

export const select${modelName}Deleting = createSelector(select${modelName}sState, get${modelName}sDeleting);

export const select${modelName}Error = createSelector(select${modelName}sState, get${modelName}sError);
`

  );
};
