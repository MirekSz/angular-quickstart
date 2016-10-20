import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {OperatorService, Operator} from "./operator.service";
import {Input} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'operator-details',
    template: `<h3 *ngIf="operator!=null">
            details <span  *ngIf="!editMode">{{operator.name}}</span>
            <input (keypress)="commit($event)" *ngIf="editMode" [(ngModel)]="operator.name"/>
            <input (click)="changeEditMode()"  type="checkbox"/>
        </h3>`
})
export class OperatorDetails implements OnInit,OnChanges {
    ngOnChanges(changes: SimpleChanges): void {
        console.log('busS')
    }

    @Input()
    operator: Operator;
    editMode: boolean = false;

    constructor(private operatorService: OperatorService, private router: ActivatedRoute) {

    }

    changeEditMode() {
        this.editMode = !this.editMode;
    }

    commit(event: any) {
        if (event.keyCode == 13)
            this.editMode = false;
    }


    ngOnInit(): void {
        console.log('this.router.params: ');
        this.router.params.forEach((param)=> {
            var id = param['id'];
            this.operatorService.getOperator(Number.parseInt(id)).then((op)=>this.operator = op);
        });
        console.log('Details: ');
    }
}
