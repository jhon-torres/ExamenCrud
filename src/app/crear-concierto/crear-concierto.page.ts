import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ConciertoService } from '../shared/concierto.service';

@Component({
  selector: 'app-crear-concierto',
  templateUrl: './crear-concierto.page.html',
  styleUrls: ['./crear-concierto.page.scss'],
})
export class CrearConciertoPage implements OnInit {
  bookingForm: FormGroup;
  constructor(
    private conService: ConciertoService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      artist: [''],
      place: [''],
      value: [''],
    });
  }

  formSubmit(){
    if (!this.bookingForm.valid){
      console.log("IF");
      return false;
    } else {
      return this.conService
      .createBooking(this.bookingForm.value)
      .then((res) => {
        console.log(res);
        this.bookingForm.reset();
        this.router.navigate(['/home']);
      })
      .catch((error) => console.log(error));
    }
  }

}
