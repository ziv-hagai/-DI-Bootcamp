import { connect } from 'react-redux';
import { insert, update } from '../redux/actions';

import React from 'react';

class TransactionForm extends React.Component {
    constructor() {
        super();
        this.state = {
            accountNumber: '',
            FSC: '',
            name: '',
            amount: '',
            edit: false
        }
        this.baseState = { ...this.state }
    }

    componentDidUpdate() {
        if (this.props.currentIndex >= 0 && !this.state.edit) {
            this.setState(this.props.list[this.props.currentIndex]);
            this.setState({ edit: true });
            console.log(this.props.currentIndex);
        }
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    handleSubmit = (e) => {
        // console.log(this.props.currentIndex);
        e.preventDefault()
        if (this.props.currentIndex === -1) {
            this.props.insertprop(this.state);
            // console.log('insert')
        } else {
            this.props.updateprop(this.state);

            // console.log('form update')
        }
        this.setState({ ...this.baseState });
        // console.log('reset');
    };


    render() {

        return (
            <>
                <h1>Transaction Form:</h1>
                <form onSubmit={this.handleSubmit}>
                    <input name="accountNumber" placeholder="Account Number" onChange={this.handleInputChange} value={this.state.accountNumber} /><br />
                    < input name="FSC" placeholder="FSC" onChange={this.handleInputChange} value={this.state.FSC} /><br />
                    < input name="name" placeholder="A/C Holder Name" onChange={this.handleInputChange} value={this.state.name} /><br />
                    < input name="amount" placeholder="Amount" onChange={this.handleInputChange} value={this.state.amount} /><br />
                    <button type="submit">Submit</button>
                </form>
            </>
        );

    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list,
        currentIndex: state.currentIndex
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        insertprop: (e) => dispatch(insert(e)),
        updateprop: (e) => dispatch(update(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);

