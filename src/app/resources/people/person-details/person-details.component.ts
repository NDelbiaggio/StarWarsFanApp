import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from 'src/app/models/resources';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from 'src/app/services/api/people.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit, OnDestroy {

  person: Person;

  personSubscription: Subscription;

  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let personId = this.route.snapshot.paramMap.get('id');
    this.personSubscription = this.peopleService.getPerson(personId)
      .subscribe(person => {
        this.person = person;
        this.person.homeworld = [person.homeworld];
      });
  }

  ngOnDestroy(){
    this.personSubscription.unsubscribe();
  }

  backToResources(){
    this.router.navigate(['/resources']);
  }

}
