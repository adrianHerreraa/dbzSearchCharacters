import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( private gifsService: GifsService ) { }

  get historial(){
    return this.gifsService.historial;
  }

  onItemTapp( event: string ){
    this.gifsService.buscarGifs( event );
  }

  ngOnInit(): void {
  }

}
