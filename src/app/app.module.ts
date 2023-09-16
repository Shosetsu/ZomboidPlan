import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrowComponent } from './components/arrow/arrow.component';
import { GuideComponent } from './page/guide/guide.component';
import { SelectionComponent } from './page/selection/selection.component';
import { CountPipe } from './pipes/count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GuideComponent,
    SelectionComponent,
    ArrowComponent,
    CountPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
