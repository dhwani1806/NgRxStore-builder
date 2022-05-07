export const effectStructure = (modelName: string) => {
 return `import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { map, mergeMap, catchError, merge } from "rxjs/operators";
import { ${modelName} } from "../models/${modelName.toLowerCase()}.model";
import * as ${modelName}Actions from "../actions/${modelName.toLowerCase()}.action";
import { ${modelName}Service } from "../services/${modelName.toLowerCase()}.service"

@Injectable()
export class ${modelName}Effect {
    constructor(private actions$: Actions, private ${modelName.toLowerCase()}Service: ${modelName}Service) { }

    
    load${modelName}s$ = createEffect( () => this.actions$.pipe(
        ofType<${modelName}Actions.Load${modelName}s>(
            ${modelName}Actions.LOAD_${modelName.toUpperCase()}S
        ),
        mergeMap((action: ${modelName}Actions.Load${modelName}s) =>
            this.${modelName.toLowerCase()}Service.get${modelName}s().pipe(
                map(
                    (${modelName.toLowerCase()}s: ${modelName}[]) =>
                        new ${modelName}Actions.Load${modelName}sSuccess(${modelName.toLowerCase()}s)
                ),
                catchError(err => of(new ${modelName}Actions.Load${modelName}sFail(err.error.errors)))
            ))
    ));

     
    load${modelName}$ = createEffect( () => this.actions$.pipe(
        ofType<${modelName}Actions.Load${modelName}>(
            ${modelName}Actions.LOAD_${modelName.toUpperCase()}
        ),
        mergeMap((action: ${modelName}Actions.Load${modelName}) => 
            this.${modelName.toLowerCase()}Service.get${modelName}(action.payload).pipe(
                map(
                    (${modelName.toLowerCase()}: ${modelName}) => 
                        new ${modelName}Actions.Load${modelName}Success(${modelName.toLowerCase()})
                ),
                catchError(err => of(new ${modelName}Actions.Load${modelName}Fail(err.error.errors)))
            )
        )
    ));
    
    
    create${modelName}$ = createEffect( () => this.actions$.pipe(
        ofType<${modelName}Actions.Create${modelName}>(
            ${modelName}Actions.CREATE_${modelName.toUpperCase()}
        ),
        map((action: ${modelName}Actions.Create${modelName}) => action.payload),
        mergeMap((${modelName.toLowerCase()}: ${modelName})=> 
            this.${modelName.toLowerCase()}Service.create${modelName}(${modelName.toLowerCase()}).pipe(
                map(
                    (new${modelName}: ${modelName}) => 
                        new ${modelName}Actions.Create${modelName}Success(new${modelName})
                ),
                catchError(err => of(new ${modelName}Actions.Create${modelName}Fail(err.error.errors)))
            )
        )
    ));

    
    update${modelName}$ = createEffect( () => this.actions$.pipe(
        ofType<${modelName}Actions.Update${modelName}>(
            ${modelName}Actions.UPDATE_${modelName.toUpperCase()}
        ),
        map((action: ${modelName}Actions.Update${modelName}) => action.payload),
        mergeMap((${modelName.toLowerCase()}: ${modelName}) => 
            this.${modelName.toLowerCase()}Service.update${modelName}(${modelName.toLowerCase()}).pipe(
                map(
                    () => 
                        new ${modelName}Actions.Update${modelName}Success({
                            id: ${modelName.toLowerCase()}.id,
                            changes: ${modelName.toLowerCase()}
                        })
                ),
                catchError(err => of(new ${modelName}Actions.Update${modelName}Fail(err.error.errors)))
            )
        )
    ));

    
    delete${modelName}$ = createEffect( () => this.actions$.pipe(
        ofType<${modelName}Actions.Delete${modelName}>(
            ${modelName}Actions.DELETE_${modelName.toUpperCase()}
        ),
        map((action: ${modelName}Actions.Delete${modelName}) => action.payload),
        mergeMap((id: string) => 
            this.${modelName.toLowerCase()}Service.delete${modelName}(id).pipe(
                map(() => new ${modelName}Actions.Delete${modelName}Success(id)),
                catchError(err => of(new ${modelName}Actions.Delete${modelName}Fail(err.error.errors)))
            )
        )
    ));
}`;
};
