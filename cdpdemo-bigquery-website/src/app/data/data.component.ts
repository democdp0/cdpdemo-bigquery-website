import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Users } from '../Users';
import { SocketService } from '../socket.service';
import { skip } from 'rxjs';
import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
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
        style({ transform: "translateX(100%)", opacity: 0 }),
        animate(
          "500ms",
          style({
            transform: "translateX(0)",
            opacity: 1,
            "overflow-x": "hidden"
          })
        )
      ]),
      transition(":leave", [
        style({ transform: "translateX(0)", opacity: 1 }),
        animate("500ms", style({ transform: "translateX(100%)", opacity: 0 }))
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
  constructor(private rs: RestService ,private socketService: SocketService) { }
  users : Users[] = [];
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
            this.users=response;
          else
          {
            let array1 = this.users;
            let array2 = response;
            let filteredArray = array2.filter((a) => array1.includes(a));
            let secFilteredArray = array1.filter((a) => !filteredArray.includes(a));
            this.users=secFilteredArray;
        
          }

  
        },
        (error) => console.log(error)
      )
      console.log("reload now")
    }

    
    
    )
  }

  getKey(str : string)
  {
    return str as keyof Users;
  }


}
