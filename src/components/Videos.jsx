import {Stack, Box } from '@mui/material'
import VideoCard from './VideoCard' 
import ChannelCard from './ChannelCard'


const Videos = ({videos, flexDirection}) => {
    
  return (
    <Stack 
    sx={{
      display:'flex',
      flexDirection:flexDirection,
    }}
     flexWrap='wrap' justifyContent='start' gap={2}>

        {
        videos.map((video) => (
            <Box key={video.id.videoId} >
                {video.id.videoId && <VideoCard video={video}/>}
                {video.id.channelId && <ChannelCard video={video}/>}
            </Box>
        ))
        }
    </Stack>

  )
} 

export default Videos
