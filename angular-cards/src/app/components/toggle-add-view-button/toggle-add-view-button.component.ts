import { Component, OnInit } from '@angular/core';
import {StatesService} from '../../services/states.service'
@Component({
  selector: 'app-toggle-add-view-button',
  templateUrl: './toggle-add-view-button.component.html',
  styleUrls: ['./toggle-add-view-button.component.css']
})
export class ToggleAddViewButtonComponent implements OnInit {

  addComponentHidden:boolean;
  constructor(private stateService:StatesService) { }

  ngOnInit(): void {
    this.addComponentHidden = true; 
    this.stateService.setAddComponentHidden(this.addComponentHidden);
    this.stateService.getAddComponentHidden().subscribe(value=>{this.addComponentHidden=value});
  }
  toggleAddView(): void{
    this.stateService.setAddComponentHidden(!this.addComponentHidden);
  }
}
