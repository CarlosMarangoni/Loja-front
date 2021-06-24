import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {

  constructor() { }

  activeMenu = 'Home'
  dropdownMenu = "Cadastro"

  menus:any = [
    {
      name:'Home',
      link:'/home'
    },
    {
      name:'Produtos',
      link:'/produtos'
    }
  ]  

  setActive(menu:any){
    this.activeMenu = menu;
  }

}
