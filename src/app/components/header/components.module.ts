import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "./header.component";

@NgModule({
    declarations : [
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        IonicModule,
    ],
    exports : [
        HeaderComponent,
              
    ]

})
export class ComponentsModule{}