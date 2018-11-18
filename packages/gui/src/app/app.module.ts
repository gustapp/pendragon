import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AgGridModule } from 'ag-grid-angular';

import {PanelModule} from 'primeng/panel';
import {MegaMenuModule} from 'primeng/megamenu';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ToastModule} from 'primeng/toast';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';
// import {SplitButtonModule} from 'primeng/splitbutton';

import {MessageService} from 'primeng/api';
import {MainHeaderComponent} from './components/main-header/main-header.component';
import {MenuComponent} from './components/menu/menu.component';
import {SaleCarouselComponent} from './components/sale-carousel/sale-carousel.component';
import {SaleGalleryComponent} from './components/sale-gallery/sale-gallery.component';
import {FooterComponent} from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MenuComponent,
    SaleCarouselComponent,
    SaleGalleryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([]),
    PanelModule,
    MegaMenuModule,
    BreadcrumbModule,
    ToastModule,
    ProgressSpinnerModule,
    CardModule,
    CarouselModule,
    DataViewModule,
    ButtonModule,
    DropdownModule,
    DialogModule,
    OverlayPanelModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
