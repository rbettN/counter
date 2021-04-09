import React, { Component } from 'react';
/*Connect is a function (that returns a high order component) we use on the export. It's function
that returns a function which takes a component as input*/
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(eachStoredResult => (
                        <li key={eachStoredResult} onClick={() => this.props.onDeleteResult(eachStoredResult.id)}>{eachStoredResult.value}</li>
                    ))}
                    
                </ul>
            </div>
        );
    }
}

/*'connect()' returns a function and then '(Counter) is passed for the execution of this second function.
The first function execution can take some configuration:
1 - Which part of the state we want to get in this container/component
2 - Which actions would be dispatched*/

/*Part 1 above for the connect() below*, i.e., part the state*/
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, value: 10}),
        onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, value: 15}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultId: id})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);