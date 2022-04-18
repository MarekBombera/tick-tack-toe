import ReactDOMClient from 'react-dom/client';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { rootReducer } from './reducers';
import { App } from './components/App';

export const store = createStore(rootReducer);

const root = ReactDOMClient.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<>
		<Provider store={store}>
			<App />
		</Provider>
	</>
);
