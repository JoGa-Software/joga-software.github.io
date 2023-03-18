import React from "react";
import { createBrowserRouter } from 'react-router-dom';

import Games from '../pages/Games';
import NotFound from '../pages/not-found'
import SSCPrivacyPolicy from '../pages/SSC_Privacy_Policy'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Games />,
        errorElement: <NotFound />
    },
    {
        path: '/sscprivacypolicy',
        element: <SSCPrivacyPolicy />,
        errorElement: <NotFound />
    }
]);

export default router;