declare var google:any;
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

private Router=inject(Router)
  ngOnInit(): void {
    
    google.accounts.id.initialize({
      client_id:'108192426554-teb81qo89pjopgld0ukgvg38o88k82qt.apps.googleusercontent.com',
      callback:(resp:any)=>this.handlelogin(resp)
    });


    google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 250  
    })
  }

  private decodetoken(token:string){

    return JSON.parse(atob(token.split(".")[1]));
  }

  handlelogin(response:any){

    if(response){
     
      const payload=this.decodetoken(response.credential)

      sessionStorage.setItem("loggerInUser",JSON.stringify(payload));

      this.Router.navigate(['/browse'])
    }

  }

}
