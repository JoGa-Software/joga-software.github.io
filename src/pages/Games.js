import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

class Games extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            content: [
                {title: "2 Many Eggs", image: require("../assets/2me.png"), link: "https://apps.apple.com/us/app/2-many-eggs/id1618833947"},
                {title: "The Weather Machine", image: require("../assets/twm.png"), link: "https://jogasoftware07.itch.io/the-weather-machine"},
                {title: "Seal of Darkness", image: require("../assets/sod.png"), link: "https://jogasoftware07.itch.io/seal-of-darkness"},
                {title: "Tides of Time", image: require("../assets/tot.png"), link: "https://jogasoftware07.itch.io/tides-of-time"},
            ]
        }
    }

    render() {
        return (
            <Stack direction="column" alignItems='center' style={{background: "#f5f5f5"}}>
                <h3>Hi! Welcome to my site. My name is Gabriel Sanchez and below is a collection of games I have made. Enjoy!</h3>
                <Grid 
                    container 
                    spacing={0}
                    justifyContent="center"
                >
                    { this.state.content.map((object, index) => (
                        <Grid key={index}>
                            <Card sx={{ margin:1, minWidth: 345, maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="256"
                                        image={object.image}
                                        onClick={() => {window.location.href = object.link;}}
                                    />
                                    <CardContent>
                                        <Typography 
                                            gutterBottom 
                                            variant="h5" 
                                            component="div"
                                            style={{
                                                fontFamily: "helvetica"
                                            }}
                                        >
                                            {object.title}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        );
    }
}

export default Games;