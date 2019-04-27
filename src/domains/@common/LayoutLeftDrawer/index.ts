import { withStyles } from '@material-ui/core/styles';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';

import { withResize } from 'hocs/withResize';
import { closeDialog, openDialog } from 'store/dialog';
import { userRole } from 'store/identity';
import { selectedProject } from 'store/projects';
import { isLeftBarOpen, toggleUiSetting } from 'store/ui';
import { LayoutLeftDrawerTsx } from './LayoutLeftDrawer';
import { styles } from './styles';

const mapState = createStructuredSelector({
  isLeftBarOpen,
  selectedProject,
  userRole,
});

const mapDispatch = {
  closeDialog,
  goTo: push,
  openDialog,
  toggleUiSetting,
};

export const LayoutLeftDrawer = connect<any, any, any>(
  mapState,
  mapDispatch
)(withRouter(withResize(withStyles(styles, { withTheme: true })(LayoutLeftDrawerTsx))));
