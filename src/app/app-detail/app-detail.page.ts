import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-detail',
  templateUrl: './app-detail.page.html',
  styleUrls: ['./app-detail.page.scss'],
})
export class AppDetailPage implements OnInit {

  app: any;
  show: boolean = false;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.app = navigation.extras.state.app;
    }
  }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['/home']);
  }

}
