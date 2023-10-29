import { Component, OnInit } from '@angular/core';
import { AppListService } from '../services/app-list.service';
import { AppList, Entry } from '../models/appList.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  topApps$ = this.appListService.topApps$;

  searchTerm: string = '';

  constructor(private appListService: AppListService, private router: Router) { }

  detail(app: Entry) {
    this.router.navigate(['/app-detail'], { state: { app } });
  }

}
