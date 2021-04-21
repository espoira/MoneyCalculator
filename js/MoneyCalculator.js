

	var S_InMonth, chislo;
	var S_NoProcent = new Array(3);
	var S_Deposit = new Array(3);
	var S_Invest = new Array(3);
	var procDep = 6.98/100;
	var procInv = 23.97/100;

	
	function SummNoProcent(S_InMonth){
		var Summ = 0;
		for (var i = 1; i <= 3; i++) {
			S_NoProcent[i] = 12*S_InMonth;
			Summ = Summ+S_NoProcent[i];
		};
		return Summ;
	};
	
	function SummDeposit(S_InMonth){
		S_Deposit[1] = 12*S_InMonth*(1+procDep);
		var Summ = S_Deposit[1];
		for (var i = 2; i <= 3; i++) {
			S_Deposit[i] = S_Deposit[i-1]*(1+procDep);
			Summ = Math.round(Summ + S_Deposit[i]);
		}
		return Summ;
	};
	
	function SummInvest(S_InMonth){
		SumProc = 0;
		for (var i = 1; i <= 3; i++){
			SumProc = SumProc + i*procInv;
		}
		AverageProc = SumProc/3;
		Summ = Math.round(SummNoProcent(S_InMonth)*(1+AverageProc));
		return Summ;
	};
	
	
	function NumberWriting(chislo){
			
		var NumberText;
		var mille = Math.floor(chislo/1000);
		var cent = chislo - 1000*mille;
		var centStr = String(cent);
				
		if (Math.floor(cent/100)==0) {
			if (Math.floor(cent/10)==0) {centStr = '00' + centStr;}
			else centStr = '0' + centStr;
		};
						
		var million = Math.floor(mille/1000);
		if (million==0) {NumberText = mille + ' ' + centStr;}
		else {
				mille = mille - 1000*million;
				var milleStr = String(mille);
				if (Math.floor(mille/100)==0) {
					if (Math.floor(cent/10)==0) {milleStr = '00' + milleStr;}
					else milleStr = '0' + milleStr;
				};	
				NumberText = String(million) + ' ' + milleStr + ' ' + centStr;
				document.getElementById('case-1').style.paddingLeft = '8px';
				document.getElementById('case-3').style.paddingLeft = '0px';
				document.getElementById('case-2').style.width = '158px';
			};
			
		return NumberText;
	};	

	
	
	function MoneyNoProcent(S_InMonth){
		var MaxSumm = SummNoProcent(50000);
		var Step = MaxSumm/10;
		var MoneyQuantity = Math.ceil(SummNoProcent(S_InMonth)/Step);
		return MoneyQuantity;
	};

	function MoneyDeposit(S_InMonth){
		var MaxSumm = SummDeposit(50000);
		var Step = MaxSumm/10;
		var MoneyQuantity = Math.ceil(SummDeposit(S_InMonth)/Step);
		return MoneyQuantity;
	};

	function MoneyInvest(S_InMonth){
		var MaxSumm = SummInvest(50000);
		var Step = MaxSumm/10;
		var MoneyQuantity = Math.ceil(SummInvest(S_InMonth)/Step);
		return MoneyQuantity;
	};
	
