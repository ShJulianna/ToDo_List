import React from 'react';
import ReactDOM from 'react-dom';
import {TodoListPage} from './pages/TodoListPage';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import {LoginPage} from './pages/LoginPage';

ReactDOM.render(
  <Provider store={store}>
    {/* <TodoListPage /> */}
    <LoginPage/>
  </Provider>,
  document.getElementById('root')
);

