import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    bar: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  })
);

export default function Progress({ signedIn, onSignOut }) {
  const classes = useStyles();
  return (
    <div className={classes.bar}>
      <LinearProgress />
    </div>
  );
}
