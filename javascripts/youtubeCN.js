var icon = "http://s.ytimg.com/yts/img/favicon-vfldLzJxy.ico";
var locationWall = (! $('<img src="'+ icon +'">').load());
var plid="td";
if(locationWall)
{
plid="yt"
}
var player=document.getElementById(plid);
player.parentNode.removeChild(player);
