import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../display.service';
import { CommonModule } from '@angular/common';
import { JourneyComponent } from "../journey/journey.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProjectsComponent } from "../projects/projects.component";
import AOS from 'aos';

@Component({
  selector: 'app-introduction',
  standalone: true, // Add necessary imports
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.sass'],
  imports: [CommonModule, JourneyComponent, SkillsComponent, ProjectsComponent]
})
export class IntroductionComponent implements OnInit {

  constructor(public displayService: DisplayService) { }

  ngOnInit(): void {
    AOS.init({
      duration: 1000, // duration of animations
      once: true // whether animation should happen only once
    });
  }

  ngAfterViewInit(): void {
    AOS.refresh(); // Refresh AOS to initialize animations after the view is initialized
  }

  toggleContent() {
    this.displayService.toggleContent();
  }
}
