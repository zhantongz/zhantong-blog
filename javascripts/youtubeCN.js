var icon = "http://s.ytimg.com/yts/img/favicon-vfldLzJxy.ico";
var locationWall = (! $('<img src="'+ icon +'">').load()); // false if out of Mainland; true otherwise
var plid="td"; // remove tudou if outside of Mainland
if(locationWall)
{
  plid="yt" // remove youtube if inside of Mainland
}
var player=document.getElementById(plid);
player.parentNode.removeChild(player);
