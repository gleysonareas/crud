import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { HeaderData } from "../../shared/models/header-data.model";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Início',
    icon: 'home',
    routerUrl: ''
  })

  constructor() { }

  public get headerData(): HeaderData {
    return this._headerData.value
  }

  public set headerData(headerData: HeaderData) {
    this._headerData.next(headerData)
  }
}
