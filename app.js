var dob = document.querySelector('.date');
var btn=document.querySelector('.check')
var op=document.querySelector('.output')
// console.log(dob.value)
// console.log(btn)
// console.log(op)
btn.addEventListener('click',function(){
    var bdaystr=dob.value;
    if(bdaystr!==''){
var listOfdate=bdaystr.split('-');
var date1={
    day:Number(listOfdate[2]),
    month:Number(listOfdate[1]),
    year:Number(listOfdate[0])
};


// console.log(dob.value)
// console.log(listOfdate)
// console.log(dob1)
let ispalindrome=checkpalindromeforall(date1);
if(ispalindrome){
    console.log('this is palindrome')
    op.innerText="your birthday is palindrome😊" 
}else{
    console.log('this is not palindrome')
    var nextdate=getnextdate(date1);
    let count=0;
    while(1){
        count++;
        let ispalindrome=checkpalindromeforall(nextdate);
        if(ispalindrome){
            break;
        }
        nextdate=getnextdate(nextdate);
    }


    op.innerText= `😊your birthday will be palindrome .you need to be born on  ${count} days more and dated ${nextdate.day}-${nextdate.month}-${nextdate.year}`

}
    }
})
function checkpalindromeforall(date1){
    let list=checkpalindromeformats(date1);
    let ispalindrome=false;
    for(let i=0;i<list.length;i++){
       
        if(checkpalindrome( list[i])){
            ispalindrome=true;
            // console.log(list[i]+"ans")

            break;
        }
    }
    return ispalindrome

}
function checkpalindromeformats(date){
let arrayforms=datetostr(date);
// let MMDDYYYY
// let 
// console.log(arrayforms)
var ddmmyyyy=arrayforms.day+arrayforms.month+arrayforms.year
var mmddyyyy=arrayforms.month+arrayforms.day+arrayforms.year
var yyyymmdd=arrayforms.year+arrayforms.month+arrayforms.day
var ddmmyy=arrayforms.day+arrayforms.month+arrayforms.year.slice(-2)
var yymmdd=arrayforms.year.slice(-2)+arrayforms.month+arrayforms.day
// console.log(ddmmyyyy)
// console.log(mmddyyyy)
// console.log(yyyymmdd)
// console.log(ddmmyy)
// console.log(yymmdd)
// console.log("fomat")
return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,yymmdd]
}

function datetostr(date){
var datestr={
    day:'',
    year:'',
    month:''
}

if(date.day<10){
datestr.day='0'+date.day;
}else{
    datestr.day=date.day.toString();
}
if(date.month<10){
    datestr.month='0'+date.month;
}else{
    datestr.month=date.month.toString();
}


datestr.year=date.year.toString();

// console.log(datestr.day)
// console.log(datestr.year)
// console.log(datestr.month)

return datestr
}
function checkpalindrome(str){
let str2=reversestr(str);
// console.log(str2);
return (str2===str);
}
function reversestr(str){
    var a=str.split('');
    // console.log(a+"arr")
    var b=a.reverse();
    // console.log(b+"brrr")
    var c=b.join('');
    return c;

}
function getnextdate(date2){
    let day2=date2.day+1;
    let month2=date2.month;
    let year2=date2.year;
    let array=[31,28,31,30,31,30,31,31,30,31,30,31]
    if(month2==2){
      if(isleapyear(year2)){
          if(day2>29){
            day2=1;
            month2++;
          }
    }else{
        if(day2>28){
            day2=1;
            month2++;
          }

    }}
    else {
        if(day2>array[month2-1]){
            day2=1;
            month2++;
        }

    }
    if(month2>12){
        month2=1;
        year2++;
    }
    return{

        day:day2,
        month:month2,
        year:year2
    }
}
function isleapyear(yearx){

    if(yearx%400==0){
        return true;
    }
    
    if(yearx%100==0){
        return false;
    }
    
    if(yearx%4==0){
        return true;
    }

return false;

}