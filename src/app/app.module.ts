import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TesthtmltagComponent } from './testhtmltag/testhtmltag.component';
import { TestattributeComponent } from './testattribute/testattribute.component';
import { TestclassComponent } from './testclass/testclass.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TesthtmltagComponent,
    TestattributeComponent,
    TestclassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
