import React, { useMemo } from 'react';

import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import moment from 'moment';

export interface ITimeDiff {
  formValues: {
    finishAt: moment.Moment;
    startAt: moment.Moment;
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  hoursClass: {},
  minutesClass: {},
  root: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
  },
}));

export const TimeDiffTsx: React.FC<ITimeDiff> = ({ formValues }) => {
  const { root, hoursClass, minutesClass } = useStyles();

  const hours = useMemo(() => {
    return (formValues.finishAt || moment()).diff(formValues.startAt, 'hours');
  }, [formValues]);

  const minutes = useMemo(() => {
    return (formValues.finishAt || moment()).diff(formValues.startAt, 'minutes') % 60;
  }, [formValues]);

  return (
    <div className={root}>
      <Typography className={hoursClass} variant="h4">
        {hours}ч.
      </Typography>
      <Typography className={minutesClass} variant="h4">
        {minutes}мин.
      </Typography>
    </div>
  );
};
