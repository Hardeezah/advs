import { Link, useLocation } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoChannelTitle,
  demoVideoTitle,
  demoVideoUrl,
  demoChannelUrl,
} from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  const location = useLocation();
  const isSearchRoute = location.pathname.includes("/search");

  return (
    <Card
      sx={{
        width:  isSearchRoute ? {xs:'90vw'} : {
          md: "320px",
          xs: "311px",
        },
        boxShadow: isSearchRoute ? "none" : "default",
        borderRadius: isSearchRoute ? '10px' : "default",
        marginBottom: isSearchRoute ? '10px' : "default",
        marginLeft: isSearchRoute ? {sm:'10px',lg:'30px'} : "default"
      }}
    >
      <Link
        to={videoId ? `/video/:${videoId}` : demoVideoUrl}
        style={{ textDecoration: "none", color: isSearchRoute ? "#000" : "#FFF",
    display: isSearchRoute ? "flex" : "block" }}
      >
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            width: 358,
            height: 180,
          }}
        />
        <CardContent
          sx={{
            height: "106px",
            backgroundColor: isSearchRoute ? "transparent" : "#212121",
          }}
        >
          <Link
            to={videoId ? `/video:${videoId}` : demoVideoUrl}
            style={{ textDecoration: "none", color: isSearchRoute ? "#000" : "#FFF" }}
          >
            <Typography variant="subtitle1" fontWeight="bold"
            fontSize={isSearchRoute?'25px': 'default' } color={isSearchRoute ? "#000" : "#FFF"}>
              {snippet?.title.slice(0, 60) + "..." || demoVideoTitle.slice(0, 50) + "..."}
            </Typography>
          </Link>
          <Link
            to={videoId ? `/channel:${snippet?.channelId}` : demoChannelUrl}
            style={{ textDecoration: "none", color: isSearchRoute ? "#000" : "#FFF" }}
          >
            <Typography variant="subtitle2" fontWeight="bold" color={isSearchRoute ? "gray" : "#FFF"}>
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle sx={{ fontSize: 12, color: "#3ea6ff", marginLeft: "5px" }} />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;
