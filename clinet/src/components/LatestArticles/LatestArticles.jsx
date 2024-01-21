import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, Button, CardActionArea, CardActions } from '@mui/material';
import Divider from '@mui/material/Divider';

const popularPrivateTours = [
    {
        title: "Wine Tasting Experience",
        city: "Barcelona",
        price: 60,
        duration: 3,
        reviews: 110,
        stars: 4.6,
        description: "Indulge in the flavors of Catalonia with a wine tasting experience in Barcelona, sampling exquisite local wines paired with regional delicacies."
    },
    {
        title: "Art Gallery Tour",
        city: "Paris",
        price: 45,
        duration: 2,
        reviews: 100,
        stars: 4.7,
        description: "Immerse yourself in the world of art with a curated tour of Parisian art galleries, featuring masterpieces from renowned artists and emerging talents."
    },
    {
        title: "Scuba Diving Adventure",
        city: "Bali",
        price: 100,
        duration: 5,
        reviews: 75,
        stars: 4.9,
        description: "Dive into the crystal-clear waters of Bali for an unforgettable scuba diving adventure, exploring vibrant coral reefs and encountering diverse marine life."
    },
    {
        title: "Concert Under the Stars",
        city: "New York",
        price: 75,
        duration: 4.5,
        reviews: 130,
        stars: 4.8,
        description: "Experience the magic of live music under the stars in New York, with a concert featuring talented artists performing in an enchanting outdoor setting."
    }
];

const LatestArticles = () => {
    return (
        <div className="container mx-auto my-10">
            <h4 className="text-3xl ">
                <span className="border-b-[3px] pb-1 border-blue-600 w-fit">
                    Latest
                </span>{" "}
                Articles
            </h4>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {popularPrivateTours.map((tourSpot, index) => (<Card key={index} sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://img.freepik.com/free-vector/portugal-tourism-concept-with-cuisine-people-sights-symbols-flat_1284-31948.jpg?w=826&t=st=1705567550~exp=1705568150~hmac=dc9d3a1b70289efb2b2b9b81650b6c7e85c2448c18a926e12e80a521b51fa1af"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant='h6' component="div" className='text-xl font-medium mb-2 '>
                                {tourSpot?.title}
                            </Typography>
                            <div className='space-x-5'>
                                <Typography gutterBottom variant="small" component="span" className='inline-block bg-gray-200 bg-opacity-70 text-gray-600 rounded px-3 py-1 text-xs mr-2' >
                                    {tourSpot?.city}
                                </Typography>
                            </div>
                            <Typography variant="body2" color="text.secondary" className='my-10'>
                                {tourSpot?.description}
                            </Typography>
                        </CardContent>
                        <Divider light />
                        <CardActions className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                <span className='text-blue-500 text-lg font-base'>Travis Howard</span>
                            </div>
                            <span className='text-gray-700 text-xs font-semibold opacity-70'>Dec 27, 2023</span>
                        </CardActions>
                    </CardActionArea>
                </Card>))}
            </div>
            <div className='text-center my-10'>
                <button className='text-gray-500 border border-gray-500 p-3 text-sm hover:text-gray-900 font-semibold rounded inherit'>View More New Articles</button>
            </div>
        </div>
    );
};

export default LatestArticles;