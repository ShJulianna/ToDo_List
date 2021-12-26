import React from 'react';
import ReactDOM from 'react-dom';
import {TodoListPage} from './pages/TodoListPage';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import {LoginPage} from './pages/LoginPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {PrivateRoute} from './components/PrivateRoute';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route element={<PrivateRoute>
          <TodoListPage />
          </PrivateRoute>} path='/todos'/>
        <Route element={ <LoginPage/>} path='/'/>
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);

