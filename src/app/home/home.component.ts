import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Tuấn Hoàn';
  public age = 20;
  public traiCay = ['Táo', 'Nho', 'Cam', 'Quýt', 'Bưởi'];

  constructor() { }

  ngOnInit(): void {
    console.log('trai cay = ', this.traiCay)
  }

  public ResetName():void{
    console.log('tên: ' + this.name);
    this.name = "";
  }

}
