import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, interval } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bento-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private interval$ = interval(100);
  time$ = this.interval$.pipe(map(() => new Date()));
  greeting$ = this.interval$.pipe(map(() => this.greeting()));

  private greeting() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return 'Good Morning ☕️';
    if (hour >= 12 && hour < 18) return 'Good Afternoon ☀️';
    if (hour >= 18 && hour < 22) return 'Good Evening 🌃';
    if (hour >= 22 || hour < 5) return 'Goodnight 🌙';
    return 'Have a good day 😄';
  }
}
