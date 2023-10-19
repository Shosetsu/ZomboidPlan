import { Component, inject } from '@angular/core';
import { MemoryService } from 'src/app/services/memory.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent {
  private memory = inject(MemoryService);
  checkedMap = Object.keys(this.memory.getData<Record<string, boolean>>('sl'));
}
