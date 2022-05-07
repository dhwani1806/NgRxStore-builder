export const reducerStructure = (modelName: string) => {
  return (
    `import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { ${modelName} } from '../models/${modelName.toLowerCase()}.model';
import { ${modelName}State } from '../states/${modelName.toLowerCase()}.state'
import * as ${modelName}Actions from '../actions/${modelName.toLowerCase()}.action';

export const ${modelName.toLowerCase()}Adapter: EntityAdapter<${modelName}> = createEntityAdapter<${modelName}>();

export const default${modelName}: ${modelName}State = {
    ids: [],
    entities:{},
    selected${modelName}Id: "",
    creating: false,
    created: false,
    loading: false,
    loaded: false,
    updating: false,
    updated: false,
    deleting: false,
    deleted: false,
    error: ""
};

export const initialState = ${modelName.toLowerCase()}Adapter.getInitialState(default${modelName})


export function ${modelName}Reducer(state: ${modelName}State = initialState, action: ${modelName}Actions.${modelName}Actions): ${modelName}State {
    switch (action.type) {
        case ${modelName}Actions.LOAD_${modelName.toUpperCase()}S: {
            return {
                ...state,
                loading: true,
                loaded: false
            }
        }
        case ${modelName}Actions.LOAD_${modelName.toUpperCase()}S_SUCCESS: {
            return ${modelName.toLowerCase()}Adapter.setAll(action.payload, {
                ...state,
                loading: false,
                loaded: true
            })
        }
            
        case ${modelName}Actions.LOAD_${modelName.toUpperCase()}S_FAIL: {
            return {
                ...state,
                error: action.payload,
                loading: false,
                loaded: false
            }
        }

        case ${modelName}Actions.LOAD_${modelName.toUpperCase()}: {
            return {
                ...state,
                loading: true,
                loaded: false
            }
        }
            
        case ${modelName}Actions.LOAD_${modelName.toUpperCase()}_SUCCESS: {
            return ${modelName.toLowerCase()}Adapter.addOne(action.payload, {
                ...state,
                loaded: true,
                loading: false,
                selected${modelName}Id: action.payload.id
            })
        }
            
        case ${modelName}Actions.LOAD_${modelName.toUpperCase()}_FAIL: {
            return {
                ...state,
                error: action.payload,
                loading: false,
                loaded: false
            }
        }

        case ${modelName}Actions.CREATE_${modelName.toUpperCase()}: {
            return {
                ...state,
                creating: true,
                created: false
            }
        }
        case ${modelName}Actions.CREATE_${modelName.toUpperCase()}_SUCCESS: {
            return ${modelName.toLowerCase()}Adapter.addOne(action.payload, {
                ...state,
                selected${modelName}Id: action.payload.id,
                creating: false,
                created: true
            });
        }
            
        case ${modelName}Actions.CREATE_${modelName.toUpperCase()}_FAIL: {
            return {
                ...state,
                creating: false,
                created: false,
                error: action.payload
            }
        }

        case ${modelName}Actions.UPDATE_${modelName.toUpperCase()}: {
            return {
                ...state,
                updating: true,
                updated: false
            }
        }
        
        case ${modelName}Actions.UPDATE_${modelName.toUpperCase()}_SUCCESS: {
            return ${modelName.toLowerCase()}Adapter.updateOne(action.payload, {
                ...state,
                updating: false,
                updated: true
            });
        }
            
        case ${modelName}Actions.UPDATE_${modelName.toUpperCase()}_FAIL: {
            return {
                ...state,
                updating: false,
                updated: false,
                error: action.payload
            }
        }

        case ${modelName}Actions.DELETE_${modelName.toUpperCase()}: {
            return {
                ...state,
                deleting: true,
                deleted: false
            }
        }
            
        case ${modelName}Actions.DELETE_${modelName.toUpperCase()}_SUCCESS: {
            return ${modelName.toLowerCase()}Adapter.removeOne(action.payload, {
                ...state,
                deleting: false,
                deleted: true
            });
        }
            
        case ${modelName}Actions.DELETE_${modelName.toUpperCase()}_FAIL: {
            return {
                ...state,
                deleting: false,
                deleted: false,
                error: action.payload
            }
        }

        default:
            return state;
    }

}`
  );
};
