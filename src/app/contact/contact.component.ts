import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
userName:any =''
  placeholder(a:any,c:any){
    if (a.value.length == 0) {

      c.style.top = '1.3rem'
     
      c.style.opacity = '0'
    }
    else {
      c.style.top = '0px'
      c.style.opacity = '1'
    }
  }
  

  validName(a: any, b: any, c: any) {
    console.log(a.value.length);
    this.placeholder(a,c)
    if (a.value.length == 0) {

      b.classList.add('d-none')

    }
    else {
      this.checkName(a,b)
    }
  }


  checkName(a:any,b:any){
    var nameRegex = /^[a-zA-Z ]+$/

    if (nameRegex.test(a.value)) {
      b.classList.add('d-none')
    return true
    }
    else {
      b.classList.remove('d-none')
return false
    }


  }

  
  validEmail(a: any, b: any, c: any) {
    console.log(a.value.length);
    this.placeholder(a,c)
    if (a.value.length == 0) {

      b.classList.add('d-none')

    }
    else {
this.checkEmail(a,b)    
    }
  }

  checkEmail(a:any,b:any){
    var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (emailRegex.test(a.value)) {
      b.classList.add('d-none')
    return true
    }
    else {
      b.classList.remove('d-none')
      return false
    }
  }
  
  validPhone(a: any, b: any, c: any) {
    console.log(a.value.length);
    this.placeholder(a,c)
    if (a.value.length == 0) {

      b.classList.add('d-none')

    }
    else {
    this.checkPhone(a,b)
    }
  }

  checkPhone(a:any,b:any){
    var PhoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

    if (PhoneRegex.test(a.value)) {
      b.classList.add('d-none')
      return true
    }
    else {
      b.classList.remove('d-none')
return false
    }

  }
  validMessage(a: any, b: any, c: any) {
    console.log(a.value.length);
    this.placeholder(a,c)
    this.checkMessage(a,b)
  }
checkMessage(a:any,b:any){
  if(a.value.length>0){
    b.classList.add('d-none')
    return true
  }else{
    b.classList.remove('d-none')
return false

  }
}

  check(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any ,msg:any){
      if (
        this.checkName(b,a)||this.checkEmail(c,d)||this.checkPhone(f,e)||this.checkMessage(g,h)) {
          if(this.checkName(b,a)&&this.checkEmail(c,d)&&this.checkPhone(f,e)&&this.checkMessage(g,h)){
            msg.classList.remove('d-none')
            this.userName = b.value           
          }
      }
      
  }
  close(a:any){
    a.classList.add("d-none")
  }

}
