import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerViewComponent } from './career-view/career-view.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatStepperModule} from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { ProjectTimelineComponent } from './project-timeline/project-timeline.component';
import { CorporationTimelineComponent } from './corporation-timeline/corporation-timeline.component';
import { ProjectComponent } from './project/project.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    CareerViewComponent,
    ProjectTimelineComponent,
    CorporationTimelineComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatStepperModule,
    MatIconModule,
    MatChipsModule,
    MatListModule,
    MatDividerModule,
    MatExpansionModule,
    MatTabsModule
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ]
})
export class CareerModule { }
