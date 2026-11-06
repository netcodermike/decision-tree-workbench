# Implementation

The primary language is JavaScript. Core logic lives in `src/core.js` and is separated from the interaction/command interface where practical.

The application validates user inputs, performs the documented deterministic transformation, and formats a local result. It does not execute input text as code or send local files to third-party services.

The buildless HTML shell uses accessible native inputs and buttons, a responsive CSS grid, and a canvas visualization. `ui.js` provides only shared display/audio primitives; the project-specific algorithms live in the core module. `app.js` owns resource lifecycles, interaction state, and error reporting. TypeScript projects compile with `tsc`; JavaScript projects run directly.

## Checks

The repository tests exercise the domain algorithm with valid examples and invalid/boundary cases. CI uses synthetic fixtures and does not start paid services or connect to user accounts. See `README.md` and `.github/workflows/ci.yml` for exact commands.

## Extending the project

Add format support or new operations with corresponding tests. Preserve validation and explicit format boundaries. Keep generated data and secrets outside source control.
