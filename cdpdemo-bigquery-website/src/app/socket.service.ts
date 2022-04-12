import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
@Injectable({
	providedIn: 'root'
})
export class SocketService {
  constructor(private socket: Socket) {
    this.socket = io('https://api.cdpdemodashboard.tk');
  }

 // emit event
 fetchMovies() {
  this.socket.emit('fetchMovies');
} 

// listen event
onNewMessage() {
  return new Observable(observer => {
    this.socket.on('reload', msg => {
      observer.next(msg);
    });
  });
}
}
