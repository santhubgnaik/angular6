import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { DetailsComponent } from './details/details.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';
import { LazyloadingComponent } from './lazyloading/lazyloading.component';
import { LazyParentComponent } from './lazy-parent/lazy-parent.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { CrudoperationComponent } from './crudoperation/crudoperation.component';
import { CrudaddproductComponent } from './crudaddproduct/crudaddproduct.component';
import { CrudupdateproductComponent } from './crudupdateproduct/crudupdateproduct.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'twowaydatabinding',
    component: TwowaydatabindingComponent
  },
  {
    path: 'interpolation',
    component: InterpolationComponent
  },
  {
    path: 'lazyloading',
    component: LazyloadingComponent
  },
  {
    path: 'load-me',
    component: LazyParentComponent
  },
  {
    path: 'lazy',
    loadChildren: './lazy.module#LazyModule'
  },
  {
    path: 'structuraldirectives',
    component: StructuraldirectivesComponent
  },
  {
    path: 'crud',
    component: CrudoperationComponent
  },
  {
    path: 'product',
    component: CrudaddproductComponent
  },
  {
    path: 'updateProduct/:id',
    component: CrudupdateproductComponent
  },
  {
    path: 'parent',
    component: ParentComponent
  },
  {
    path: 'child',
    component: ChildComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
