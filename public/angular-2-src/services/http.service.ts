import {Injectable, EventEmitter} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()

export class GlobalHttpService {
    
  public onImageSubmit = new EventEmitter();
    public onUserLogin = new EventEmitter();
    public isUserLoggedIn = false;
    public username = "default";
    public ImagesArray = [];

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
    
public submitForm(form: FormData, url: string, method: string, callback: Function){
    let xhr: XMLHttpRequest = new XMLHttpRequest();
    let Imagesubmit = this.onImageSubmit;
    xhr.open(method , url, true);
    xhr.setRequestHeader("enctype", "multipart/form-data");
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log("Form Submission Callback");
            callback(xhr.response);
        }else if(xhr.readyState == 4){
            console.log("Form Submission Callback");
            callback();
        }

    }
        xhr.send(form);
    }
    
public sendRequest(url: string, method: string, data: any, callback: Function){
    
    let xhr: XMLHttpRequest = new XMLHttpRequest();
    xhr.open(method, url, true);
    data = JSON.stringify(data);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log("Form Submission Callback");
            callback(xhr.response);
        }else if(xhr.readyState == 4){
            console.log("Form Submission Callback");
            callback(xhr.response);
        }

    }
        xhr.send(data);
    
    
    
    
}  
    
public ResponseData(res: Response){
    console.log("ResponseData Function")
    let body = res.json();
    return body || {error: "404"}

}
}
