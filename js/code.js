var g_earth=9.8;
var g_mars=3.7;
var g_Jupyter=24.8;
var g_mercury=3.7;
var g_venus=8.87;
var g_saturn=10.44;
var g_uranus=8.87;
var g_neptune=11.15;
var g_pluto=0.6;
var g_kepler62b=4.68;
var final_weight;
//document.getElementById('form').onsubmit=
function data(){
var user_weight=parseInt(document.getElementById('userweight').value);
var user_planet=document.getElementById('selected_planet').value;
if (user_planet=="Mars") {
  final_weight=parseInt((user_weight*g_mars)/g_earth);
}
else if (user_planet=="Jupyter") {
  final_weight=parseInt(user_weight*g_Jupyter/g_earth);

}
else if (user_planet=="Mercury") {
final_weight=parseInt(user_weight*g_mercury/g_earth);
}
else if (user_planet=="Venus") {
final_weight=parseInt(user_weight*g_venus/g_earth);
}
else if (user_planet=="Saturn") {
final_weight=parseInt(user_weight*g_saturn/g_earth);
}
else if (user_planet=="Uranus") {
final_weight=parseInt(user_weight*g_uranus/g_earth);
}
else if (user_planet=="Neptune") {
final_weight=parseInt(user_weight*g_neptune/g_earth);
}
else if (user_planet=="Pluto") {
final_weight=parseInt(user_weight*g_pluto/g_earth);
}
else if (user_planet=="Kepler62B") {
final_weight=parseInt(user_weight*g_kepler62b/g_earth);
document.getElementById('special').style.visibility='visible';
document.getElementById('kepler').style.visibility='visible';

//getElementsByClassName=always gives you a nodeList object, even if it had only one member. NodeList object doesn't have style property,
}
result=document.getElementById('labelresult').innerText="Tu peso en  "+user_planet+" es "+final_weight;
return result;
}
