import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    title = 'about-page';
    textPath = 'assets/texts/about.txt';
    paragraphs = [];
    
    constructor(private http: HttpClient) {
        let pageData = null;
        this.http.get('assets/texts/about.txt', {responseType: 'text'}).subscribe(data => pageData = data);
        console.log(pageData);
    }

    ngOnInit(){
    }
}