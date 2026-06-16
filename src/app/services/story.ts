import { Injectable, signal } from '@angular/core';
import { Story } from '@models/story.model';
const STORAGE_KEY = 'instagram_stories';
const TTL_MS = 24 * 60 * 60 * 1000; // 24 horas em ms

@Injectable({ providedIn: 'root' })
export class StoryService {
  // Signal reativo com a lista de stories
  stories = signal<Story[]>([]);

  constructor() {
    this.loadFromStorage();
  }

  /** Carrega stories do LocalStorage e remove as expiradas */
  private loadFromStorage(): void {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;

    const all: Story[] = JSON.parse(raw);
    const now = Date.now();
    const valid = all.filter((s) => now - s.createdAt < TTL_MS);

    // Salva de volta sem as expiradas
    localStorage.setItem(STORAGE_KEY, JSON.stringify(valid));
    this.stories.set(valid);
  }

  /** Adiciona uma nova story com imagem em Base64 */
  addStory(imageBase64: string): void {
    const newStory: Story = {
      id: crypto.randomUUID(),
      imageBase64,
      createdAt: Date.now(),
      username: 'Você',
    };

    const updated = [newStory, ...this.stories()];
    this.stories.set(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }

  /** Remove uma story pelo ID */
  removeStory(id: string): void {
    const updated = this.stories().filter((s) => s.id !== id);
    this.stories.set(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }

  /** Retorna o tempo decorrido de uma story em formato legível */
  getTimeRemaining(createdAt: number): string {
    const elapsed = Date.now() - createdAt;
    const hours = Math.floor(elapsed / (1000 * 60 * 60));
    const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));

    if (hours > 0) return `${hours}h atrás`;
    if (minutes > 0) return `${minutes}m atrás`;
    return 'agora';
  }
}
