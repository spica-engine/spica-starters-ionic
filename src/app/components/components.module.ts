import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Camera } from "@ionic-native/camera/ngx";
import { Crop } from "@ionic-native/crop/ngx";
import { SpicaProductCardComponent } from './spica-product-card/spica-product-card.component';
import { SpicaSortModalComponent } from './spica-sort-modal/spica-sort-modal.component';
import { SpicaFilterModalComponent } from './spica-filter-modal/spica-filter-modal.component';
import { SpicaShippingAddressComponent } from './spica-shipping-address/spica-shipping-address.component';
import { SpicaConfirmShoppingComponent } from './spica-confirm-shopping/spica-confirm-shopping.component';
import { SpicaAuthorizationComponent } from './spica-authorization/spica-authorization.component';
import { SpicaUserSelectionComponent } from './spica-user-selection/spica-user-selection.component';
import { SpicaUserProfilePictureComponent } from './spica-user-profile-picture/spica-user-profile-picture.component';
import { SpicaUploadImageComponent } from './spica-upload-image/spica-upload-image.component';
import { SpicaItemListComponent } from './spica-item-list/spica-item-list.component';
import { SpicaMenuBarComponent } from './spica-menu-bar/spica-menu-bar.component';
import { SpicaCategoryComponent } from './spica-category/spica-category.component';
import { StarterProjectsComponent } from './starter-projects/starter-projects.component';
import { RevokedUnderlinePipe } from '../pipes/revoked-underline.pipe';
import { SpicaMapIframeComponent } from './spica-map-iframe/spica-map-iframe.component';
import { SpicaRatingComponent } from './spica-rating/spica-rating.component';
import { SpicaScrollCategoryComponent } from './spica-scroll-category/spica-scroll-category.component';
import { SpicaStripePaymentComponent } from './spica-stripe-payment/spica-stripe-payment.component';


@NgModule({
  declarations: [
    SpicaProductCardComponent,
    SpicaSortModalComponent,
    SpicaFilterModalComponent,
    SpicaShippingAddressComponent,
    SpicaConfirmShoppingComponent,
    SpicaAuthorizationComponent,
    SpicaUserSelectionComponent,
    SpicaUserProfilePictureComponent,
    SpicaUploadImageComponent,
    SpicaItemListComponent,
    SpicaMenuBarComponent,
    SpicaCategoryComponent,
    StarterProjectsComponent,
    RevokedUnderlinePipe,
    SpicaMapIframeComponent,
    SpicaRatingComponent,
    SpicaScrollCategoryComponent,
    SpicaStripePaymentComponent
  ],
  exports: [
    SpicaProductCardComponent,
    SpicaSortModalComponent,
    SpicaFilterModalComponent,
    SpicaShippingAddressComponent,
    SpicaConfirmShoppingComponent,
    SpicaAuthorizationComponent,
    SpicaUserSelectionComponent,
    SpicaUserProfilePictureComponent,
    SpicaUploadImageComponent,
    SpicaItemListComponent,
    SpicaMenuBarComponent,
    SpicaCategoryComponent,
    StarterProjectsComponent,
    RevokedUnderlinePipe,
    SpicaMapIframeComponent,
    SpicaRatingComponent,
    SpicaScrollCategoryComponent,
    SpicaStripePaymentComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    IonicModule,
  ],
  providers: [
    HttpClientModule,
    Camera,
    Crop
  ],
})
export class SpicaComponentsModule {}
