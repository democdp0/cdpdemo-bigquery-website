
import { Component, OnInit } from '@angular/core';

import { RestService } from '../rest.service';
import { Users } from '../Users';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-goldenrecord',
  templateUrl: './goldenrecord.component.html',
  styleUrls: ['./goldenrecord.component.css']
})
export class GoldenrecordComponent implements OnInit {
  columns : string[] = ["Address","Name" ,"Email", "city" , "country", "primaryKey","date"];
  constructor(private rs: RestService , private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document ) { }
    
  users : Users[] = [];
  loaded = false;
  ngOnInit(): void {

    this.rs.getGoldenRecord().subscribe
    (
      (response)=>
      {
        this.loaded = true;
        this.users=response;
    
      },
      (error) => console.log(error)
    )

    let script = this._renderer2.createElement('script');
    script.type = `text/javascript`;
    script.text = `
        {
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
    
        function readCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
    
            console.log("reading cookie");
        }
        createCookie('testCookie', "test content", 1);
        parent.postMessage(readCookie('testCookie'), "https://cdpdemodashboard.tk");
        }
    `;

    this._renderer2.appendChild(this._document.body, script);
  }

  getKey(str : string)
  {
    return str as keyof Users;
  }



}
