(function (global) {
	function Util() {
		return Util.fn.init();
	}
	Util.fn = Util.prototype = {
		extend: function () {
			
		},
		indexOf: function (arr, item) {
			
		}
	};
	Util.fn.init = function () {
		return this;
	}
	if (!$util) {
		window.jcUtil = new Util();
	}else {
		console.info("The $util has alreay existed!")
	}
})(window);