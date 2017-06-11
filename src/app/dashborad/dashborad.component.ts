import { Component, OnInit } from '@angular/core';
import { initDashboard } from '../../shared/init-dashboard';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css']
})
export class DashboradComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(initDashboard);
  }

}
