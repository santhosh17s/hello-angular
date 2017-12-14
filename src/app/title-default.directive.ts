import { Directive, ElementRef, Renderer, OnInit , Input} from '@angular/core';

@Directive({
  selector: '[appTitleDefault]'
})
export class TitleDefaultDirective implements OnInit{

  @Input() appTitleDefault: number;

  constructor(private el: ElementRef) {
    
   }

  ngOnInit(){
     this.el.nativeElement.style.color = "#9e7d7d";
     this.el.nativeElement.style.fontSize = this.appTitleDefault + "em";
  } 

}
