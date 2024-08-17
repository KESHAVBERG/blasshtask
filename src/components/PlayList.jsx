import { Box, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

const PlayList = () => {
    const [playLists, setPlaylists] = useState([]);

    useEffect(() => {
        const apiUrl = 'https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getAllPlayList';
        const headers = {
            'X-Api-Key': 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr',
            'X-Tenant-Key': 'TYKE070323',
            'Content-Type': 'application/json',
        };
        const body = JSON.stringify({
            "Content_Type": 2
        });
        fetch(apiUrl, {
            method: 'POST',
            headers: headers,
            body: body
          })
            .then(response => response.json())
            .then(data => setPlaylists(data))
            .catch(error => console.error('Error fetching data:', error));
    },[]);
    const data =playLists.data||[];
    console.log(data)
    return (
        <Box>
            <Grid spacing={3}>
               {
                data.forEach(e=>console.log(e))
               }
            </Grid>
        </Box>
    )
}

export default PlayList