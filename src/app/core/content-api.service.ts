import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ContentApiService {

  constructor(private http: HttpClient) {
  }

  postData(form: FormGroup) {
    return this.http.post('https://jsonplaceholder.typicode.com/post', JSON.stringify(form.value, null, 2));
  }
}
