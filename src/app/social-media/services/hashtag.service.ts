import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import {hashtag} from "../services/bucket"

@Injectable({
  providedIn: "root",
})
export class HashtagService {
  constructor(private dataService: DataService) {}

  async checkTagCreate(content, tagsArr) {
    if (content) {
      content = content.replace(/\n/g, " ").replace(/\r/g, " ");
      let words = content.split(" ");

      words = words
        .filter((item) => item.startsWith("#") && item.length > 3)
        .map((item) => item.split("#").join(""));

      tagsArr.forEach((tag) => {
        words = words.filter((item) => item != tag.hashtag);
      });

      for (let word of words) {
        let tag = await hashtag
          .getAll({ queryParams: { filter: { hashtag: word } } })

        if (tag.length == 0) {
          let newTag = await hashtag
            .insert({ hashtag: word, times_used: 1 })
          tagsArr.push(newTag);
        } else {
          tagsArr.push(tag[0]);
        }
      }
    }
    return tagsArr;
  }
}
