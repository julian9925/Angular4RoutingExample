import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  type: string;
  id: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( (params) => {
      this.type = params['type'];
    });

    this.route.queryParams.subscribe( (params) => {
      this.id = params['id'];
    })
  }

  countNumbers(num): void {
    this.router.navigate(['/cards/', parseInt(this.type) + num],
      { queryParams: { id: parseInt(this.id) + num } } );
  }

}
