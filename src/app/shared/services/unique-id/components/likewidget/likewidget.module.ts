import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { UniqueIdService } from "../../unique-id.service";
import { LikeWidgetComponent } from "./likewidget.component";

@NgModule({
  declarations: [LikeWidgetComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [LikeWidgetComponent],
  providers: [UniqueIdService]
})

export class LikeWidgetModule {

}