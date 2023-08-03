import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'ngc-demo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private titleService:Title) { }

  ngOnInit() {
    this.titleService.setTitle('Home | ngx-cookieconsent-v2');
  }

  editOnStackBlitz() {
    sdk.openGithubProject('abdul/ngx-cookieconsent-v2/tree/develop/apps/ngx-cookieconsent-v2-demo');
  }
}
