import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuestsService {

  constructor() { }

  getGuestList() {
    return [
      {id: 1, name: "Pedro", category: "Boream", couple: 2, allergies: null, table: null},
      {id: 2, name: "Maria", category: "Boream", couple: 1, allergies: 'Gluten Free', table: null},
      {id: 3, name: "Apolonia", category: "Master", couple: null, allergies: null, table: 1} 
    ];
  }

  getGuestById(id) {
    const list = this.getGuestList();
    return list.find((guest)=> guest.id === id);
  }
}
