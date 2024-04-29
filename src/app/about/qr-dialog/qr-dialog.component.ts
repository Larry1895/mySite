import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-qr-dialog',
  templateUrl: './qr-dialog.component.html',
  styleUrl: './qr-dialog.component.css'
})
export class QrDialogComponent {

  constructor(public dialogRef: MatDialogRef<QrDialogComponent>) {}
}
