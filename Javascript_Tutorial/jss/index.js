console.log("hello");
//alert("hello world");
//to write it in HTML page
//document.write("html page hello world");
//prompt("my irst prompt");
var a =21;
console.log(typeof a);
var c1="hello";
var b1=true;
var n1=null;
console.log("hello",typeof c1);
console.log("true",typeof b1);
console.log("null type of object",typeof n1);
var typeconv1=5;
console.log("number 5",typeof typeconv1);
var typeconv2="sree";
console.log("sree type o string gets added to number when + - >", typeconv1+ typeconv2);
var n2=Number("56");
console.log("56 string type of ",typeof n2);
var n2=Number("hello");
console.log("hello string type of ",typeof n2);
var n2=Number(null);
console.log("null number type of ",typeof n2);
var n2=String("56");
console.log("string type of ",typeof n2);
var n2=String(null);
console.log("null string type of ",typeof n2);
var n2=Boolean(56);
console.log("number type of ",typeof n2);
var n2="string type";
console.log("string type to integer",typeof parseInt(n2));
/**
named function
anonymous function
self invoking function
constructor function
*/
//named function
//function deinition
function add(a,b){
	return a+b;
}
//function call
console.log(add(3,5));
//anonymous function will not have name like add -function name will not be there
//below anonymous ()
var addreturn_val=function(a,b){
	return a+b;
}
console.log(addreturn_val(4,5));
//they can begiven as parameter to another function setTimeout -1st function inside that we have anonymous function
//we can give anonymous function inside another function
//setTimeout(function(){console.log("this is anonymous function");},1000);
//constructor function new keyword and F in function should be in caps but it should not have open and clos {} 
//the body of function shoukd be given as a parameter of Function
var mul=new Function("a","b","c","return a*b*c;");
console.log("multiply 1 ,2,3",mul(1,2,3));
//self invoking function
//inside paranthesis function should be declared and at the end the data should be passed
(function(a,b){
console.log("multiply 2 nos",a*b);
})(2,3);
//conditional else
/*1. if
2.if else
3.if else if
4.switch 
5.nested if
*/
//if
var a=3;
if(a==3){
	console.log("a ==3 is true");
}
//if else
var a=3;
if(a!=3){
	console.log("a !=3 goes to if loop");
}else{
	console.log("a ==3 so goes to else loop");
}
//switch
//var a =4;
switch(a){
	case 1:
	console.log("switch case 1");
	break;
	case 2:
	console.log("switch case 2");
	break;
	case 3:
	console.log("switch case 3");
	break;
	default:
	console.log("switch case default");
}
//geting the value from prompt and take the decision base on that
//var a=prompt("enter number of your choice");
switch(parseInt(a)){
	case 1:
	console.log("switch case 1");
	break;
	case 2:
	console.log("switch case 2");
	break;
	case 3:
	console.log("switch case 3");
	break;
	default:
	console.log("switch case default");
}
//arithmetic operations
console.log("multiply " +(3*4));
//increment operator
//
var h1=2;
console.log("increment operator h1 = h1+1 -->"+h1++);
console.log("increment operator h1 = h1+1 -->"+h1);
//=== same type check eg int and string will give false
var a=5;
var b=5;
if(a===b){
	console.log("true same type");
}else{
	console.log("false not same type");
}
//bitwise operator
//32 bit number will be used in Javascript
//2 binary value 
//00000000000000000000000000000010 
//							  8421
//10 binary value
//00000000000000000000000000001010
console.log(10|2);
//| bitwise or operator -->any 1 then 1
//^ bitwise exor => 1 0 or 0 1 then 1
console.log(10^2);
console.log(~2);
//2<<1 left shift 1 place move
//2 binary value 
//00000000000000000000000000000010 
//							  8421
//left shift
//0000000000000000000000000000010
//00000000000000000000000000000100 -last 0 is appended
//equals the value =>4
console.log(2<<1);//4
console.log(2<<2);//8
//2 binary value 
//00000000000000000000000000000010 
//							  8421
//left shift 2 digits
//00000000000000000000000000001000
//							  8421
console.log("right shift 4 for 2 digits",4>>2);//right shift 2 places so 1
//4 binary value 
//00000000000000000000000000000100 
//							  8421
//right shift 2 digits
//00000000000000000000000000000001
//so it should be 1

//Array -size increase is avoided and memory also can be easily accessed and stored
var array1=["Delhi","mumbai","chennai","kolkata"];
console.log(array1);
console.log(array1[0]);
console.log(array1[10]);//if no number available then undefined
array1[1]="Mumbai";
console.log("For iteration starts")
console.log(array1[1]);
for(i=0;i<array1.length;i++)
{
	console.log(array1[i]);
}
console.log("For iteration starts")
var array2=new Array(5,6,67,8,9);
for(i=0;i<array2.length;i++)
{
	console.log(array2[i]);
}
var arr=["sree","abi"];
//v variable name in rhs array information which needs iterated
//v starts with 0 as the index starts at 0
for(v in arr){
	console.log(arr[v]);
}
//global variable - var inside func access possible and inside function also accessible
//but the variable should be declared outside
var a1=20;//global var
function aunc(){
console.log(a1);
}
aunc();
console.log("outside function a1 : "+a1);
//local variable inside function only accessible and used
function aunc11(){
	var a2=30;
console.log("inside function local variable a2 : "+a2);
}
aunc11();
//index.js:201 Uncaught ReferenceError: a2 is not defined
//console.log("outside function a2"+a2);
function aunc(){
	 a3=40;//without var it becomes global variable
//console.log("inside function local variable a2 : "+a2);
}
aunc();
console.log("outside function a3 : "+a3);
//closure function
var a=2;
function myfunction(){
	console.log(a*a);
}
myfunction();
var counter=0;
function myfunction(){
	counter+=1;
}
myfunction();
myfunction();
myfunction();
//document.getElementById("p").innerHTML=counter;
var counter1=0;
function myfunction(){
	var counter1=0;
	counter1+=1;
}
myfunction();
myfunction();
myfunction();
//document.getElementById("p").innerHTML=counter1;

function myfunction(){
	var counter1=0;
	counter1+=1;
	return counter1
}
function on(){
	document.getElementById("p").innerHTML=myfunction();
}
function myfunction(){
	var counter1=0;
	function plus(){
		counter1+=1;
	}
	plus();
	return counter1
}
function on(){
	document.getElementById("p").innerHTML=myfunction();
}
//it displays 1 always
//to avoid this closure function conc4ept is introduced
//self invoking function +inside that anonymous function =closure function
//SIF - only 1 time it can be called
var add=(function(){
	var counter=0;
	return function(){//counter =1 at this point it will not call self invoking function
		//it will directly come to this point and execute the anonymous function
		//only 1nce SIF will be invoked that is the first time when it gets called
		counter++;
		return counter;
	}
})();
function on(){
	document.getElementById("p").innerHTML=add();
}
var s1="new string1";
var s2="this belongs to string 2";
console.log(s1.charAt(0));//n should be displayed
console.log(s1.charCodeAt(0));//Returns the Unicode value of the character at the specified location.
console.log(s1.charAt(0).toUpperCase());
console.log(s1.concat(" ").concat(s2));
console.log(s1.concat(s2));
console.log(s1.startsWith("ne"));
console.log(s1.endsWith("1"));
console.log(String.fromCharCode(110));//char code of 110 is n
//string is used because it will check whether this char 
//code is available
//in the memory
console.log(s1.includes("ew"));
console.log(s1.includes("er"));
var s3="new string1 new happy new";
console.log(s3.indexOf("new"));//first occurence
console.log(s3.lastIndexOf("new"));//last occurence of a string
console.log(s3.length);
var s4="HELLO LEARN WITH ME FRIENDLY Hello";
console.log(s4.match(/ello/g));//lower case
console.log(s4.match(/ello/i));//check whether upper case and display
console.log(s4.match(/ello/ig));
console.log(s4.repeat(2));//repeat s4 twice
console.log(s4.replace(/ello/i,"ello"));//upper case to lower case
console.log(s4.replace(/ello/g,"ELLO"));//lower case to upper case
//var s2="this belongs to string 2";
console.log(s2.search("to"));//searches to in s2 and returns the position of the string position
console.log(s2.slice(5,12));
console.log(s2.split(" "));
console.log(s4.substr(2,5));//from 2 display 5 character
console.log(s4.substring(2,5));//2 start and end the char at 5
console.log(s4.toUpperCase());
console.log(s4.toLowerCase());
//s4.trim()- removes the white spaces in ront and back
var arr1=["p","q","r","s"];
var arr2=["a","b"];
arr1.push("t");
console.log(arr1);
console.log(arr1.pop());//pop last element
console.log(arr1.concat(arr2));
console.log(arr1.join(" "));//will be shown as a single element not as an array
console.log(arr1.toString());//array elements to sring seperated via comma
console.log(arr1.shift());//shift will remove the irst element
console.log(arr1.unshift("g"));//unshift will add as a first element
console.log(arr1);
console.log(arr1.slice(1,3));//0 to n-1 (3-1=2 so it starts with 1 and ends with 2nd index)
var num1=[2,4,1,3,5,8,6,9,23];
console.log(num1.sort());//will do sort but the numbers will be converted to string and then it will
//get sorted accordingly
console.log(arr1.splice(1,3,"z"));//start from 1 and remove till 3 and then insert z at 1 position
console.log(arr1);
var arr1=[175,50,25];
//array.reduce
//document.getElementById("p").innerHTML=arr1.reduce(sub);//inside reduce we need to call a function
 function sub(total ,num){
	 return total-num;//175 will be as a total,num will take 50
	 //175-50=125 is assigned to total
	 //125-25(num)=100 
 }
 //document.getElementById("p").innerHTML=arr1.reduce(sub,0);//inside reduce we need to call a function
 //0 as a first parameter total
 function sub(total ,num){
	 return total-num;//175 will be as a num,num will take 0
	 //0-175=-175 is assigned to total
	 //-175-50=-225
	 //-225-25(num)=-250 
 }
 var arr1=[175,50,25];
 //array.reduce(functionname) ->array will be reduced to a value according to the callback function
 //document.getElementById("p").innerHTML=arr1.reduce(sub,0);//inside reduce we need to call a function
 //0 as a first parameter total
 function sub(total ,num){
	 return total+num;//175 will be as a num,num will take 0
	 //0+175=175 is assigned to total
	 //175+50=225
	 //225+25(num)=250 
 }
 var arr1=[175,50,25];
 //array.reduce(functionname) ->array will be reduced to a value according to the callback function
 //document.getElementById("p").innerHTML=arr1.reduce(sub);//inside reduce we need to call a function
 //0 as a first parameter total
 function sub(total ,num){
	 return total+num;//175 will be as a total,num will take 50
	 //175+50=225 is assigned to total
	 //225+25(num)=250
 }
 //reduce right -read the array elements from right
 var arr1=[175,50,25,10];
 //array.reduce(functionname) ->array will be reduced to a value according to the callback function
 //document.getElementById("p").innerHTML=arr1.reduceRight(sub,0);//inside reduce we need to call a function
 //0 as a first parameter total
 function sub(total ,num){
	 return total-num;//0 will be as a total,num will take 10
	 //0(total)-10(num)=-10
	 //-10-25=-35
	 //-35-50=-85
	 //-85-175(num)=-260
 }
 //math function 4.4 =5 ceil(rounded up high value)
 //4.4=4 floor
 //4.7= 5 ,4.4=4 round
 //square root
 ///power -pow
 //minimum -min
 //maximum -max
 console.log(Math.ceil(4.4));
 console.log(Math.floor(4.4));
 console.log(Math.round(4.4));
 console.log(Math.round(4.7));
 console.log(Math.sqrt(4));
 console.log(Math.pow(4,2));
 console.log(Math.min(175,50,25,10));
 console.log(Math.max(175,50,25,10));
 console.log(Math.sin(90*Math.PI/180));//90 DEGREE is given like this
 console.log(Math.cos(0*Math.PI/180));
 console.log(Math.abs(-2.3));//-ve will be positive
 //date object
 //var todate=new Date();
 //document.write(todate);
 var todate=new Date(2020,7,7,11,15,40,0);//month starts from 0 so 7 represents august
 //yy,mm,dd,hr,min,sec,millisec
 console.log(todate);
 var s =new Date();
 console.log(s.toString());
 console.log(s.toDateString());//Fri Nov 05 2021
 console.log(s.toUTCString());//Fri, 05 Nov 2021 18:29:58 GMT
 //date get and set methods
 var d=new Date();
 //document.getElementById("p").innerHTML=d.getTime();
 console.log(d.getTime());
 console.log(d.getDate());
 console.log(d.getMinutes());
 console.log(d.getMonth());
 console.log(d.getHours());//24 hours format
 var d1=new Date();
 //time -millisec from jan 1 1970
 d1.setTime(1);//1 millisec -1000 millisec =1sec
 console.log(d1);
 d1.setFullYear(2021,7,8);
 console.log(d1);
 d1.setMonth(8);
 console.log(d1);//month will be taken as sept but the year will be taken as currentt year to display
 var d2=new Date();
 d2.setDate(7);
var avar=10.45;
var bvar=avar.toString();
console.log(typeof avar);
console.log(typeof bvar);
console.log(typeof avar.toFixed(1));//will convert it to string fixed will show only 1 number after decimal
console.log(avar.toFixed(1));//10.4
console.log(avar.toPrecision(10));//10 digits after decimal
bvar=avar.valueOf();//primitive type
console.log("bvar",typeof bvar);
var anum =Number("abc");
console.log(typeof anum);//number
anum=parseInt(10.45);
console.log(typeof anum);
console.log(anum);
anum=parseFloat(10.45);
console.log(typeof anum);
console.log(anum);
anum=parseInt("10.45");
console.log(typeof anum);//FIRST WILL BE DISPLAYED
console.log(anum);
anum=parseInt("sree 94");
console.log(typeof anum);//FIRst data is not a number so not a number 'nan' will be displayed
console.log(anum);
anum=parseInt("94 sree");
console.log(typeof anum);//FIRst data is  a number so  number  will be displayed
console.log(anum);
anum=Number.MIN_VALUE;
console.log(anum);
anum=Number.MAX_VALUE;
console.log(anum);
anum=Number.POSITIVE_INFINITY;
console.log(anum);//(1/0)
anum=Number.NEGATIVE_INFINITY;
console.log(anum);//(-1/0)
anum=Number.NaN;
console.log(anum);//NOT A NUMBER (1/"sreee")
//dom - js to make as a interactive ui
//text change ,on click on some button
//document.__proto__
document.getElementById("buton").innerHTML="click here";
function on(){
	document.getElementById("h1").innerHTML="header changed";
	document.getElementById("h1").style.color="red";
}
var obj1={
	name:"sree"
};//obj1.__proto__
function on(){
	var t=document.getElementById("h1")
	t.style.color="green";
	t.style.backgroundColor="orange";
	t.style.fontSize="225%";
	var res=2+3;
	document.getElementById("p1").innerHTML=res;
}
function on(){
	var t4=2+3;
	var t1=3-2;
	var t2=3*2;
	var k=document.getElementsByTagName("p ");
	k[0].innerHTML=t4;//first h1 tag
	k[1].innerHTML=t1;//second h1 tag
	k[2].innerHTML=t2;//third h1 tag
	k[0].style.backgroundColor="green";
	k[1].style.backgroundColor="blue";
	k[2].style.backgroundColor="yellow";
}
function on(){
	var k=document.getElementsByClassName("demo");
	for(var i=0;i<k.length;i++)
	{
		k[i].style.backgroundColor="green";
	}	
}
function on(){
	//id # class .
	//query selector - css property use panni epdi js we can provide the value
	//the first p1 will only be changed
	//document.querySelector(".p1").style.color="orange";
	//in order to show H1->p1 the below can be used
	//document.querySelector("h1.p1").style.color="orange";
	//id selector
	//document.querySelector("#p1").style.color="orange";
	//div tag inside parra tag indication
	//document.querySelector("div>p").style.color="violet";
	//p1 inside div but p1->id
	//document.querySelector("div>#p1").style.color="orange";
	//p1 inside div but p1->class
	//document.querySelector("div>.p1").style.color="red";
	//query selector will take only the first one which comes in html script
	//document.querySelector("h1,h2").style.color="pink";
	//para tag which has a particular attribute should follow some instructions
	//document.querySelector("p[class]").style.color="pink";
	//query selector all -multiple html elements css can be used
	var x=document.querySelectorAll(".h");
	for(var i=0;i<x.length;i++)
	{
		x[i].style.color="maroon";
	}
}
function on(){
	/*document.getElementById("head1").innerHTML="sree";
	document.getElementById("head2").innerHTML="abinaya";
	var d=new Date();
	document.getElementById("d").innerHTML=d.toLocaleDateString();
	*/
	var a=document.getElementById("head1").innerHTML;
	var b=document.getElementById("head2").innerHTML;
	var c=a+b;
	document.getElementById("d").innerHTML=c;
	document.getElementById("head1").innerHTML="";
	document.getElementById("head2").innerHTML="";
	//document.getElementById("i1").src="../img/v2.jpg";
}
function on(){
	//inner html ,outer html,inner text,outer text
	//complete data inside id here inside h1->head1 including strong
	var x1=document.getElementById("head1");
	console.log("inner html"+x1.innerHTML);
	console.log("outer html" +x1.outerHTML);
	//h1 text content alone will be displayed <strong> tag will not be displayed
	console.log("inner text"+x1.innerText);
	console.log("text content"+x1.textContent);
}
function on(){
	//document.getElementById("head1").classList.add("c1","c2","c3");
	//c1,c2,c3 properties will get added i you use add method
	//document.getElementById("head1").classList.add("c4");
	document.getElementById("head1").classList.add("c1");
	//remove method will remove a class attribute from html
	document.getElementById("head2").classList.remove("c2");
	//toggle method -add if not available remove if available
	//document.getElementById("head2").classList.toggle('c3');
	//var a=document.getElementById("head2").classList.length;
	//document.getElementById("d").innerHTML=a;
	//first css element of the html element
	var a=document.getElementById("head2").classList.item(0);
	document.getElementById("d").innerHTML=a;//0 c1,1 c2,2 c3 class name will be displayed here
}
function on(){//traversing dom
	//parent to child elements
	var parent=document.getElementById("dv");
	var child=parent.childNodes[3];//0,2,4 is gap 1,3,5 is having elements
	child.style.color="red";
	var child1=parent.firstElementChild;
	child1.style.color="orange";
	var child2=parent.lastElementChild;
	child2.style.color="violet";
}
function on(){//child to parent element navigation
	var child=document.getElementById("head1");
	var parent=child.parentNode;
	parent.style.color="yellow";
	//parent element kulla irukura ella elements will change to yellow color
}
function on(){//child to parent element navigation
	var child=document.getElementById("head1");
	var sibling=child.nextElementSibling;
	sibling.style.color="brown";
	//parent element kulla irukura ella elements will change to yellow color
	//siblings traversals
}
//add event listener aand remove event listener
var a1=document.getElementById("dv1");
var a2=document.getElementById("dv");
var a3=document.getElementById("d");
var a4=document.getElementById("d1");
//element.addEventListener(event,function,usecapture)
//use capture -boolean(t/f)
//a2.addEventListener("click",fa);
a2.addEventListener("click",fa,true);
a2.addEventListener("click",fb,true);
function fa(){
	a1.style.backgroundColor="yellow";
}
//a2.addEventListener("mouseenter",fa,false);
//a2.addEventListener("mouseleave",fb,false);

function fa(){
	a1.style.backgroundColor="yellow";
	//a4.textContent=a4.textContent+"welcome to dunkin donuts";
	a4.textContent=a4.textContent+=" welcome to dunkin donuts";
}
function fb(){
	a1.style.backgroundColor= "rgb(109, 226, 99)";
	//a4.textContent="Nike"+" "+a4.textContent;
	//a4.textContent=a4.textContent+"HELLO WORLD";//nikeHELLO WORLDwelcome to dunkin donuts 
	/*
	a2.addEventListener("click",fa,false);
	a3.addEventListener("click",fb,false);
	*/
	a4.textContent=a4.textContent+="Nike";
}
a2.removeEventListener("click",fa,true);
a2.removeEventListener("click",fb,true);
//browser object model
//js to browser interaction can be done via this concept
//1.window object - browser item width can be calculated
var h=window.innerHeight;//browser ulla not entire browser
var w=window.innerWidth;
//document.getElementById('h').innerHTML="height "+h+"width "+w;
var h=window.outerHeight;
var w=window.outerWidth;
//document.getElementById('h').innerHTML="height "+h+"width "+w;
//window methods- open,close,moveto
function newon(){
	//win=window.open("http://www.google.com","newwindow") to open in new page
	w=window.open("http://www.google.com","newwindow",width=300,height=750);
	w.moveTo(10,10);
	w.focus();
}
function newco(){
	w.close();
}
//windows screen object
function on(){
	//document.getElementById("d").innerHTML=screen.height; //768
	//document.getElementById("d").innerHTML=screen.availHeight;//728
	//document.getElementById("d").innerHTML=screen.colorDepth;//234
	//document.getElementById("d").innerHTML=screen.pixelDepth;//24
}
//location object
//function on(){
	//document.getElementById("d").innerHTML=window.location.href; //file:///C:/Users/Sreelakshmi/Documents/GitHub/Javascript_Tutorial/HTML/IRST.HTML
	//document.getElementById("d").innerHTML=window.location.hostname;
	//document.getElementById("d").innerHTML=window.location.pathname;//C:/Users/Sreelakshmi/Documents/GitHub/Javascript_Tutorial/HTML/IRST.HTML
	//document.getElementById("d").innerHTML=window.location.assign("http://www.google.com");
//}
function on(){
	//window.location.assign("http://www.google.com");
	//window.history.back();
	//window.history.forward()
}
//window navigator object
//browser cookie -text will have user name which time he visited the web page(key value pairs)
//semi colon terminated
document.getElementById("d").innerHTML=navigator.cookieEnabled;
document.getElementById("d").innerHTML=navigator.appName;
document.getElementById("d").innerHTML=navigator.appCodeName;
document.getElementById("d").innerHTML=navigator.appVersion;
document.getElementById("d").innerHTML=navigator.userAgent;
document.getElementById("d").innerHTML=navigator.platform;
document.getElementById("d").innerHTML=navigator.javaEnabled();
document.getElementById("d").innerHTML=navigator.onLine;
//alert,prompt,confirm
function on(){
	alert("This is a pop up box");
}
function on(){
	var txt;
	if(confirm("Pressed ok!!!")){
		txt="you pressed ok"
	}
	else{
		txt="you pressed cancel"
	}
	document.getElementById("d").innerHTML=txt;
}
function on(){
	var txt;
	var person=prompt("enter your age :");
	if(person>18){
		txt="eligible for vote and license";
	}else{
		txt="not eligible age is less";
	}
	document.getElementById("d").innerHTML=txt;
}
function on(){
	alert("Hello\nHOW ARE YOU");
}
//var v1=setInterval(ty,2000);
function ty()
{
var t=new Date();
//document.getElementById("d").innerHTML=t.toLocaleString();
}
var avar={
	name:"sree",
	age:29,
	dept:function(){
		return "cse";
	},
	section:["A","b","c"],
	details:{
	gender:"Female",
	phoneno:9932
	}
};
console.log(avar.name);
console.log(avar.age);
console.log(avar.dept());
console.log(avar.section);
console.log(avar.section[1]);
console.log(avar.details.gender);
console.log(avar.details.phoneno);
console.log(avar);
var ajson=JSON.stringify(avar);
console.log(ajson);
ajson=JSON.parse(ajson);
console.log(ajson);
var bvar=[
	{
		name:"sree",
		gender:"female",
		age:23
	},
	{
		name:"abi",
		gender:"female",
		age:17
	},
	{
		name:"shiva",
		gender:"female",
		age:27
	}
];
console.log(bvar[0]);
console.log(bvar[1]);
console.log(bvar[2].name);
for(var i=0;i<bvar.length;i++){
	//console.log(bvar[i]);
	console.log(bvar[i].name);
}//name should be displayed in web page
var t1=" ";
for(var i=0;i<bvar.length;i++){
	t1+="<li>"+bvar[i].name+"</li>";
}
//document.getElementById("o").innerHTML=t1;
//json objects
//json -xml file cannot be loaded directly to web page
//server we need ,we will provide the data to server
//from server we can use it
//xampp-start it
//c drive click on xampp ->htdocs





