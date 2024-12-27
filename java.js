var add = document.querySelector("#add")
var friend = document.querySelector("h5")
var flage= 0;

add.addEventListener("click",function(){
	if(flage == 0){
	friend.innerText ="Friends"
	friend.style.color = "lightgreen"
	add.innerHTML ="Remove Friend"
		add.style.backgroundColor= "#F41A01"
		flage =1;

	}else{
	friend.style.color = "red"
		add.innerHTML ="Add Friends"
	friend.innerText ="Stranger"
		add.style.backgroundColor= "#9BF527"
		flage=0;


	}
	
	
})




