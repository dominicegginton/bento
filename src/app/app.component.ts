import { ChangeDetectionStrategy, Component } from '@angular/core';
import { filter, map, pairwise, startWith, timer } from 'rxjs';

@Component({
  selector: 'bento-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly time$ = timer(0, 1000).pipe(
    map(() => new Date()),
    startWith(new Date('01/01/2000')),
    pairwise(),
    filter(
      ([prev, curr]) =>
        prev.getMinutes() < curr.getMinutes() ||
        prev.getHours() < curr.getHours()
    ),
    map(([_, curr]) => curr)
  );

  readonly greeting$ = this.time$.pipe(
    map((time) => {
      const hours = time.getHours();
      if (hours >= 5 && hours < 12) return 'Good Morning ☕️';
      if (hours >= 12 && hours < 18) return 'Good Afternoon ☀️';
      if (hours >= 18 && hours < 22) return 'Good Evening 🌃';
      if (hours >= 22 || hours < 5) return 'Goodnight 🌙';
      return 'Have a good day 😄';
    })
  );
}
