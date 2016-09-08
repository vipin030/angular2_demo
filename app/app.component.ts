import { Component, OnInit, trigger,
  state,
  style,
  transition,
  animate} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppService} from './app.service';
//import { Observable } from 'rxjs/Observable';
//import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Hero} from './hero';
@Component({
    selector: 'my-app',
    providers:[AppService],
    template: `<div><h1></h1>
    	<form [formGroup] = "form">
    	<p><input type="text" formControlName="name" id="uname"></p>
    	<div id="uerror" *ngIf="(!form.controls.name.valid && form.controls.name.dirty)">
      <p *ngIf="form.controls.name.errors.required">field is required</p>
    	<p *ngIf="form.controls.name.errors.minlength">it should be 5 character</p>
      </div>
  		<p><input type="text" formControlName="city" id="city"></p>
  		<p *ngIf="(!form.controls.city.valid && !form.controls.city.pristine)">This field is required!</p>
  		<p><button type="submit" [disabled] = "!form.valid" [@heroState]="active"
          (click)="hero.toggleState()">Submit</button></p>
    	</form>
       <ul>
       <li>dhhhh hhhhh</li>
      <li *ngFor="let hero of heroes">
        {{hero.name}} is {{hero.id}} years old.
      </li>
    </ul>
    	</div>`,
      animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#0000ff',
        transform: 'scale(2)'
      })),
      state('active',   style({
        backgroundColor: '#ff0000',
        transform: 'scale(1.5)'
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ])
  ]
})
export class AppComponent implements OnInit {
	form:FormGroup;
  private heroes: Hero[];
  errorMessage: any;
	constructor(private formBuilder: FormBuilder,private appService: AppService){

	}
	ngOnInit(){
    this.getData();
		this.form = this.formBuilder.group({
		name:['',Validators.compose([Validators.required, Validators.minLength(5)])],
		city:['',Validators.required]
		});
    


	}
  getData(){
    this.appService.getData().subscribe(
            heroes => this.heroes = heroes.data,
            error =>  this.errorMessage = <any>error);

                       console.log(this.heroes);

      }
  }
}
