import { useState, useEffect } from "react"
import {Link, useParams} from 'react-router-dom'
import ReactPlayer from "react-player"
import { Box, Typography, Stack } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import Videos from './Videos'
import { fetchFromAPI } from "../utils/fetchFromAPI"

const VideoDetail = () => {
  const {id} = useParams()
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null);
  const extractedId = id.substring(1);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${extractedId}`)
    .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${extractedId}&type=video&maxResults=10`)
    .then((data) => setVideos(data.items));
    
  },[extractedId]);


  if(!videoDetail) return <div>Loading...</div>

  const {snippet:{title, channelId, channelTitle}, statistics:{viewCount, likeCount}} = videoDetail;
  return (
    <Box minHeight="95vh" >
      <Stack diretion={{xs:'column', md:'row'}} >
        <Box flex={1}>
          <Box sx={{width:'100%', position:'sticky', top:'86px', textAlign:'left'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${extractedId}`}
            className="react-player" controls sx={{width:'90%', overflow:'hidden'}}/>
            
            <Typography color='#fff' variant="h5" fontWeight='bold' p={2} >
              {title}
            </Typography>
            <Stack direction='row' justifyContent='space-between'
              sx={{color:'#fff'}} py={1} px={2}
            >
              <Link to={`/channel/${channelId}`} style={{textDecoration:'none'}}>
                <Typography color='#fff' variant={{sm:'subtitle1', md:'h6'}}>
                  {channelTitle}
                  <CheckCircle sx={{fontSize:'12px', color:'gray', ml:'5px'}}/> 
                </Typography>
                </Link>
                <Stack direction="row" gap='20px'>
                  <Typography variant="body1" sx={{opacity:0.6}}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant="body1" sx={{opacity:0.6}}>
                    {parseInt(likeCount).toLocaleString()} likes
                  </Typography>
                </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md:1, xs:5}} justifyContent='center'>
         
        
      </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail

