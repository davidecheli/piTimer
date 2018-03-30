import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  appConfigs: {
    title: string
  };

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.appConfigs = {
      title: this.configService.constants.title
    };
  }

  /*onSetTo(status: string) {
    this.accountsService.updateAccount(this.id, status);
    //this.loggingService.logStatusChange(status);
  }*/

}
