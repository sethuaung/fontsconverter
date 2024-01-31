



function go(){


var co=-1;
var valu=document.querySelector("#txt").value;

var out=document.querySelector("#out");



if( valu =="" || valu==" "){

alert("Please input somethings");
}

else{
//alert("yes");
var ans="";

var type=[];
var vtype={"ိ":1,"ီ":1,"ု":1,"ူ":1,"ေ":1,"ဲ":1,"ျ":1,"ြ":1,"ွ":1,"ှ":1,"ာ":1,"ါ":1,"်":1,"ံ":1,"္":1};

var y={"ာ":"ာ","ါ":"ာ"};
var t={"်":"်","္":"်"};

//var cw="";
while(co<valu.length-1){
co++;




if(valu[co]=="က" && t[valu[co+1]] !="်"  ){
//co++;

//ans=ans+"K";

if(vtype[valu[co+1]] !=1 && t[valu[co+2]]!="်" && valu[co-1]!="္" && valu[co+1] !="ည"){
//co++;
ans=ans+" Ka";}//



else if(valu[co-1]=="္" && vtype[valu[co+1]] !=1 && t[valu[co+2]]!="်" ){
//co++;
ans=ans+"ka";}//



else if(valu[co+1]=="ှ"){

 ans=ans+" Hk";
 
}//


else if(valu[co+1]=="ည"){

 ans=ans+" Kin";
 
}//

else if( valu[co+1]=="ု" && valu[co+2]=="ည" ){

 ans=ans+" Kone";
 
}//





 


else {

if( valu[co-1]=="္" && vtype[valu[co+1]] ==1 ){
//co++;
ans=ans+"k";}//

 
 //co++;
else{
    ans=ans+" K";

}
}//


} //ka


if(y[valu[co]]=="ာ" ){

ans=ans+"‌ar";
}

 if(valu[co]=="ှ"){

if(vtype[valu[co+1]] !=1){
//co++;
ans=ans+"a";}

else{

 ans=ans+"";
 }
}



if(valu[co]=="ိ"){

if (t[valu[co+2]]=="်"){
    ans=ans+"e";
}

else if ( valu[co+1]=="ု" && t[valu[co+3]]=="်"){ 
    ans=ans+"a";
}

else if(valu[co+1]=="ု" && t[valu[co+3]]!="်"){co++;ans=ans+"o";}

else{
   ans=ans+"i";}
   
   
}

//kha

if(valu[co]=="ခ" && t[valu[co+1]]!="်" ){
if(vtype[valu[co+1]] !=1 && t[valu[co+2]]!="်" && valu[co-1]!="္" && valu[co+1] !="ည"){
ans=ans+" Kha";}//
else if(valu[co+1]=="ှ"){
 ans=ans+" Hkh";
 }
 
 else if(valu[co-1]=="္" && vtype[valu[co+1]] !=1 && t[valu[co+2]]!="်"){
//co++;
ans=ans+"kha";}//
 
 
 else if(valu[co+1]=="ျ" || valu[co+1]=="ြ"){
 co++;
 ans=ans+" Ch";}
 
 
 else if(valu[co+1]=="ည"){

 ans=ans+" Khin";
 
}//

else if( valu[co+1]=="ု" && valu[co+2]=="ည" ){

 ans=ans+" Khone";
 
}//

 
 
 

else {

if( valu[co-1]=="္" && vtype[valu[co+1]] ==1 ){
//co++;
ans=ans+"kh";}//
else{

    ans=ans+" Kh";
    }
}//
} //kha

if(valu[co]=="ီ"){

   ans=ans+"ee";
}
//beging ေ
if(valu[co]=="ေ" && y[valu[co+1]] != "ာ"){

if(valu[co-1]=="ွ"){

   ans=ans+"e";
}
else{
ans=ans+"ay";}
}

//beging 
if( valu[co]=="ေ" && y[valu[co+1]]=="ာ" && valu[co+3]!="်"  ){
co++;

ans=ans+"aw";

}

if(valu[co]=="ေ" && y[valu[co+1]] =="ာ" && valu[co+3]=="်" ){
co++;

    ans=ans+"au";
}

if(valu[co]=="ြ" ){

if(valu[co-1]!="ခ" && vtype[valu[co+1]] !=1 && valu[co+2]!="်"){
    ans=ans+"ya";
}

else if(valu[co+1]=="ီ"){
co++;
ans=ans+"yi";
}

else if(valu[co-1]=="ခ"){

ans=ans+"";
}

else if(valu[co+1]=="ေ" && (valu[co+2]!=y[valu[co+2]] )){
co++;
ans=ans+"ye";
}

else{
ans=ans+"y";
 }
}

if(valu[co]=="ျ" ){

if( valu[co-1]!="ခ" && vtype[valu[co+1]] !=1 && valu[co+2]!="်"){
    ans=ans+"ya";
}
else if(valu[co+1]=="ီ"){
co++;
ans=ans+"yi";
}

else if(valu[co+1]=="ေ" && valu[co+2]!=y[valu[co+2]] ){
co++;
ans=ans+"ye";

}

else if(valu[co-1]=="ခ"){

ans=ans+"";
}

else{
ans=ans+"y";
 }
}

if(valu[co]=="ု"){

 if(valu[co+2]=="်" && valu[co-1]=="ိ" && (valu[co-2]!="ျ" || valu[co-2]!="ြ" )){
     ans=ans+"";
 }
 
 else if(valu[co-1]=="ိ" && valu[co+2]=="်"){ans=ans+"i";}
 
 else if(valu[co-1]=="ိ"){
     ans=ans+"";
 }
 
 else if((valu[co-1]=="ြ" || valu[co-1]=="ျ") && valu[co+2]=="်" ){
     ans=ans+"o";
 }
 
else{

ans=ans+"u";
}
}

if(valu[co]=="ူ"){

ans=ans+"u";
}
//ga



if((valu[co]=="ဂ" || valu[co]=="ဃ")&& t[valu[co+1]]!="်" ){

if(vtype[valu[co+1]] !=1 && t[valu[co+2]]!="်" && valu[co-1]!="္" && valu[co+1] !="ည"){
//co++;
ans=ans+" Ga";}//



else if(valu[co-1]=="္" && vtype[valu[co+1]] !=1 && t[valu[co+2]]!="်"){
//co++;
ans=ans+"ga";}//


else if(valu[co+1]=="ည"){

 ans=ans+" Gin";
 
}//

else if( valu[co+1]=="ု" && valu[co+2]=="ည" ){

 ans=ans+" Ghone";
 
}//



else {

if( valu[co-1]=="္" && vtype[valu[co+1]] ==1 ){
//co++;
ans=ans+"g";}//
else{

    ans=ans+" G";
    }
}//
} //ga

if(valu[co]=="့"){

ans=ans+"t";
}

if(valu[co]=="ံ"){

ans=ans+"an";
}

if(valu[co]=="ဲ" ){
ans=ans+"e";

}

if(valu[co]=="ွ" ){

if(valu[co+1]=="ံ" ){
co++;
ans=ans+"un";

}

else if(valu[co+1]=="ိ" ){
co++;
ans=ans+"wai";

}

else if( (valu[co+1]=="တ" || valu[co+1]=="န") && valu[co+2]=="်" ){
//co++;
ans=ans+"";

}

else{

if( vtype[valu[co+1]] !=1){ans=ans+"wa";}

else{
    ans=ans+"w";
}

}

}//ဝဆွဲ

// beging kathat
if(valu[co]=="က" && t[valu[co+1]]=="်"){
 co++;
 if(valu[co-2]==y[valu[co+2]] && valu[co-3]=="ေ"){
     ans=ans+"k";
 }
 
 else if(valu[co-2]=="ု" && valu[co-3]=="ိ" ){
     ans=ans+"ik";
 }
 
 else{
ans=ans+"et";
}
}

//ည
if((valu[co]=="ည"  )&& t[valu[co+1]]!="်"  ){

if(vtype[valu[co+1]] !=1 && t[valu[co+2]]!="်" && valu[co-1]!="္" && valu[co+1] !="ည"){
//co++;
ans=ans+" Nya";}//



else if(valu[co-1]=="္" && vtype[valu[co+1]] !=1 && t[valu[co+2]]!="်"){
//co++;
ans=ans+"nya";}//

else if(valu[co+1]=="ှ"){
 ans=ans+" Hny";

}
else {

if( valu[co-1]=="္" && vtype[valu[co+1]] ==1 ){
//co++;
ans=ans+"ny";}//

else{

    ans=ans+" Ny";
    }


    
}//
} //sa

if((valu[co]=="ဇ" || valu[co]=="ဈ" )&& t[valu[co+1]]!="်" ){

if(vtype[valu[co+1]] !=1 && t[valu[co+2]]!="်" && valu[co-1]!="္" && valu[co+1] !="ည"){
//co++;
ans=ans+" Za";}//



else if(valu[co-1]=="္" && vtype[valu[co+1]] !=1 && t[valu[co+2]]!="်"){
//co++;
ans=ans+"za";}//


else if(valu[co+1]=="ည"){

 ans=ans+" Zin";
 
}//

else if( valu[co+1]=="ု" && valu[co+2]=="ည" ){

 ans=ans+" Zone";
 
}//



else if(valu[co+1]=="ှ"){
 ans=ans+" Hz";
}//
else {
    if( valu[co-1]=="္" && vtype[valu[co+1]] ==1 ){
//co++;
ans=ans+"z";}//

else{

    ans=ans+" Z";
    }



    
    
}//
} //sa

if((valu[co]=="စ" || valu[co]=="ဆ" )&& t[valu[co+1]]!="်" ){

if(vtype[valu[co+1]] !=1 && t[valu[co+2]]!="်" && valu[co-1]!="္"  && valu[co+1] !="ည"){
//co++;
ans=ans+" Sa";}//



else if(valu[co-1]=="္" && vtype[valu[co+1]] !=1 && t[valu[co+2]]!="်"){
//co++;
ans=ans+"sa";}//


else if(valu[co+1]=="ည"){

 ans=ans+" Sin";
 
}//

else if( valu[co+1]=="ု" && valu[co+2]=="ည" ){

 ans=ans+" Sone";
 
}//



else if(valu[co+1]=="ှ"){
 ans=ans+" Hs";
}//
else {
    if( valu[co-1]=="္" && vtype[valu[co+1]] ==1 ){
//co++;
ans=ans+"s";}//

else{

    ans=ans+" S";
    }
}//
} //sa

//nga



if((valu[co]=="င")&& t[valu[co+1]]!="်" ){
if(vtype[valu[co+1]] !=1 && valu[co+2]!="်" && valu[co+1] !="ည"){
ans=ans+" Nga";}//

else if(valu[co+1]=="ည"){

 ans=ans+" Ngain";
 
}//

else if( valu[co+1]=="ု" && valu[co+2]=="ည" ){

 ans=ans+" Ngaone";
 
}//


else if(valu[co+1]=="ှ"){
 ans=ans+" Hny";
}//
else {
    ans=ans+" Ng";
}//
} //nga

if((valu[co]=="ဋ" || valu[co]=="တ" )&& t[valu[co+1]]!="်" ){

if(vtype[valu[co+1]] !=1 && t[valu[co+2]]!="်" && valu[co-1]!="္" && valu[co+1] !="ည"){
//co++;
ans=ans+" Ta";}//



else if(valu[co-1]=="္" && vtype[valu[co+1]] !=1 && t[valu[co+2]]!="်"){
//co++;
ans=ans+"ta";}//

else if(valu[co+1]=="ည"){

 ans=ans+" Tin";
 
}//

else if( valu[co+1]=="ု" && valu[co+2]=="ည" ){

 ans=ans+" Tone";
 
}//



else if(valu[co+1]=="ှ"){
 ans=ans+" Ht";
}//
else {
    if( valu[co-1]=="္" && vtype[valu[co+1]] ==1 ){
//co++;
ans=ans+"t";}//

else{

    ans=ans+" T";
    }
}//
} //sa

if((valu[co]=="ဌ" || valu[co]=="ထ" )&& t[valu[co+1]]!="်" ){

if(vtype[valu[co+1]] !=1 && t[valu[co+2]]!="်" && valu[co-1]!="္" && valu[co+1] !="ည"){
//co++;
ans=ans+" Hta";}//



else if(valu[co-1]=="္" && vtype[valu[co+1]] !=1 && t[valu[co+2]]!="်"){
//co++;
ans=ans+"hta";}//


else if(valu[co+1]=="ှ"){
 ans=ans+" Ht";
}//

else if(valu[co+1]=="ည"){

 ans=ans+" Htin";
 
}//

else if( valu[co+1]=="ု" && valu[co+2]=="ည" ){

 ans=ans+" Htone";
 
}//


else {
    if( valu[co-1]=="္" && vtype[valu[co+1]] ==1 ){
//co++;
ans=ans+"ht";}//

else{

    ans=ans+" Ht";
    }
    
}//
} //sa

if((valu[co]=="ဒ" || valu[co]=="ဓ" || valu[co]=="ဎ" || valu[co]=="ဍ" )&& t[valu[co+1]]!="်" ){

if(vtype[valu[co+1]] !=1 && t[valu[co+2]]!="်" && valu[co-1]!="္" && valu[co+1] !="ည"){
//co++;
ans=ans+" Da";}//



else if(valu[co-1]=="္" && vtype[valu[co+1]] !=1 && t[valu[co+2]]!="်"){
//co++;
ans=ans+"da";}//


else if(valu[co+1]=="ှ"){
 ans=ans+" Hd";
}//

else if(valu[co+1]=="ည"){

 ans=ans+" Din";
 
}//

else if( valu[co+1]=="ု" && valu[co+2]=="ည" ){

 ans=ans+" Done";
 
}//


else {
    if( valu[co-1]=="္" && vtype[valu[co+1]] ==1 ){
//co++;
ans=ans+"d";}//

else{

    ans=ans+" D";
    }

}//
} //sa

if((valu[co]=="လ" || valu[co]=="ဠ" )&& t[valu[co+1]]!="်" ){

if(vtype[valu[co+1]] !=1 && t[valu[co+2]]!="်" && valu[co-1]!="္" && valu[co+1] !="ည"){
//co++;
ans=ans+" La";}//



else if(valu[co-1]=="္" && vtype[valu[co+1]] !=1 && t[valu[co+2]]!="်"){
//co++;
ans=ans+"la";}//


else if(valu[co+1]=="ည"){

 ans=ans+" Lin";
 
}//

else if( valu[co+1]=="ု" && valu[co+2]=="ည" ){

 ans=ans+" Lone";
 
}//



else if(valu[co+1]=="ှ"){
 ans=ans+" Hl";
}//
else {
    if( valu[co-1]=="္" && vtype[valu[co+1]] ==1 ){
//co++;
ans=ans+"l";}//

else{

    ans=ans+" L";
    }

}//
} //sa

if((valu[co]=="မ"  )&& t[valu[co+1]]!="်" ){

if(vtype[valu[co+1]] !=1 && t[valu[co+2]]!="်" && valu[co-1]!="္" && valu[co+1] !="ည"){
//co++;
ans=ans+" Ma";}//



else if(valu[co-1]=="္" && vtype[valu[co+1]] !=1 && t[valu[co+2]]!="်"){
//co++;
ans=ans+"ma";}//


else if(valu[co+1]=="ည"){

 ans=ans+" Min";
 
}//

else if( valu[co+1]=="ု" && valu[co+2]=="ည" ){

 ans=ans+" Mone";
 
}//


else if(valu[co+1]=="ှ"){
 ans=ans+" Hm";
}//
else {
    if( valu[co-1]=="္" && vtype[valu[co+1]] ==1 ){
//co++;
ans=ans+"m";}//

else{

    ans=ans+" M";
    }

}//
} //sa

if((valu[co]=="သ"  )&& t[valu[co+1]]!="်" ){


if(vtype[valu[co+1]] !=1 && t[valu[co+2]]!="်" && valu[co-1]!="္" && valu[co+1] !="ည"){
//co++;
ans=ans+" Tha";}//



else if(valu[co-1]=="္" && vtype[valu[co+1]] !=1 && t[valu[co+2]]!="်"){
//co++;
ans=ans+"tha";}//

else if(valu[co+1]=="ည"){

 ans=ans+" Thin";
 
}//

else if( valu[co+1]=="ု" && valu[co+2]=="ည" ){

 ans=ans+" Thone";
 
}//





else if(valu[co+1]=="ှ"){
 ans=ans+" Sh";
}//
else {
    if( valu[co-1]=="္" && vtype[valu[co+1]] ==1 ){
//co++;
ans=ans+"th";}//

else{

    ans=ans+" Th";
    }

}//
} //sa


if((valu[co]=="ဟ"  )&& t[valu[co+1]]!="်" ){

if(vtype[valu[co+1]] !=1 && t[valu[co+2]]!="်" && valu[co-1]!="္" && valu[co+1] !="ည"){
//co++;
ans=ans+" Ha";}//



else if(valu[co-1]=="္" && vtype[valu[co+1]] !=1 && t[valu[co+2]]!="်"){
//co++;
ans=ans+"ha";}//


else if(valu[co+1]=="ည"){

 ans=ans+" Hin";
 
}//

else if( valu[co+1]=="ု" && valu[co+2]=="ည" ){

 ans=ans+" Hone";
 
}//



else if(valu[co+1]=="ှ"){
 ans=ans+" Hh";
}//
else {
    if( valu[co-1]=="္" && vtype[valu[co+1]] ==1 ){
//co++;
ans=ans+"h";}//

else{

    ans=ans+" H";
    }

}//
} //sa

if((valu[co]=="ယ"  )&& t[valu[co+1]]!="်" ){

if(vtype[valu[co+1]] !=1 && t[valu[co+2]]!="်" && valu[co-1]!="္" && valu[co+1] !="ည"){
//co++;
ans=ans+" Ya";}//



else if(valu[co-1]=="္" && vtype[valu[co+1]] !=1 && t[valu[co+2]]!="်"){
//co++;
ans=ans+"ya";}//


else if(valu[co+1]=="ှ"){
 ans=ans+" Sh";
}//
else {
    if( valu[co-1]=="္" && vtype[valu[co+1]] ==1 ){
//co++;
ans=ans+"y";}//

else if(valu[co+1]=="ည"){

 ans=ans+" Yin";
 
}//

else if( valu[co+1]=="ု" && valu[co+2]=="ည" ){

 ans=ans+" Yone";
 
}//




else{

    ans=ans+" Y";
    }

}//
} //sa


if((valu[co]=="ရ"  )&& t[valu[co+1]]!="်" ){

if(vtype[valu[co+1]] !=1 && t[valu[co+2]]!="်" && valu[co-1]!="္"  && valu[co+1] !="ည"){
//co++;
ans=ans+" Ra";}//



else if(valu[co-1]=="္" && vtype[valu[co+1]] !=1 && t[valu[co+2]]!="်"){
//co++;
ans=ans+"ra";}//


else if(valu[co+1]=="ှ"){
 ans=ans+" Sh";
}//

else if(valu[co+1]=="ည"){

 ans=ans+" Yin";
 
}//

else if( valu[co+1]=="ု" && valu[co+2]=="ည" ){

 ans=ans+" Yone";
 
}//


else {
    if( valu[co-1]=="္" && vtype[valu[co+1]] ==1 ){
//co++;
ans=ans+"r";}//

else{

    ans=ans+" R";
    }

}//
} //sa

if((valu[co]=="ဝ"  )&& t[valu[co+1]]!="်" ){

if(vtype[valu[co+1]] !=1 && t[valu[co+2]]!="်" && valu[co-1]!="္" && valu[co+1] !="ည"){
//co++;
ans=ans+" Wa";}//



else if(valu[co-1]=="္" && vtype[valu[co+1]] !=1 && t[valu[co+2]]!="်"){
//co++;
ans=ans+"wa";}//

else if(valu[co+1]=="ှ"){
 ans=ans+" Hw";
}//
else {
    if( valu[co-1]=="္" && vtype[valu[co+1]] ==1 ){
//co++;
ans=ans+"w";}//

else if(valu[co+1]=="ည"){

 ans=ans+" Win";
 
}//

else if( valu[co+1]=="ု" && valu[co+2]=="ည" ){

 ans=ans+" Wone";
 
}//




else{

    ans=ans+" W";
    }
}//
} //sa

if((valu[co]=="အ"  )&& t[valu[co+1]]!="်" ){
//if(vtype[valu[co+1]] !=1 && valu[co+2]!="်"){ans=ans+" Aa";}//
//else



 if(valu[co+1]=="ှ"){
 ans=ans+" A";
}//

else if(valu[co+1]=="ည"){

 ans=ans+" Ain";
 
}//

else if( valu[co+1]=="ု" && valu[co+2]=="ည" ){

 ans=ans+" Aone";
 
}//



else {
    ans=ans+" A";
}//
} //sa

if((valu[co]=="ပ"  )&& t[valu[co+1]]!="်" ){
if(vtype[valu[co+1]] !=1 && valu[co+2]!="်" && valu[co+1] !="ည"){
ans=ans+" Pa";}//
else if(valu[co+1]=="ှ"){
 ans=ans+" Hp";
}//

else if(valu[co+1]=="ည"){

 ans=ans+" Pin";
 
}//

else if( valu[co+1]=="ု" && valu[co+2]=="ည" ){

 ans=ans+" Pone";
 
}//


else {
    ans=ans+" P";
}//
} //sa

if((valu[co]=="ဖ"  )&& t[valu[co+1]]!="်" ){
if(vtype[valu[co+1]] !=1 && valu[co+2]!="်" && valu[co+1] !="ည"){
ans=ans+" Pha";}//

else if(valu[co+1]=="ှ"){
 ans=ans+" Hph";
}//

else if(valu[co+1]=="ည"){

 ans=ans+" Phin";
 
}//

else if( valu[co+1]=="ု" && valu[co+2]=="ည" ){

 ans=ans+" Phone";
 
}//




else {
    ans=ans+" Ph";
}//
} //sa

if((valu[co]=="ဗ" || valu[co]=="ဘ" )&& t[valu[co+1]]!="်" ){
if(vtype[valu[co+1]] !=1 && valu[co+2]!="်" && valu[co+1] !="ည"){
ans=ans+" Ba";}//
else if(valu[co+1]=="ှ"){
 ans=ans+" Hb";
}//

else if(valu[co+1]=="ည"){

 ans=ans+" Vin";
 
}//

else if( valu[co+1]=="ု" && valu[co+2]=="ည" ){

 ans=ans+" Bone";
 
}//



else {
    ans=ans+" B";
}//
} //sa

if((valu[co]=="ဏ" || valu[co]=="န" )&& t[valu[co+1]]!="်" ){
if(vtype[valu[co+1]] !=1 && valu[co+2]!="်" && valu[co+1] !="ည"){
ans=ans+" Na";}//
else if(valu[co+1]=="ှ"){
 ans=ans+" Hn";
}//

else if(valu[co+1]=="ည"){

 ans=ans+" Nin";
 
}//

else if( valu[co+1]=="ု" && valu[co+2]=="ည" ){

 ans=ans+" None";
 
}//


else {
    ans=ans+" N";
}//
} //sa


if(valu[co]=="င" && valu[co+1]=="်"){
 co++;
 if(( valu[co-3]=="ေ" && y[valu[co-2]]=="ာ" ) 
 ){
     ans=ans+"ng";
 }
 
 else if(valu[co-2]=="ု" && valu[co-3]=="ိ"){
     ans=ans+"ing";
 }
 
 else{
ans=ans+"in";
}

}

if(valu[co]=="စ" && t[valu[co+1]]=="်"){
 co++;
ans=ans+"it";
}

if(valu[co]=="ည" && t[valu[co+1]]=="်"){
 co++;
 if(valu[co-2]=="ျ" || valu[co-2]=="ြ" ){
     ans=ans+"i";
 }
 
 else{
ans=ans+"ee";
}

}

if(valu[co]=="ဋ" && t[valu[co+1]]=="်"){
 co++;
ans=ans+"at";
}

if(valu[co]=="ဏ" && t[valu[co+1]]=="်"){
 co++;
ans=ans+"an";
}

if(valu[co]=="တ" && t[valu[co+1]]=="်"){
 co++;
 if(valu[co-2]=="ိ"){
     ans=ans+"ik";
 }
 
 else if(valu[co-2]=="ု"){
     ans=ans+"ke";
 }
 
 else if(valu[co-2]=="ွ"){
     ans=ans+"ut";
 }
 
 else{
 
ans=ans+"at";}
}

if(valu[co]=="န" && t[valu[co+1]]=="်" ){
 co++;
 
 if(valu[co-2]=="ိ"){
     ans=ans+"in";
 }
 
 else if(valu[co-2]=="ု"){
     ans=ans+"n";
 }
 
 else if(valu[co-2]=="ွ"){
     ans=ans+"un";
 }
 else{
ans=ans+"an";
}
}

if(valu[co]=="ပ" && t[valu[co+1]]=="်"){
 co++;
 if(valu[co-2]=="ိ"){
     ans=ans+"ik";
 }
 
 else if(valu[co-2]=="ု"){
     ans=ans+"ke";
 }
 
 else{
 
ans=ans+"at";}
}


if(valu[co]=="မ" && t[valu[co+1]]=="်"){
 co++;
 if(valu[co-2]=="ိ"){
     ans=ans+"in";
 }
 else if(valu[co-2]=="ု"){
     ans=ans+"n";
 }
 
 else{
ans=ans+"am";}
}

if(valu[co]=="ယ" && t[valu[co+1]]=="်"){
 co++;
ans=ans+"ai";
}

if(valu[co]=="ဉ" && t[valu[co+1]]=="်"){
 co++;
ans=ans+"in";
}

if(valu[co]=="ဥ" && t[valu[co+1]]=="်"){
 co++;
ans=ans+"in";
}

if(valu[co]=="ဥ" && valu[co+1]=="က" && valu[co+2]=="္" ){
 co=co+2;
ans=ans+" U";
}



if(valu[co]=="ဦ" ){
 co++;
ans=ans+" Oo";
}

} //while
out.innerHTML=ans;
} //els
}








