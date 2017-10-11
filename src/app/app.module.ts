import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';
import { MomentModule } from 'angular2-moment';
import { HackernewsApiService } from './hackernews-api.service';
import { DomainPipe } from './domain.pipe';
import { ItemCommentsComponent } from './item-comments/item-comments.component';
import { routing } from './app.routes';
import { CommentTreeComponent } from './comment-tree/comment-tree.component';
import { CommentComponent } from './comment/comment.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoriesComponent,
    FooterComponent,
    ItemComponent,
    DomainPipe,
    ItemCommentsComponent,
    CommentTreeComponent,
    CommentComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MomentModule,
    routing
  ],
  providers: [HackernewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
