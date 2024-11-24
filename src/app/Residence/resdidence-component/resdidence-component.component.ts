import { Component } from '@angular/core';
import { Residence } from 'src/app/core/Models/Residence';

@Component({
  selector: 'app-resdidence-component',
  templateUrl: './resdidence-component.component.html',
  styleUrls: ['./resdidence-component.component.css']
})
export class ResdidenceComponentComponent {
  searchTerm: string = '';
  listResidenceIsVisible: boolean[] =[false,false,false,false];
  listFavoris:Residence[] =[];
  listResidences:Residence[]=[


    {id:1,"name": "El fel","address":"Borj Cedria",
    status: "Disponible"},
    {id:2,
    "name": "El yasmine",
    "address":"Ezzahra", status:
    "Disponible" },
    {id:3,
    "name": "El Arij",
    "address":"Rades",
    status:"Vendu"},
    {id:4,
    "name": "El Anber",
    "address":"inconnu",
    status: "En Construction"}
    ];
    location:string ="";
    id:number=0;
  


    showLocation(resdidence:Residence ){
      
      if(resdidence.address==="inconnu")
          alert("résidence est inconnu");
        else
        this.listResidenceIsVisible[resdidence.id]=true;
  
    }
    isFavorite(resdidence:Residence):boolean{
      const index = this.listFavoris.findIndex(fav => fav.id === resdidence.id);
      if(index===-1)
        return false
      else
      return true;
  
    }

  addResidenceFavoris(residence: Residence): void {
    const index = this.listFavoris.findIndex(fav => fav.id === residence.id);
    if (this.isFavorite(residence)) {
    
      this.listFavoris.splice(index, 1);
    
    } else {
    
      this.listFavoris.push(residence);
    
    }
  }
  
   
}
