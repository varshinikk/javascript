function animate_string(target) 
{
    var element = document.getElementById(target);
    var textNode = element.childNodes[0]; 
    var text = textNode.data;

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 500);
}