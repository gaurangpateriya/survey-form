import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Question1 from './Question1'
import Question2 from './Question2'
import Question3 from './Question3'
import Question4 from './Question4'
import Question5 from './Question5'
import Question6 from './Question6'
import Question7 from './Question7'
import Other from './Other'

const   styles ={
  button :{
    width :'100%',
    background:'black',
    color :'#fff',
  }
}


const Questions =(props)=> {

    if(props.qno ===1){
      return (
              <Question1  state={props.state}  handleClose={props.handleClose} />
        );
    }
    else  if(props.qno===2){
      return (


        <Question2  state={props.state}  handleClose={props.handleClose} />
            )

      }
    else  if(props.qno===3){
      return (
        <Question3  state={props.state}  handleClose={props.handleClose} />
            )
    }
    else  if(props.qno===4){
      return (


        <Question4  state={props.state}  handleClose={props.handleClose} />


            )

    }
    else  if(props.qno===5){
      return (


        <Question5  state={props.state}  handleClose={props.handleClose} />
            )


    }
    else  if(props.qno===6){
      return (


        <Question6  state={props.state}  handleClose={props.handleClose} />

            )

    }
    else if(props.qno === 7){
      return (
        <Question7  state={props.state}  handleClose={props.handleClose} />
            )
    }
    else if(props.qno === 8){
      return (
        <Other  state={props.state}  handleClose={props.handleClose} />
            )
    }

      else {
          return (
                  null
                )
        }

  }

  Questions.propTypes = {
    classes: PropTypes.object.isRequired,
  };


export default withStyles(styles)(Questions);
