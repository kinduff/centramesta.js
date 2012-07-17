jQuery.fn.centramesta = function () {
	return this.each (function () {
		var t = $(this);
		var h = (t.height())/2*-1;
		var w = (t.width())/2*-1;
		var f = "50%";
             	t.css({"position": "absolute", "top": f, "left": f, "margin-top": h, "margin-left": w});
	});
}
