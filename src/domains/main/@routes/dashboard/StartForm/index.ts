import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';

import { onSubmitForm } from 'src/store/@common/helpers';
import { createUserTaskFormInitials, selectProject } from 'src/store/project';
import { CREATE_USER_WORK_FORM_NAME, IUserWorkData, startUserWork } from 'src/store/tasks';
import { IStartFormProps, StartFormJsx } from './StartForm';
import { styles } from './styles';

const mapStateToProps = createStructuredSelector({
  initialValues: createUserTaskFormInitials,
});

const mapDispatchToProps = {
  selectProject: (e: any, value: any) => selectProject(value),
};

const StartForm = withStyles(styles, { withTheme: true })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    reduxForm<any, IStartFormProps>({
      enableReinitialize: true,
      form: CREATE_USER_WORK_FORM_NAME,
      onSubmit: onSubmitForm<IUserWorkData>(startUserWork),
      // onSubmitSuccess: (res, dispatch, { goToNext }) => goToNext(),
    })(StartFormJsx)
  )
);

export { StartForm, IStartFormProps };
