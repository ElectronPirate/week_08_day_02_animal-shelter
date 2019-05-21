import { connect } from 'react-redux';
import AnimalsTotal from '../components/AnimalsTotal';
const mapStateToProps = (state) => {
  return {
    total: state.length
  };
};



export default connect(mapStateToProps)(AnimalsTotal);
