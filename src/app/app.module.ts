import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { MainheaderComponent } from './mainheader/mainheader.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlertDirective } from './directives/alert.directive';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';
import { LazyloadingComponent } from './lazyloading/lazyloading.component';
import { LazyParentComponent } from './lazy-parent/lazy-parent.component';
import { LazyChildComponent  } from './lazy-child/lazy-child.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { CrudoperationComponent } from './crudoperation/crudoperation.component';
import { CrudaddproductComponent } from './crudaddproduct/crudaddproduct.component';
import { CrudupdateproductComponent } from './crudupdateproduct/crudupdateproduct.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SearchComponent } from './search/search.component';
import { GrdFilterPipe } from '../app/posts/searchFilter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostsComponent,
    UsersComponent,
    DetailsComponent,
    MainheaderComponent,
    LoginComponent,
    RegisterComponent,
    AlertDirective,
    TwowaydatabindingComponent,
    LazyloadingComponent,
    LazyParentComponent,
    LazyChildComponent,
    InterpolationComponent,
    StructuraldirectivesComponent,
    CrudoperationComponent,
    CrudaddproductComponent,
    CrudupdateproductComponent,
    ParentComponent,
    ChildComponent,
    SearchComponent,
    GrdFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
