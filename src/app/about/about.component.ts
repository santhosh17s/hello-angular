import {  Component,
          OnInit,
          ViewChild,
          AfterViewInit,
          ElementRef, 
          HostBinding
          } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Post } from './post';
import { style, animate, trigger, state, transition, query, stagger, keyframes } from "@angular/animations";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [DataService],
  animations: [
    trigger('goals',[
       transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
          ,
        query(':leave', stagger('300ms', [
          animate('.6s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))]), {optional: true})
     ])
    ])
  ]
})
export class AboutComponent implements OnInit, AfterViewInit  {

  post = new Post();

  private goals = ['My first life goal', 'I want to climb a mountain', 'Go ice skiing'];
  
  //want to accesss child component, directive or DOM element from parent component class.
  @ViewChild('searchInput') searchInput: ElementRef; 
  
  //Set attribute to DOM element
  @HostBinding('style.color') isValid:string = "red";

  constructor( private http:HttpClient, private ds: DataService) { }

  ngOnInit() {
   
    this.ds.getPost().subscribe(data => {
      this.post = data;
    });

  }

  ngAfterViewInit() {
    this.searchInput.nativeElement.value = 'Getting posts';
  }

  whoAmI() {
    return '👶 I am About child!!';
  }

  //Post post data 
  onPost(){
    console.log("Posting DAta");

    this.ds.postPost().subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    )
  }

  removeItem(index) {
      this.goals.splice(index, 1);
  }

  animateEnd() {
    console.log("Animation End, Owe...");
  }

}
