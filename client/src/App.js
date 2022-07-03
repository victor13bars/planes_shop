import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from "./pages/home-page/home-page";
import {paths} from "./paths";
import {PlanePage} from "./pages/plane-page";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={paths.home} element={<HomePage/>}/>
                <Route path={`${paths.plane}/:id`} element={<PlanePage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
