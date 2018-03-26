import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  newForm = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirect(pagename: string) {
    this.router.navigate(['/' + pagename]);
  }
}
