	
	var slider = document.getElementById("slider");
	var output = document.getElementById("quantity");
	output.textContent = slider.value; 
	
	
	slider.oninput = function() {
		var sum = this.value;
		var LineLength = 454;
		var scale = LineLength/50000;
		var otstup = String(67+sum*scale)+'px';
		document.getElementById('pop-up').style.left = otstup;
		
		function small(){
			var otstupText = String(sum*scale-3)+'px';
			document.getElementById('quantity').style.left = otstupText; 
			document.getElementById('indicator').style.width='59px';
			var otstupInd = String(40+sum*scale)+'px';
			document.getElementById('indicator').style.left = otstupInd;
		};
		function medium(){
			var otstupText = String(sum*scale-10)+'px';
			document.getElementById('quantity').style.left = otstupText; 
			document.getElementById('indicator').style.width='69px';
			var otstupInd = String(35+sum*scale)+'px';
			document.getElementById('indicator').style.left = otstupInd;
		};
		function large(){
			var otstupText = String(sum*scale-15)+'px';
			document.getElementById('quantity').style.left = otstupText; 
			document.getElementById('indicator').style.width='79px';
			var otstupInd = String(30+sum*scale)+'px';
			document.getElementById('indicator').style.left = otstupInd;
		};

		var mille = Math.floor(sum/1000);
		if (mille==0) {output.textContent = ' ' + sum +' ₽';
					   small();}
	    else {
			if (mille<10) {medium();}
			else {large();}
			var cent = sum-1000*mille;
			if (Math.floor(cent/100)>0) 
				{output.textContent = mille + ' ' + cent +' ₽';}
			else if (Math.floor(cent/10)>0) 
					{output.textContent = mille + ' 0' + cent +' ₽';}
				 else {output.textContent = mille + ' 00' + cent +' ₽';}
		}
		
		document.getElementById('indicator').style.opacity='1';
		document.getElementById('pop-up').style.opacity='1';
	}; 
	
	
	slider.onmouseup = function() {
		document.getElementById('podschet').style.display='block';
		location.href='#podschet';
		document.getElementById('summa').textContent=output.textContent;
	}
	