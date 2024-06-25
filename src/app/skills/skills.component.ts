import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { CommonModule } from '@angular/common';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass'] // Updated to SCSS
})
export class SkillsComponent implements OnInit {
  skills: any[] = [
    { 'name': 'Angular', 'icon': 'assets/img/icons/Icons mobile s3 (0).png' },
    { 'name': 'Typescript', 'icon': 'assets/img/icons/Icons mobile s3 (1).png' },
    { 'name': 'JavaScript', 'icon': 'assets/img/icons/Icons mobile s3 (2).png' },
    { 'name': 'HTML', 'icon': 'assets/img/icons/Icons mobile s3 (3).png' },
    { 'name': 'CSS', 'icon': 'assets/img/icons/Icons mobile s3 (4).png' },
    { 'name': 'Firebase', 'icon': 'assets/img/icons/Icons mobile s3 (5).png' },
    { 'name': 'Git', 'icon': 'assets/img/icons/Icons mobile s3 (6).png' },
    { 'name': 'RestAPI', 'icon': 'assets/img/icons/Icons mobile s3 (7).png' },
    { 'name': 'Scrum', 'icon': 'assets/img/icons/Icons mobile s3 (8).png' },
    { 'name': 'Material Design', 'icon': 'assets/img/icons/Icons mobile s3 (9).png' }
  ];

  isHovered: boolean[] = Array(this.skills.length).fill(false);

  constructor(public displayService: DisplayService) {}

  ngOnInit(): void {
    AOS.init();
  }

  startHover(index: number) {
    this.isHovered[index] = true;
    setTimeout(() => {
      this.isHovered[index] = false;
    }, 2000);
  }
}
