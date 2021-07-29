import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlaygroundComponent } from './playground/playground.component';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { MyPlaygroundComponent } from './my-playground/my-playground.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ClockComponent } from './clock/clock.component';
import { CounterComponent } from './counter/counter.component';
import { CounterUiComponent } from './counter-ui/counter-ui.component';
import { ColorNumbersComponent } from './color-numbers/color-numbers.component';
import { ColorNumbersUiComponent } from './color-numbers-ui/color-numbers-ui.component';
import { TextMirrorComponent } from './text-mirror/text-mirror.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AtmMachineComponent } from './atm-machine/atm-machine.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaygroundComponent,
    MyNavbarComponent,
    MyPlaygroundComponent,
    HelloWorldComponent,
    ClockComponent,
    CounterComponent,
    CounterUiComponent,
    ColorNumbersComponent,
    ColorNumbersUiComponent,
    TextMirrorComponent,
    BasicFormComponent,
    TodoListComponent,
    AtmMachineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
