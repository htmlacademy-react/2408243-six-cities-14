import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
// import { offers } from './mocks/offer';
import { reviews } from './mocks/review';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App offers={[]} reviews={reviews} /> */}
      <App reviews={reviews} />
    </Provider>
  </React.StrictMode>
);
