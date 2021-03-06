import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-death-details',
  templateUrl: './death-details.page.html',
  styleUrls: ['./death-details.page.scss'],
})
export class DeathDetailsPage implements OnInit {

  death: any;
  deathId = null;


  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    this.deathId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.deathId);
    this.api.getDeath(this.deathId).subscribe(res => {
      this.death = res[0];
    })
    }
}
