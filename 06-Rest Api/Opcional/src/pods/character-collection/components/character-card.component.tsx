import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar/Avatar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { characterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';

interface Props {
  character: characterEntityVm;
  onEdit: (id: number) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onEdit } = props;

  return (
    <Card>
      <div className={classes.header}>
        <CardHeader
          avatar={<Avatar aria-label="character">{}</Avatar>}
          title={character.name}
        />
        <CardActions>
          <IconButton onClick={() => onEdit(character.id)}>
            <InfoIcon />
          </IconButton>
        </CardActions>
      </div>
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
        </div>
      </CardContent>
    </Card>
  );
};
