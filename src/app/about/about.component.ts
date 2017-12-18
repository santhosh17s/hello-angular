import {  Component,
          OnInit,
          ViewChild,
          AfterViewInit,
          ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DataService } from '../data.service';
import { Post } from './post';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [DataService]
})
export class AboutComponent implements OnInit, AfterViewInit  {

  post = new Post();

  
  @ViewChild('searchInput') searchInput: ElementRef; 

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

}
