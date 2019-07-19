import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  TEAM_A=0;
  TEAM_B=0;

  constructor(private route:Router) {}


  display1() {
    console.log(this.TEAM_A -= 4)
    if(this.TEAM_A<=0)
    this.TEAM_A=0
   }
  
   display2() {
   console.log(this.TEAM_A += 4)
  }
  display3() {
    console.log(this.TEAM_A -= 3)
    if(this.TEAM_A<=0)
    this.TEAM_A=0
   }
  
   display4() {
   console.log(this.TEAM_A += 3)
  }
  display5() {
    console.log(this.TEAM_A -= 2)
    if(this.TEAM_A<=0)
    this.TEAM_A=0
   }
  
   display6() {
   console.log(this.TEAM_A += 2)
  }
  display7() {
    console.log(this.TEAM_A -= 1)
    if(this.TEAM_A<=0)
    this.TEAM_A=0
   }
   display8() {
    console.log(this.TEAM_A += 1)
   }
   display9() {
   console.log(this.TEAM_B -= 4)
   if(this.TEAM_A<=0)
    this.TEAM_A=0
  }
  display10() {
    console.log(this.TEAM_B += 4)
   }
  
   display11() {
   console.log(this.TEAM_B -= 3)
   if(this.TEAM_A<=0)
    this.TEAM_A=0
  }
  display12() {
    console.log(this.TEAM_B += 3)
   }
  
   display13() {
   console.log(this.TEAM_B -= 2)
   if(this.TEAM_A<=0)
    this.TEAM_A=0
  }
  display14() {
    console.log(this.TEAM_B += 2)
   }

   display15() {
    console.log(this.TEAM_B -= 1)
    if(this.TEAM_A<=0)
    this.TEAM_A=0
   }
   display16() {
    console.log(this.TEAM_B += 1)
   }
   Reset(){
    console.log(this.TEAM_A=0)
    console.log(this.TEAM_B=0)
    this.route.navigateByUrl('/home')
}
}
