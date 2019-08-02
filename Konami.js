var KeySequence = '38384040373937396665';
var KeysPressed = '';
var counter = 0;

document.onkeyup = KeyPress;

function KeyPress(e){
	
	var KeyID = (window.event) ? event.keyCode : e.keyCode;
	switch(KeyID){
		case 38:
			KeysPressed = KeysPressed + '38';
			counter = counter + 1;
			break;
		case 40:
			KeysPressed = KeysPressed + '40';
			counter = counter + 1;
			break;
		case 37:
			KeysPressed = KeysPressed + '37';
			counter = counter + 1;
			break;
		case 39:
			KeysPressed = KeysPressed + '39';
			counter = counter + 1;
			break;
		case 66:
			KeysPressed = KeysPressed + '66';
			counter = counter + 1;
			break;
		case 65:
			KeysPressed = KeysPressed + '65';
			counter = counter + 1;
			break;
		default:
			KeysPressed = '';
			counter = 0;
			break;
	}
	
	if(counter == 10){
		if(KeysPressed == KeySequence){
			showKonamiModal();
		}
		KeysPressed = '';
		counter = 0;
	 }
}



function showKonamiModal(){
	
	var ExistingDiv = document.getElementById('KonamiContent');
	if (ExistingDiv != null){
		ExistingDiv.style.display = 'block';
	}
	else{
		var screenWidth = document.body.clientWidth; 
		var screenHeight = document.body.clientHeight;
		
		var modalWidth = '200px';
		modalWidth = modalWidth.replace(/px/gi,'');
		
		var modalHeight = 'auto';
		modalHeight = modalHeight.replace(/px/gi,'');
		
		var leftLoc;
		if (modalWidth == 'auto' || modalWidth == ''){
			leftLoc = (screenWidth/4);
			leftLoc = leftLoc + 'px';
		}
		else{
			leftLoc = (screenWidth - modalWidth)/2;
			leftLoc = leftLoc + 'px';
		}
		
		var topLoc;
		if (modalHeight == 'auto' || modalHeight == ''){
			topLoc = (screenHeight/4);
			topLoc = topLoc + 'px';
		}
		else{
			topLoc = (screenHeight - modalHeight)/2;
			topLoc = topLoc + 'px';
		}
		
		var modal = '<div id="KonamiContent" style="display: block; position: absolute; width: ' + modalWidth + '; height: ' + modalHeight + '; z-index: 999; margin: 0 auto; top: ' + topLoc + '; left: ' + leftLoc + '">';
		modal = modal + '<table cellpadding="5" cellspacing="0" width="100%" style="background-color: red; font-weight: bold; color: black; border: solid 2px black">';
		modal = modal + '<tr>';
		modal = modal + '<td align="center" colspan="2">';
		modal = modal + 'Congratulations you have entered the Konami Code!<br /><br />Press OK to learn more about this code.<br />Press Cancel to return to the page.<br />';
		modal = modal + '<img src="NinjaDance.gif" alt="KONAMI!">'
		modal = modal + '</td>';
		modal = modal + '</tr>';
		modal = modal + '<tr>'
		modal = modal + '<td align="center">';
		modal = modal + '<br /><br />';
		modal = modal + '<input style="background-color: black; color: red; font-weight: bold;" id="btnOK" type="button" value="OK" onclick="window.open(\'http://www.google.com/#hl=en&q=konami+code&btnG=Google+Search&aq=f&oq=konami+code&fp=DwUsqvqK_ig\'); document.getElementById(\'KonamiContent\').style.display = \'none\';" />';
		modal = modal + '<br /><br />';
		modal = modal + '</td>';
		modal = modal + '<td align="center">';
		modal = modal + '<br /><br />';
		modal = modal + '<input style="background-color: black; color: red; font-weight: bold;" id="btnCancel" type="button" value="Cancel" onclick="document.getElementById(\'KonamiContent\').style.display = \'none\';" />';
		modal = modal + '<br /><br />';
		modal = modal + '</td>';
		modal = modal + '</tr>';
		modal = modal + '<tr>';
		modal = modal + '<td align="center" colspan="2">';
		modal = modal + '<img src="code.png" alt="KONAMI!">'
		modal = modal + '</td>';
		modal = modal + '</tr>';
		modal = modal + '</table>';
		modal = modal + '</div>';
		
		
		var div = document.createElement("div");
		div.innerHTML = modal;
		document.body.appendChild(div);
  }
}