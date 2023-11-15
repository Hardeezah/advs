import { useParams } from "react-router-dom"; 
import { useState, useEffect } from "react";
import {Box} from '@mui/material'
import {fetchFromAPI} from '../utils/fetchFromAPI'
import Videos from './Videos'
import ChannelCard from "./ChannelCard";


const ChannelDetail = () => {
  const {id} = useParams()
  const [video, setVideo]=useState(null)

  const [videos, setVideos] = useState([])
  console.log(video)

  useEffect(() => {
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items))

    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setVideo(data?.items[0]))
  },[id])

  return (
    <Box minHeight='98vh'>
      <Box>
         <div style={{
              zIndex:10,
              height:'300px',
              background: 'linear-gradient(to right, #c33764, #1d2671)'
            }}/>
              <ChannelCard video={video} marginTop='-150px' />
    </Box>
      <Box display='flex' p='2'>
        <Box sx={{
          mr:{sm:'100px'}
        }}/>
        <Videos videos={videos} flexDirection='row' />
      </Box>
    </Box>
  )}


export default ChannelDetail
