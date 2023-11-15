import { Stack } from '@mui/material';

import {categories} from '../utils/constants';

export default function SideBar({selectedCategory, setSelectedCategory}) {
            
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: 'auto',
        height: {
          sx: 'auto',
          md: '95%'},
          flexDirection: {
            md: 'column',
        },
      }}
    >
    
      {categories.map((category) => (
        <button className="category-btn" onClick={()=> setSelectedCategory(category.name)} key={category.name} style={{
            background: category.name === selectedCategory && '#E85654',
            color:'white'
            }}  >
          <span 
            style={{color: category.name===selectedCategory? 'white': '#E85654',
            marginRight:'15px'}}
          >
            {category.icon}</span>
          <span
            style={{opacity: category.name===selectedCategory?'1':'0.8'}}
          >{category.name}</span>
        </button>
      ))}
    </Stack>
  );
}
