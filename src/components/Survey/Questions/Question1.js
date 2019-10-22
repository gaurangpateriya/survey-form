import React ,{useState}from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './Question1.css'
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
const data=[{question:'issue',option :'Divorce matters',next:1,prev:0},{question :'issue',option :'Divorce matters',next:2,prev:1},{question:'',option :'',next:3,prev:1},{question:'',option :'',next:4,prev:2},{question:'',option :'',next:5,prev:3},{question:'',option :'',next:6,prev:4},{question:'',option :'',next:7,prev:5},{question:'',option :'',next:8,prev:6},{question:'',option :'location for lawyer',next:13,prev:7},{question:'',option :'',next:10,prev:4},{question:'',option :'',next:5,prev:9},{question:'',option :'',next:5,prev:4},{question:'',option :'',next:6,prev:5},{question:'Email',option :'email address',name:'',next:14,prev:8},{question:'',option :'dgfg',name:'20',next:20,prev:8}]

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

const Question1 =(props)=>{
  const  {classes} =props;
  var [counter,setCounter] = useState(0)
  var [error,setError] = useState(false)


  const handleChange=(event)=>{

     if(event.target.value!=null)
     {
       data[counter].option = event.target.value;
     }
  }

  const enterName =event =>{
    data[counter].name = event.target.value;
  }

  const clicknext=()=>{
      if (data[counter].option ==='' ){
      }
      else{
        if(counter===13)
        {
          console.log(data)
          createMessage();
          window.emailjs.send("pateriyagaurang1999@gmail.com", "template_cmv6EtlO",
            {to_email : data[13].option,
              to_name: data[13].name,
              message_html:message
            }).then(res=>{}).catch(err=>setCounter(13))
            setCounter(14)
        }
        else if(counter === 14){
          props.handleClose(0)
        }
        else {
          if (counter===0){
            setCounter(data[counter].next)
          }
          else{
            data[data[counter].next].prev = counter

            setCounter(data[counter].next)}
          }
        }
    }
  function Transition(props) {
    return <Slide direction="left"  {...props} />;
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

  const changeOption = (option, next,question)=>{
    if(counter > 1){
      data[counter].question = question;
    }
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
                        What is your current living arrangment with your spouse ?
                      </Typography>
                      <form id='1234'>
                        <ul className='inputRadio'>
                          <li className='inputradiooption'>

                            <input type="radio"  name="singleSelectRadioButton"
                           value="1"  onChange={()=>changeOption('Living separately',data[counter].next, " What is your current living arrangment with your spouse ?")}/>
                             <label className='container'>
                           Living separately</label>
                          </li>
                          <li className='inputradiooption'>

                            <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Living together with spouse',data[counter].next, " What is your current living arrangment with your spouse ?")}/>

                            <label className='container'>Living together with spouse</label>

                          </li>
                        </ul>
                      </form>
                      </div>
                        :
                          (
                            (counter === 3) ?
                            <div>
                              <Typography className= {classes.typography}>
                              Do both parties agrees?
                              </Typography>
                              <form id='avb'>
                                <ul className='inputRadio'>
                                  <li className='inputradiooption'>
                                  <input type="radio"  name="singleSelectRadioButton"
                                  value="1"  onChange={()=>changeOption('yes',data[counter].next,'Do both parties agrees?')}/>

                                  <label className='container'>Yes, its mutual</label>
                                  </li>
                                  <li className='inputradiooption'>

                                  <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('No',data[counter].next,'Do both parties agrees?')}/>

                                  <label className='container'>N0, its contested</label>

                                  </li>
                                  <li className='inputradiooption'>

                                  <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('others',data[counter].next,'Do both parties agrees?')}/>

                                  <label className='container'>Others</label>

                                  </li>
                                </ul>
                              </form>
                            </div>
                                :
                                  (
                                    (counter === 4 ) ?
                                    <div>
                                      <Typography className={classes.typography} >
                                        What is the Reason/Grounds for divorce ?
                                      </Typography>

                                      <form>
                                        <ul className='inputRadio'>
                                          <li className='inputradiooption'>
                                            <input type="radio" id="Extramarital"  name="singleSelectRadioButton"
                                           value="1"
                                           onChange={()=>changeOption('Extramarital',9,'What is the Reason/Grounds for divorce ?')}/>

                                           <label className='container'>Extramarital Affair/infidelity</label>
                                          </li>
                                          <li className='inputradiooption'>

                                            <input type="radio"  id="Extramarital"    name="singleSelectRadioButton"value="2" onChange={()=>changeOption('domestic Violence',11,'What is the Reason/Grounds for divorce ?')}/>

                                            <label className='container'>Domestic Violence</label>

                                          </li>
                                          <li className='inputradiooption'>

                                            <input type="radio"  id="Extramarital"   name="singleSelectRadioButton"value="2" onChange={()=>changeOption('harasment',11,'What is the Reason/Grounds for divorce ?')}/>

                                            <label className='container'>Harassment/Physical /Mental Abuse</label>

                                          </li>
                                          <li className='inputradiooption'>
                                            <input type="radio"   id="general_difference"   name="singleSelectRadioButton"
                                           value="1" onChange={()=>changeOption('general Difference',5,'What is the Reason/Grounds for divorce ?')}/>

                                           <label className='container'>General Difference</label>
                                          </li>
                                          <li className='inputradiooption'>

                                            <input type="radio"   id="Financial"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('financial troubles',5,'What is the Reason/Grounds for divorce ?')}/>

                                            <label className='container'>Financial Troubles</label>

                                          </li>
                                          <li className='inputradiooption'>

                                            <input type="radio"  id="other"   name="singleSelectRadioButton"value="2" onChange={()=>changeOption('others',5,'What is the Reason/Grounds for divorce ?')}/>

                                            <label className='container'>Others</label>

                                          </li>
                                        </ul>
                                      </form>
                                      </div>
                                        :
                                          (
                                            (counter === 9) ?
                                              <div>
                                                <Typography className ={classes.typography}>
                                                  How long have you been facing this issue?
                                                </Typography>
                                                <form>
                                                  <ul className='inputRadio'>
                                                    <li className='inputradiooption'>
                                                      <input type="radio"  name="singleSelectRadioButton"
                                                     value="1" onChange={()=>changeOption('Recentaly',data[counter].next,'How long have youe been facing this issue?')}/>

                                                     <label className='container'>Recentaly</label>
                                                    </li>
                                                    <li className='inputradiooption'>

                                                      <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('past 1-3 months',data[counter].next,'  How long have youe been facing this issue?')}/>

                                                      <label className='container'>Past 1-3 months</label>

                                                    </li>
                                                    <li className='inputradiooption'>

                                                      <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('over 6 months',data[counter].next,'  How long have youe been facing this issue?')}/>

                                                      <label className='container'>Over 6 months</label>

                                                    </li>
                                                  </ul>
                                                </form>
                                                </div>
                                                  :
                                                  (
                                                    (counter === 10) ?
                                                    <div>
                                                      <Typography className ={classes.typography}>
                                                        Do you have any proof of partner's extra-marital affair?
                                                      </Typography>
                                                      <form>
                                                        <ul className='inputRadio'>
                                                          <li className='inputradiooption'>
                                                            <input type="radio"  name="singleSelectRadioButton"
                                                           value="1" onChange={()=>changeOption('yes',data[counter].next,"Do you have any proof of partner's extra-marital affair?")}/>

                                                           <label className='container'>yes</label>
                                                          </li>
                                                          <li className='inputradiooption'>

                                                            <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('No but i have suspicion',data[counter].next,"Do you have any proof of partner's extra-marital affair?")}/>

                                                            <label className='container'>No, but i have a strong suspicion</label>

                                                          </li>
                                                          <li className='inputradiooption'>

                                                            <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('over 6 months',data[counter].next,"Do you have any proof of partner's extra-marital affair?")}/>

                                                            <label className='container'>Over 6 months</label>

                                                          </li>
                                                        </ul>
                                                      </form>
                                                      </div>
                                                        :
                                                        (
                                                          (counter === 11) ?
                                                            <div>
                                                              <Typography className ={classes.typography}>
                                                                How long have youe been facing this issue?
                                                              </Typography>
                                                              <form>
                                                                <ul className='inputRadio'>
                                                                  <li className='inputradiooption'>
                                                                    <input type="radio"  name="singleSelectRadioButton"
                                                                   value="1" onChange={()=>changeOption('Recentaly',data[counter].next,'How long have youe been facing this issue?')}/>

                                                                   <label className='container'>Recentaly</label>
                                                                  </li>
                                                                  <li className='inputradiooption'>

                                                                    <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Past 1-3 months',data[counter].next,'How long have youe been facing this issue?')}/>

                                                                    <label className='container'>Past 1-3 months</label>

                                                                  </li>
                                                                  <li className='inputradiooption'>

                                                                    <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Over 6 months',data[counter].next,'How long have youe been facing this issue?')}/>

                                                                    <label className='container'>Over 6 months</label>

                                                                  </li>
                                                                </ul>
                                                              </form>
                                                              </div>
                                                                :
                                          (
                                            (counter === 5) ?
                                            <div>
                                            <Typography className ={classes.typography}>
                                              What Services do you require from the lawyer?
                                            </Typography>
                                            <form>
                                              <ul className='inputRadio'>
                                                <li className='inputradiooption'>
                                                  <input type="radio"  name="singleSelectRadioButton"
                                                 value="1" onChange={()=>changeOption('just legal Consulatation',data[counter].next,'What Services do you require from the lawyer?')}/>

                                                 <label className='container'>Just Legal Consulatation/Advice</label>
                                                </li>
                                                <li className='inputradiooption'>

                                                  <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('court representaion',12,'What Services do you require from the lawyer?')}/>

                                                  <label className='container'>Court representaion/case drafting</label>

                                                </li>
                                              </ul>
                                            </form>
                                            </div>
                                                :
                                                (
                                                  (counter === 12) ?
                                                  <div>
                                                  <Typography className ={classes.typography}>
                                                    What is thee status of your case?
                                                  </Typography>
                                                  <form>
                                                    <ul className='inputRadio'>
                                                      <li className='inputradiooption'>
                                                        <input type="radio"  name="singleSelectRadioButton"
                                                       value="1" onChange={()=>changeOption('Filing a new case',data[counter].next,'What is thee status of your case?')}/>

                                                       <label className='container'>Filing a new case</label>
                                                      </li>
                                                      <li className='inputradiooption'>

                                                        <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Case in process',data[counter].next,'What is thee status of your case?')}/>

                                                        <label className='container'>Case in process</label>

                                                      </li>
                                                      <li className='inputradiooption'>

                                                        <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Appeal',data[counter].next,'What is thee status of your case?')}/>

                                                        <label className='container'>Appeal</label>

                                                      </li>
                                                      <li className='inputradiooption'>

                                                        <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Others',data[counter].next,'What is thee status of your case?')}/>

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
                                                      How soon are you looking to consult/ hire the lawyer?
                                                      </Typography>
                                                      <form>
                                                        <ul className='inputRadio'>
                                                          <li className='inputradiooption'>
                                                            <input type="radio"  name="singleSelectRadioButton"
                                                            value="1" onChange={()=>changeOption('not sure',data[counter].next,'How soon are you looking to consult/ hire the lawyer?')}/>

                                                            <label className='container'>not sure, just checking the prices
                                                            </label>
                                                          </li>

                                                          <li className='inputradiooption'>
                                                            <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('within in the month',data[counter].next,'How soon are you looking to consult/ hire the lawyer?')}/>

                                                            <label className='container'>Within a month
                                                            </label>
                                                          </li>
                                                          <li className='inputradiooption'>
                                                            <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Immediately',data[counter].next,'How soon are you looking to consult/ hire the lawyer?')}/>

                                                            <label className='container'>Immediately
                                                            </label>
                                                          </li>
                                                        </ul>
                                                      </form>
                                                    </div>
                                                    :(
                                                      (counter === 7) ?
                                                      <div>
                                                      <Typography className ={classes.typography}>
                                                      Let intrested lawyers get in touch with me call/whatsapp
                                                      </Typography>
                                                      <form>
                                                      <ul className='inputRadio'>
                                                      <li className='inputradiooption'>
                                                      <input type="radio"  name="singleSelectRadioButton"
                                                      value="1" onChange={()=>changeOption('yes',data[counter].next,'Let intrested lawyers get in touch with me call/whatsapp')}/>

                                                      <label className='container'>Yes
                                                      </label>
                                                      </li>
                                                      <li className='inputradiooption'>
                                                      <input type="radio"  name="singleSelectRadioButton"
                                                      value="1" onChange={()=>changeOption('no',data[counter].next,'Let intrested lawyers get in touch with me call/whatsapp')}/>

                                                      <label className='container'>No
                                                      </label>
                                                      </li>


                                                      </ul>
                                                      </form>
                                                      </div>
                                                      :(
                                                      (counter === 8) ?
                                                      <div>
                                                      <Typography className ={classes.typography}>
                                                      Location where you require the lawyer :
                                                      </Typography>
                                                      <input
                                                      placeholder="Enter location"
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
                                                        <p >
                                                        E.g. Sushant lok,Sector 23 ,Gurugrsam
                                                        </p>

                                                      </div>:
                                                      (
                                                      (counter === 13) ?
                                                      <div>
                                                      <Typography className ={classes.typography}>
                                                      Enter your Name
                                                      </Typography>
                                                      <input
                                                      placeholder="Enter Name"
                                                      type='text'
                                                      required
                                                      onChange={enterName}
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
                                                      </div>:
                                                      (
                                                        (counter === 14 ) ?
                                                        <div>
                                                        <Typography className ={classes.typography}>
                                                        Thank You !!!
                                                        <p>We have sent you an email with the the answers of this Questionnaire.</p>
                                                        </Typography>
                                                        </div>:null
                                                    ))
                                                ))
                                          )
                                  )
                          )
                      )
                  )
                )
              )
            )
          )
        )
    }
      </DialogContent>

      <DialogActions>
        <Button onClick={clicknext} className={classes.button}>
        {counter===14 ? 'Submit' : 'Next' }

        </Button>
      </DialogActions>
    </Dialog>
</div>
  )
}

  Question1.propTypes = {
    classes: PropTypes.object.isRequired,
  };


export default withStyles(styles)(Question1);
