// src/app/data-binding/data-binding.component.ts
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
selector: 'app-data-binding',
standalone: true,
imports: [RouterOutlet],
templateUrl: './data-binding.component.html',
styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
message: string = 'Bonjour, monde!';
constructor() { }
ngOnInit(): void {
}
changerMessage(): void {
this.message = 'Nouveau message!';
}
}