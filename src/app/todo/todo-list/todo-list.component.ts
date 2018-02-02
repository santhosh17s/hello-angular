import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { style, animate, trigger, state, transition } from "@angular/animations";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', 
      style({transform: 'translateX(0)'})),
      transition('void => *', [
          style({transform: 'translateX(-100%)'}),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({transform: 'translateX(100%)'}))
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  @Input() listItem: String[];
  
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  refresh() {
    this.cd.detectChanges();
  }

}
