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
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import { loadUserInfo } from '../redux/actions/userActions';
import { useDispatch } from 'react-redux';

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
  avatar: {
    backgroundColor: red[500],
  },
  'MuiCardHeader-content': {},
  'span.MuiTypography-root.MuiCardHeader-subheader.MuiTypography-body2.MuiTypography-colorTextSecondary.MuiTypography-displayBlock': {
    color: theme.palette.text.primary,
    cursor: 'pointer',
  },
}));

const NewsCard = ({ author, news }) => {
  const navigation = useHistory();
  // const dispatch = useDispatch();
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
        avatar={
          <Avatar
            src={'https://avatarko.ru/img/kartinka/1/zhivotnye_kotenok.jpg'}
            aria-label="recipe"
            className={classes.avatar}
          >
            R
          </Avatar>
        }
        title={news.title}
        subheader={author}
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
