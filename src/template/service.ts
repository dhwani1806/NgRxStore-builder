export const serviceStructure = (modelName: string) => {
  return (
    `import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ${modelName} } from '../models/${modelName.toLowerCase()}.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ${modelName}Service {
    token = localStorage.getItem('token');
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    }
    ${modelName.toLowerCase()}Api = environment.api + '/api/${modelName.toLowerCase()}s';
    constructor(private http: HttpClient) {}

    get${modelName}s():Observable<${modelName}[]> {
        return this.http.get<${modelName}[]>(this.${modelName.toLowerCase()}Api, this.httpOptions);
    }

    get${modelName}(id: string): Observable<${modelName}> {
        return this.http.get<${modelName}>(this.${modelName.toLowerCase()}Api+'/'+id, this.httpOptions)
    }

    create${modelName}(${modelName.toLowerCase()}: ${modelName}) {
        return this.http.post<${modelName}>(this.${modelName.toLowerCase()}Api, ${modelName.toLowerCase()}, this.httpOptions);
    }

    update${modelName}(${modelName.toLowerCase()}: ${modelName}) {
        return this.http.put(this.${modelName.toLowerCase()}Api, ${modelName.toLowerCase()}, this.httpOptions);
    }

    delete${modelName}(id: string) {
        return this.http.delete(this.${modelName.toLowerCase()}Api+'/'+id+'/', this.httpOptions);
    }
}`
  );
};
