import { Injectable } from '@angular/core';
import { Bookmark } from '../model/bookmark.model';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  bookmarks?: Bookmark[]

  constructor() { }

  getBookmarks() {
    return this.bookmarks
  }

  getBookmark(id: string) {
    return this.bookmarks?.find(b => b.id === id)
  }

  addBookmark(bookmark: Bookmark) {
    this.bookmarks?.push(bookmark)
  }

  updateBookmark(id: string, updatedField: Partial<Bookmark>) {
    const bookmarkId = this.getBookmark(id)
    if (typeof bookmarkId == "string"){
      Object.assign(bookmarkId, updatedField)
    }
  }

  deleteBookmark(id: string) {
    const bookmarkIndex = this.bookmarks?.findIndex(b => b.id === id)
    if (bookmarkIndex == -1) return
    this.bookmarks?.splice(bookmarkIndex, 1)
  }
}
