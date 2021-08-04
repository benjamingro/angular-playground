import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { HnServiceService, article, hnResults } from '../hn-service.service';

import { faAngleDoubleLeft,faAngleDoubleRight,faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-hn-search',
  templateUrl: './hn-search.component.html',
  styleUrls: ['./hn-search.component.scss']
})
export class HnSearchComponent implements OnInit {
  faAngleDoubleLeft = faAngleDoubleLeft; 
  faAngleDoubleRight = faAngleDoubleRight; 
  faAngleLeft = faAngleLeft; 
  faAngleRight = faAngleRight; 

// #region search form
  searchForm = new FormGroup({
    searchInput: new FormControl('', [
      // Validators.required,
    ]),

  });

  get searchInput() { return this.searchForm.get('searchInput'); }

  searchSubmitted = false; 

  searchInProgress = false; 

  public results : hnResults = {hits:[],nbPages:1,page:1};

  onSubmit_search() : void{
    this.searchSubmitted = true;
    if(this.searchForm.valid){
      this.currentPage = 1; 
      this.searchHn(); 
    }
    else{
      console.log('invalid'); 
    }

  }
// #endregion

// #region page form
pageForm = new FormGroup({
  pageInput: new FormControl('', [
    Validators.required,
    Validators.min(1),
    Validators.pattern("^[0-9]*$"),
    (control: AbstractControl) => Validators.max(this.nbPages)(control),
  ]),

});

searchHn() : void {
  const searchTerm : string = this.searchForm.value.searchInput; 
  // console.log(`searchTerm=${searchTerm}`);
  this.searchInProgress = true; 
  this.hnServiceService.searchHn(searchTerm,this.currentPage-1)
  .subscribe(
    response =>{
      this.results = response; 

      this.currentPage = this.results.page + 1; 
      this.nbPages = this.results.nbPages;

      if(response.hits.length<1){
        this.noResults = true; 
      } 
      else { 
        this.noResults = false;
      }
      
      this.searchInProgress = false;
      
    },error=>{
      console.log(error);
      this.searchInProgress = false;
    });
}

get pageInput() { return this.pageForm.get('pageInput'); }

pageSubmitted = false; 

public currentPage = 1; 
public nbPages = 1; 

public noResults = false; 

onSubmit_page() : void { 
  this.pageSubmitted = true; 
  if(this.pageForm.valid)
  {
    this.searchHn(); 
  }
}

 

// pageNav = first, previous, next, last 
public page(pageNav : string) : void {
  switch(pageNav){
    case 'first':
      this.currentPage = 1; 
      this.searchHn();  
      break; 
    case 'previous':
      this.currentPage--; 
      this.searchHn();
      break; 
    case 'next':
      this.currentPage++;
      this.searchHn();
      break; 
    case 'last': 
      this.currentPage = this.nbPages;
      this.searchHn();
      break; 
    default: 
    break; 
  }
}
// #endregion



  constructor(private hnServiceService : HnServiceService) { }

  ngOnInit(): void {
    this.onSubmit_search();
  }

  

 

}
