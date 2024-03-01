import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './components/title/title.component';
import { ShoppingContainerComponent } from './components/shopping-container/shopping-container.component';
import { ShoppingComponent } from './components/shopping-container/shopping/shopping.component';
import { ResumeComponent } from './components/shopping-container/resume/resume.component';
import { HoverBoutiqueDirective } from './directives/hover-boutique.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleComponent,
    ShoppingContainerComponent,
    ShoppingComponent,
    ResumeComponent,
    HoverBoutiqueDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
