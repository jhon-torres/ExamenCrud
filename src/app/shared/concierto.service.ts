import { Injectable } from '@angular/core';
import { Concierto } from './Concierto';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ConciertoService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {
    this.bookingListRef = this.db.list('/concierto');
   }

  //crear
  createBooking(con: Concierto) {
    return this.bookingListRef.push({
      artist: con.artist,
      place: con.place,
      value: con.value,
    });
  }

  // un registro
  getBooking(id: string){
    this.bookingRef = this.db.object('/concierto/'+ id);
    return this.bookingRef;
  }

  // lista
  getBookingList(){
    this.bookingListRef = this.db.list('/concierto');
    return this.bookingListRef;
  }

  // actualizar
  updateBooking(id: any, con: Concierto){
    return this.bookingRef.update({
      artist: con.artist,
      place: con.place,
      value: con.value,
    });
  }

  //borrar 
  deleteBooking(id: string){
    this.bookingRef = this.db.object('/concierto/' + id);
    this.bookingRef.remove();
  }
}
