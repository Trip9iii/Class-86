var x=500;
var y=300;
var width=40;
var height=40;
var canvas=new fabric.Canvas('myCanvas');
var player="";
var block="";
function player_update()
{
fabric.Image.fromURL("player.png", function(Img){
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
top:y,
left:x
});
canvas.add(player_object);
});
}
function new_image(get_image)
{
fabric.Image.fromURL(get_image, function(Img){
block_object=Img;
block_object.scaleToWidth(width);
block_object.scaleToHeight(height);
block_object.set({
top:y,
left:x
});
canvas.add(block_object);
});
}