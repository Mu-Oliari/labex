import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { Home } from '../pages/Home';
import { TripsList } from '../pages/TripsList';
import { Detail } from '../pages/Detail';
import { Admin } from '../pages/Admin';
import { AdminTripsList } from '../pages/Admin.TripsList';
import { AdminCreateTrip } from '../pages/Admin.CreateTrip';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route exact path='/lista-de-viagens'>
                    <TripsList/>
                </Route>
                <Route exact path='/viagem/:id'>
                    <Detail/>
                </Route>
                <Route exact path='/admin'>
                    <Admin/>
                </Route>
                <Route exact path='/admin/lista-de-viagens'>
                    <AdminTripsList/>
                </Route>
                <Route exact path='/admin/criar-viagem'>
                    <AdminCreateTrip/>
                </Route>
                <Route path='/'>
                    <div>404 - Algo de errado não está certo!</div>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};