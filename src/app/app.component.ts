import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, provideRouter } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DisplayService } from './display.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ContactFormComponent } from "./contact-form/contact-form.component";
import AOS from 'aos';
import 'aos/dist/aos.css';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],    
    imports: [CommonModule, RouterModule, MatIconModule, ContactFormComponent]
})
export class AppComponent implements OnInit {
  title = 'stefan-herrmann';
  isLegalNoticeRoute = false;

  constructor(public displayService: DisplayService, private router: Router) { }

  ngOnInit() {
    AOS.init();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isLegalNoticeRoute = this.router.url === '/legal-notice';
    });
  }

  toggleContent() {
    this.displayService.toggleContent();
  }
}
