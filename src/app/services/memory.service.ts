import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MemoryService {
  private cache?: Record<string, unknown>;

  getData<T>(key: string): T {
    this.cache ??= this.initCache();
    return this.cache[key] as T;
  }

  setData(key: string, value: unknown): void {
    this.cache![key] = value;
    this.setCache();
  }

  private initCache(): Record<string, unknown> {
    return JSON.parse(localStorage.getItem('zomboid-plan') ?? '{}');
  }
  private setCache(): void {
    localStorage.setItem('zomboid-plan', JSON.stringify(this.cache));
  }
}
