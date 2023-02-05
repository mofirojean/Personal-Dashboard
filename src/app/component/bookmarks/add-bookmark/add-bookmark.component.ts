import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Bookmark } from 'src/app/model/bookmark.model';
import { BookmarkService } from 'src/app/service/bookmark.service';
import { NoticationService } from 'src/app/service/notication.service';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent implements OnInit {

  constructor(
    private bookmarkSevice: BookmarkService, 
    private router: Router,
    private notificationService: NoticationService
    ) { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm) {
    const {name, url} = form.value // distructuring
    const bookmark = new Bookmark(name, url)
    this.bookmarkSevice.addBookmark(bookmark)
    this.router.navigateByUrl('/bookmarks')
    this.notificationService.show("Bookmark Created Sucessfully!")
  }
}
