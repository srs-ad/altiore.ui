import React, {useEffect, useMemo, useState} from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles, Theme } from '@material-ui/core/styles';

import { millisecondsToTime } from '#/@store/@common/helpers';

import HourglassSvg from './hourglass';

export interface ITaskDurationProps {
  time: number;
  onClick: any;
  hoursPerDay: number
}

interface IPartTime {
  value: number,
  unit: string
}

export const useStyles = makeStyles((theme: Theme) => ({
  time: {
    '& > div': {
      lineHeight: 1,
    },
    '& > div:first-child': {
      alignSelf: 'center',
    },
    '& svg': {
      color: '#eecf6d',
    },
    alignContent: 'flex-start',
    alignItems: 'baseline',
    display: 'flex',
    justifyContent: 'space-between',
    width: theme.spacing(10),
  },
}));
const initPartTimeState = {
  unit: '',
  value: 0,
};

export const TaskDurationTsx: React.FC<ITaskDurationProps> = ({ time, onClick, hoursPerDay }) => {
  const classes = useStyles();

  const convertedTime = millisecondsToTime(time, hoursPerDay);

  const [firstPartTime, setFirstPartTime]= useState<IPartTime>(initPartTimeState);
  const [secondPartTime, setSecondPartTime]= useState<IPartTime>(initPartTimeState);

  const didNotTouched = useMemo( ()=>time === 0, [time]);
  const {days, hours, minutes, seconds } = convertedTime;

  useEffect(() => {
    if (days) {
      setFirstPartTime({value: days, unit: 'дни'});
      setSecondPartTime({value: hours, unit: 'час'});
    } else if (hours) {
      setFirstPartTime({value: hours, unit: 'час'});
      setSecondPartTime({value: minutes, unit: 'мин'});
    } else {
      setFirstPartTime({value: minutes, unit: 'мин'});
      setSecondPartTime({value: seconds, unit: 'сек'});
    }
  }, [ convertedTime, days, hours, minutes, seconds ]);

  return (
      <Button onClick={didNotTouched ? undefined : onClick}>
        <div className={classes.time}>
          <div>
            <HourglassSvg />
          </div>
          <div>
            <div><b>{firstPartTime.value < 10 ? `0${firstPartTime.value}` : firstPartTime.value}</b></div>
            <div>{firstPartTime.unit}</div>
          </div>
          <div>:</div>
          <div>
            <div><b>{secondPartTime.value < 10 ? `0${secondPartTime.value}` : secondPartTime.value}</b></div>
            <div>{secondPartTime.unit}</div>
          </div>
        </div>
      </Button>
  );
};
