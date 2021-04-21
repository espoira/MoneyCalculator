	
	var slider = document.getElementById("slider");
	var output = document.getElementById("quantity");
	
	var user = detect.parse(navigator.userAgent);
	if (user.browser.family == "Firefox") {
		document.getElementById('slider').style.left = "8px";
		document.getElementById('slider').style.top = "18px";
		document.getElementById('slider').style.height = "7px";
	};
	
	slider.oninput = function() {		
		var sum = this.value;
		var LineLength = 454;
		var scale = LineLength/50000;
		var otstup = String(42+sum*scale)+'px';
		document.getElementById('pop-up').style.left = otstup;
		
		var l,w;
		function IndicatorMove(l,w){
			document.getElementById('indicator').style.width = String(w)+'px';
			var otstupInd = String(l+sum*scale)+'px';
			document.getElementById('indicator').style.left = otstupInd;
		};

		var mille = Math.floor(sum/1000);
		if (mille==0) {output.textContent = ' ' + sum;
					   IndicatorMove(15,59);}
	    else {
			if (mille<10) {IndicatorMove(10,69);}
			else IndicatorMove(5,79);
			var cent = sum - 1000*mille;
			if (Math.floor(cent/100)>0) 
				{output.textContent = mille + ' ' + cent;}
			else if (Math.floor(cent/10)>0) 
					{output.textContent = mille + ' 0' + cent;}
				 else {output.textContent = mille + ' 00' + cent;}
		};
		
		document.getElementById('indicator').style.opacity = '1';
		document.getElementById('pop-up').style.opacity = '1';
		
		var CvetLength;
		document.getElementById('polosa').style.visibility = 'visible';
		if (sum<16000) {
			if (sum<9000) {CvetLength = sum*(LineLength+32)/50000;}
			else CvetLength = sum*scale;
		}
		else { 
			   if (sum<25000) {CvetLength = sum*(LineLength-8)/50000;}
			   else {CvetLength = sum*(LineLength-15)/50000;};
		};
		if (sum<5000) {CvetLength = sum*(LineLength+55)/50000;}
		document.getElementById('polosa').style.width = String(CvetLength)+'px';
		
		if (flag == true) {ScreenCleaning();};
	}; 
	
	document.getElementById("polosa").onclick = function(){
		document.getElementById('polosa').style.visibility = 'hidden';
	};
	
	var flag;
	
	var moneyPic = new Array(30);
	for (var i = 1; i <= 30; i++){
		moneyPic[i] = document.createElement('img');
		moneyPic[i].src = "pictures/money.svg";
		moneyPic[i].id = "monetka";
	};
		
	function ScreenCleaning(){
		for (var i = 1; i <= 30; i++){
			document.getElementById('monetka').remove();
			document.getElementById('podschet').style.display = 'none';
		};
		flag = false;
	};

	
	slider.onmouseup = function() {		
		document.getElementById('podschet').style.display = 'block';
		location.href = '#podschet';
		document.getElementById('summa').textContent = output.textContent;
		
		var S_InMonth = this.value;
		if (S_InMonth==0) {
			document.getElementById('SummNoProcent').textContent = '0';
			document.getElementById('SummDeposit').textContent = '0';
			document.getElementById('SummInvest').textContent = '0';
		}
		
		else{
			
			document.getElementById('SummNoProcent').textContent = NumberWriting(SummNoProcent(S_InMonth));
			document.getElementById('SummDeposit').textContent = '~' + NumberWriting(SummDeposit(S_InMonth));
			document.getElementById('SummInvest').textContent = 'до ~' + NumberWriting(SummInvest(S_InMonth));
			
			
			function MoneyMoving(moneyPic,i,k,n){
				if (i/2==Math.round(i/2)) {var toLeft = String((1-i)*(55-k/2)+n+(i-2)*55);}
				else {var toLeft = String(n+Math.floor((i-1)/2)*k);};
				moneyPic.style.left = toLeft + 'px';
				var toTop = String(-Math.floor((i-1)/2)*60-168);
				moneyPic.style.top = toTop + 'px';
			};
			
			var kNP = MoneyNoProcent(S_InMonth);
			for (var i = 1; i <= kNP; i++){
				if (kNP<=5) {k = 30;
						if (kNP<=2) {n = 40;} else n = 25;
					} 	
				else { k = 25; 
					   if (kNP<8) {n = 15;} else n = 0;
					 };
				if (kNP==5)	n = 15;
				MoneyMoving(moneyPic[i],i,k,n);
				document.getElementById('case-1').appendChild(moneyPic[i]);
			};
			
			var kDep = MoneyDeposit(S_InMonth);
			for (var i = 11; i <= kDep+10; i++){
				if (kDep<=5) {k = 30;
						if (kDep<=2) {n = 45;} else n = 30;
					} 
				else { k = 25; 
					   if (kDep<=8) {n = 18;} else n = 5;
					 };
				if (kDep==5) n = 25;
				MoneyMoving(moneyPic[i],i-10,k,n);
				document.getElementById('case-2').appendChild(moneyPic[i]);
			};
			
			var kInv = MoneyInvest(S_InMonth);
			for (var i = 21; i <= kInv+20; i++){ 
				if (kInv<=5) {k = 30;
						if (kInv<=2) {n = 55;} else n = 32;
					} 
				else { k = 25; 
					   if (kInv<=8) {n = 15;} else n = -5;
					 };
				if (kInv==5) n = 25;
				MoneyMoving(moneyPic[i],i-20,k,n);
				document.getElementById('case-3-pic').appendChild(moneyPic[i]);
			};
		};
		
		flag = true;

	};
	