# InstagramStories

### Final File Structure

```
instagram-stories/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── story-list/
│   │   │   │   └── story-list.component.ts
│   │   │   ├── story-item/
│   │   │   │   └── story-item.component.ts
│   │   │   ├── story-viewer/
│   │   │   │   └── story-viewer.component.ts
│   │   │   └── add-story-button/
│   │   │       └── add-story-button.component.ts
│   │   ├── models/
│   │   │   └── story.model.ts
│   │   ├── services/
│   │   │   └── story.service.ts
│   │   └── app.component.ts
│   └── styles.css
├── .postcssrc.json
└── package.json
```

### Functionality checklist

- [x] Botão **+** dispara o seletor de arquivo
- [x] Imagem aparece na lista como um círculo com gradiente
- [x] Clicar em uma story abre o viewer em tela cheia
- [x] Barra de progresso avança automaticamente (5s por story)
- [x] Clicar na metade esquerda vai para story anterior
- [x] Clicar na metade direita (ou aguardar) vai para próxima
- [x] Swipe esquerda/direita navega entre stories (mobile)
- [x] Stories expiram após 24h (verificar ao recarregar a página)
- [x] Botão "Remover story" deleta do LocalStorage
- [x] Layout responsivo em mobile e desktop

---

## 💡 Angular Concepts Used

| Conceito                         | Onde foi usado                                 |
| -------------------------------- | ---------------------------------------------- |
| `signal()`                       | Estado reativo no `StoryService` e componentes |
| `computed()`                     | `currentStory` derivado de `currentIndex`      |
| `effect()`                       | Iniciar/parar timer quando o viewer abre/fecha |
| `input()` / `input.required()`   | Props dos componentes filhos                   |
| `output()`                       | Eventos emitidos pelos filhos                  |
| `@for` + `@empty`                | Novo bloco de controle de fluxo (Angular 17+)  |
| `@if`                            | Renderização condicional do viewer             |
| Standalone Components            | Todos os componentes sem `NgModule`            |
| Serviço com `providedIn: 'root'` | Singleton do `StoryService`                    |

---

## 🎨 Tailwind CSS — Key Classes Used

| Utility                                                        | Purpose                            |
| -------------------------------------------------------------- | ---------------------------------- |
| `fixed inset-0 z-50`                                           | Modal em tela cheia                |
| `bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600` | Anel estilo Instagram              |
| `overflow-x-auto`                                              | Scroll horizontal na lista         |
| `object-contain` / `object-cover`                              | Fit de imagem                      |
| `backdrop-blur-sm`                                             | Efeito de desfoque no rodapé       |
| `transition-colors`                                            | Hover suave nos botões             |
| `select-none`                                                  | Evita seleção de texto ao clicar   |
| `truncate`                                                     | Nome longo cortado com reticências |

---

> **References:**
>
> - [Angular Signals](https://angular.dev/guide/signals)
> - [Angular Control Flow](https://angular.dev/guide/templates/control-flow)
> - [Tailwind CSS Docs](https://tailwindcss.com/docs)
> - [roadmap.sh — Stories Feature](https://roadmap.sh/projects/stories-feature)

# Project setup and execution

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.0.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
