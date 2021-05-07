import { Component, OnInit } from '@angular/core';
import { AdService } from '../ad-banner/ad.service';
import { AdItem } from '../ad-banner/ad-item';
@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit {
  ads: AdItem[];
  color:string = 'blue';
  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}
