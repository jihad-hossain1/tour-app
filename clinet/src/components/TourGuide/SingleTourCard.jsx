import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

const SingleTourCard = ({ guide, index }) => {
  return (
    <Link to={`/tourGuide/tourGuideDetails/${index}`}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          className="h-[200px]"
          image="https://res.cloudinary.com/dqfi9zw3e/image/upload/v1704075698/images/ji7dcjbb3uglsqfmfkd8.jpg"
        />

        <CardContent className="flex flex-col gap-2">
          <Typography gutterBottom variant="h5" component="div">
            Rababe E.
          </Typography>
          <div className="flex gap-1 items-center text-xs">
            <div className="w-fit flex items-center gap-1">
              <Rating value={5} />
              <span className="font-semibold"> {`${5.0}/5`}</span>
            </div>
            <div className="w-fit font-bold">{`(${1} reviews)`}</div>
          </div>
          <div className="w-fit bg-gray-200 px-3 rounded-md text-sm">{`Morocco`}</div>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </Link>
  );
};

export default SingleTourCard;
