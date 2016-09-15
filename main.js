var z,x;
z=0;
if (z>0) {
x=1;
}
else if (z<0) {
	x=4;
}
else {
	x=8;
}
console.log(x);
  
 var b,c;
b=0;
switch (b>0) {
	case true:c=1;   
	break;
	case false:c=2;
	break;
	default:c=3;
	break;
}
console.log(c);

var x,y;
x=7;
y=3;
for(var i=0;i<78;i++) {
x=x+y;
}
console.log(x);


var stonik={
	"atlantic":777,
	"num":77.77,
	"str_one":'Pasha Tehnik',
	"logic":true,
}
for (var a in stonik)
	console.log(a);

delete stonik["num"];
console.log(stonik);

stonik.abcd=7777;
console.log(stonik);

var stonik={
	"azazel":111,
	"velial":"squad",
	"mefisto":3.20,
	"lucifer":true,
	"LaVey":{bible:111,church:"burn"}
}
console.log(stonik.LaVey.bible);


var exampleobject=Object.create({x:5,y:"text",z:3.8,s:false,f:{one:1,two:2}})
for (var l in exampleobject)
	console.log(l);

var obj = new Object({q:8,w:"asd",e:4.4,r:true,t:{aaa:111,two:222}})
console.log(obj);