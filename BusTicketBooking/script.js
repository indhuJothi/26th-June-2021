function showcontent(){
    if(document.getElementById('onewaytraveltype').checked)
    {
       
        document.getElementById('onewayselection1').style.visibility='visible';
        document.getElementById('onewayselection2').style.visibility='visible';
        document.getElementById('onewayselection3').style.visibility='visible';
        document.getElementById('onewayselection4').style.visibility='visible';
        document.getElementById('roundwayselection').style.visibility='visible';
        document.getElementById('roundwayselection1').style.visibility='hidden';
           
    }
    else 
    {
        document.getElementById('onewayselection1').style.visibility='visible';
        document.getElementById('onewayselection2').style.visibility='visible';
        document.getElementById('onewayselection3').style.visibility='visible';
        document.getElementById('onewayselection4').style.visibility='visible';
        document.getElementById('roundwayselection').style.visibility='visible';
        document.getElementById('roundwayselection1').style.visibility='visible';
    }
 

}
function printErr(elemid,hintmsg){
    document.getElementById(elemid).innerHTML=hintmsg;
}
function res(){
    let name=document.getElementById('name').value;
    let birth=document.getElementById('dob').value;
    let email=document.getElementById('email').value;
    let oneway=document.getElementById('onewaytraveltype').value;
    let roundway=document.getElementById('roundwaytraveltype').value;
    console.log(roundway);
    let from=document.getElementById('from').value;
    let to=document.getElementById('to').value;
    let count=document.getElementById('count').value;
    let bustype=document.getElementById('bustype').value;
    let Date1=document.getElementById('fromDate').value;
    let Date2=document.getElementById('retDate').value;
    let mobile=document.getElementById('mobile').value;
    let fromDate=new Date(document.getElementById('fromDate').value);
    let retDate=new Date(document.getElementById('retDate').value);
    let dob=new Date(document.getElementById('dob').value);
    let nameErr=dobErr=emailErr=mobileErr=radioErr=fromErr=toErr=countErr=dateErr=retErr=true;
    if(name == "") {
        printErr('nameErr','please Enter your name');
         }
      else{
          var regex=/^[a-zA-Z\s]{3,15}$/
          if(regex.test(name)===false)
          {
              printErr('nameErr','Please Enter valid name');
          }
          else{
            printErr('nameErr','');
              nameErr=false;
          }
      }
      if(birth==""){
          printErr('dobErr','Please enter your Date of Birth');
      }
      else{
          var regex=/^\d{4}\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])$/;
          if(regex.test(birth)===false)
          {
              printErr('dobErr','Please enter a valid date');
          }
          else{
              printErr('dobErr',' ');
              dobErr=false;
          }
      }
      if(email=='')
      {
          printErr('emailErr','please enter your email ')
      }
      else{
          var regex=/^[A-Za-z0-9+_.-]+@(.+)+\.(.+)$/
          if(regex.test(email)===false){
              printErr('emailErr','Please enter a valid email')
          }
          else{
              printErr('emailErr','');
              emailErr=false;
          }
      }
      if(mobile == " ") {
        printErr("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[6-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printErr("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printErr("mobileErr", " ");
            mobileErr = false;
        }
    }
    if(oneway=='')
    {
        printErr('radioErr','please select one value');
    }
    else{
        printErr('radioErr','');
       
        radioErr=false;
    }
    if(count=='')
    {
        printErr('countErr','please select a count');
    }
    else{
        if((count<=0) || ( count>10)){
            printErr('countErr','Passanger count is between 1 to 10 ')
        }
        else{
        printErr('countErr','');
        countErr=false;
        }
    }
    if(from=='select')
    {
        printErr('fromErr','please select a place');

    }
    else{
        printErr('fromErr','')
        fromErr=false;
    }

    if(to=='select')
    {
        printErr('toErr','please select a place');

    }
    else{
        printErr('toErr','')
        toErr=false;
    }
    if(Date1==""){
        printErr('dateErr','Please enter your starting Journey Date');
    }
    else{
        var regex=/^\d{4}\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])$/;
        if(regex.test(Date1)===false)
        {
            printErr('dateErr','Please enter a valid date');
        }
        else{
            printErr('dateErr','');
            dateErr=false;
        }
    }
    if(document.getElementById('roundwaytraveltype').checked)
    {
    if(Date2=="")
    {
        printErr('retErr','Please enter your return Journey Date');
    }
    else{
        var regex=/^\d{4}\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])$/;
        if(regex.test(Date2)===false)
        {
            printErr('retErr','Please enter a valid date');
        }
        else{
            printErr('retErr',' ');
            retErr=false;
        }
    }
  }
else
{
    retErr=false;
}
  

    let startDate=fromDate.getDate();
    let startMonth=fromDate.getMonth();
    let startYear=fromDate.getFullYear();
    let returnDate=retDate.getDate();
    let returnMonth=retDate.getMonth();
    let returnYear=retDate.getFullYear();
    if((startDate===returnDate) && (startMonth===returnMonth) && (startYear===returnYear))
    {
       
        alert('Start Date and Return DateShould not be same');
        retErr=true;
        dateErr=true;
        
    }
    if((startDate>returnDate) || (startYear>=returnYear))
    {
        if(startMonth>returnMonth)
        {
           
         alert('invalid!');
         retErr=true;
         dateErr=true;
        
        }
        
        
    }
    let year=dob.getFullYear();
    let TodayDate=new Date();
    let TodayYear=TodayDate.getFullYear();
    let age=TodayYear-year;
    if(age<18)
    {
        alert('You are not allowed to book ticket');
        return false;
    }
    if((nameErr||dobErr||emailErr||mobileErr||radioErr||fromErr||toErr||countErr||dateErr||retErr)==true)
    {
        return false;
    }
    else{
        var datas=`
        <div>
       <div> Name: ${name}</div>
       <div> Email: ${email}</div>
       <div> Mobile: ${mobile}</div>
       <div> DOB: ${birth}</div>
       <div> From: ${from}</div>
       <div> To: ${to}</div>
       <div> No of Passengers: ${count}</div>
       <div> Ceat Type: ${bustype}</div>
       <div> start Date: ${Date1}</div>
       </div>
       `
        if(document.getElementById('onewaytraveltype').checked)
       {
        document.querySelector('body').style.backgroundImage='none';
         document.getElementById('form').style.display='none';  
         document.getElementById('result').innerHTML=`you have entered the following details: <div> Traveltype: ${oneway}</div>`+datas;
      }
    else{
        var roundwaydatas=datas+`End Date: ${Date2}`;
        document.querySelector('body').style.backgroundImage='none';
         document.getElementById('form').style.display='none';  
         document.getElementById('result').innerHTML=`you have entered the following details: <div> Traveltype: ${roundway}</div>`+roundwaydatas;

    }
    
   
}
}
