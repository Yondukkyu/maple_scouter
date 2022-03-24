import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { ClipboardModule } from '@angular/cdk/clipboard';


import { ScouterComponent } from './containers/scouter.component';

import { ScouterRoutingModule } from './scouter-routing.module';



@NgModule({
  declarations: [
    ScouterComponent,


  ],
  imports: [
    CommonModule,
    ScouterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatMenuModule,
    MatRadioModule,
    MatDialogModule,
    ClipboardModule,
  ]
})
export class ScouterModule { }
