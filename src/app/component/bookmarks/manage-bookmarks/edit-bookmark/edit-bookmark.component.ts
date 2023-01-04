import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Bookmark } from 'src/app/model/bookmark.model';
import { BookmarkService } from 'src/app/service/bookmark.service';

@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrls: ['./edit-bookmark.component.scss']
})
export class EditBookmarkComponent implements OnInit {

  bookmark?: Bookmark

  constructor(private bookmarkService: BookmarkService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paraMap: ParamMap) => {
      const bookmarkId = paraMap.get("id")
      if (typeof bookmarkId == "string") {
        this.bookmark = this.bookmarkService.getBookmark(bookmarkId)
      }
    })
  }

  onFormSubmit(form: NgForm) {
    if (typeof this.bookmark?.id == 'string') {
      this.bookmarkService.updateBookmark(this.bookmark?.id, form.value)
    }
  }

}
