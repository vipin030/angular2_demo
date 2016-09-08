import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Hero} from './hero';
@Injectable()
export class AppService {
	constructor(private http:Http){}
	getData(): Observable<Hero[]>{
		return this.http.get("app/test.json")
						.map((response) => response.json());
	}
}

