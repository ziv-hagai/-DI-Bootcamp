import { connect } from 'react-redux';
import { handleSearch } from '../redux/actions';

const SearchBox = (props) => {
  console.log(props);
  return (
    <div>
      Search: <input type='text' onChange={props.searchFunc} />
    </div>
  )
}

const mapDispatchToProps = (dispath) => {
  return {
    searchFunc: (e) => dispath(handleSearch(e.target.value))
  }
}

export default connect(null, mapDispatchToProps)(SearchBox);
