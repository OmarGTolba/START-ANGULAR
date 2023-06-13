import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { aboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { homeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
{path:'portfolio', component:PortfolioComponent},
{path:'contact',component:ContactComponent},
{path:'about',component:aboutComponent},
{path:"**", component:homeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
