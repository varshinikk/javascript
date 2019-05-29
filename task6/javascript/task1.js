function selectAll(){
				var items=document.getElementsByName('rs');
				for(var i=0; i<items.length; i++){
					if(items[i].type=='checkbox')
						items[i].checked=true;
				}
			}
			
			function UnSelectAll(){
				var items=document.getElementsByName('rs');
				for(var i=0; i<items.length; i++){
					if(items[i].type=='checkbox')
						items[i].checked=false;
				}
}
function updatecost()
{
	var items=document.getElementsByName('rs');
	var sum=0;
	for (var i = 0; i < items.length; i++) {
		if (items[i].type=='checkbox' && items[i].checked==true)
			sum=parseInt(items[i].value)+sum;
	}
	// document.write("total is = "+sum);
	document.getElementById("demo").innerHTML="total is "+sum;
}