/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators} from '@angular/forms';
//import {dispatchEvent} from '@angular/platform-browser/testing';
import { By}             from '@angular/platform-browser';



interface IElements {
  element: HTMLElement;
  form: HTMLFormElement;
  usernameInput: HTMLInputElement;
  cityInput: HTMLInputElement;
}
////////  SPECS  /////////////

/// Delete this
describe('Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});

describe('AppComponent with TCB', function () {
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [ReactiveFormsModule],declarations: [AppComponent]});
  });

  it('should instantiate component', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });

  it('should have expected <h1> text', () => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    let h1 = fixture.debugElement.query(el => el.name === 'h1').nativeElement;  // it works

        h1 = fixture.debugElement.query(By.css('h1')).nativeElement;            // preferred
        h1 = fixture.nativeElement.querySelector('h1');

      let element = fixture.nativeElement;
      let form = fixture.debugElement.query(By.css('form')).nativeElement;
      let usernameInput = fixture.debugElement.query(By.css('#uname')).nativeElement;
      let cityInput = fixture.debugElement.query(By.css('#city')).nativeElement;
      fixture.detectChanges();
      usernameInput.value = 'hh';
      usernameInput.blur();
      //dispatchEvent(usernameInput, 'input');
      usernameInput.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      let errors = element.querySelectorAll('#uerror p');
      let errorMessage: string = errors[0].innerText.trim();
      expect(errors.length).toBe(1);
      expect(errorMessage).toBe('it should be 5 character');

    expect(h1.innerText).toMatch(/angular 2 app/i, '<h1> should say something about "Angular 2 App"');
  });
});
