import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {CommentsProvider} from "./context/CommentsContext";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

    <CommentsProvider>
        <App />
    </CommentsProvider>

);

