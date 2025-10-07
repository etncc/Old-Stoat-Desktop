# Old Stoat Desktop

## ⚠️ Deprecation notice ⚠️

This project is an simply revive of the revite desktop client using the old version of Stoat until the new client is finished.
You can check out the new Desktop Client [here](https://github.com/stoatchat/for-desktop).

## Description

This is a desktop application for Stoat built on Electron.

## Stack

-   [Electron](https://electronjs.org/)
-   [Electron Builder](https://www.electron.build/)

## Quick Start

Get Old Stoat Desktop up and running locally.

```
git clone https://github.com/etncc/Old-Stoat-Desktop
cd Old-Stoat-Desktop
yarn
yarn build:bundle
yarn start
```

## CLI Commands

| Command             | Description                                                                         |
| ------------------- | ----------------------------------------------------------------------------------- |
| `yarn build:bundle` | Builds the application bundle from TypeScript files.                                |
| `yarn watch:bundle` | Watches TypeScript files for changes and rebuilds the application bundle on change. |
| `yarn start`        | Starts the application.                                                             |
| `yarn eb`           | Runs electron-builder.                                                              |
| `yarn release`      | Prepares a release. Requires a valid .env file.                                     |
| `yarn clean`        | Cleans the application bundle.                                                      |

There are also numerous OS-specific commands related to building and testing, all prefixed with `yarn`:

-   `build:linux` `build:mac`, `build:windows`
    -   Builds the application for the specified platform.

## License

Old Stoat Desktop is licensed under the [GNU Affero General Public License v3.0](https://github.com/etncc/Old-Stoat-Desktop/blob/master/LICENSE).
