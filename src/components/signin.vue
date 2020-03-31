<template>
<div class="container">
   <div class="form">           
     <h2>LOGIN FORM</h2>
     <form>
        <div class="page">
             <input type="text" name="" placeholder="user name">
        </div>
        <div class="page">
             <input type="password" name="" placeholder="password">
        </div>                   
        <div class="page">
             <input type="submit" value="Sign In">
        </div>
        <p><span>&copy;</span> <a href="http://github.com/IvanShavliuga">Ivan Shavliuga (Ivanov)</a></p>
                        
     </form>               
   </div>
</div> 
</template>
<style lang="less">
.body {
    margin:0;
    padding:0;
    display:flex;
    justify-content:center;
    min-height:100vh;
    align-elements:center;
    background:transparent;
    font-family:Charm; 
}
.container{
    position:relative;
    width:300px;
    margin-top:150px;
    height:330px;
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
    border-radius:40px;
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
    border-radius:40px;
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
   font-weight:bold;
   margin-left:22%;
   max-width:100px;
   cursor : pointer;
   font-size:20px;
   background:linear-gradient(90deg,#3603ff,#3603dd);
   transition: .5s;
   text-decoration:none;
   
   overflow:hidden;
  
}
.form .page input[type="submit"]:hover
{
    text-shadow: 0 3px 2px rgba(0,0,0,.7);
    box-shadow: 0 0 0 3px rgba(0,0,0,.2); 
}
.form p{
    color: #eee;
    width: 300px;
    margin:15%;
    margin-left:-5px;
}
.form p a{
    color:#fff;
    text-decoration:none;
    font-size:15px;
}
.form p span {
    font-size:1.3em;
    font-weight:bold;
}

</style>