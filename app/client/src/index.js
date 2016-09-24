import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

//components
import App from './components/app';
import DashboardMain from './components/adminlte/pages/DashboardMain';
import Upload from './components/adminlte/pages/Upload';
import Schools from './components/adminlte/pages/Schools';
import Students from './components/adminlte/pages/Students';
import SingleStudent from './components/adminlte/pages/SingleStudent';
import SingleCollege from './components/adminlte/pages/SingleCollege';
import Colleges from './components/adminlte/pages/Colleges';

//redux store
import store, { history } from './store';

ReactDOM.render(
  <Provider store={store}>
  	<Router history={history}>
    	<Route path='/' component={App}>
    		<IndexRoute component={DashboardMain} />
    		<Route path='upload' component={Upload} />
    		<Route path='schools' component={Schools} />
    		<Route path='students' component={Students} />
        <Route path='colleges' component={Colleges} />
        <Route path='student/:contactID' component={SingleStudent} />
        <Route path='college/:fullName' component={SingleCollege} />
    	</Route>
    </Router>
  </Provider>
  , document.querySelector('#root'));