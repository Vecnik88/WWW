$(document).ready(function() {
	$(".image").click(checkForCode);
	$(".image").hover(hoverElement, noHoverElement);
	function hoverElement() {
		$(this).addClass(".hover");
	};
	function noHoverElement() {
		$(this).removeClass(".hover");
	};
	function checkForCode () {
		$(".image p").remove();
		hideCode();
		var discount = null;//Math.floor(Math.random()* 5 + 5);
		if ($.contains(this, document.getElementById("has_discount"))) {
			var myNumber = getRandom(5);
			discount = "<p>Your discount is " + myNumber + "%</p>";
		} else {
			discount = "<p>Sorry, no discount this time!</p>";
		}
		$(this).append(discount);
		$(".image").each(function() {
			$(this).unbind('click');
		});
	};

	function getRandom(number) {
		return Math.floor(Math.random() * number);
	};
	var hideCode = function() {
		var numRand = getRandom(4);
		$(".image").each(function(index, value) {
			if (numRand == index) {
				$(this).append("<span id='has_discount'></span>");
				return false;
			}
		});
	};
});