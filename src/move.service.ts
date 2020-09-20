import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable()
export class moveService {
    url: string = 'http://localhost:4200';
    constructor(public http: HttpClient) {}

    doActivity(activity) {
        return this.http.get(`${this.url}/${activity}`).toPromise()
    }
}
