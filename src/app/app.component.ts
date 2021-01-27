import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('appTitle', { static: false })
  appTitleRef: ElementRef;

  title = 'shop';

  ngAfterViewInit(): void {
    this.appTitleRef.nativeElement.textContent = this.title;
  }
}
