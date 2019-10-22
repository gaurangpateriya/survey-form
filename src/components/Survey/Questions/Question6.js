import React ,{useState}from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './Question6.css'
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
{question :'matter',option :'consumer complaints',next:1,prev:0},
{question :'',option :'uyiiiui',next:2,prev:1},
{question :'What consumer matter you need to discuss?',option :'',next:10,prev:1},
{question :'What Services do you require from the lawyer?',option :'',next:4,prev:2},
{question :'What type of lawyer you are looking for?',option :'',next:5,prev:3},
{question :'How soon are you looking to consult/ hire the lawyer?',option :'',next:6,prev:4},
{question :'Let intrested lawyers get in touch with me call/whatsapp',option :'',next:7,prev:5},
{question :'Location where you require the lawyer :',option :'',next:8,prev:6},
{question :'email',name:'',option :'',next:9,prev:7},
{question :'',option :'gfdgffg',next:20,prev:4},
{question :'please tell us in details',option :'dfdsffd',next:11,prev:9},
{question :'What is the cost of your damage?',option :'',next:3,prev:4},
{question :'What is thee status of your case?',option :'',next:4,prev:5}]

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


const Question6 =(props)=>{
  const  {classes} =props;
  var [counter,setCounter] = useState(0)

  const handleChange=(event)=>{
    data[counter].option = event.target.value;
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
            }).then(res=>{}).catch(err=>setCounter(8))

            setCounter(data[counter].next)
          }
        else if (counter ===9){
            props.handleClose(0)
          }
          else if (counter===0){
            setCounter(data[counter].next)
          }
          else{
            data[data[counter].next].prev = counter
            setCounter(data[counter].next)
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
                    Get best guidance from multiple experts suited to your specific legal need.
                  </p>

                </div>

              </div>
                :
                  (
                    (counter === 2) ?
                      <div>
                      <Typography className ={classes.typography}>
                                    What consumer matter you need to discuss?
                      </Typography>
                      <form id='1234'>
                        <ul className='inputRadio'>
                          <li className='inputradiooption'>
                            <input type="radio"  name="singleSelectRadioButton"
                           value="1"  onChange={()=>changeOption('Faulty Product/Bad Service',data[counter].next)}/>
                             <label className='container'>
                            Faulty Product/Bad Service</label>
                          </li>
                          <li className='inputradiooption'>
                            <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Unfair Trade Practice',data[counter].next)}/>
                            <label className='container'>Unfair Trade Practice</label>
                          </li>
                          <li className='inputradiooption'>
                            <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Forgery/Fraud',data[counter].next)}/>
                            <label className='container'>Forgery/Fraud</label>
                          </li>
                          <li className='inputradiooption'>
                            <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Refund Related Matters',data[counter].next)}/>
                            <label className='container'>Refund Related Matters</label>
                          </li>
                          <li className='inputradiooption'>
                            <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Hazardous Goods/Services',data[counter].next)}/>
                            <label className='container'>Hazardous Goods/Services</label>
                          </li>
                          <li className='inputradiooption'>
                            <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Breach of contract',data[counter].next)}/>
                            <label className='container'>Breach of contract</label>
                          </li>
                          <li className='inputradiooption'>
                            <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Deceptive advertisement',data[counter].next)}/>
                            <label className='container'>Deceptive advertisement</label>
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
                                            <input type="radio"  id="Extramarital"    name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Best in class',11)}/>
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
                                                    <label className='container'>not suere, just checking the prices
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
                                                  (counter === 10) ?
                                                  <div>
                                                  <Typography className ={classes.typography}>
                                                  Please tell us in detail
                                                  </Typography>
                                                    <p>This helps us in understanding your issue better and connecting you with the right experts.</p>

                                                  <input
                                                  placeholder="write here..."
                                                  style={{    marginLeft: '5%',
                                                              marginRight :'5%',
                                                              marginTop :50,
                                                              top: '3px',
                                                              width: '50%',
                                                              display: 'inline-block',
                                                              height: '200px',
                                                              border: '1px black solid',
                                                              fontSize: '12px',
                                                              color: '#666',
                                                            }
                                                          }/>
                                                  </div>
                                                  :
                                                  (counter === 11) ?
                                                  <div>
                                                  <Typography className ={classes.typography}>
                                                    What is the cost of your damage?
                                                  </Typography>
                                                  <form>
                                                    <ul className='inputRadio'>
                                                      <li className='inputradiooption'>
                                                        <input type="radio"  name="singleSelectRadioButton"
                                                       value="1" onChange={()=>changeOption('No Monetary Damage',data[counter].next)}/>
                                                       <label className='container'>No Monetary Damage</label>
                                                      </li>
                                                      <li className='inputradiooption'>
                                                        <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Below Rs. 10000',data[counter].next)}/>
                                                        <label className='container'>Below Rs. 10000</label>
                                                      </li>
                                                      <li className='inputradiooption'>
                                                        <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Rs.1000 to Rs. 100000',data[counter].next)}/>
                                                        <label className='container'>Rs.1000 to Rs. 100000</label>
                                                      </li>
                                                      <li className='inputradiooption'>
                                                        <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Rs. 100000 and above',data[counter].next)}/>
                                                        <label className='container'>Rs. 100000 and above</label>
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
                                                  </div>:  (
                                                    (counter === 9 ) ?
                                                    <div>
                                                    <Typography className ={classes.typography}>
                                                    Thank You !!!
                                                    <p>We have sent you an email with the the answers of this Questionnaire.</p>
                                                    </Typography>
                                                    </div>:null

      )))))))))))
      }
      </DialogContent>

      <DialogActions>
        <Button onClick={clicknext} className={classes.button}>
          {counter ===9 ? 'Close' :'Next'}

        </Button>
      </DialogActions>
    </Dialog>


</div>
  )
}

  Question6.propTypes = {
    classes: PropTypes.object.isRequired,
  };


export default withStyles(styles)(Question6);
