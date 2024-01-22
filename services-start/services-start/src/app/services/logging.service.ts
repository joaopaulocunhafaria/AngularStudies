import { Injectable } from '@angular/core';


// @Injectable({
   
// })
export class LoggingService {

  loggingstatusChange(message: string) {
    console.log('A server status changed, new status: ' + message);

  }

}
