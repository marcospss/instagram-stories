import { Component, output } from '@angular/core';

@Component({
  selector: 'app-add-story-button',
  standalone: true,
  imports: [],
  templateUrl: './add-story-button.html',
})
export class AddStoryButton {
  storyAdded = output<string>();

  triggerUpload(): void {
    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
    input?.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    // Validar tamanho máximo (5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Imagem muito grande. Máximo: 5MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      this.processImage(base64);
    };
    reader.readAsDataURL(file);

    // Limpar input para permitir re-upload do mesmo arquivo
    input.value = '';
  }

  /** Redimensiona a imagem para máx. 1080x1920px conforme os requisitos */
  private processImage(base64: string): void {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const MAX_W = 1080;
      const MAX_H = 1920;

      let { width, height } = img;

      if (width > MAX_W || height > MAX_H) {
        const ratio = Math.min(MAX_W / width, MAX_H / height);
        width = Math.round(width * ratio);
        height = Math.round(height * ratio);
      }

      canvas.width = width;
      canvas.height = height;
      canvas.getContext('2d')!.drawImage(img, 0, 0, width, height);

      const resized = canvas.toDataURL('image/jpeg', 0.85);
      this.storyAdded.emit(resized);
    };
    img.src = base64;
  }
}
