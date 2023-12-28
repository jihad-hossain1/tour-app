import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { MdFavoriteBorder } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import { TiInfoOutline } from "react-icons/ti";

const RelatedTourSpotSingleSlider = ({ itm }) => {
  return (
    <div className="shadow-[1px_3px_15px_rgba(0,0,0,0.25)] rounded-lg border border-gray-300">
      <Card sx={{ maxWidth: 385 }}>
        <CardMedia
          component="img"
          height="194"
          image={itm?.photo}
          alt="tourspot image"
        />
        <CardContent>
          <Typography variant="body2">{itm?.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {itm?.description?.slice(0, 150)}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <MdFavoriteBorder />
          </IconButton>
          <IconButton aria-label="share">
            <IoShareSocial />
          </IconButton>
          <a href={`/singleToursportDetails/${itm?.id}`}>
            <IconButton aria-label="share">
              <TiInfoOutline />
            </IconButton>
          </a>
        </CardActions>
      </Card>
    </div>
  );
};

export default RelatedTourSpotSingleSlider;
