import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username : any;

  constructor(
    public router: Router
  ) {}

  ngOnInit() {}

  public createQRCode(){
    this.router.navigate(['/home'],{queryParams:{data:this.username}})
  }

  
}
