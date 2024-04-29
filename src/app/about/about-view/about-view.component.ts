import { Component, Inject } from '@angular/core';
import { QrDialogComponent } from '../qr-dialog/qr-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrl: './about-view.component.css'
})
export class AboutViewComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(QrDialogComponent, {
      width: '255',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
