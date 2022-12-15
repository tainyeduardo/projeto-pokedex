import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea} from '@mui/material';

export default function PokemonCard({ name, image, types }) {

  const typeHandler = () => {
    if (types[1]) {
      return types[0].type.name + " | " + types[1].type.name;
    }
    return types[0].type.name;
  };

  if(types[0].type.name == "fire"){
    var cor = "#f57d31"
  }
  
  if(types[0].type.name == "grass"){
    var cor = "#74cb48"
  }

  if(types[0].type.name == "water"){
    var cor = "#6493eb"
  }

  if(types[0].type.name == "bug"){
    var cor = "#a7b723"
  }

  if(types[0].type.name == "rock"){
    var cor = "#b69e31"
  }

  if(types[0].type.name == "ghost"){
    var cor = "#70559b"
  }

  if(types[0].type.name == "steel"){
    var cor = "#b7b9d0"
  }

  if(types[0].type.name == "Psychic"){
    var cor = "#fb5584"
  }

  if(types[0].type.name == "ice"){
    var cor = "#9ad6df"
  }

  if(types[0].type.name == "dark"){
    var cor = "#75574c"
  }

  if(types[0].type.name == "fairy"){
    var cor = "#e69eac"
  }

  if(types[0].type.name == "normal"){
    var cor = "#aaa67f"
  }

  if(types[0].type.name == "fighting"){
    var cor = "#c12239"
  }

  if(types[0].type.name == "flying"){
    var cor = "#a891ec"
  }

  if(types[0].type.name == "poison"){
    var cor = "#a43e9e"
  }

  if(types[0].type.name == "ground"){
    var cor = "#dec16b"
  }

  return (
    <Card sx={{ maxWidth: 345}} sx={{background: cor}}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt="pokemon"
      />
      <CardContent >
        <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="caption" component="div">
          {typeHandler()}
        </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
