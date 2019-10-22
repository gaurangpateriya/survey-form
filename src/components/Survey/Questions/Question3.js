import React ,{useState}from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './Question3.css'
import Button from '@material-ui/core/Button';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import back from './back.png';
import forward from './forward.png';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import {Spring} from 'react-spring/renderprops'




const Dialog = withStyles(theme=> ({
  root : {
    margin: 'auto',
    padding: 0,
    borderRadius: '2px',
    width: 800,
    height: 800,
    transition: 'width .3s',
    willChange: 'width',
  },
}))(MuiDialog)



const DialogActions = withStyles(theme => ({
  root: {
    width :'100%',
    background :'#000000',

    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit,
  },
}))(MuiDialogActions);

const DialogContent = withStyles(theme => ({
  root: {
    height :400,
    width : 600,
    margin: 0,
    padding: theme.spacing.unit * 2,
    transition: `transform: x.interpolate(x => translate3d(5%,0,0))`,
    animationDelay: '10s',

  },
}))(MuiDialogContent);

const styles={
  header:{
    top :'50%',
    transform :'translate(0 , 80%)',
    bottom :0,
    left: 0,
    top: 0,
    width:' 100%',
    padding: '15px 20px',
    zIndex: 4,
  },
  typography:{
    marginLeft :'auto',
    marginRight : 'auto',
    lineHeight :'33px',
    fontSize :'22px',
    textAlign :'center',
    fontWeight :600,
  },
  button : {
    color :'#ffffff',
    width :'100%',
  }
}
const data=[
{question :'issue : ',option :'Corporate affairs',next:1,prev:0},
{question :'',option :'uyiiiui',next:2,prev:1},
{question :'What type of corporate matter needs to be addressed?',option :'',next:3,prev:1},
{question :'What Services do you require from the lawyer?',option :'',next:4,prev:2},
{question :'What type of lawyer you are looking for?',option :'',next:5,prev:3},
{question :'How soon are you looking to consult/ hire the lawyer?',option :'',next:6,prev:4},
{question :'Let intrested lawyers get in touch with me call/whatsapp',option :'',next:7,prev:5},
{question :'Location where you require the lawyer :',option :'',next:8,prev:6},
{question :'enter email',name :'', option :'',next:20,prev:7},
{question :'',option :'',next:10,prev:4},
{question :'',option :'',next:5,prev:9},
{question :'',option :'',next:5,prev:4},
{question :'What is the status of your case?',option :'',next:4,prev:5}]


var message= '';
const createMessage=()=>{
  var i=1
  var j=1
  while (i !== 20 ){
    if(data[i].question !== '' && data[i].option !== '')
    {
      message= message +',   ('+ j +')' + data[i].question + ' : ' + data[i].option
      j++
    }
    i = data[i].next
  }
  console.log(message)
}

const Question3 =(props)=>{
  const  {classes} =props;
  var [counter,setCounter] = useState(0)

  const handleChange=(event)=>{
    if(event.target.value!==''){
      data[counter].option = event.target.value;
    }
  }
  const clicknext=()=>{

      if (data[counter].option ==='' ){
        console.log("eeor")
      }
      else{
          if(counter===8){
            console.log(data)
            createMessage();
            window.emailjs.send("pateriyagaurang1999@gmail.com", "template_cmv6EtlO",
              {to_email : data[8].option,
                to_name: data[8].name,
                message_html:message
              }).then(res=>props.handleClose(0)).catch(err=>setCounter(8))
        }else{
          if (counter===0){
            setCounter(data[counter].next)
          }
          else{data[data[counter].next].prev = counter

            setCounter(data[counter].next)}
          }
        }

  }
  function Transition(props) {
    return <Slide direction="left" {...props} />;
  }

  const close=()=>{
    setCounter(0)
    props.handleClose(0);
  }

  const backclick=()=>{
    console.log(data[counter].prev)
    setCounter(data[counter].prev)
    console.log(data[counter].prev)

  }

  const changeOption = (option, next)=>{
    data[counter].option = option;
    data[counter].next= next;
  }
    const DialogTitle = withStyles(theme => ({
      root:
      {
        textAlign :'center',
        fontSize :18,
        fontWeight :500,
        borderBottom: `1px solid ${theme.palette.divider}`,
        margin: 0,
        padding: theme.spacing.unit * 2,
      },
      backButton: {
        position: 'absolute',
        left: theme.spacing.unit,

        top: theme.spacing.unit,

        color: theme.palette.grey[500],
      },
      closeButton: {
        position: 'absolute',
        right: theme.spacing.unit,
        top: theme.spacing.unit,
        color: "#000000",
      },
    }))(props => {
      const { children, classes, onClose } = props;
      return (
        <MuiDialogTitle disableTypography className={classes.root}>
        <IconButton aria-label="Close" className={classes.backButton} onClick={backclick}>
        <img alt='' src={back} width ='30px' height='30px' />
        </IconButton>
        <Typography variant="h6">{children}</Typography>
        <IconButton className={classes.closeButton} onClick={onClose}>
          <CloseIcon/>
        </IconButton>
        </MuiDialogTitle>
      );
    });
  return (
    <div>
    <Dialog
    onClose={close}
    backfun = {'backfun'}
    disableBackdropClick ={true}
    TransitionComponent={Transition}
    aria-labelledby="customized-dialog-title"
    open={props.state}
    className ={classes.root}
    >
        <DialogTitle id="customized-dialog-title" onClose={close}>
        Lawyers
        </DialogTitle>

        <DialogContent TransitionComponent={Transition}>
      {
        (counter===0) ?
          <h1 className={classes.header}>We will ask you a few questions  to connect with a right lawyer</h1>
        :
          (
            (counter===1)?
              <div>
                <Typography className ={classes.typography} >
                UrbanClap Quality Promise
                </Typography>
                <div>
                  <Typography className ={classes.typography}>
                  Verified Lawyesrs
                  </Typography>
                  <p>
                    UrbanClap ensures that all lawyers are registered with bar council of india.
                  </p>

                </div>
                <div>
                  <Typography className ={classes.typography}>
                    Confientility
                  </Typography>
                  <p>
                    Your personal details are kept absolutly confidential.
                  </p>

                </div>
                <div>
                  <Typography className ={classes.typography}>
                    Specialisez Legal Advice
                  </Typography>
                  <p>
                    Get bessst guidance from multiple experts suited to your specific lgal need.
                  </p>

                </div>

              </div>
                :
                  (
                    (counter === 2) ?
                      <div>
                      <Typography className ={classes.typography}>
                                    What type of corporate matter needs to be addressed?
                      </Typography>
                      <form id='1234'>
                        <ul className='inputRadio'>
                          <li className='inputradiooption'>
                            <input type="radio"  name="singleSelectRadioButton"
                           value="1"  onChange={()=>changeOption(' Labour & employement',data[counter].next)}/>
                             <label className='container'>
                           Labur & Employement issues</label>
                          </li>
                          <li className='inputradiooption'>
                            <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Breaach of contract',data[counter].next)}/>
                            <label className='container'>Breaach of contract</label>
                          </li>
                          <li className='inputradiooption'>
                            <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Intellectual Property',data[counter].next)}/>
                            <label className='container'>Intellectual Property</label>
                          </li>
                          <li className='inputradiooption'>
                            <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Merger &Acquisition',data[counter].next)}/>
                            <label className='container'>Merger &Acquisition</label>
                          </li>
                          <li className='inputradiooption'>
                            <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Fraud',data[counter].next)}/>
                            <label className='container'>Fraud</label>
                          </li>
                        </ul>
                      </form>
                      </div>
                        :
                          (
                            (counter === 3) ?
                            <div>
                            <Typography className ={classes.typography}>
                              What Services do you require from the lawyer?
                            </Typography>
                            <form>
                              <ul className='inputRadio'>
                                <li className='inputradiooption'>
                                  <input type="radio"  name="singleSelectRadioButton"
                                 value="1" onChange={()=>changeOption('just legal Consulatation',data[counter].next)}/>
                                 <label className='container'>Just Legal Consulatation/Advice</label>
                                </li>
                                <li className='inputradiooption'>
                                  <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('court representaion',12)}/>
                                  <label className='container'>Court representaion/case drafting</label>
                                </li>
                              </ul>
                            </form>
                            </div>
                                :
                                  (
                                    (counter === 4 ) ?
                                    <div>
                                      <Typography className={classes.typography}>
                                        What type of lawyer you are looking for?
                                      </Typography>
                                      <form>
                                        <ul className='inputRadio'>
                                          <li className='inputradiooption'>
                                            <input type="radio" id="Extramarital"  name="singleSelectRadioButton"
                                           value="1"
                                           onChange={()=>changeOption('Experienced',data[counter].next)}/>
                                           <label className='container'>Experienced  1500-3000 per consultation</label>
                                          </li>
                                          <li className='inputradiooption'>
                                            <input type="radio"  id="Extramarital"    name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Best in class',data[counter].next)}/>
                                            <label className='container'>Best in class 3000-5000 per consultaion</label>
                                          </li>
                                        </ul>
                                      </form>
                                      </div>
                                        :

                                          (
                                            (counter === 5) ?
                                            <div>
                                              <Typography className ={classes.typography}>
                                              How soon are you looking to consult/ hire the lawyer?
                                              </Typography>
                                              <form>
                                                <ul className='inputRadio'>
                                                  <li className='inputradiooption'>
                                                    <input type="radio"  name="singleSelectRadioButton"
                                                    value="1" onChange={()=>changeOption('not sure',data[counter].next)}/>
                                                    <label className='container'>not sure, just checking the prices
                                                    </label>
                                                  </li>
                                                  <li className='inputradiooption'>
                                                    <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('within in the month',data[counter].next)}/>
                                                    <label className='container'>Within a month
                                                    </label>
                                                  </li>
                                                  <li className='inputradiooption'>
                                                    <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Immediately',data[counter].next)}/>
                                                    <label className='container'>Immediately
                                                    </label>
                                                  </li>
                                                </ul>
                                              </form>
                                            </div>
                                                :
                                                (
                                                  (counter === 12) ?
                                                  <div>
                                                  <Typography className ={classes.typography}>
                                                    What is the status of your case?
                                                  </Typography>
                                                  <form>
                                                    <ul className='inputRadio'>
                                                      <li className='inputradiooption'>
                                                        <input type="radio"  name="singleSelectRadioButton"
                                                       value="1" onChange={()=>changeOption('Filing a new case',data[counter].next)}/>
                                                       <label className='container'>Filing a new case</label>
                                                      </li>
                                                      <li className='inputradiooption'>
                                                        <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Case in process',data[counter].next)}/>
                                                        <label className='container'>Case in process</label>
                                                      </li>
                                                      <li className='inputradiooption'>
                                                        <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Appeal',data[counter].next)}/>
                                                        <label className='container'>Appeal</label>
                                                      </li>
                                                      <li className='inputradiooption'>
                                                        <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Others',data[counter].next)}/>
                                                        <label className='container'>Others</label>
                                                      </li>
                                                    </ul>
                                                  </form>
                                                  </div>
                                                    :
                                                  (
                                                  (counter === 6) ?
                                                  <div>
                                                  <Typography className ={classes.typography}>
                                                  Let intrested lawyers get in touch with me call/whatsapp
                                                  </Typography>
                                                  <form>
                                                  <ul className='inputRadio'>
                                                  <li className='inputradiooption'>
                                                  <input type="radio"  name="singleSelectRadioButton"
                                                  value="1" onChange={()=>changeOption('yes',data[counter].next)}/>
                                                  <label className='container'>Yes
                                                  </label>
                                                  </li>
                                                  <li className='inputradiooption'>
                                                  <input type="radio"  name="singleSelectRadioButton"
                                                  value="1" onChange={()=>changeOption('no',data[counter].next)}/>
                                                  <label className='container'>No
                                                  </label>
                                                  </li>
                                                  </ul>
                                                  </form>
                                                  </div>

                                                    :(
                                                      (counter === 7) ?
                                                      <div>
                                                      <Typography className ={classes.typography}>
                                                      Location where you require the lawyer :
                                                      </Typography>
                                                      <input
                                                      onChange={handleChange}
                                                      placeholder="Enter location"
                                                      style={{    marginLeft: '2%',
                                                      marginLeft :'2%',
                                                      marginTop :50,
                                                      top: '3px',
                                                      width: '90%',
                                                      display: 'inline-block',
                                                      height: '50px',
                                                      border: '1px black solid',
                                                      fontSize: '12px',
                                                      color: '#666',
                                                    }
                                                  }/>
                                                  <p >
                                                  E.g. Sushant lok,Sector 23 ,Gurugrsam
                                                  </p>

                                                  </div>: (
                                                  (counter === 8) ?
                                                  <div>
                                                  <Typography className ={classes.typography}>
                                                  Enter your Email address...
                                                  </Typography>
                                                  <input
                                                  placeholder="Enter Email"
                                                  type='email'
                                                  required
                                                  onChange={handleChange}
                                                  style={{    marginLeft: '2%',
                                                              marginLeft :'2%',
                                                              marginTop :50,
                                                              top: '3px',
                                                              width: '90%',
                                                              display: 'inline-block',
                                                              height: '50px',
                                                              border: '1px black solid',
                                                              fontSize: '12px',
                                                              color: '#666',
                                                            }
                                                          }/>
                                                  </div>
                                                      :null
      )))))))))
    }
      </DialogContent>

      <DialogActions>
        <Button onClick={clicknext} className={classes.button}>
        Next
        <img alt='' src={forward} width ='50px' height='50px' />
        </Button>
      </DialogActions>
    </Dialog>


</div>
  )
}

  Question3.propTypes = {
    classes: PropTypes.object.isRequired,
  };


export default withStyles(styles)(Question3);
