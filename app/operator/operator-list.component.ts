import {Component, OnInit} from '@angular/core';
import {OperatorService, Operator} from "./operator.service";

@Component({
    selector: 'operator-list',
    template: `<h3>list</h3>
            <ul><li *ngFor="let op of operators" (click)="select(op.id)">{{op.name}}({{op.id}})</li></ul>
        <operator-details [operator]="selected"></operator-details><a routerLink="/operators/11">operators</a>`
})
export class OperatorList implements OnInit {
    operators: Operator[];
    selected: Operator;

    constructor(private operatorService: OperatorService) {

    }

    ngOnInit(): void {
        this.operatorService.getOperators().then((operators)=> {
            this.operators = operators;
        });
    }

    select(id: number): void {
        console.log('selected: ', id);
        this.operatorService.getOperator(id).then((op)=> {
            this.selected = op;
        })
    }
}
