import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OurTourComponent } from "./our-tour/our-tour.component";
import { HomeFeaturesComponent } from "./home-features/home-features.component";
import { WhyChooseComponent } from "./why-choose/why-choose.component";
import { OurClientComponent } from "./our-client/our-client.component";
import { HomeResolverGuard } from "./guard/home-resolver.guard";

@NgModule({
  declarations: [
    OurTourComponent,
    HomeFeaturesComponent,
    WhyChooseComponent,
    OurClientComponent
  ],
  imports: [CommonModule],
  exports: [
    OurTourComponent,
    HomeFeaturesComponent,
    WhyChooseComponent,
    OurClientComponent
  ],
  providers: [HomeResolverGuard]
})
export class HomeModule {}
