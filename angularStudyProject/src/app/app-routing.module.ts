import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewoneComponent } from './components/nestedRoute/newone/newone.component';
import { NewsComponent } from './components/nestedRoute/news/news.component';
import { NewtwoComponent } from './components/nestedRoute/newtwo/newtwo.component';
import { ProductoneComponent } from './components/nestedRoute/productone/productone.component';
import { ProductsComponent } from './components/nestedRoute/products/products.component';
import { ProducttwoComponent } from './components/nestedRoute/producttwo/producttwo.component';
import { RouteOneComponent } from './components/routers/route-one/route-one.component';
import { RouteThreeComponent } from './components/routers/route-three/route-three.component';
import { RouteTwoComponent } from './components/routers/route-two/route-two.component';
import { RouterValueChildDynamicComponent } from './components/routers/router-value-child-dynamic/router-value-child-dynamic.component';
import { RouterValueChildJsComponent } from './components/routers/router-value-child-js/router-value-child-js.component';
import { RouterValueChildComponent } from './components/routers/router-value-child/router-value-child.component';
import { RouterValueParentJsComponent } from './components/routers/router-value-parent-js/router-value-parent-js.component';
import { RouterValueParentComponent } from './components/routers/router-value-parent/router-value-parent.component';

const routes: Routes = [
  {
    path: 'routeOne', component: RouteOneComponent
  },
  {
    path: 'routeTwo', component: RouteTwoComponent
  },
  {
    path: 'routeThree', component: RouteThreeComponent
  },
  {
    path: 'routeValueParent', component: RouterValueParentComponent
  },
  {
    path: 'routeValueChild', component: RouterValueChildComponent
  },
  {
    path: 'routeValueChildDynamic', component: RouterValueChildDynamicComponent
  },
  {
    path: 'routeValueParentJs', component: RouterValueParentJsComponent
  },
  {
    path: 'routeValueChildJs/:aid', component: RouterValueChildJsComponent
  },
  // ????????????????????????????????????????????????
  // {
  //   path: '**', redirectTo: 'routeOne'
  // },
  // ?????????????????????????????????
  {
    path:'news',component:NewsComponent,
    children:[
      {path:'newone',component:NewoneComponent},
      {path:'newtwo',component:NewtwoComponent},
      // ??????????????????????????????
      {path: '**', redirectTo: 'newone'}
    ]
  },
  {
    path:'products',component:ProductsComponent,
    children:[
      {path:'productone',component:ProductoneComponent},
      {path:'producttwo',component:ProducttwoComponent},
      {path: '**', redirectTo: 'productone'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
