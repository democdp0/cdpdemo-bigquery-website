import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
@Injectable()
export class SocketService {
  constructor(private socket: Socket) {
    this.socket = io('https://api.cdpdemodashboard.tk',{
      rejectUnauthorized: false // WARN: please do not do this in production
    });
  }

 // emit event
 fetchMovies() {
  this.socket.emit('fetchMovies');
} 

// listen event
OnReload() {
  return new Observable(observer => {
    this.socket.on('reload', msg => {
      observer.next(msg);
    });
  });
}
}
