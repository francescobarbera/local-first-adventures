# Local first adventures

## Introduction
The project leverages the principles of local-first software to ensure seamless offline support and enhanced user experience.
The application is a simple counter that shows the potential of local-first software in real-world applications.

## Features
- **Offline Capability**: Work without an internet connection. All changes are synced once the connection is restored.
- **Data Ownership**: Your data resides in your device, giving you full control and privacy.
- **Conflict Resolution**: Intelligent conflict resolution mechanisms to handle data discrepancies.
- **Real-time Collaboration**: Collaborate with others in real-time while maintaining offline-first principles.

The project uses:
- [Vite](https://vitejs.dev/) for the frontend.
- [TinyBase](https://tinybase.org/) as local first data store.
- [YJS](https://yjs.dev/) to handle the real-time collaboration.

## Installation

Install the dependencies:

```
yarn install
```

## Usage

To start the development vite server and the yjs server, run:

```
yarn dev

PORT=1234 node ./node_modules/y-websocket/bin/server.cjs
```
