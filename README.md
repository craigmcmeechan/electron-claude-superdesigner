# Electron Super Designer Monorepo

This is a Rush Stack monorepo for developing Electron applications with React and shared Node.js libraries.

## Project Structure

```
├── apps/
│   └── electron-superdesigner/     # Main Electron application
├── libraries/
│   └── shared-utils/               # Shared utility functions
├── common/
│   └── config/                     # Shared configurations (TypeScript, ESLint, Prettier)
└── rush.json                       # Rush configuration
```

## Getting Started

### Prerequisites

- Node.js (version 18.20.3 or later, or 20.14.0 or later)
- npm or pnpm

### Installation

1. Install Rush globally:
   ```bash
   npm install -g @microsoft/rush
   ```

2. Install dependencies:
   ```bash
   rush install
   ```

3. Build all projects:
   ```bash
   rush build
   ```

## Development

### Running the Electron App

Start the Electron application in development mode:
```bash
rush dev:electron
```

### Building Projects

Build all projects:
```bash
rush build
```

Build a specific project:
```bash
rush build --to electron-superdesigner
```

### Linting

Run ESLint for all projects:
```bash
rush lint
```

### Testing

Run tests for all projects:
```bash
rush test
```

## Project Details

### Apps

#### electron-superdesigner
- **Location**: `apps/electron-superdesigner/`
- **Description**: Main Electron application with React renderer
- **Technologies**: Electron, React, TypeScript, Webpack

### Libraries

#### shared-utils
- **Location**: `libraries/shared-utils/`
- **Description**: Shared utility functions
- **Technologies**: TypeScript, Jest

## Configuration

### TypeScript
Shared TypeScript configuration is located in `common/config/rush/tsconfig.json`.

### ESLint
Shared ESLint configuration is located in `common/config/rush/.eslintrc.js`.

### Prettier
Shared Prettier configuration is located in `common/config/rush/.prettierrc`.

## Adding New Projects

1. Create a new folder in `apps/` or `libraries/`
2. Add the project configuration to `rush.json` under the `projects` array
3. Run `rush install` to update dependencies
4. Run `rush build` to build the new project

## Contributing

1. Follow the existing code style and conventions
2. Run `rush lint` and `rush test` before submitting changes
3. Use `rush change` to document your changes for the changelog

## License

This project is licensed under the MIT License.
