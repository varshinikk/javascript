var x=0;
var array=Array();
function add()
{
	array[x]=document.getElementById("text1").value;
	x++;
	document.getElementById("text1").value=" ";
}
function display()
{
	for(var i=0; i<array.length; i++)
	{
alert("a = "+array[i]+" "+i+ " Index ")
	}
}