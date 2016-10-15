import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";

export const OPERATORS: Operator[] = [
    {id: 11, name: 'Mr. Nice'},
    {id: 12, name: 'Narco'},
    {id: 13, name: 'Bombasto'},
    {id: 14, name: 'Celeritas'},
    {id: 15, name: 'Magneta'},
    {id: 16, name: 'RubberMan'},
    {id: 17, name: 'Dynama'},
    {id: 18, name: 'Dr IQ'},
    {id: 19, name: 'Magma'},
    {id: 20, name: 'Tornado'}
];

@Injectable()
export class OperatorService {
    constructor(private http: Http) {

    }

    getOperators(): Promise<Operator[]> {
        return new Promise((resolve, reject)=> {
            resolve(OPERATORS)
        });
    }

    getOperator(id: number): Promise<Operator> {
        return new Promise((resolve, reject)=> {
            resolve(OPERATORS.find(op=>op.id === id));
        });
    }

    getOperatorByHttp(id: number): Observable<Operator> {
        return this.http.get('https://api.github.com/users').map((e)=> {
            return e.json();
        });
    }
}
export class Operator {
    id: number;
    name: string;
}
