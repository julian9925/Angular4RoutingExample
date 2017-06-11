import { Component, OnInit } from '@angular/core';
import { initDashboard } from '../../shared/init-dashboard';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css']
})
export class DashboradComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    $(initDashboard);
  }

  goCards(type) {
    this.router.navigateByUrl('/cards/' + type);
  }

}
