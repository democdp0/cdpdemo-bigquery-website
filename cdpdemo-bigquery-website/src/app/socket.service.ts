import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client";
@Injectable({
  providedIn: 'root',
})
export class SocketService {

  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() {}

  socket = io("https://api.cdpdemo.com");


public sendMessage(message: any) {
    this.socket.emit('message', message);
  }

  public getNewMessage = () => {
    this.socket.on('reload', (message) =>{
      this.message$.next(message);
      console.log("getNewMessage")
    });

    return this.message$.asObservable();
  };

}
