import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class jobPosition {
   title: string;
   isFulltime: boolean;
   department: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  model = new jobPosition();
  
  departments: string[] = ["male","female"]; 


  constructor(private router: Router) { 

  }

  ngOnInit() {
    
  }

  onSubmit() {
    console.log(this.model);
    //this.model = Object.assign({}, this.model);
    this.router.navigate(['/about']);
    }

  onReset() {

  }  

}
