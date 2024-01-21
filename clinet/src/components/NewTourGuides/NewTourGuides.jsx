import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const newTourGuides = [
    {
        name: "Alice Johnson",
        country: "United States",
        description: "Alice is a software engineer based in Silicon Valley. She is passionate about artificial intelligence and contributes to open-source projects in her free time."
    },
    {
        name: "Carlos Rodriguez",
        country: "Spain",
        description: "Carlos is a professional chef known for his innovative culinary creations. He owns a popular restaurant in Barcelona, where he combines traditional Spanish flavors with modern techniques."
    },
    {
        name: "Mia Suzuki",
        country: "Japan",
        description: "Mia is a talented manga artist from Tokyo. Her work has gained international recognition, and she often explores themes of identity and cultural diversity in her stories."
    },
    {
        name: "Ahmed Khan",
        country: "Pakistan",
        description: "Ahmed is an environmental activist based in Lahore. He works tirelessly to raise awareness about climate change and advocates for sustainable practices in his community."
    },
    {
        name: "Elena Petrova",
        country: "Russia",
        description: "Elena is a professional ballet dancer in Moscow. She has performed in renowned theaters worldwide and is celebrated for her graceful and expressive performances."
    },
    {
        name: "Chinwe Onyeama",
        country: "Nigeria",
        description: "Chinwe is a social entrepreneur in Lagos, dedicated to empowering women through education and skill development programs. She co-founded a nonprofit organization that has impacted many lives."
    },
    {
        name: "Andres Morales",
        country: "Colombia",
        description: "Andres is a wildlife photographer from Bogotá. His stunning images capture the beauty of Colombia's diverse ecosystems and raise awareness about the importance of conservation."
    },
    {
        name: "Sophie Dubois",
        country: "France",
        description: "Sophie is a fashion designer based in Paris. Her avant-garde creations have been featured in leading fashion shows, and she is known for pushing the boundaries of conventional design."
    }
];


const NewTourGuides = () => {

    return (
        <div className="container mx-auto my-10">
            <h4 className="text-3xl ">
                <span className="border-b-[3px] pb-1 border-blue-600 w-fit">
                    New
                </span>{" "}
                Tour Guides
            </h4>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {newTourGuides.map((guides, index) => (<Card key={index} sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant='h6' component="div" className='text-xl font-medium mb-2 '>
                                {guides?.name}
                            </Typography>
                            <Typography gutterBottom variant="small" component="span" className='inline-block bg-gray-200 bg-opacity-70 text-gray-600 rounded px-3 py-1 text-xs mr-2' >
                                {guides?.country}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {guides?.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>))}
            </div>
        </div>
    );
};

export default NewTourGuides;