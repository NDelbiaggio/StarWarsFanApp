import { Component, OnInit } from '@angular/core';
import { Starship } from 'src/app/models/resources';
import { StarshipsService } from 'src/app/services/api/starships.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.scss']
})
export class StarshipDetailsComponent implements OnInit {

  starship: Starship;

  starshipSubscription: Subscription;

  constructor(
    private starshipsService: StarshipsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let starshipId = this.route.snapshot.paramMap.get('id');
    this.starshipSubscription = this.starshipsService.getStarship(starshipId)
      .subscribe(starship => {
        this.starship = starship;
      });
  }

  ngOnDestroy(){
    this.starshipSubscription.unsubscribe();
  }

  backToResources(){
    this.router.navigate(['/resources']);
  }

}
