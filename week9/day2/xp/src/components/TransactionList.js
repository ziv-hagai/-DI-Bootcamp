import { connect } from 'react-redux'
import TransactionForm from './TransactionForm';
import { updateIndex, deleteX } from '../redux/actions';

import React from 'react';

class TransactionList extends React.Component {

    handleEdit = (e) => {
        console.log('list edit', e);
        this.props.updateIndexprop(e)
    }

    handleDelete = (e) => {
        console.log('delete', e);
        this.props.deleteprop(e)

    };

    render() {
        return (
            <>
                <TransactionForm />
                <h1>Transactions List:</h1>
                <table>
                    <tbody>
                        {
                            this.props.list.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{item.accountNumber}</td>
                                        <td>{item.name}</td>
                                        <td>{item.amount}</td>
                                        <td><button onClick={() => this.handleEdit(i)}>Edit</button></td>
                                        <td><button onClick={() => this.handleDelete(i)}>Delete</button></td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateIndexprop: (e) => dispatch(updateIndex(e)),
        deleteprop: (e) => dispatch(deleteX(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);

