import React from "react";
import { createBrowserRouter } from 'react-router-dom';

import Games from '../pages/Games';
import NotFound from '../pages/not-found'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Games />,
        errorElement: <NotFound />
    }
]);

export default router;