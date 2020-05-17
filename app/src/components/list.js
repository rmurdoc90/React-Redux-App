import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getData} from '../actions/index';

const List = props => {

    useEffect(()=>{
        props.getData();
    }, [])

    return(
        <div>
           <h1>Dog</h1>
           {
            <div className='Card'>
            <img
            width='200'
            src={props.data.message}
            alt='picture of dog'
            />
            </div>
           } 
        </div>
    )

}

const mapStateToProps = state => {
    console.log(state)
    return{
        isFetching:state.isFetching,
        data:state.data
    }
}

export default connect(
    mapStateToProps,
    {getData}
)(List)