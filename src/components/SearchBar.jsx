import { Search } from "@mui/icons-material"
import {Paper, IconButton} from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchTerm){
    navigate(`/search/${searchTerm}`)
    setSearchTerm('')
    }
  }
  const navigate = useNavigate()

  return (
    <Paper
        component="form"
        sx={{ borderRadius: 20, border:'1px solid #ccc',
            pl:2, boxShadow:'none', mr:{sm:5}
    }}
        onSubmit={handleSubmit}
    >
      <input className="search-bar" placeholder="Search..."
      value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} />
      <IconButton type="submit" sx={{p:1}}>
        <Search/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar
