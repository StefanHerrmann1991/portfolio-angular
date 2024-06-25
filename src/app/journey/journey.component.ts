import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { DisplayService } from '../display.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-journey',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.sass'] // Updated to SCSS
})
export class JourneyComponent implements OnInit {

  constructor(public displayService: DisplayService) { }

  ngOnInit(): void {
    AOS.init();
  }

  journeys = [{
    text: "My name is Stefan Herrmann, a Front-end Developer with a comprehensive background in Life Science Engineering. My educational path has shaped a keen analytical mind, especially adept in algorithm-based problem solving. With a focus on explosives, cell culture, and immunological testing, my expertise in data analysis and statistical discussions has flourished. Through my engagement with the Developer Akademie, I am committed to developing high-quality code, blending the best of research with modern programming methodologies."
  }];
}
