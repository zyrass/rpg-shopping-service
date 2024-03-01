import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './components/title/title.component';
import { ShoppingContainerComponent } from './components/shopping-container/shopping-container.component';
import { ShoppingComponent } from './components/shopping-container/shopping/shopping.component';
import { ResumeComponent } from './components/shopping-container/resume/resume.component';
import { HoverBoutiqueDirective } from './directives/hover-boutique.directive';
import { HoverPotionSantePetiteDirective } from './directives/hover-potion-sante-petite.directive';
import { HoverPotionSanteGrandeDirective } from './directives/hover-potion-sante-grande.directive';
import { HoverPotionSanteElixirDirective } from './directives/hover-potion-sante-elixir.directive';
import { HoverPotionManaElixirDirective } from './directives/hover-potion-mana-elixir.directive';
import { HoverPotionManaGrandeDirective } from './directives/hover-potion-mana-grande.directive';
import { HoverPotionManaPetiteDirective } from './directives/hover-potion-mana-petite.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleComponent,
    ShoppingContainerComponent,
    ShoppingComponent,
    ResumeComponent,
    HoverBoutiqueDirective,
    HoverPotionSantePetiteDirective,
    HoverPotionSanteGrandeDirective,
    HoverPotionSanteElixirDirective,
    HoverPotionManaElixirDirective,
    HoverPotionManaGrandeDirective,
    HoverPotionManaPetiteDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
