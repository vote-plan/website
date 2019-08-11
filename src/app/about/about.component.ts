import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title = 'About';

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle([environment.appHtmlTitlePrefix, this.title].join(' | '));
  }

}
