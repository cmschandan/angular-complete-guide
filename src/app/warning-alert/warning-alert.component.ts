import { Component } from "@angular/core";

@Component({
    selector: 'app-warning-alert',
    template: `
    <p>This is a warning, you are in danger</p>
    `,
    styles : [`
    p{
        color: black;
        background-color: mistyrose;
        border: 1px solid red;
        padding: 20px;
    }
    `]
})

export class WarningAlertComponent{

}