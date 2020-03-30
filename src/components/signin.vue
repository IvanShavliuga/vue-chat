<template>
<div class="container">
   <div class="theme-switch-wrapper"> 
     <label class="theme-switch" for="checkbox"> <input type="checkbox" id="checkbox"/>
     <div class="move round"></div> </label> 
   </div> 
   <div class="form">           
     <h2>LOGIN FORM</h2>
     <form>
        <div class="page">
             <input type="text" name="" placeholder="username">
        </div>
        <div class="page">
             <input type="password" name="" placeholder="password">
        </div>                   
        <div class="page">
             <input type="submit" value="LOGIN">
        </div>
        <p><a href=#> or sign in with</a></p>
        <div class="social">
            <span><i class="fab fa-facebook-f"></i></span>
            <span><i class="fab fa-google-plus"></i></span>
            <span><i class="fab fa-github"></i></span>
        </div>                
     </form>               
   </div>
</div> 
</template>
<style lang="less">
@import url('https://fonts.googleapis.com/css?family=Permanent+Marker');
body {
    margin:0;
    padding:0;
    display:flex;
    justify-content:center;
    /*min-height:100vh;*/
    align-elements:center;
    background:#000;
    font-family:Charm; 
}
.container{
    position:relative;
    width:300px;
    margin-top:20%;
    height:430px;
    border-radius:40px;
    min-height:100px;
    background:rgba(255,255,255,0.05);
    box-shadow:0 0 15px rgba(0,0,0,1);
}
.container:before{
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:50%;
    height:100%;
    background:rgba(255,255,255,0.1);  
}
.container:after{
    content:'';
    position:absolute;
    top:-5px;
    left:-5px;
    right:-5px;
    bottom:-5px;
    pointer-events:none;
    background-image:linear-gradient(-45deg,#ff00ff,#220066);      
}
.form{
    position:absolute;
    width:100%;
    height:100%;
    padding:40px;
    box-sizing:border-box;
    z-index:1;
}
.form h2{
    margin:0;
    font-family:Permanent Marker;
    padding:0;
    color:#ddd;
    letter-spacing:2px;
    font-size:24px;
}
.form .page {
    width:100%;
    margin-top:30px;
}
.form .page input{
    width:100%;
    background:transparent;
    border:none;    
    border-bottom:2px solid  #fff;
    outline:none;
    font-size:18px;
    color:#fff;
    padding:5px 0;
    font-family:consolas;
}
::placeholder{
    font-style:italic;
    color:#ccc;
}
.form .page input[type="submit"]
{
   color:#fff;
   border:none;
   border-radius:30px;
   font-weight:300;
   margin-left:22%;
   max-width:100px;
   cursor : pointer;
   font-size:20px;
   background:linear-gradient(90deg,#3603ff,#3603dd);
   transition: .5s;
   text-decoration:none;
   text-shadow: 0 3px 2px rgba(0,0,0,.7);
   overflow:hidden;
   box-shadow: 0 0 0 5px rgba(0,0,0,.2); 
}
a:before{
    content:'';
    position:absolute;
    background:linear-gradient(-90deg,transparent,pink,transparent);
    transition: .5s;
    text-shadow:0 0 0 5px rgba(0,0,0,.7);
}
a:hover:before{
    transform:translate(-30%,-30%) perspective(500px) rotate(-15deg);
    filter:blur(30px);
}
.form p{
    color: #eee;
}
.form p a{
    color:#fff;
    text-decoration:none;
    font-size:15px;
}
.social{
    position: relative;
    margin-top: 15px;
    text-align: center;
    transition: all 1s ease;    
}
.social span{
    font-size: 20px;
    color: purple;
    transition: all 1s ease;
}
.social span:nth-child(2){
    margin-left: 15px;
    margin-right: 15px;
    transition: all 1s ease;
}
.social:hover::before{
    transform:translate(-30%,-30%);
    color:violet;
}
.social:hover::after{
    background:linear-gradient(-90deg,transparent,#ff0,transparent);
}
p{
    margin:15%;    
}
.theme-switch-wrapper {
    display: flex;
    align-items: center;  
    margin-left:70%; 
    margin-top:3%;
}
.theme-switch { 
   outline:none;
   display: inline-block;
   height: 34px; 
   position:relative ; 
   z-index:30;
   width: 60px; 
} 
.theme-switch input { 
   display:none;
}
.move { 
   background-color: #ccc; 
   bottom: 0; 
   cursor: pointer; 
   left: 0; 
   position: absolute;
   right: 0;
   top: 0; 
   transition: .4s; 
} 
.move:before { 
   background-color: #fff; 
   bottom: 4px;
   content: ""; 
   height: 26px;
   left: 4px;
   position:  absolute; 
   transition: .4s; 
   width: 26px;
} 
input:checked + .move {
   background-color: #66bb6a; 
} 
input:checked + .move:before { 
   transform: translateX(26px);
}
.move.round { 
   border-radius: 34px; 
}             
.move.round:before { 
   border-radius: 50%;
} 

</style>