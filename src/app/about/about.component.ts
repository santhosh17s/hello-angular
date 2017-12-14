import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DataService } from '../data.service';
import { Post } from './post';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [DataService]
})
export class AboutComponent implements OnInit {

  post = new Post();

  constructor( private http:HttpClient, private ds: DataService) { }

  ngOnInit() {
   
   this.ds.getPost().subscribe(data => {
     this.post = data;
   });
      
  }

}
