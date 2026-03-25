
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone:true,
  imports: [FormsModule],
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title: string = "Build Your Professional Resume in Minutes";
  subtitle: string = "Create ATS-friendly resumes with AI-powered suggestions.";

  userName: string = "";

}