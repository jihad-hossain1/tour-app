import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, CardActionArea, CardActions } from '@mui/material';
import Divider from '@mui/material/Divider';
const popularPrivateTours = [
    {
        title: "City Bike Tour",
        city: "Amsterdam",
        price: 40,
        duration: 3,
        reviews: 120,
        stars: 4.8,
        description: "Explore the picturesque streets of Amsterdam on a guided bike tour, discovering hidden gems and iconic landmarks along the way."
    },
    {
        title: "Historical Walking Tour",
        city: "Rome",
        price: 35,
        duration: 2.5,
        reviews: 95,
        stars: 4.7,
        description: "Immerse yourself in the rich history of Rome as you walk through ancient ruins, charming streets, and iconic monuments with an expert guide."
    },
    {
        title: "Culinary Adventure",
        city: "Tokyo",
        price: 80,
        duration: 4,
        reviews: 150,
        stars: 4.9,
        description: "Embark on a culinary journey through Tokyo's vibrant food scene, savoring delicious street food, traditional dishes, and modern gastronomic delights."
    },
    {
        title: "Nature Hike",
        city: "Vancouver",
        price: 50,
        duration: 3.5,
        reviews: 80,
        stars: 4.5,
        description: "Escape the city and reconnect with nature on a guided hike in the breathtaking landscapes surrounding Vancouver, enjoying fresh air and stunning views."
    },
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


const NewPrivateTours = () => {
    return (
        <div className="container mx-auto my-10">
            <h4 className="text-3xl ">
                <span className="border-b-[3px] pb-1 border-blue-600 w-fit">
                    New
                </span>{" "}
                Private Tours
            </h4>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {popularPrivateTours.map((tourSpot, index) => (<Card key={index} sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                                <Typography gutterBottom variant="small" component="span" className='inline-block bg-gray-200 bg-opacity-70 text-gray-600 rounded px-3 py-1 text-xs mr-2' >
                                    {tourSpot?.duration} hours
                                </Typography>
                            </div>
                            <Typography variant="body2" color="text.secondary" className='my-10'>
                                {tourSpot?.description}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className='my-10'>
                                From <span className='text-xl font-bold text-black'>${tourSpot?.price}</span> /per group
                            </Typography>


                        </CardContent>
                        <Divider light />
                        <CardActions sx={{ p: 2 }}>
                            <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            <div className='grid gap-1'>
                                <span className='text-blue-500 text-lg font-medium'>Travis Howard</span>
                            </div>
                        </CardActions>
                    </CardActionArea>
                </Card>))}
            </div>
        </div >
    );
};

export default NewPrivateTours;