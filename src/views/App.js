import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './Layout';
// import './custom.css';
import MovieModel from '../MovieModel';

import { AuthContextProvider } from '../Context/authContext';
const movieModel = new MovieModel();


export default class App extends Component {
  static displayName = App.name;



  render() {
    return (
      <AuthContextProvider>
        <Layout model={movieModel}>
          <Routes>
            {AppRoutes({ movieModel }).map((route, index) => { // pass movieModel prop to AppRoutes component
              const { element, ...rest } = route;
              return <Route key={index} {...rest} element={element} />;
            })}
          </Routes>
        </Layout>
      </AuthContextProvider>
    );
  }
}
