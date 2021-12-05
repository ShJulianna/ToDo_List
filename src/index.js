import React from 'react';
import ReactDOM from 'react-dom';
import {TodoListPage} from './pages/TodoListPage';
import {store} from './redux/store';
import {Provider} from 'react-redux';


ReactDOM.render(
  <Provider store={store}>
    <TodoListPage />
  </Provider>,
  document.getElementById('root')
);

