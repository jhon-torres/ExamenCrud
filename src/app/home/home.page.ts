import { Component } from '@angular/core';
import { Concierto } from '../shared/Concierto';
import { ConciertoService } from '../shared/concierto.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Bookings: Concierto[] = [];
  constructor(private conService: ConciertoService) { }
  ngOnInit() {
    this.fetchBookings();
    let bookingRes = this.conService.getBookingList();
    bookingRes.snapshotChanges().subscribe((res) => {
      this.Bookings = [];
      res.forEach((item) => {
        let c: any = item.payload.toJSON();
        c['$key'] = item.key;
        this.Bookings.push(c as Concierto);
      });
    });
  }

  fetchBookings() {
    this.conService
      .getBookingList()
      .valueChanges()
      .subscribe((res) => {
        console.log(res);
      });
  }

  deleteBooking(id: any) {
    console.log(id);
    if (window.confirm('Realmente deseas borrarlo?')) {
      this.conService.deleteBooking(id);
    }
  }
}
