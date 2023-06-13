import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  asdsdf :any =window.scrollY;

  constructor(){

    window.onscroll = function(){
      name(window.scrollY)
      
    }
  }
 
;
}
function name(a:any) {
  if(a>100){
 document.getElementById('ref')?.classList.replace('py-4','py-2')


 console.log(window.scrollY);
}
else{
  document.getElementById('ref')?.classList.replace('py-2' ,'py-4')
  
}



}
