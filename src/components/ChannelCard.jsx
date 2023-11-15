import { Box, CardContent,CardMedia,Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { demoProfilePicture } from "../utils/constants"


const ChannelCard = ({video, marginTop}) => {
  return (
    <Box sx={{
        boxShadow:'none',
        borderRadius:'20px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:{ md:'300px',
                xs:'311px',
           },
           height:'326px',
           margin:'auto',
           marginTop:marginTop,
    }}>
        <Link to={`channel/${video?.id?.channelId}`} >
            <CardContent sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                textAlign:'center',
                color:'#FFF',
            }}>
                <CardMedia image={video?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={video?.snippet?.title}
                 sx={{borderRadius:'50%', height:'180px', width:'180px', mb:2}}/>
                <Typography variant='subtitle2' fontWeight='bold' color='#FFF'>
                    {video?.snippet?.title || 'Channel Title'}
                 <CheckCircle sx={{fontSize:12, color:'#3ea6ff', marginLeft:'5px'}}/>
                </Typography>
                {video?.statistics?.subscriberCount &&(
                    <Typography>
                        {parseInt(video?.statistics?.subscriberCount).toLocaleString()} Subscribers
                    </Typography>
                )}
                
            </CardContent>
            </Link>
    </Box>
  )
}

export default ChannelCard
