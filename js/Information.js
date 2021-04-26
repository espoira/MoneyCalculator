
		var k, schetchik = 0;

		function showText1() {
			
			var popupNoProc = document.getElementById("popup-1");
			popupNoProc.innerHTML = 'В этом мало смысла — такие' + '<br>' + 'накопления «съедает» инфляция';
			popupNoProc.classList.toggle("show");
			document.getElementById("strelka").classList.toggle("show");
			document.getElementById("strelka").style.left = "-15px";
			
			if (schetchik%2==0) {
				document.getElementById("ask-1").style.color = "#fff";
				document.getElementById("ask-1").style.background = "#FE4D4A";
				document.getElementById("strelka").style.opacity = "1";
			}
			else {
				document.getElementById("ask-1").style.color = "#FE4D4A";
				document.getElementById("ask-1").style.background = "#FEEBEF";
				document.getElementById("strelka").style.opacity = "0";
				if (k==2) {showText2();};
				if (k==3) {showText3();};
			};
			
			k = 1;	
			
			schetchik ++;
			
		}	
		
		function showText2() {
			
			var popupDeposit = document.getElementById("popup-2");
			popupDeposit.innerHTML = 'Ставки по вкладам различны в разных банках и зависят от многих факторов,' + '<br>' + 'в частности, от ключевой ставки Центрального банка РФ'
			+ '<a href = "screen.pdf">¹</a>.';
			popupDeposit.classList.toggle("show");
			popupDeposit.style.top = "-136px";
			popupDeposit.style.left = "-50px";
			document.getElementById("strelka").classList.toggle("show");
			document.getElementById("strelka").style.left = "170px";
			
			if (schetchik%2==0) {
				document.getElementById("ask-2").style.color = "#fff";
				document.getElementById("ask-2").style.background = "#FE4D4A";	
				document.getElementById("strelka").style.opacity = "1";				
			}
			else {
				document.getElementById("ask-2").style.color = "#FE4D4A";
				document.getElementById("ask-2").style.background = "#FEEBEF";
				document.getElementById("strelka").style.opacity = "0";
				if (k==1) {showText1();};
				if (k==3) {showText3();};
			};
			
			k = 2;	
			
			schetchik ++;

		}	
		
		function showText3() {
			
			var popupInvest = document.getElementById("popup-3");
			popupInvest.innerHTML = 'Вы становитесь инвестором набора компаний, который определяют профессиональные управляющие.' + '<br>' + 'Они решают, когда покупать' + '<br>' + 'и продавать ценные бумаги, чтобы обеспечить инвестиционный доход. Купить или продать паи фонда можно в любой момент'
			+ '<a href = "screen.pdf">²</a>.';
			popupInvest.classList.toggle("show");
			popupInvest.style.top = "-208px";
			popupInvest.style.left = "-70px";
			document.getElementById("strelka").classList.toggle("show");
			document.getElementById("strelka").style.left = "415px";
			
			if (schetchik%2==0) {
				document.getElementById("ask-3").style.color = "#fff";
				document.getElementById("ask-3").style.background = "#FE4D4A";
				document.getElementById("strelka").style.opacity = "1";
			}
			else {
				document.getElementById("ask-3").style.color = "#FE4D4A";
				document.getElementById("ask-3").style.background = "#FEEBEF";
				document.getElementById("strelka").style.opacity = "0";
				if (k==1) {showText1();};
				if (k==2) {showText2();};
			};
			
			k = 3;	
			
			schetchik ++;	

		};	
		
		
		
		function ShowStatistics() {		
	
				document.getElementById('scroller').style.height = '680px';
				document.getElementById('block').style.display = 'none';
				document.getElementById('statistika').style.display = 'block';
				location.href = '#statistika';
				
				DrawingDiagrams();
				
		}	
		
		function DrawingDiagrams() {
			
			var canvas = document.getElementById("diagrams"); 
			var context = canvas.getContext("2d");
			canvas.width = 600;  
			canvas.height = 175; 
			

			cxL = 150; cxR = 450;
			cy = 88; krugR = 55; 
			context.lineWidth = 15;
			context.strokeStyle = "#fff";	
			
			context.beginPath();
			context.arc(cxL,cy,krugR,0,2*Math.PI);
			context.stroke();
			context.closePath();
			
			context.beginPath();
			context.arc(cxR,cy,krugR,0,2*Math.PI);
			context.stroke();
			context.closePath();
			
			
			ProcLeft = document.getElementById("statistic-left").textContent;
			ProcRight = document.getElementById("statistic-right").textContent;
			
			dugaR = 62; 
			start = -Math.PI/2;
			
			finishL = Math.PI/2*(ProcLeft/25 - 1);
			finishR = Math.PI/2*(ProcRight/25 - 1);
			
			context.lineWidth=30;
			context.strokeStyle = "#FE4D4A";	
			
			context.beginPath();
			context.arc(cxL,cy,dugaR,start,finishL);
			context.stroke();
			context.closePath();
			
			context.beginPath();
			context.arc(cxR,cy,dugaR,start,finishR);
			context.stroke();
			context.closePath();

		};
		
		
		function CloseStatistics() {		
	
				document.getElementById('scroller').style.height = '430px';
				document.getElementById('statistika').style.display = 'none';
				document.getElementById('block').style.display = 'block';
				
		};
				
				