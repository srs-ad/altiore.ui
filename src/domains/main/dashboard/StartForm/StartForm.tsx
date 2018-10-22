import IconButton from '@material-ui/core/IconButton';
import PlayArrowRounded from '@material-ui/icons/PlayArrowRounded';
import * as React from 'react';
import { Field, InjectedFormProps } from 'redux-form';
import { required } from 'redux-form-validators';

import { Input } from 'liw-components/Input';
import { ProjectField } from './ProjectField';

export interface IInternalProps {
  classes: any;
}

export interface IStartFormProps {
  title?: string;
  buttonText?: string;
}

export const StartFormJsx: React.StatelessComponent<
  IInternalProps & IStartFormProps & InjectedFormProps<{}, IStartFormProps>
> = ({ classes, handleSubmit }) => (
  <form onSubmit={handleSubmit} className={classes.play}>
    <Field name="description" component={Input} label="(нет описания)" />
    <ProjectField name="projectId" validate={[required({ msg: 'Сначала выберете Проект!' })]} />
    <IconButton aria-label="Play" className={classes.button} type="submit">
      <PlayArrowRounded fontSize={'large'} color={'inherit'} />
    </IconButton>
  </form>
);