import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'todo-list',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']    
})
export class TodoComponent implements OnInit {

    items: string[];

   ngOnInit() {
    this.items = [
             'First Todo list',
             'second one'           
        ];

   }

   addItem(value) {
      this.items = [...this.items, value];
      console.log(this.items)
    }

}