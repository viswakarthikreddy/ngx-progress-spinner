# NGX Progress Spinner

It will show the static progress spinner with support of different size of width and height

![image](https://github.com/user-attachments/assets/8fa2a2a8-ca80-4249-a061-7602f33f4b1b)

# Install

First, install `ngx-progress-spinner`

```sh
npm i ngx-progress-spinner
```

Add the following in code in component.html

```sh
    <app-progress-spinner [percentage]="30" [color]="'#ff6347'" [width]="10" [height]="10"></app-progress-spinner>
```

In the component.ts file include in imports

```sh
    import { Component } from '@angular/core';
    import { RouterOutlet } from '@angular/router';
    import { ProgressSpinnerComponent } from 'ngx-progress-spinner';

    @Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ProgressSpinnerComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
    })
    export class AppComponent {
    }

```
# License
[MIT](https://github.com/viswakarthikreddy/ngx-progress-spinner/master/LICENSE)
