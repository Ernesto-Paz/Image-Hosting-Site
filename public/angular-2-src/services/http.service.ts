import {Injectable, EventEmitter} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()

export class GlobalHttpService {
    
  public onImageSubmit = new EventEmitter();

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

public getrecentimages(pageNumber?: Number): Observable<Response>{
if(!pageNumber){
    pageNumber = 0;
}
    console.log("getrecent called. Page " + pageNumber);
    let imageurl = this.rooturl + "recentimages/" + pageNumber;
    return this.http.get(imageurl).map(this.ResponseData);
}
    
public getsingleimage(imagename: string): Observable<any>{
    console.log("getsingleimage called.");
    let imageurl = this.rooturl + imagename;
    return this.http.get(imageurl).map(this.ResponseData);
}
    
public submitform(form: FormData, url: string){
    let xhr: XMLHttpRequest = new XMLHttpRequest();
    let Imagesubmit = this.onImageSubmit;
    xhr.open("POST", url, true);
    xhr.setRequestHeader("enctype", "multipart/form-data");
xhr.onreadystatechange = function(){
if(xhr.readyState == 4 && xhr.status == 200){
    console.log("Imagesubmit event");
    Imagesubmit.emit();
}else if(xhr.readyState == 4){
    console.log("Imagesubmit event");
    Imagesubmit.emit();
}

}
    xhr.send(form);
}

public submitformloop(form: FormData, url: string){
    let Imagesubmit = this.onImageSubmit;
function request(form, url) {
    let xhr: XMLHttpRequest = new XMLHttpRequest();
    //let Imagesubmit = this.onImageSubmit;
    xhr.open("POST", url, true);
    xhr.setRequestHeader("enctype", "multipart/form-data");
xhr.onreadystatechange = function(){
if(xhr.readyState == 4 && xhr.status == 200){
    //Imagesubmit.emit();
}

}
    xhr.send(form);
    
}
for(let i=0; i<1000; i++){

    request(form, url);
if(i == 999){
Imagesubmit.emit();
}
}
    

}    
    
public ResponseData(res: Response){
    console.log("ResponseData Function")
    let body = res.json();
    return body || {error: "404"}

}
}
