import { Component, inject, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  // description = input<string>();
  // section = input<string>();
  private readonly route = inject(ActivatedRoute);

  description =
    this.route.snapshot.data['description'] as string;

  section =
    this.route.snapshot.data['section'] as string;

  source = this.route.snapshot.queryParamMap.get('source');
  version = this.route.snapshot.queryParamMap.get('version');
}
