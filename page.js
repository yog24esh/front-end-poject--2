$(document).ready(function(){
  
  //createquote();
  

  $('.forward').on("click",function(){
  createquote();
});

 function createquote(){
   function foo(quote,author){
  this.quote=quote;
  this.author=author;
}
var bar=new Array();
bar[0]=new foo("Success is a lousy teacher.It seduces smart people into thinking they cant't lose.","BIIL GATES");
bar[1]=new foo("I am at peace with God.My conflict is with man.","CHARLIE CHAPLIN");
bar[2]=new foo("Why join navy if you can be pirate?","STEVE JOBS");
bar[3]=new foo("None but ourselves can free our minds.","BOB MARLEY");
bar[4]=new foo("Gardens are not made by singing \"Oh,how beautiful,\"and sitting in the shade.","RUDYARD KIPLING");
bar[5]=new foo("I dont't know the key to success, but the key to failure is trying to please everybody.","BILL COSBY");
bar[6]=new foo("I intend to live forever or die trying.","GROUNCO MARX");
bar[7]=new foo("To hell with circumstances; I create oppurtunities.","BRUCE LEE");
bar[8]=new foo("Life, like poker, has an element of risk.It shouldn't be avoided.It should be faced.","EDWARD NORTON" );
bar[9]=new foo("You've got to ask yourself one question:'Do I feel lucky?' Well, do ya punk?","CLINT EASTWOOD");
bar[10]=new foo("Excuse me while I kiss the sky.","JIM HENDRIX");
bar[11]=new foo("I never wanted to be famous. I only wanted to be great.","RAY CHARLES");
bar[12]=new foo("When some people talk to me, I can hardly wait for them to shut up. Like shut up, you are a moron; I have nothing to say to you.","BILLIE JOE armstrong");
bar[13]=new foo("When the world gets in my face, I say,'Have a nice day'.","JON BON JOVI");
bar[14]=new foo("If you cant't make it good, at least make it look good.","BILL GATES");
bar[15]=new foo("The future belongs to those who prepare for it today.","MALCOM X");
bar[16]=new foo("I can no longer obey; I have tasted command and I cannot give it up.","NAPOLEON BONAPARTE");
bar[17]=new foo("A man cant't ride your back unless it's bent.","MARTIN LUTHER KING JR");
bar[18]=new foo("I'd rather laugh with the sinner than cry with the saints - The sinner are much more fun.","BILLY JOEL");
bar[19]=new foo("I love it when someone insults me. That means that I don't have to be nice anymore.","BILLY IDOL");
bar[20]=new foo("The question isn't who is going to,let me; it's who is going to stop me.","ANY RAND");
bar[21]=new foo("I don't mind living in a man's world as long as I can be a woman in it.","MARILYN MONROE");
bar[22]=new foo("Serious is the only refuge of the shallow.","ORCAR WILDE");
bar[23]=new foo("Don't try to be like jackie. There is only one Jackie. Study computers insted.","JACKIE CHAN");
bar[24]=new foo("It's better to be a fake somebody than a real nobody.","MATT DAMON");
                
  var max=24;
  var min=0;
var num = Math.floor(Math.random()*(max-min+1))+min;

$("#quote").text(bar[num].quote);
$("#author").text(bar[num].author);
 };

});//end of ready function
