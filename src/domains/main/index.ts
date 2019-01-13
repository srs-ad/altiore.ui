import { withStyles } from '@material-ui/core/styles';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';

import { openDialog } from 'src/store/dialog';
import { MainJsx } from './Main';
import { styles } from './styles';

const mapDispatchToProps = {
  openDialog,
  push,
};

export const Main = connect(
  null,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(MainJsx));
