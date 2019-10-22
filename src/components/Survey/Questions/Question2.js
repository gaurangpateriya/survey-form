import React ,{useState}from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './Question2.css'
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
{question:'issue',option :'Property Matters',next:1,prev:0},
{question:'',option :'ggugg',next:2,prev:1,},
{question :'What property mattter needs to be addressed ?',next:3,prev:1,option :''},
{question :'who do you want to transfer the ownership to?',next:4,prev:2,option :''},
{question :'Which of the following documennts do you posses ?',next:5,prev:3,option :''},
{question :'What Services do you require ?',next:6,prev:4,option :''},
{question :'What is your approximate budget?',next:7,prev:5,option :''},
{question :'Let intrested lawyers get in touch with me call/whatsapp',next:8,prev:6,option :''},
{question :'Location where you require the lawyer :',next:21,prev:7,option :'fdgdsgfgf'},
{question :'Is it a new property or an old property?',next:4,prev:4,option :''},
{question :'What type of property do you neeed the documents verified for?',next:11,prev:9,option :''},
{question :'Is it a new property or an old property?',next:4,prev:4,option :''},
{question :'what property do you want to register?',next:4,prev:2,option:''},
{question :'which type of property you need to transfer?',next:3,prev:2,option:''},
{question :'Please tell us in detail',next:15,prev:2,},
{question :'Which of the folloeing issues are you facing ?',next:5,prev:14,option:''},
{question:'',next:5,prev:15,option:''},
{question :'What type of rent issue you like to address ?',next:5,prev:2,option:''},
{question :'Which type of propert is illegally possesed?',next:19,prev:2,option:''},
{question :'Did you file a police complaint regarding the illegal possession ?',next:20,prev:18,option:''},
{question :'How long ago the property was illegally possessed ?',next:5,prev:19,option:''},
{question :' Email ', name  :'',next:22,prev:19,option:''},
{question :'  ', name  :'',next:23,prev:19,option:'fgfgff'}]

var message=''

const createMessage=()=>{
  var i=1
  var j=1
  while (i !== 30 ){
    if(data[i].question !== '' && data[i].option !== '')
    {
      message= message +',   ('+ j +')' + data[i].question + ' : ' + data[i].option
      j++
    }
    i = data[i].next
  }
  console.log(message)
}

const Question2 =(props)=>{



  const  {classes} =props;
  var [counter,setCounter] = useState(0)



  const handleChange=(event)=>{
    if(event.target.value!==null)
    data[counter].option = event.target.value;
  }

  const clicknext=()=>{
      if (data[counter].option ==='' ){

      }
      else{
        if(counter===21)
        {
          console.log(data)
          props.handleClose(0)
          createMessage();
          window.emailjs.send("pateriyagaurang1999@gmail.com", "template_cmv6EtlO",
            {to_email : data[21].option,
              to_name: data[21].name,
              message_html:message
            }).then(res=>props.handleClose(0)).catch(err=>setCounter(21))
            setCounter(22)
        }
        else if(counter === 22){
          props.handleClose(0)
        }
        else{
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
                        What property mattter needs to be addressed ?
                      </Typography>
                      <form id='1234'>
                        <ul className='inputRadio'>
                          <li className='inputradiooption'>

                            <input type="radio"  name="singleSelectRadioButton"
                           value="1"  onChange={()=>changeOption('Verification of property documents',10)}/>
                             <label className='container'>
                           Verification of property documents</label>
                          </li>
                          <li className='inputradiooption'>
                            <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Property Registration',12)}/>
                            <label className='container'>Property Registration</label>
                          </li>
                          <li className='inputradiooption'>

                            <input type="radio"  name="singleSelectRadioButton"
                           value="1"  onChange={()=>changeOption('Name Change/Transfer  of Property Ownership',13)}/>
                             <label className='container'>
                        Name Change/Transfer  of Property Ownership</label>
                          </li><li className='inputradiooption'>

                            <input type="radio"  name="singleSelectRadioButton"
                           value="1"  onChange={()=>changeOption(' Builder/Construction Issues',14)}/>
                             <label className='container'>
                           Builder/Construction Issues</label>
                          </li><li className='inputradiooption'>

                            <input type="radio"  name="singleSelectRadioButton"
                           value="1"  onChange={()=>changeOption('Tenancy/Rent/Lease Matters',17)}/>
                             <label className='container'>
                           Tenancy/Rent/Lease Matters</label>
                          </li><li className='inputradiooption'>

                            <input type="radio"  name="singleSelectRadioButton"
                           value="1"  onChange={()=>changeOption('Illegal Possession',18)}/>
                             <label className='container'>
                          Illegal Possession</label>
                          </li><li className='inputradiooption'>

                            <input type="radio"  name="singleSelectRadioButton"
                           value="1"  onChange={()=>changeOption('Others (power of attorney , will registration etc.',9)}/>
                             <label className='container'>
                          Others (power of attorney , will registration etc.)</label>
                          </li>

                        </ul>
                      </form>
                      </div>
                        :
                          (
                            (counter === 3) ?
                            <div>
                              <Typography className= {classes.typography}>
                              who do you want to transfer the ownership to?
                              </Typography>
                              <form id='avb'>
                                <ul className='inputRadio'>
                                  <li className='inputradiooption'>
                                  <input type="radio"  name="singleSelectRadioButton"
                                  value="1"  onChange={()=>changeOption('Spouse',data[counter].next)}/>
                                  <label className='container'>Spouse</label>
                                  </li>
                                  <li className='inputradiooption'>

                                  <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Parents/Siblings',data[counter].next)}/>
                                  <label className='container'>Parents/Siblings</label>
                                  </li>

                                  <li className='inputradiooption'>
                                  <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Children',data[counter].next)}/>
                                  <label className='container'>Children</label>
                                  </li>
                                  <li className='inputradiooption'>
                                  <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Guardian',data[counter].next)}/>
                                  <label className='container'>Guradian</label>
                                  </li>

                                  <li className='inputradiooption'>
                                  <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('others',data[counter].next)}/>
                                  <label className='container'>Others</label>
                                  </li>
                                </ul>
                              </form>
                            </div>
                                :
                                  (
                                    (counter === 4 ) ?
                                    <div>
                                      <Typography className={classes.typography}>
                                        Which of the following documennts do you posses ?
                                      </Typography>

                                      <form>
                                        <ul className='inputRadio'>
                                          <li className='inputradiooption'>
                                            <input type="checkbox" id="Extramarital"  name="singleSelectRadioButton"
                                           value="1"
                                           onChange={()=>changeOption(`${data[counter].option},Sale Deed/Agreement`,data[counter].next)}/>

                                           <label className='container'>Sale Deed/Agreement</label>
                                          </li>
                                          <li className='inputradiooption'>

                                            <input type="checkbox"  id="Extramarital"    name="singleSelectRadioButton"value="2" onChange={()=>changeOption(`${data[counter].option},Property Registration`,data[counter].next)}/>

                                            <label className='container'>Property Registration</label>

                                          </li>
                                          <li className='inputradiooption'>

                                            <input type="checkbox"  id="Extramarital"   name="singleSelectRadioButton"value="2" onChange={()=>changeOption(`${data[counter].option},Relinquishment deed`,data[counter].next)}/>

                                            <label className='container'>Relinquishment deed</label>

                                          </li>
                                          <li className='inputradiooption'>
                                            <input type="checkbox"   id="general_difference"   name="singleSelectRadioButton"
                                           value="1" onChange={()=>changeOption(`${data[counter].option},Registered will`,data[counter].next)}/>

                                           <label className='container'>Registered will</label>
                                          </li>
                                          <li className='inputradiooption'>

                                            <input type="checkbox"   id="Financial"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption(`${data[counter].option},Not sure`,data[counter].next)}/>

                                            <label className='container'>Not sure</label>

                                          </li>
                                          <li className='inputradiooption'>

                                            <input type="checkbox"  id="other"   name="singleSelectRadioButton"value="2" onChange={()=>changeOption(`${data[counter].option},others`,data[counter].next)}/>

                                            <label className='container'>Others</label>

                                          </li>
                                        </ul>
                                      </form>
                                      </div>
                                        :
                                          (
                                            (counter === 10) ?
                                              <div>
                                                <Typography className ={classes.typography}>
                                                  What type of property do you neeed the documents verified for?
                                                </Typography>
                                                <form>
                                                  <ul className='inputRadio'>
                                                    <li className='inputradiooption'>
                                                      <input type="radio"  name="singleSelectRadioButton"
                                                     value="1" onChange={()=>changeOption('Bunglow',data[counter].next)}/>

                                                     <label className='container'>Bunglow</label>
                                                    </li>
                                                    <li className='inputradiooption'>

                                                      <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Apartment/Flat',data[counter].next)}/>

                                                      <label className='container'>Apartment/Flat</label>

                                                    </li>
                                                    <li className='inputradiooption'>
                                                      <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Residential plot',data[counter].next)}/>
                                                      <label className='container'>Residential plot</label>
                                                    </li>
                                                    <li className='inputradiooption'>
                                                      <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Commercial site',data[counter].next)}/>
                                                      <label className='container'>Commercial site</label>
                                                    </li>
                                                    <li className='inputradiooption'>
                                                      <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('other',data[counter].next)}/>
                                                      <label className='container'>others</label>
                                                    </li>
                                                  </ul>
                                                </form>
                                                </div>
                                                  :
                                                  (
                                                    (counter === 12) ?
                                                    <div>
                                                      <Typography className ={classes.typography}>
                                                      what property do you want to register?
                                                      </Typography>
                                                      <form>
                                                        <ul className='inputRadio'>
                                                          <li className='inputradiooption'>
                                                            <input type="radio"  name="singleSelectRadioButton"
                                                           value="1" onChange={()=>changeOption('Bunglow',data[counter].next)}/>

                                                           <label className='container'>Bunglow</label>
                                                          </li>
                                                          <li className='inputradiooption'>

                                                            <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Apartment/Flat',data[counter].next)}/>

                                                            <label className='container'>Apartment/Flat</label>

                                                          </li>
                                                          <li className='inputradiooption'>
                                                            <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Residential plot',data[counter].next)}/>
                                                            <label className='container'>Residential plot</label>
                                                          </li>
                                                          <li className='inputradiooption'>
                                                            <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Commercial site',data[counter].next)}/>
                                                            <label className='container'>Commercial site</label>
                                                          </li>
                                                          <li className='inputradiooption'>
                                                            <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('other',data[counter].next)}/>
                                                            <label className='container'>others</label>
                                                          </li>
                                                        </ul>
                                                      </form>
                                                      </div>
                                                        :
                                                        (
                                                          (counter === 11) ?
                                                            <div>
                                                              <Typography className ={classes.typography}>
                                                                Is it a new property or an old property?
                                                              </Typography>
                                                              <form>
                                                                <ul className='inputRadio'>
                                                                  <li className='inputradiooption'>
                                                                    <input type="radio"  name="singleSelectRadioButton"
                                                                   value="1" onChange={()=>changeOption('New property',data[counter].next)}/>
                                                                   <label className='container'>New property</label>
                                                                  </li>
                                                                  <li className='inputradiooption'>
                                                                    <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Old Property',data[counter].next)}/>
                                                                    <label className='container'>Old property</label>
                                                                  </li>

                                                                </ul>
                                                              </form>
                                                              </div>
                                                                :
            (
              (counter === 5) ?
              <div>
              <Typography className ={classes.typography}>
                What Services do you require ?
              </Typography>
              <form>
                <ul className='inputRadio'>
                  <li className='inputradiooption'>
                    <input type="radio"  name="singleSelectRadioButton"
                   value="1" onChange={()=>changeOption('just legal Consulatation',data[counter].next)}/>
                   <label className='container'>Just Legal Consulatation/Advice</label>
                  </li>
                  <li className='inputradiooption'>
                    <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('court representaion',data[counter].next)}/>
                    <label className='container'>Full process of ownership transfer/name change</label>
                  </li>
                </ul>
              </form>
              </div>
                  :
                  (
                    (counter === 6) ?
                    <div>
                    <Typography className ={classes.typography}>
                      What is your approximate budget?
                    </Typography>
                    <form>
                      <ul className='inputRadio'>
                        <li className='inputradiooption'>
                          <input type="radio"  name="singleSelectRadioButton"
                         value="1" onChange={()=>changeOption('standard',data[counter].next)}/>
                         <label className='container'>standard package</label>
                        </li>
                        <li className='inputradiooption'>
                          <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Case in process',data[counter].next)}/>
                          <label className='container'>Premium package</label>
                        </li>
                      </ul>
                    </form>
                    </div>
                      :
                    (
                    (counter === 13) ?
                      <div>
                        <Typography className ={classes.typography}>
                        which type og property you need to transfer?
                        </Typography>
                        <form>
                          <ul className='inputRadio'>
                            <li className='inputradiooption'>
                              <input type="radio"  name="singleSelectRadioButton"
                             value="1" onChange={()=>changeOption('Bunglow',data[counter].next)}/>

                             <label className='container'>Bunglow</label>
                            </li>
                            <li className='inputradiooption'>

                              <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Apartment/Flat',data[counter].next)}/>

                              <label className='container'>Apartment/Flat</label>

                            </li>
                            <li className='inputradiooption'>
                              <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Residential plot',data[counter].next)}/>
                              <label className='container'>Residential plot</label>
                            </li>
                            <li className='inputradiooption'>
                              <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Commercial site',data[counter].next)}/>
                              <label className='container'>Commercial site</label>
                            </li>
                            <li className='inputradiooption'>
                              <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('other',data[counter].next)}/>
                              <label className='container'>others</label>
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
                        (counter === 8) ?
                        <div>
                        <Typography className ={classes.typography}>
                        Location where you require the lawyer :
                        </Typography>
                        <input
                        placeholder="Enter location"
                        style={{    marginLeft: '2%',

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

                        </div>
                          :
                          (
                          (counter === 14) ?
                          <div>
                          <Typography className ={classes.typography}>
                          Please tell us in detail
                          </Typography>
                            <p>This helps us in understanding your issue better and connecting you with the right experts.</p>
                            <textarea
                            multiline ={true}
                            name='detailexplain'
                            cols ='50'
                            rows ='20'
                            onChange={handleChange}
                            placeholder="Explain it here"
                            style={{    marginLeft: '5%',
                                        marginTop :50,
                                        top: '3px',
                                        height :'200px',
                                        display: 'inline-block',
                                        border: '1px black solid',
                                        fontSize: '18px',
                                        color: '#666',
                                      }
                                    }/>
                          </div>
                            :
                            (
                            (counter === 15) ?
                            <div>
                            <Typography className={classes.typography}>
                              Which of the folloeing issues are you facing ?
                            </Typography>

                            <form>
                              <ul className='inputRadio'>
                                <li className='inputradiooption'>
                                  <input type="checkbox" id="Extramarital"  name="singleSelectRadioButton"
                                 value="1"
                                 onChange={()=>changeOption('Breach of contract',data[counter].next)}/>

                                 <label className='container'>Breach of contract</label>
                                </li>
                                <li className='inputradiooption'>

                                  <input type="checkbox"  id="Extramarital"    name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Construction delay',data[counter].next)}/>

                                  <label className='container'>Construction delay</label>

                                </li>
                                <li className='inputradiooption'>

                                  <input type="checkbox"  id="Extramarital"   name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Fraud builder/third party',data[counter].next)}/>

                                  <label className='container'>Fraud builder/third party</label>

                                </li>
                                <li className='inputradiooption'>
                                  <input type="checkbox"   id="general_difference"   name="singleSelectRadioButton"
                                 value="1" onChange={()=>changeOption('Obstruction by third party',data[counter].next)}/>
                                 <label className='container'>Obstruction by third party</label>
                                </li>
                                <li className='inputradiooption'>

                                  <input type="checkbox"  id="other"   name="singleSelectRadioButton"value="2" onChange={()=>changeOption('others',data[counter].next)}/>

                                  <label className='container'>Others</label>

                                </li>
                              </ul>
                            </form>
                            </div>
                            :
                            (
                              (counter === 17) ?
                              <div>
                                <Typography className={classes.typography}>
                                  What type of rent issue you like to address ?
                                </Typography>

                                <form>
                                  <ul className='inputRadio'>
                                    <li className='inputradiooption'>
                                      <input type="checkbox" id="Extramarital"  name="singleSelectRadioButton"
                                     value="1"
                                     onChange={()=>changeOption(`${data[counter].option},NEw/ Renewable of rent agreement`,data[counter].next)}/>

                                     <label className='container'>NEw/ Renewable of rent agreement</label>
                                    </li>
                                    <li className='inputradiooption'>

                                      <input type="checkbox"  id="Extramarital"    name="singleSelectRadioButton"value="2" onChange={()=>changeOption(`${data[counter].option},New /REnewable of lease Agreement`,data[counter].next)}/>

                                      <label className='container'>New /REnewable of lease Agreement</label>

                                    </li>
                                    <li className='inputradiooption'>

                                      <input type="checkbox"  id="Extramarital"   name="singleSelectRadioButton"value="2" onChange={()=>changeOption(`${data[counter].option},Eviction Issue/ Norice to tenant`,data[counter].next)}/>

                                      <label className='container'>Eviction Issue/ Norice to tenant</label>

                                    </li>
                                    <li className='inputradiooption'>
                                      <input type="checkbox"   id="general_difference"   name="singleSelectRadioButton"
                                     value="1" onChange={()=>changeOption(`${data[counter].option},Breach of contract`,data[counter].next)}/>

                                     <label className='container'>Breach of contract</label>
                                    </li>
                                    <li className='inputradiooption'>

                                      <input type="checkbox"  id="other"   name="singleSelectRadioButton"value="2" onChange={()=>changeOption(`${data[counter].option},others`,data[counter].next)}/>

                                      <label className='container'>Others</label>

                                    </li>
                                  </ul>
                                </form>
                                </div>:
                                (
                                  (counter === 18) ?
                                  <div>
                                    <Typography className={classes.typography}>
                                      Which type of propert is illegally possesed?
                                    </Typography>

                                    <form>
                                      <ul className='inputRadio'>
                                        <li className='inputradiooption'>
                                          <input type="radio"  name="singleSelectRadioButton"
                                         value="1" onChange={()=>changeOption('Bunglow',data[counter].next)}/>

                                         <label className='container'>Bunglow</label>
                                        </li>
                                        <li className='inputradiooption'>

                                          <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Apartment/Flat',data[counter].next)}/>

                                          <label className='container'>Apartment/Flat</label>

                                        </li>
                                        <li className='inputradiooption'>
                                          <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Residential plot',data[counter].next)}/>
                                          <label className='container'>Residential plot</label>
                                        </li>
                                        <li className='inputradiooption'>
                                          <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('Commercial site',data[counter].next)}/>
                                          <label className='container'>Commercial site</label>
                                        </li>
                                        <li className='inputradiooption'>
                                          <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('other',data[counter].next)}/>
                                          <label className='container'>others</label>
                                        </li>
                                      </ul>
                                    </form>
                                    </div>
                                      :
                                      (
                                        (counter === 19) ?
                                        <div>
                                          <Typography className={classes.typography}>
                                            Did you file a police complaint regarding the illegal possession ?
                                          </Typography>

                                          <form>
                                            <ul className='inputRadio'>
                                              <li className='inputradiooption'>
                                                <input type="radio"  name="singleSelectRadioButton"
                                               value="1" onChange={()=>changeOption('Yes',data[counter].next)}/>

                                               <label className='container'>Yes</label>
                                              </li>
                                              <li className='inputradiooption'>

                                                <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('No',data[counter].next)}/>

                                                <label className='container'>No</label>
                                                </li>
                                            </ul>
                                          </form>
                                          </div>
                                            :
                                            (
                                              (counter === 20) ?
                                              <div>
                                                <Typography className={classes.typography}>
                                                  How long ago the property was illegally possessed ?
                                                </Typography>

                                                <form>
                                                  <ul className='inputRadio'>
                                                    <li className='inputradiooption'>
                                                      <input type="radio"  name="singleSelectRadioButton"
                                                     value="1" onChange={()=>changeOption('Less than 12 years',data[counter].next)}/>

                                                     <label className='container'>Less than 12 years</label>
                                                    </li>
                                                    <li className='inputradiooption'>

                                                      <input type="radio"  name="singleSelectRadioButton"value="2" onChange={()=>changeOption('More than 12 years',data[counter].next)}/>

                                                      <label className='container'>More than 12 years</label>
                                                      </li>
                                                  </ul>
                                                </form>
                                                </div>
                                                  :
                                                  (

                            (counter === 9) ?
                            <div>
                            <Typography className ={classes.typography}>
                            Is it a new property or an old property?
                            </Typography>

                            <form>
                              <ul className='inputRadio'>
                            <li className='inputradiooption'>
                            <input type="radio" name="singleSelectRadioButton"
                            value="1" onChange={()=>changeOption('New property',data[counter].next)}/>

                            <label className='container'>new Peoperty
                            </label>
                            </li>
                            <li className='inputradiooption'>
                            <input type="radio"  name="singleSelectRadioButton"
                            value="1" onChange={()=>changeOption('old property',data[counter].next)}/>

                            <label className='container'>old property
                            </label>
                            </li>
                            </ul>
                          </form>
                            </div>:
                            (
                            (counter === 21) ?
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
                            </div>:(
                              (counter === 22) ?
                              <div>
                              <Typography className ={classes.typography}>
                              Thank You !!!
                              <p>We have sent you an email with the the answers of this Questionnaire.</p>
                              </Typography>
                              </div>:null

)))))))))))))))))))))
}
      </DialogContent>

      <DialogActions>
        <Button onClick={clicknext} className={classes.button}>
        Next
        <img alt='' src={forward} style={{color :'white'}}width ='50px' height='50px' />
        </Button>
      </DialogActions>
    </Dialog>
</div>
  )
}

  Question2.propTypes = {
    classes: PropTypes.object.isRequired,
  };


export default withStyles(styles)(Question2);
