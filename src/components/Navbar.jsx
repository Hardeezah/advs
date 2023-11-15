import { Stack } from "@mui/material"
import { Link } from "react-router-dom"
import logo from '../utils/youtube-logo.svg'
import SearchBar from "./SearchBar"


const Navbar = () => (
 <Stack
   
    direction="row" alignItems="center" 
    p={2} sx={{backgroundColor:'#000', position:'sticky', justifyContent:'space-between'}}
 >
    <Link to="/"  style={{display:"flex", alignItems:"center"}}>
        <img src={logo} alt="logo" height={75}/>
    </Link>
    <SearchBar/>
 </Stack>
    
  )


export default Navbar
