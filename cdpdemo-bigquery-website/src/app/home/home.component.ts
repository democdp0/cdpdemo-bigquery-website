import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { RestService } from '../rest.service';
import { Users } from '../Users';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor( private cookieService: CookieService, private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document ) { }
    
  ngOnInit(): void {

    this.getLoggedInUser();

    let script = this._renderer2.createElement('script');
    script.type = `text/javascript`;
    script.text = `
        {

          window.onload = function(){
            setTimeout(function(){
              document.getElementById('data_wp').src = 'https://cdpdemoportal.tk';
            },5000);
           };

          function createCookie(name, value, days) {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                var expires = "; expires=" + date.toGMTString();
            }
            else var expires = "";
            document.cookie = name + "=" + value + expires + "; path=/";
            console.log("creating cookie");
        }

          window.addEventListener("message",
          function (e) {
             if (e.origin !== 'https://cdpdemoportal.tk') 
             { return; 
            }
      
            console.log("adding listener"+e.data);
         
             },false);


        }
    `;

    this._renderer2.appendChild(this._document.body, script);
   
  }
  getLoggedInUser()
  {
    console.log("getting cookies")
    const cookies: {} = this.cookieService.getAll();

    this.cookieService.set('test', 'Hello World');
      console.log(JSON.stringify(cookies));

  }

}
