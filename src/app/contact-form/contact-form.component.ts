import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import { DisplayService } from '../display.service';
import { FormControl, NgForm, Validators, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass'],
  imports: [CommonModule, FormsModule, RouterModule, FooterComponent]
})
export class ContactFormComponent implements OnInit, AfterViewInit {
  @ViewChild('contactForm') contactForm!: NgForm;

  isLoading: boolean = false;
  isDelivered: boolean = false;
  agreePrivacyPolicy: boolean = false;
  formSubmitted: boolean = false;
  privacyPolicyInteracted: boolean = false;
  privacyPolicyTouched: boolean = false;
  imageSource = 'assets/img/icons/arrowWhite.png';

  constructor(public displayService: DisplayService) { }

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  mailTest = true;
  http = inject(HttpClient);

  post = {
    endPoint: 'https://portfolio.stefan-herrmann.org/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    this.isLoading = true;
    if (ngForm.valid && ngForm.submitted) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response: any) => {
            ngForm.resetForm();
          },
          error: (error: any) => {
            console.error(error);
          },
          complete: () => {
            this.isDelivered = true;
          },
        });
    }
    this.isLoading = false;
  }





  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  togglePrivacyPolicy() {
    if (this.agreePrivacyPolicy) {
      this.privacyPolicyInteracted = true;
    }
    this.agreePrivacyPolicy = !this.agreePrivacyPolicy;
    this.privacyPolicyTouched = true;
    if (!this.agreePrivacyPolicy) {
      this.formSubmitted = true;
    }
  }

  changeImageSource(hovered: boolean): void {
    this.imageSource = hovered ? 'assets/img/icons/arrowWhite2.png' : 'assets/img/icons/arrowWhite.png';
  }
}