import { Box, Grid, Card, CardContent, Typography, CardMedia, List, ListItem } from '@mui/material';
import React, { useEffect, useState } from 'react'

const PlayList = () => {
    const SelectedListStyle = {

    }

    const [playLists, setPlaylists] = useState([]);
    const [playListSelected, setplayListSelected] = useState(false);
    const [playlistItems, setPlayListItems] = useState([]);
    const [collectionOfItemsinPlatList, setcollectionOfItemsinPlatList] = useState([])

    function fetctionPlayListItems() {
        const apiUrl = "https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1";
        const headers = {
            'X-Api-Key': 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr',
            'X-Tenant-Key': 'TYKE070323',
            'Content-Type': 'application/json',
        };
        const body = JSON.stringify({
            "Index": 1,
            "ContentType": [2],
            "IsTagged": false,
            "URL": ""
        });
        fetch(apiUrl, {
            method: 'POST',
            headers: headers,
            body: body
        })
            .then(response => response.json())
            .then(data => setPlayListItems(data))
            .catch(error => console.error('Error fetching data:', error));

    }

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

        fetctionPlayListItems();
    }, []);

    let itemsinPlaylist = []
    function addselectedItems(arr) {
        const playListData = playlistItems.data.Feeds || []
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < playListData.length; j++) {
                if (arr[i] === playListData[j].EngagementPostId) {
                    itemsinPlaylist.push(playListData[j])
                }
            }
        }
        setplayListSelected(true);
        setcollectionOfItemsinPlatList(itemsinPlaylist)
    }
    const data = playLists.data || [];

    return <>
        <Box sx={{ display: 'flex', p: 3 }}>
            <Box sx={{ flexShrink: 1, minWidth: 300 }}>
                <Grid container spacing={0}>
                    {
                        data.map((playlist, index) => {
                            return <>
                                <Grid item xs={12} sm={5} m={5} lg={4} key={index}>
                                    <Card onClick={() => addselectedItems(playlist.Post_Ids)}>
                                        <CardContent>
                                            <Typography variant="h6" >
                                                {playlist.Name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {playlist.Description}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {playlist.Post_Ids.length} videos
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </>
                        })
                    }
                </Grid>
            </Box>
            {playListSelected ? <Box className="selectedListBox" sx={{ flexGrow: 3, mr: 2, maxHeight:"80vh", overflow:"auto", '&::-webkit-scrollbar': {
            display: 'none', 
          },
          '-ms-overflow-style': 'none', 
          'scrollbar-width': 'none', }}>
                <List>
                {collectionOfItemsinPlatList.map(ele => {
                    console.log(ele)
                    return <>
                    <ListItem >
                        <Card sx={{width:"300px", height:"300px", zIndex:3}} >
                            <CardContent>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={ele.Thumbnail_URL}
                                    alt="GFG Logo"
                                />
                                <Typography variant="h6" >
                                    {ele.Thumbnail_Title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </ListItem>
                    </>
                })}
                </List>
            </Box> : <p>No PlayList Selected</p>}

        </Box>

    </>
}

export default PlayList