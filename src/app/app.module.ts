import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatroomPageComponent } from './pages/chatroom-page/chatroom-page.component';
import { SidebarComponent } from './pages/components/sidebar/sidebar.component';
import { HeaderComponent } from './pages/components/header/header.component';
import { SenderComponent } from './pages/components/sender/sender.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MessageZoneComponent } from './pages/components/message-zone/message-zone.component';
import { DetailsPanelComponent } from './pages/components/details-panel/details-panel.component';
import { DiscussionComponent } from './pages/components/discussion/discussion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterPageComponent,
    ChatroomPageComponent,
    SidebarComponent,
    HeaderComponent,
    SenderComponent,
    MessageZoneComponent,
    DetailsPanelComponent,
    DiscussionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
