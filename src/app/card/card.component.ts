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

  ngOnInit() {
    //this.type = this.route.snapshot.params['type'];

    this.route.params.subscribe( (params) => {
      this.type = params['type'];
    })
  }

   goCards(num) {
    this.router.navigate([ '/', 'cards', parseInt(this.type) + num]);
  }

}
