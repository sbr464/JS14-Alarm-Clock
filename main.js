$(document).on('ready', function() {
  
var Snooze3d = $('<div class="Snooze3d"><img src="images/3dSnooze.png"></div>'); 
var outerShell = $('<div class="outerShell"><img src="images/ClockContainer.png"></div>');
var timeWindowLeft = $('<div class="timeWindowLeft"><img src="images/LeftWindow.png"></div>');
var timeWindowRight = $('<div class="timeWindowRight"><img src="images/RightWindow.png"></div>');
var AlarmOn = $('<div class="AlarmOn"><img src="images/AlarmOn.png"></div>');
var SnoozeButton = $('<div id="SnoozeButton" class="SnoozeButton"><img src="images/SnoozeButton.png"></div>');
var AMPMindicator = $('<div id="ampm" class="IndicatorAM"><img src="images/AMPMindicator.png"></div>');
var hours = $('<div class="hours"></div>');
var minutes = $('<div class="minutes"></div>');

var pm = true;

var ampm = function() {
	if (h < 12) {
		pm === false; 
	} else {
		pm === true;
	}
}

var d = new Date();
var h = d.getHours();
var m = d.getMinutes();

var digitfix = function(){
	if (m < 10) {
		return "0" + m;
	} else {
		return m;
	}
}

 $('.container').append(Snooze3d);
 $('.container').append(SnoozeButton);
 $('.container').append(outerShell);
 $(outerShell).append(AlarmOn);
 $(outerShell).append(timeWindowLeft);
 $(outerShell).append(timeWindowRight);
 $(outerShell).append(AMPMindicator);
 $(outerShell).append(hours);
 $(outerShell).append(minutes);

 $("body").click(function(){
	$(SnoozeButton).toggleClass("SnoozeButtonDown");
 });

 // $("body").click(function(){
	// $(AMPMindicator).toggleClass("IndicatorPM");
 // });

 $("body").click(function(){
 	$(AlarmOn).toggle("display");
  });

 $(".hours").text(h);
 $(".minutes").text(digitfix());
 



 // $(AMPMindicator).addClass("IndicatorPM");

});