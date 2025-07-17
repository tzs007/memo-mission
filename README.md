# Memo Mission

Memo Mission is a memory card game built with React and TypeScript. Match pairs of cards to win! This README provides instructions for running the game, configuring settings, and running tests.

## Features

- Fun memory card gameplay
- Responsive design
- Configurable game settings
- Configurable user settings
- Game history to track your results
- Test coverage for game logic and UI

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- Use npm or yarn package manager, but yarn is recommended.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd memo-mission
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Game

To start the game in development mode:

```bash
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to play.

### Building for Production

To create an optimized build:

```bash
npm run build
# or
yarn build
```

The build will be output to the `build/` directory.

## Configuring Settings

Game settings can be configured in the source code:

- Card images: To change cards illustration change the emojis in `utils/game.ts`.

## Running Tests

To run the test suite:

```bash
npm test
# or
yarn test
```

Tests use Jest and React Testing Library. Test files are located in `src/` and use `.test.tsx` or `.spec.tsx` extensions.

## Troubleshooting

- If the game doesn't start, check Node.js version and reinstall dependencies.
- For test failures, check the console output for details.

## License

MIT
