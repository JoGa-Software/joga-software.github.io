import React from "react";
import { createHashRouter } from 'react-router-dom';

import Games from '../pages/Games';
import NotFound from '../pages/not-found';
import SSCPrivacyPolicy from '../pages/SSC_Privacy_Policy';

const router = createHashRouter([
    {
        path: '/',
        element: <Games />,
        errorElement: <NotFound />
    },
    {
        index: true,
        path: '/sscprivacypolicy',
        element: <SSCPrivacyPolicy />,
        errorElement: <NotFound />
    }
]);

export default router;