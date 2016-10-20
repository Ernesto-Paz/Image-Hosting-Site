import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()

export class GlobalHttpService {

    //private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    //private options = new RequestOptions({ headers: this.headers });
    public rooturl: string = "/api/";
    constructor (private http: Http) {

}

public getlast10(): Observable <any>{
            console.log("getlast10 called.");
            let imageurl = this.rooturl + "last10images";
            return this.http.get(imageurl).map(this.ResponseData);
    }
    
public getsingleimage(imagename: string): Observable<any>{
    console.log("getsingleimage called.");
    let imageurl = this.rooturl + imagename;
    return this.http.get(imageurl).map(this.ResponseData);
}
public ResponseData(res: Response){
    console.log("ResponseData Function")
    let body = res.json();
    return body || {error: "404"}

}
}
