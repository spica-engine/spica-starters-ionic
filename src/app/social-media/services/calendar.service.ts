// import { Injectable } from '@angular/core';
// import { Calendar } from '@ionic-native/calendar/ngx';

// @Injectable({
//   providedIn: 'root'
// })
// export class CalendarService {

//   constructor(private calendar: Calendar) { }

//   createEvent(...args: any) {
//     console.log("args : ", ...args)
//     return this.calendar.createEventWithOptions(
//       args,
//     ).catch((err)=>console.log("err : ",err))
//   }
//   deleteEvent(post_id) {
//     this.calendar.hasReadWritePermission().then((result) => {
//       if (result === true) {
//         this.calendar.deleteEventById(post_id)
//       }
//     })
//     return
//   }
//   hasPermission() {
//     return this.calendar.hasReadWritePermission()
//   }
//   requestReadWritePermission() {
//     return this.calendar.requestReadWritePermission()
//   }
// }
