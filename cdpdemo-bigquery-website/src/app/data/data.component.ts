import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Users } from '../Users';
import { SocketService } from '../socket.service';
import { skip } from 'rxjs';
import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import * as _ from 'lodash';
import { LoggedUserService } from '../logged-user.service';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
  animations: [
    trigger("listAnimation", [
      transition("* => *", [
        // each time the binding value changes
        query(
          ":leave",
          [stagger(100, [animate("0.5s", style({ opacity: 0 }))])],
          { optional: true }
        ),
        query(
          ":enter",
          [
            style({ opacity: 0 }),
            stagger(100, [animate("0.5s", style({ opacity: 1 }))])
          ],
          { optional: true }
        )
      ])
    ]),
    trigger("enterAnimation", [
      transition(":enter", [
        style({ opacity: 0 , color: "#ffffff"}),
        animate(
          "500ms",
          style({
            //transform: "translateX(0)",
            "background-color": "#4285F4",
            opacity: 1,
            "overflow-x": "hidden"
          })
        )
      ]),
      transition(":leave", [
        style({ opacity: 1 }),
        animate("0ms", style({  opacity: 0 }))
      ])
    ]),
    trigger("slideIn", [
      state("*", style({ "overflow-y": "hidden" })),
      state("void", style({ "overflow-y": "hidden" })),
      transition("* => void", [
        style({ height: "*" }),
        animate(250, style({ height: 0 }))
      ]),
      transition("void => *", [
        style({ height: "0" }),
        animate(250, style({ height: "*" }))
      ])
    ])
  ]
})

export class DataComponent implements OnInit {
  columns : string[] = ["Address","Name" ,"Email", "city" , "country", "primaryKey","date"];
  constructor(private rs: RestService ,private socketService: SocketService, private loggedUser: LoggedUserService,) { }
  users : Users[] = [];
  usersB : Users[] = [];
  loaded = false;


  add() {
    this.users.push({
      Name: "Name",
      Address: "country",
      Email: "Email",
      city: "city",
      country: "country",
      primaryKey: "country",
    });
  }

  remove() {
    this.users.splice(0, 1);
  }

  gen = () => {
    this.users = [...this.users];
  };

  ngOnInit(): void {

    //.pipe(skip(1))
    this.socketService.getNewMessage().subscribe((data: any) => 
    {
      this.rs.getUsers().subscribe
      (
        (response)=>
        {
          this.loaded = true;

          if(this.users.length==0)
          {
            this.users=response;
          }
           
          else
          {
            let array1 = this.users;
            let array2 = response;

            array1.forEach(function (value, i) {
              if(!_.isEqual(array1[i],array2[i]))
              {
                array1[i]=array2[i];
              }
          });

            this.users=array1;
          }

        },
        (error) => console.log(error)
      )
      console.log("Reload now : new data from big query")
      this.loggedUser.myMethod(true);
  
    }
    )


    this.rs.getUsersFromEcommerceB().subscribe
    (
      (response)=>
      {
        this.loaded = true;

        if(this.users.length==0)
        {
          this.users=response;
        }
         
        else
        {
          this.usersB=response;
        }

      },
      (error) => console.log(error)
    )

  }

  getKey(str : string)
  {
    return str as keyof Users;
  }


}
