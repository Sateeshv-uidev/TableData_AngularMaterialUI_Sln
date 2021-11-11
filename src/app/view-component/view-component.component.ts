import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {
  Title : string | any;
  Author: string | any;
  Price: string | any;

  constructor(private route: ActivatedRoute, private router:Router) { 
  }

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.Title = params["Title"];
      this.Author = params["Author"];
      this.Price = params["Price"]
    });
  }

  goBack(){
    this.router.navigateByUrl('/');
  }
}
