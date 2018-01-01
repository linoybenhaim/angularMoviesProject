import { Component, OnInit , ViewChild  } from '@angular/core';
import {MatSort , MatTableDataSource} from '@angular/material';
import { IMovieData } from '../models-interfaces/models-interfaces';
import { DataCenterService } from '../services/data-center.service';
import { LocalStorageService } from 'angular-2-local-storage';


@Component({
  selector: 'app-list-of-items',
  templateUrl: './list-of-items.component.html',
  styleUrls: ['./list-of-items.component.css']
})
export class ListOfItemsComponent implements OnInit{

    displayedColumns = ['Date', 'MovieName','voteAverage', 'Description' , 'Comment']; 
    empty = false;
    dataSource = new MatTableDataSource();
    newDataSource;

    @ViewChild(MatSort) sort: MatSort;

  
    constructor(
      private dataService: DataCenterService
      ) {     
    }
    ngOnInit(){
      this.getData();
    }

      private getData(){

         this.dataService.getMovieData().subscribe(res => this.dataSource.data = res)
        
    
    }

    private addcomment(item :IMovieData , comment){

      this.dataService.cachedData.find(movie => { 
           if(movie.title == item.title)
          {
             movie.comment = comment;
            }
          });
        }
         
  }
  
