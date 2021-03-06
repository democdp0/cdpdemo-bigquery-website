import { Component, ElementRef, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LoggedUserService } from '../logged-user.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  public url : string = "" ;
  public url2 : string = "" ;
  showGraph : boolean = false;
  isUser :number = 0;
  @ViewChild('ifr') ifr: any ;
  @ViewChild('ifr2') ifr2: any ;
  constructor( private cookieService: CookieService, private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document, private loggedUser: LoggedUserService,    private ngZone: NgZone,  private hostElement: ElementRef, private sanitizer: DomSanitizer ) {
      

     }
    
  ngOnInit(): void {

    this.loggedUser.myMethod$.subscribe((data) => {

      this.refreshGraphOnly();
  }
);

    let script = this._renderer2.createElement('script');
    script.type = `text/javascript`;
    script.text = `
        {
      


        window.addEventListener("message", receiveMessage, false);
        function receiveMessage (event) {
             console.log(event.data);
             var str = event.data.split(":");
             if(str[0]=="userid")
             {
              window.angularComponentReference.zone.run(() => { window.angularComponentReference.loadAngularFunction(parseInt(str[1])); });  
               
             }
         
         }


        
        }
    `;

    this._renderer2.appendChild(this._document.body, script);
   
    (window as any) ["angularComponentReference"] = { component: this, zone: this.ngZone, loadAngularFunction: (temp:number) => this.refreshGraph(temp), };  
  }

   refreshGraph(isUser : number)
  {
    console.log(isUser + "refreshing");
    this.isUser=isUser;
   if(isUser > 1)
   {    
     this.showGraph=true;
    this.url = "https://cdpdemo.com/goldenrecord/"+isUser;
    this.url2 = "https://cdpdemo.com/audience/"+isUser;
    console.log(this.url);

    this.ifr.nativeElement["src"] = this.url;

    this.ifr2.nativeElement["src"] =  this.url2;

   }

   else
   {
    this.showGraph=false;
    this.ifr.nativeElement["src"] = "";
    this.ifr2.nativeElement["src"] = "";
   }

    
  
  }


  refreshGraphOnly()
  {
    console.log("refresh graph only");
    this.url = "https://cdpdemo.com/goldenrecord/"+this.isUser;
    this.url2 = "https://cdpdemo.com/goldenrecord/"+this.isUser;

  }

}
