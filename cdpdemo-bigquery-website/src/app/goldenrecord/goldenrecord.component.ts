
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
          var viz;
   
          function draw() {
            var config = {
              container_id: "viz",
              server_url: "bolt+s://neo4j.cdpdemodashboard.tk/:7687",
              server_user: "neo4j",
              server_password: "dt",
              labels: {
                //"Character": "name",
                "Character": {
                  "caption": "name",
                  "size": "pagerank",
                  "community": "community"
                  //"sizeCypher": "MATCH (n) WHERE id(n) = {id} MATCH (n)-[r]-() RETURN sum(r.weight) AS c"
                }
              },
              relationships: {
                "INTERACTS": {
                  "thickness": "weight",
                  "caption": false
                }
              },
              initial_cypher: "MATCH (n:Person)-[r]-(d) where n.email = 'colin5905@hotmail.com' RETURN n,r,d"
            };
      
            viz = new NeoVis.default(config);
            viz.render();
            console.log("Drawing");
  
        }
        draw();
      }
    `;

    this._renderer2.appendChild(this._document.body, script);
  }

  getKey(str : string)
  {
    return str as keyof Users;
  }



}
