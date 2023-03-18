import React from "react";
import Card from '@mui/material/Card';

var __html__ = require('../html/sscPrivacyPolicy.html');

class SSCPrivacyPolicy extends React.Component {

    render() {
        return (
            <Card sx={{ margin:10, textAlign: 'left'}}>
                {React.createElement("hi", {dangerouslySetInnerHTML: {__html: __html__}})}
            </Card>
        )
    }
}

export default SSCPrivacyPolicy;