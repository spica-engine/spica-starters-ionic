import { NgModule } from "@angular/core";
import { HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { SpicaCardComponent } from "./spica-card/spica-card.component";
import { SpicaListComponent } from "./spica-list/spica-list.component";
@NgModule({
  declarations: [ 
      SpicaCardComponent,
      SpicaListComponent
   ],
  exports: [
      SpicaCardComponent,
      SpicaListComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    IonicModule
  ],
  providers: [
    HttpClientModule,
  ],
})
export class ComponentsModule {}
