import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { VideosComponent } from './features/videos/videos.component';
import { TutorialsComponent } from './features/tutorials/tutorials.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './features/about/about.component';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from './features/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    VideosComponent,
    TutorialsComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
