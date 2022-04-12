import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client";
@Injectable({
  providedIn: 'root',
})
export class SocketService {

  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() {}

  socket = io("https://api.cdpdemodashboard.tk");


public sendMessage(message: any) {
    this.socket.emit('message', message);
  }

  public getNewMessage = () => {
    this.socket.on('reload2', (message) =>{
      this.message$.next(message);
    });
    
    return this.message$.asObservable();
  };

}
