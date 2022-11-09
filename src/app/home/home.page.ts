import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  username: any;

  constructor(
    private router: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.router.queryParams.subscribe((params:any)=>{
      console.log(params);
      this.username = params.data;
    })
  }
}
