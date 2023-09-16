import { Component, inject } from '@angular/core';
import { MemoryService } from 'src/app/services/memory.service';
import selection from './selection.json';

export type Card = {
  icon: string;
  name: string;
  point: number;
  description: string;
  addition?: string;
  checked?: boolean;
  aganist?: string[];
};

export type Selection = {
  name: string;
  description: string;
  detail?: string;
  multi: boolean;
  layout: string;
  selection: Card[];
};

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss'],
})
export class SelectionComponent {
  private memory = inject(MemoryService);

  selection: Selection[] = selection;

  get scoreStyle() {
    return {
      'background-color':
        'hsl(' + (2 + 200 * (this.score / 100)) + ', 80%, 42%)',
    };
  }

  get isCompeleted(): boolean {
    return (
      this.score >= 0 &&
      this.selection.every((item) =>
        item.selection.some((card) => card.checked)
      )
    );
  }

  get score(): number {
    return (
      70 +
      this.selection
        .map((item) =>
          item.selection
            .filter((card) => card.checked)
            .reduce((p, c) => (p += c.point), 0)
        )
        .reduce((p, c) => (p += c), 0)
    );
  }

  checkAganist(card: Card, item: Selection): void {
    if (!item.multi) {
      item.selection.forEach(
        (loopItem) => loopItem !== card && (loopItem.checked = false)
      );
    } else if (card.aganist?.length) {
      item.selection.forEach(
        (loopItem) =>
          card.aganist?.includes(loopItem.name) && (loopItem.checked = false)
      );
    }
  }
}
