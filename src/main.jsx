import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createStore } from "tinybase";
import { Provider } from "tinybase/ui-react";
import * as Y from "yjs";
import { createYjsPersister } from 'tinybase/persisters/persister-yjs';
import { createLocalPersister } from "tinybase/persisters/persister-browser";
import { WebsocketProvider } from "y-websocket";

const doc = new Y.Doc();

const wsProvider = new WebsocketProvider(
  "ws://localhost:1234",
  "adventures-with-local-first",
  doc,
);

wsProvider.on("status", (event) => {
  console.log(event.status);
});

const store = createStore();
store.setValue("counter", 0);

const localPersister = createLocalPersister(store, "local-persister");
await localPersister.startAutoLoad();
await localPersister.startAutoSave();
const persister = createYjsPersister(store, doc);
await persister.startAutoSave();
await persister.startAutoLoad();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
