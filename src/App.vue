<template>
<div id="app">
  <form id="msform">
  <ul id="progressbar">
    <li class="active">Account Setup</li>
    <li>Social Profiles</li>
    <li>Personal Details</li>
  </ul>
  <fieldset>
    <h2 class="fs-title">Create your account</h2>
    <h3 class="fs-subtitle">This is step 1</h3>
    <input type="text" name="email" placeholder="Email" />
    <input type="password" name="pass" placeholder="Password" />
    <input type="password" name="cpass" placeholder="Confirm Password" />
    <input type="button" name="next" class="next action-button" value="Next" />
  </fieldset>
  <fieldset>
    <h2 class="fs-title">Social Profiles</h2>
    <h3 class="fs-subtitle">Your presence on the social network</h3>
    <input type="text" name="twitter" placeholder="Twitter" />
    <input type="text" name="facebook" placeholder="Facebook" />
    <input type="text" name="gplus" placeholder="Google Plus" />
    <input type="button" name="previous" class="previous action-button" value="Previous" />
    <input type="button" name="next" class="next action-button" value="Next" />
  </fieldset>
  <fieldset>
    <h2 class="fs-title">Personal Details</h2>
    <h3 class="fs-subtitle">We will never sell it</h3>
    <input type="text" name="fname" placeholder="First Name" />
    <input type="text" name="lname" placeholder="Last Name" />
    <input type="text" name="phone" placeholder="Phone" />
    <textarea name="address" placeholder="Address"></textarea>
    <input type="button" name="previous" class="previous action-button" value="Previous" />
    <input type="submit" name="submit" class="submit action-button" value="Submit" />
  </fieldset>
  </form>
<router-view/>
</div>
</template>
<script src="assets/jquery-2.1.4.min.js"></script>
<script src="assets/jquery-1.8.5-ui.min.js"></script>
<script src= "assets/register.js"></script>
<script>

export default {
  name: 'App'
}

var current_fs, next_fs, previous_fs;
var left, opacity, scale;
var animating;

$(".next").click(function(){
  if(animating) return false;
  animating = true;
  current_fs = $(this).parent();
  next_fs = $(this).parent().next();

  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
  next_fs.show();
  current_fs.animate({opacity:0},{
    step: function(now,mx){
      scale = 1 - (1 - now) * 0.2;
      left = (now * 50)+"%";
      opacity = 1 - now;
      current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
      next_fs.css({'left': left,'opacity': opacity});
    },
    duration: 800,
    complete: function(){
      current_fs.hide();
      animating = false;
    },
    easing: 'easeInOutBack'
  });
});
</script>

<style>
#app{
font-family: 'Avenir', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}

*{
  margin: 0; padding: 0;
}

html{
  height: 100%;
  background: linear-gradient(rgba(196, 102, 0, 0.6), rgba(155, 89, 182, 0.6));
  }

body{
  font-family: montserrat, arial, verdana;
  }

#msform{
  width: 400px;
  margin: 50px auto;
  text-align: center;
  position: relative
}

#msform fieldset{
  background: white;
  border: 0 none;
  border-radius: 3px;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
  padding: 20px 30px;box-sizing: border-box;
  width: 80%;
  margin: 0 10%;
  position: relative;
}

#msform fieldset:not(:first-of-type){
display: none;
}

#msform input, #msform textarea{
padding: 15px;border: 1px solid #ccc;border-radius: 3px;margin-bottom: 10px;width: 100%;box-sizing: border-box;font-family: montserrat;color: #2C3E50;font-size: 13px;
}

#msform .action-button{
width: 100px;background: #27AE60;font-weight: bold;color: white;border: 0 none;border-radius: 1px;cursor: pointer;padding: 10px 5px;margin: 10px 5px;
}

#msform .action-button:hover, #msform .action-button:focus{
box-shadow: 0 0 0 2px white, 0 0 0 3px #27AE60;
}

.fs-title{
font-size: 15px;text-transform: uppercase;color: #2C3E50;margin-bottom: 10px;
}

.fs-subtitle{
font-weight: normal;font-size: 13px;color: #666;margin-bottom: 20px;
}

#progressbar{
margin-bottom: 30px;overflow: hidden;counter-reset: step;
}

#progressbar li{
list-style-type: none;color: white;text-transform: uppercase;font-size: 9px;width: 33.33%;float: left;position: relative;
}

#progressbar li:before{
content: counter(step);counter-increment: step;width: 20px;line-height: 20px;display: block;font-size: 10px;color: #333;background: white;border-radius: 3px;margin: 0 auto 5px auto;
}

#progressbar li:after{
content: '';width: 100%;height: 2px;background: white;position: absolute;left: -50%;top: 9px;z-index: -1;
}

#progressbar li:first-child:after{
content: none;
}

#progressbar li.active:before,#progressbar li.active:after{
background: #27AE60;color: white;
}
</style>
