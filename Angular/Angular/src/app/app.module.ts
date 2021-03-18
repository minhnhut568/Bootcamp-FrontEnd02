import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

import { Baitap1Module } from './baitap1/baitap1.module';
import { Baitap2Module } from './baitap2/baitap2.module';

// NgModule: Type decorator - Khai báo cho angular biết đây là một module
@NgModule({
  // Nơi khai báo các components do module quản lý
  // AppComponent đang được AppModule quản lý
  // Component bắt buộc phải được quản lý bởi 1 module
  declarations: [AppComponent, DemoComponent],
  // Nơi khai báo các module cần sử dụng
  // Những module do angular cung cấp: RouterModule, FormsModule, HttpClientModule
  // Những module do mình tạo: HomeModule, MovieModule,...
  imports: [BrowserModule, AppRoutingModule, Baitap1Module, Baitap2Module],
  // Nơi khai báo các services cần sử dụng
  providers: [],
  // Khai báo AppComponent khởi chạy đầu tiên
  bootstrap: [AppComponent],
})
export class AppModule {}
