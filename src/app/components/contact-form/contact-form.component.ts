import {Component, ElementRef, ViewChild} from '@angular/core';
import {ButtonComponent} from '@app/components/button/button.component';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    ButtonComponent,
    NgIf,
    FormsModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  @ViewChild('form') form!: ElementRef;
  @ViewChild('name') name!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('message') message!: ElementRef;

  protected nameMissing = false;
  protected emailMissing = false;
  protected submitted = false;

  protected nameStr: string = '';
  protected emailStr: string = '';
  protected messageStr: string = '';

  private emailPattern = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');

  onInput($event: Event): string {
    return ($event.target as HTMLInputElement).value;
  }

  onFocus() {
    this.nameMissing = false;
    this.emailMissing = false;
    this.submitted = false;
  }

  checkValidity(): boolean {
    this.nameMissing = false;
    this.emailMissing = false;

    let failed = false;

    if (!this.name.nativeElement.value) {
      this.nameMissing = true;
      failed = true;
    }

    if (!this.email.nativeElement.value || !this.emailPattern.test(this.email.nativeElement.value)) {
      this.emailMissing = true;
      failed = true;
    }

    return !failed;
  }

  onSubmit($event: SubmitEvent) {
    $event.preventDefault();

    if (this.checkValidity()) {
      this.successfulSubmit(this.nameStr, this.emailStr, this.messageStr);
    }
  }

  successfulSubmit(name: string, email: string, text: string) {
    this.submitted = true;

    this.name.nativeElement.value = '';
    this.email.nativeElement.value = '';

    console.log('Form submitted with name: ' + name + ', email: ' + email + ', and text: ' + text);
  }
}
