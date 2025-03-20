import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-comp-list',
  imports: [RouterLink],
  templateUrl: './comp-list.component.html',
  styleUrl: './comp-list.component.css'
})
export class CompListComponent {
  tiles = [
    { title: 'Components',navurl:"components", description: 'A component in Angular is a building block of the application UI' },
   // { title: 'Tile 2',navurl:"", description: 'This is the description for tile 2.' },
   // { title: 'Tile 3',navurl:"", description: 'This is the description for tile 3.' },
   // { title: 'Tile 3',navurl:"", description: 'This is the description for tile 3.' },
   // { title: 'Tile 3',navurl:"", description: 'This is the description for tile 3.' },
   // { title: 'Tile 4',navurl:"", description: 'This is the description for tile 4.' }
 ];
 listComponents: any =[
    { title: 'Dynacmic',link:"/dynamic", description: 'Dynamically add or remove form controls based on the user\'s input or other conditions.' },
    { title: 'Parent',link:"/parent", description: 'Parent Component' },
    { title: 'Data Bind',link:"/data-bind", description: 'This is the description for tile 3.' },
    { title: 'Tile 3',link:"", description: 'This is the description for tile 3.' },
    { title: 'Tile 3',link:"", description: 'This is the description for tile 3.' },
    { title: 'Tile 4',link:"", description: 'This is the description for tile 4.' }
 ];
 istilesList: boolean = true;

 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.istilesList = true;
 }

 lstData: any =[];

 onTileCick(item: any){
  if (item.navurl == 'components') {
    this.loadComponetData();
  }
 }

 loadComponetData(){
  this.lstData = this.listComponents;
  this.istilesList = false;
 }

}
