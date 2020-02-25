import {
  Component,
  OnInit
} from '@angular/core';
import {
  StatesService
} from '../../services/states.service'

@Component({
  selector: 'app-add-card-form',
  templateUrl: './add-card-form.component.html',
  styleUrls: ['./add-card-form.component.css']
})
export class AddCardFormComponent implements OnInit {

  hidden: boolean;
  constructor(private stateService: StatesService) {}

  ngOnInit(): void {
    this.stateService.getAddComponentHidden().subscribe(value => {
      this.hidden = value
    }); //Subscribe to StateService to see if form should be displayed
  }
  setStyle() {
    let style = {
      'display': this.hidden ? 'none' : 'block'
    }
    return style;
  }
}
