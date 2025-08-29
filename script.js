//your JS code here. If required.
document.addEventListener("DOMContentLoaded",function(){
let select=document.getElementById("colorSelect");
			
let button=document.querySelector('input[type="button"]'];
	button.addEventListener("click",function(){
		let si=select.si;
		if(si!==-1){
			select.remove(si);
		}
	});
});