import { Component } from '@angular/core';

@Component({
    selector: 'sb',
    template: `<h1>
        <h1 [style.color]="clr">This is a Blue Heading</h1>
        <p [style.backgroundColor]="'green'">123</p>
    </h1>`
})
export class sbcomponent {
    clr = 'blue';
}
