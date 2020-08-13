import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [
        trigger('myAwesomeAnimation', [
            state('small', style({
                fontSize: '10px'
            })),
            state('large', style({
                fontSize: '20px'
            })),
            transition('small => void', animate('200ms ease-in')),
            transition('large => void', animate('900ms ease-in')),
            transition('void => small', animate('2000ms ease-in')),
            transition('void => large', animate('9000ms ease-in')),
        ])
    ]
})
export class HomeComponent implements OnInit {
    title = 'home-page'
    state: string = 'smallguy';
    
    ngOnInit(){
        // Maybe animation/transitions here???
    }

    animateMe() {
        this.state = (this.state === 'small' ? 'large' : 'small');
    }
}