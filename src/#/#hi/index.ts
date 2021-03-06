import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';

import { fetchAltiore } from '#/@store/publicAltiore';
import { fetchStatistics } from '#/@store/statistics';

import { HiTsx } from './hi-layout';
import { styles } from './styles';

import { withResize } from '@hooks/withResize';

const masStateToProps = () => ({
  brandName: 'Altiore',
});

const mapDispatch = {
  fetchAltiore,
  fetchStatistics,
};

export default connect(
  masStateToProps,
  mapDispatch
)(withStyles(styles)(withResize(HiTsx)) as any);
