import React from 'react';
import ReactDOM from 'react-dom';
import {TodoListPage} from './pages/TodoListPage';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import {LoginPage} from './pages/LoginPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {PrivateRoute} from './components/PrivateRoute';
import {db} from './firebase/firebaseConfig'
import { doc, setDoc, collection, getDoc } from "firebase/firestore";


const func = async () => {
  
  // Add a new document in collection "cities"
  await setDoc(doc(db, "users", "todos"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
});
}

func()

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

