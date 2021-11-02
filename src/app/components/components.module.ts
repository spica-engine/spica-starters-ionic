import { NgModule } from "@angular/core";
import { HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { SpicaCardComponent } from "./spica-card/spica-card.component";
import { SpicaListComponent } from "./spica-list/spica-list.component";
import { SpicaProductCardComponent } from "./spica-product-card/spica-product-card.component";
import { SpicaSortModalComponent } from "./spica-sort-modal/spica-sort-modal.component";
import { SpicaFilterModalComponent } from "./spica-filter-modal/spica-filter-modal.component";
import { SpicaShippingAddressComponent } from "./spica-shipping-address/spica-shipping-address.component";
import { SpicaConfirmShoppingComponent } from "./spica-confirm-shopping/spica-confirm-shopping.component";

@NgModule({
  declarations: [ 
      SpicaCardComponent,
      SpicaListComponent,
      SpicaProductCardComponent,
      SpicaSortModalComponent,
      SpicaFilterModalComponent,
      SpicaShippingAddressComponent,
      SpicaConfirmShoppingComponent
   ],
  exports: [
      SpicaCardComponent,
      SpicaListComponent,
      SpicaProductCardComponent,
      SpicaSortModalComponent,
      SpicaFilterModalComponent,
      SpicaShippingAddressComponent,
      SpicaConfirmShoppingComponent
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
