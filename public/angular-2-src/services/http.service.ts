import {Injectable, EventEmitter} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class GlobalHttpService{
    
  public onImageSubmit = new EventEmitter();
    public onUserLogin = new EventEmitter();
    public isUserLoggedIn = false;
    public username = "default";
    public adminLevel = null;
    public imagesArray = [];
   


public checkSession(){   
    console.log("ngInit http");
    var that = this
    function processresponse(res){
    console.log(res);
    if(res.username !== null && res.adminLevel !== null){
    that.isUserLoggedIn = true;
    that.username = res.username;
    that.adminLevel = res.adminLevel;
    }
}
        
    let xhr: XMLHttpRequest = new XMLHttpRequest();
    xhr.open("GET","/api/user/checksession", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log("Form Submission Callback");
            let res = JSON.parse(xhr.response);
            processresponse(res);
        }else if(xhr.readyState == 4){
            console.log("Form Submission Callback");
            let res = JSON.parse(xhr.response);
            processresponse(res);
        }
    }
        xhr.send();
        
}
    
    
public getImagesArray(): any[]{
    
    return this.imagesArray;
    
}

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
        if(xhr.response){
            let res = JSON.parse(xhr.response);
                        callback(res);
            }
        else{
            callback();
            }

        }else if(xhr.readyState == 4){
            console.log("Form Submission Callback");
            let res = JSON.parse(xhr.response);
            callback(res);
        }
    }
        xhr.send(data);
    
} 
    
public postRequestObservable(url: string, data: any): Observable <any>{
    
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });
     return this.http.post(url, data, options)
                    .map(this.ResponseData);
    
    
}
    
public ResponseData(res: Response){
    console.log("ResponseData Function")
    let body = res.json();
    return body || {error: "404"}

}
}
