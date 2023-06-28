import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ConciertoService } from '../shared/concierto.service';

@Component({
  selector: 'app-editar-concierto',
  templateUrl: './editar-concierto.page.html',
  styleUrls: ['./editar-concierto.page.scss'],
})
export class EditarConciertoPage implements OnInit {
  updateBookingForm: FormGroup;
  id: any;
  constructor(
    private conService: ConciertoService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.conService.getBooking(this.id).valueChanges().subscribe(res => {
      this.updateBookingForm.setValue(res);
    });
   }

  ngOnInit() {
    this.updateBookingForm = this.fb.group({
      artist: [''],
      place: [''],
      value: ['']
    })
    console.log(this.updateBookingForm.value)
  }

  updateForm(){
    this.conService.updateBooking(this.id, this.updateBookingForm.value)
    .then(() => {
      this.router.navigate(['/home']);
    })
    .catch(error => console.log(error));
  }

}
