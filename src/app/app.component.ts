import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, interval } from 'rxjs';

@Component({
  selector: 'bento-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  time$ = interval(100).pipe(map(() => new Date()));
  greeting$ = interval(100).pipe(map(() => this.greeting()));

  private greeting() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return 'Good Morning ☕️';
    if (hour >= 12 && hour < 18) return 'Good Afternoon ☀️';
    if (hour >= 18 && hour < 22) return 'Good Evening 🌃';
    if (hour >= 22 || hour < 5) return 'Goodnight 🌙';
    return 'Have a good day 😄';
  }
}
