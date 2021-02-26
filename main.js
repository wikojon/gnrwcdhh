var canvas = new fabric.Canvas("myCanvas");
block_image_height = 10;
block_image_width = 10;

player_y = 10;
player_x = 10;

var player_object = ""
var block_image_object = ""

function playerUpdate()
{
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(140)
        player_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(player_object);
    })
}
function newImage(get_Image)
{
    fabric.Image.fromURL(get_Image, function(Img){
        block_image_object = Img
        block_image_object.scaleToWidth(150)
        block_image_object.scaleToHeight(140)
        block_image_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(block_image_object);
    })
}