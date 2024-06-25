import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import * as AOS from 'aos';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'] // Updated to SCSS
})
export class ProjectsComponent implements OnInit {
  console = console;
  isHovering: { [key: number]: boolean } = {};
  showTitle: number = -1;

  constructor(public displayService: DisplayService, private el: ElementRef) { }

  ngOnInit(): void {
    AOS.init();
    // Initialize isHovering for each project
    this.projects.forEach((_, index) => {
      this.isHovering[index] = false;
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.innerWidth <= 768) {
      const tags = this.el.nativeElement.querySelectorAll('.project-number');
      tags.forEach((tag: any, index: any) => {
        if (this.isInViewport(tag)) this.isHovering[index] = true;
      });
    }
  }

  isInViewport(element: any) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  projects: any[] = [
    {
      'name': 'DA-Bubble',
      'description': 'An Angular based Slack-Clone.',
      'path': 'https://da-bubble.stefan-herrmann.org/',
      'github': 'https://github.com/StefanHerrmann1991/DA-Bubble',
      'img': 'assets/img/projects/da-bubble.png',
      'technologies': 'Angular | TypeScript | Firebase | SCSS | Angular Material'
    },
    {
      'name': 'El Pollo Loco',
      'description': 'A JavaScript-based, object-oriented jump-and-run game. Help Pepe to rescue his wife from the bad chickens.',
      'path': 'https://el-pollo-loco.stefan-herrmann.org/index.html',
      'github': 'https://github.com/StefanHerrmann1991/El-Pollo-Loco',
      'img': 'assets/img/projects/el-pollo-loco.png',
      'technologies': 'JavaScript | HTML | CSS | OOP'
    },
    {
      'name': 'Join',
      'description': 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      'path': 'https://join.stefan-herrmann.org/main/00login-register/login.html',
      'github': 'https://github.com/StefanHerrmann1991/Join',
      'img': 'assets/img/projects/join.png',
      'technologies': 'JavaScript | HTML | SASS'
    },
    {
      'name': 'Portfolio',
      'description': 'An Angular-developed portfolio showcasing personal work.',
      'path': 'https://stefan-herrmann.org/',
      'github': 'https://github.com/StefanHerrmann1991/portfolio',
      'img': 'assets/img/projects/portfolio.png',
      'technologies': 'Angular | TypeScript | SASS'
    }
  ];
}
