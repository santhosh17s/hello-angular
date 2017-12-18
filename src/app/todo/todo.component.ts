import { Component, OnInit } from "@angular/core";
import { style, animate, trigger, state, transition } from "@angular/animations";


@Component({
    selector: 'todo-list',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss'],
    animations:[
        trigger('flyInOut', [
            state('in', style({transform: 'translateX(0)'})),
            transition('void => *', [
                style({transform: 'translateX(-100%)'}),
              animate(1000)
            ]),
            transition('* => void', [
              animate(1000, style({transform: 'translateX(100%)'}))
            ])
          ])
    ]
})
export class TodoComponent implements OnInit {

    items: string[];

   ngOnInit() {
    this.items = [
             'First Todo list'           
        ];

   }

   addItem(value) {
      this.items.push(value);
   }

}