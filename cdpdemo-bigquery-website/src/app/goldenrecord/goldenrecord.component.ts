
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
                  server_url: "bolt://34.143.223.200/:7687",
                  server_user: "neo4j",
                  server_password: "dt",
                  labels: {
                      "Character": {
                          "caption": "name",
                          "size": "pagerank",
                          "community": "community",
                          "title_properties": [
                              "name",
                              "pagerank"
                          ]
                      }
                  },
                  relationships: {
                      "INTERACTS": {
                          "thickness": "weight",
                          "caption": false
                      }
                  },
                  initial_cypher: "MATCH (n)-[r:INTERACTS]->(m) RETURN *"
              };
        
              viz = new NeoVis.default(config);
              viz.render();
          }

        }
    `;

    this._renderer2.appendChild(this._document.body, script);
  }

  getKey(str : string)
  {
    return str as keyof Users;
  }



}
