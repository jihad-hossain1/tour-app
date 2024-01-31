import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Title from '../Title/Title';
import { newTourGuides } from '../AllDemoDataImporter/AllDemoDataImporter';

const NewTourGuides = () => {
    return (
        <div className="container mx-auto my-10">
            <Title firstText="New" secondText="Tour Guides" />
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