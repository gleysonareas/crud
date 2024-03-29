import { Component, OnInit } from '@angular/core';
import { HeaderService } from "src/app/core/services/header.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  public get title(): string {
    return this.headerService.headerData.title;
  }
  public get icon(): string {
    return this.headerService.headerData.icon;
  }
  public get routeUrl(): string {
    return this.headerService.headerData.routerUrl;
  }

}
