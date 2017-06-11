import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  type: string;
  life: string;

  ngOnInit() {
    //this.type = this.route.snapshot.params['type'];

    this.route.params.subscribe( (params) => {
      this.type = params['type'];
    })

    this.route.queryParams.subscribe( (params) => {
      this.life = params['life'];
    })
  }

   goCards(num) {
    this.router.navigate([ '/', 'cards', parseInt(this.type) + num], {
      queryParams: { life: this.type }
    });
  }

}
