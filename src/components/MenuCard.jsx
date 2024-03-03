import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import CardImage from '../assets/CardImage.png';

const MenuCard = () => {
    return (
        <Box sx={{ margin: '50px' }} >
            <Card sx={{ maxWidth: 345, bgcolor: 'rgb(42, 42, 42)', color: 'white', borderRadius: 6 }}>
                <CardMedia
                    component="img"
                    height="300px"
                    image={CardImage}
                    alt="Napolitana Pizza"
                />
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Familiar 2x1 Napolitana
                    </Typography>
                    <Typography variant="body1" paragraph>
                        New 2x1 promotion
                    </Typography>
                </CardContent>
                <Button variant="contained" color="error" style={{ marginLeft: '15px', marginBottom: '15px', borderRadius: 20 }}>
                Comprar $3.99
                </Button>
            </Card>
        </Box>
    );
};

export default MenuCard;
