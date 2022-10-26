import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.scss']
})
export class MenuViewComponent implements OnInit {

  public tabSelect = 1;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public navigateAboutMe() {
    this.tabSelect = 1;
    this.router.navigateByUrl('about');
  }

  public navigateResume() {
    this.tabSelect = 2;
    this.router.navigateByUrl('resume');
  }

}
