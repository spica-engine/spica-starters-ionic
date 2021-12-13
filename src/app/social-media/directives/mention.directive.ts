import { Directive, ElementRef, EventEmitter, HostListener, Output, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[mention]'
})
export class MentionDirective {

  searchedText: string = "";
  mentioning: boolean = false;

  @Output() mentioned = new EventEmitter<{text:string,caret:number}>(); 
  @Output() stopped = new EventEmitter<boolean>(); 


  constructor(private element: ElementRef) { }

  @HostListener('document:input',['$event']) search(e){
    if(e.data == "@"){
      this.searchedText = "";
      this.mentioning = true;
    }else if(e.data == "#"){
      this.searchedText = "";
      this.mentioning = true;
    }else if(e.data == " " && this.mentioning == true){
      this.stopped.emit(true);
      this.mentioning = false;
      this.searchedText = "";
    }else if(e.inputType == "deleteContentBackward"){
      this.searchedText = this.searchedText.slice(0,-1);
      let isTagging = this.isContinueTagging(e.target.selectionStart);
      if(isTagging.continue){
        this.mentioning = true;
        this.searchedText = isTagging.tag;
      }
      
      this.mentioned.emit({text:this.searchedText, caret: e.target.selectionStart});
      if(this.searchedText == ""){
        this.stopped.emit(true);
      }
    }

    if(this.mentioning && e.data){
      this.searchedText += e.data;
      this.mentioned.emit({text:this.searchedText, caret: e.target.selectionStart});
    }
  }

  isContinueTagging(caretPosition){
    let splittedPhrase = this.element.nativeElement.value.slice(0,caretPosition);
    let tag = splittedPhrase.split(" ");
    tag = tag[tag.length - 1];
    if(tag[0] == "@" || tag[0] == "#"){
      return {continue: true, tag}
    }
    return {continue: false};
  }
}
