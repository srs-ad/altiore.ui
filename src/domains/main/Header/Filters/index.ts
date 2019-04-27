import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { projectMembersAsUsers } from 'store/projects';
import { changeFilter, filteredMembers, searchTerm, toggleMember } from 'store/tasksFilter';
import { isBoardFilterOpened, toggleUiSetting } from 'store/ui';
import { FiltersTsx } from './Filters';
import { styles } from './styles';

const mapState = createStructuredSelector({
  filteredMembers,
  isBoardFilterOpened,
  members: projectMembersAsUsers,
  searchTerm,
});

const mapDispatch = {
  changeFilter,
  toggleMember,
  toggleUiSetting,
};

export default connect(
  mapState,
  mapDispatch
)(withStyles(styles, { withTheme: true })(FiltersTsx));
