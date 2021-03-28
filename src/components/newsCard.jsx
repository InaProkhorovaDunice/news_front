import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  link: {
    cursor: 'pointer',
    color: theme.palette.info.dark,
    textDecoration: 'underline',
  },
}));

const NewsCard = ({ author, news }) => {
  const navigation = useHistory();
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const authorPageRedirect = async () => {
    navigation.push(`/authors/${news.user_id}`);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={news.title}
        subheader={<Typography className={classes.link}>{author}</Typography>}
        onClick={authorPageRedirect}
      />
      <CardMedia
        className={classes.media}
        image="https://avatarko.ru/img/kartinka/30/zhivotnye_lisa_29235.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {news.annotation}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {news.hashTags}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{news.text}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

NewsCard.propTypes = {
  author: PropTypes.func.isRequired,
  news: PropTypes.object.isRequired,
};

export default React.memo(NewsCard);
