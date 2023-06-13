import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
username:string = ''
imgName:string = ''
  getSrc(event:any){
console.log(event.target.parentNode.childNodes[0].getAttribute('id'));

    this.username= event.target.parentNode.childNodes[0].getAttribute('src');
    this.imgName = event.target.parentNode.childNodes[0].getAttribute('id')
    
 }


}

