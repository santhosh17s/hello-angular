import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,  Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm : FormGroup;

  constructor(private fb: FormBuilder) { 
    // name = new FormControl();
    this.createForm();
  }

  ngOnInit() {
  }

   createForm(){
       this.contactForm = this.fb.group({
                              name: ['kumar', Validators.required ]
                         });
   }
}
