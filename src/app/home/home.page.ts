import { Component, OnInit } from '@angular/core';
import { AppListService } from '../services/app-list.service';
import { AppList, Entry } from '../models/appList.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  topApps: Entry[] = [];
  filteredApps: Entry[] = [];
  searchTerm: string = '';

  constructor(private appListService: AppListService, private router: Router) { }

  ngOnInit() {
    this.appListService.getTopApps().subscribe((data: AppList) => {
      this.topApps = data.feed.entry;
      this.filteredApps = this.topApps;
    });
  }

  filterApps() {
    this.filteredApps = this.topApps.filter(app => {
      const name = app['im:name'].label.toLowerCase();
      const category = app.category.attributes.label.toLowerCase();
      const term = this.searchTerm.toLowerCase();
      return name.includes(term) || category.includes(term);
    });
  }

  detail(app: Entry) {
    this.router.navigate(['/app-detail'], { state: { app } });
  }

}
