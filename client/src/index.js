import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, IndexRoute } from 'react-router-dom';




import Layout from './pages/Layout';


const app = document.getElementById('root');

// Will need to update this method to work with Router and Routes
ReactDOM.render(
    <Layout/>


    , app);