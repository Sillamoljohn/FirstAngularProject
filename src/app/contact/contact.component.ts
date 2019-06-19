import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      feedback: ['', Validators.required],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    this.success = false;
  }

}
