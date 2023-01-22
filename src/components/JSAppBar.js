import React from "react";
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import router from '../routes';
import Stack from '@mui/material/Stack';

class JSAppBar extends React.Component {

    static routeMap = {
        0: "/",
        1: "/notFound"
    }

    constructor(props) {
        super(props);

        this.state = {
            tabIndex: 0
        }
    }

    handleChange(event, newValue){
        this.setState({
            tabIndex: newValue
        }, () => {
            router.navigate(JSAppBar.routeMap[newValue])
        });
    };

    render() {

        const {
            tabIndex
        } = this.state;

        return (
            <AppBar color="primary" position="static">
                <Stack direction="column">
                    <Typography
                            variant="h6"
                            noWrap
                            href="/"
                            sx={{
                                p: 1,
                                fontFamily: 'sans-serif',
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                    >
                    JoGa Software
                    </Typography>
                    <Tabs 
                        textColor="secondary"
                        indicatorColor={"secondary"}
                        fontFamily="sans-serif"
                        value={tabIndex} 
                        onChange={(event, newValue) => this.handleChange(event, newValue)}
                    >
                        <Tab sx={{ color: "white"}} label="Games" />
                        {/* <Tab sx={{ color: "white"}} label="Not Found" /> */}
                    </Tabs>
                </Stack>
            </AppBar>
        );
    }
}

export default JSAppBar;