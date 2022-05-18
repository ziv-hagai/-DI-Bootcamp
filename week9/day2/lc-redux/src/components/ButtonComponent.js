import {connect} from 'react-redux';
import {handleResult} from '../redux/actions';

const ButtonComponent = (props) => {
  const handleClick = () => {
    const {fname,sname} = props;
    console.log(fname,sname);
    const options = {
    	method: 'GET',
    	headers: {
    		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
    		'X-RapidAPI-Key': '8e714f6b88mshbb20deb3af21b66p17c12cjsnb08e0581e35c'
    	}
    };

    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`, options)
    	.then(response => response.json())
    	.then(response => {
        console.log(response);
        props.aaa(response);
      })
    	.catch(err => console.error(err));
  }

  return (
    <>
      <button onClick={handleClick}>Get Results</button>
    </>
  )
}

const mapStateToProps = (state) => {
  return{
    fname: state.fname,
    sname: state.sname
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    aaa: (obj) => dispatch(handleResult(obj))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ButtonComponent);
