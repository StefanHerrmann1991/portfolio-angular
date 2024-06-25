import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import { DisplayService } from '../display.service';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  name: string = '';
  email: string = '';
  message: string = '';

  @ViewChild('contactForm') contactForm!: NgForm;

  isLoading: boolean = false;
  isDelivered: boolean = false;
  agreePrivacyPolicy: boolean = false;
  formSubmitted: boolean = false;
  privacyPolicyInteracted: boolean = false;
  privacyPolicyTouched: boolean = false;
  imageSource = 'assets/img/icons/arrowWhite.png';

  constructor(public displayService: DisplayService) { }


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
    this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response: any) => {
          ngForm.resetForm();
        },
        error: (error: any) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
  }



  contactData = {
    name: "",
    email: "",
    message: "",
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

  async sendMail() {
    this.isLoading = true;
    this.contactForm.controls['name'].disable();
    this.contactForm.controls['email'].disable();
    this.contactForm.controls['message'].disable();

    let fd = new FormData();
    fd.append('name', this.name);
    fd.append('email', this.email);
    fd.append('message', this.message);

    try {
      const response = await fetch('https://stefan-herrmann.org/send_mail/sendMail.php', {
        method: 'POST',
        body: fd
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      this.name = "";
      this.email = "";
      this.message = "";
      this.isDelivered = true;
    } catch (error) {
      console.error('Error sending email:', error);
      // Optionally display an error message to the user
    } finally {
      this.isLoading = false;
      this.contactForm.controls['name'].enable();
      this.contactForm.controls['email'].enable();
      this.contactForm.controls['message'].enable();
      this.contactForm.resetForm();
    }
  }
}
