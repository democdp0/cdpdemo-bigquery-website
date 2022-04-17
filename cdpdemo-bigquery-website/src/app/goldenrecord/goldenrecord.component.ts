
import { Component, OnInit } from '@angular/core';

import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LoggedUserService } from '../logged-user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-goldenrecord',
  templateUrl: './goldenrecord.component.html',
  styleUrls: ['./goldenrecord.component.css']
})
export class GoldenrecordComponent implements OnInit {

  constructor( private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document , private loggedUser: LoggedUserService,private route: ActivatedRoute) { 
      
      this.loggedUser.myMethod$.subscribe((data) => {
        this.userID = data; // And he have data here too!
    }
);

    }


  userID : number = 0;
  private id: number =0;
  private sub: any;

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });

    let script = this._renderer2.createElement('script');
    script.type = `text/javascript`;
    script.text = `
        {
          var viz;
   
          function draw() {
            var config = {
              encrypted: "ENCRYPTION_ON",
              trust: "TRUST_SYSTEM_CA_SIGNED_CERTIFICATES",
              container_id: "viz",
              server_url: "bolt://neo4j.cdpdemodashboard.tk/:7687",
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
              initial_cypher: "MATCH (n:Person)-[r]-(d) where r.wp_userid = 'colin5905@hotmail.com' RETURN n,r,d"
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

}
