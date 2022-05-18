import { connect } from 'react-redux';
import { handleResult } from '../redux/actions';

const ButtonComponent = (props) => {

  return (
    <>
      <button onClick={() => props.aaa()}>Get Results</button>
    </>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     fname: state.fname,
//     sname: state.sname
//   }
// }
const mapDispatchToProps = (dispatch) => {
  return {
    aaa: () => dispatch(handleResult())
  }
}
export default connect(null, mapDispatchToProps)(ButtonComponent);
