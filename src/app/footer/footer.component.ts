import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../display.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass'
})
export class FooterComponent implements OnInit {



  constructor(public displayService: DisplayService) { }
  ngOnInit(): void {
  }

  socialLogos = [{
    'logo': 'assets/img/icons/github.png',
    'url': 'https://github.com/StefanHerrmann1991?tab=overview&from=2022-04-01&to=2022-04-30'
  },
  {
    'logo': 'assets/img/icons/linkedin.png',
    'url': 'https://www.linkedin.com/in/stefan-herrmann-a564451b3/'
  },
  {
    'logo': 'assets/img/icons/email.png',
    'url': 'https://www.xing.com/profile/Stefan_Herrmann132/cv'
  },]

}
