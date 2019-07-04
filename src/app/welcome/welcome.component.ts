import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Some welcome message'
  welcomeMessageFromService:string
  name = ''

  constructor(private route:ActivatedRoute,
    private service:WelcomeDataService) { }

  ngOnInit() {
    // console.log(this.message)
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    // console.log(this.service.executeHelloWorldService());
    this.service.executeHelloWorldService().subscribe(
      response => this.handleSuccessfullResponse(response),
      error => this.handleErrorResponse(error)
    );

    // console.log("last line of getWelcomeMessage")
    // console.log("get welcome message");
  }

  handleSuccessfullResponse(response) {
    this.welcomeMessageFromService = response.message
    // console.log(response)
    // console.log(response.message)
  }

  handleErrorResponse(error): void {
    // console.log(error)
    // console.log(error.error)
    // console.log(error.error.message)

    this.welcomeMessageFromService = error.error.message
    
    // throw new Error("Method not implemented.");
  }
}
