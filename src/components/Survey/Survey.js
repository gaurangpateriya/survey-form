import React,{useState} from 'react';
import Card from '@material-ui/core/Card';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Questions from './Questions/Questions'

const styles={
  root :{
    marginTop :40,
    backgroundImage :'linear-gradient(130deg,#642b73,#c6426e)',
    width :'350px',
    height : '500px',
    textAlign:'left',
    position: 'static',
  },
  scrollbox:{
  overflowY:'scroll',
   border:'5px',
   height :'300px',
   paddingLeft:'20px',
   paddingRight:'20px',
   paddingBottom :40,
   WebkitScrollbar:{
     width: '16px',backgroundColor: '#F5F5F6'}
  },
  cardbottom:{
    background:'#ffffff',
    width:'auto',
    height:'200px',
    textAlign :'center',
  },
  button:{
    marginBottom: '20px',
    borderRadius: 4,
    height :50,
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 24,
    backgroundColor: '#fff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    textAlign: 'left',
    transition: 'background .5s',

    padding: '12px 16px',
    border: 'none',
    minWidth: '248px',
    maxWidth: '300px',
  },
  question :{
    marginTop :0,
    textAlign: 'left',
    color :'#000000',
lineHeight: 1.4,
  }
}
const Survey =(props)=> {
  const [open,setOpen] =useState(false)
  const [qno,setQno] =useState(0)
  const togel = (qno) => {
    console.log(open)
    console.log(qno)
    setQno(qno);
    setOpen(!open)
  };
   const {classes} =props;
  return (
      <div style={{position :'fixed',right:'120px',}}>
        <Card className={classes.root}>
          <h2 style={{paddingLeft:'20px',paddingRight:'',color:'white'}}>
            What is your legal matter related to??
          </h2>
          <div className={classes.scrollbox}>
            <Questions handleClose={togel} qno={qno} state={open}/>
            <button className={classes.button} onClick={()=>togel(1)}><p className ={classes.question}>Divorce Matters</p></button>
            <button className={classes.button} onClick={()=>togel(2)} ><p className ={classes.question}>Property Matters</p></button>
            <button className={classes.button} onClick={()=>togel(3)}><p className ={classes.question}>Corporate Affairs</p></button>
            <button className={classes.button} onClick={()=>togel(4)}><p className ={classes.question}>Criminal Matters</p></button>
            <button className={classes.button} onClick={()=>togel(5)}><p className ={classes.question}>Family/Will Matters</p></button>
            <button className={classes.button} onClick={()=>togel(6)}><p className ={classes.question}>Consumer Complaints</p></button>
            <button className={classes.button} onClick={()=>togel(7)}><p className ={classes.question}>Traffic Violation</p></button>
            <button className={classes.button} onClick={()=>togel(8)}><p className ={classes.question}>Others</p></button>
          </div>
          <div className={classes.cardbottom}>
          <h3> 2814</h3>

          <p>bookings done in last one year</p>
          </div>
        </Card>
      </div>
    );

}


Survey.propTypes= {
  classes :PropTypes.object.isRequired,
}


export default withStyles(styles)(Survey);
