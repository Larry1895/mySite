import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutViewComponent } from './about-view/about-view.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { QrDialogComponent } from './qr-dialog/qr-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { QRCodeModule } from 'angularx-qrcode';
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  declarations: [
    AboutViewComponent,
    QrDialogComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    QRCodeModule,
    ClipboardModule,
    MatDividerModule,
    MatChipsModule,
  ]
})
export class AboutModule { }
