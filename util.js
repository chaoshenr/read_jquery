(function (global) {
	function Util() {
		return Util.fn.init();
	}
	Util.fn = Util.prototype = {
		extend: function () {
			
		}
	};
	Util.fn.init = function () {
		return this;
	}
	if (!$util) {
		window.$util = new Util();
	}else {
		console.info("The $util has alreay existed!")
	}
})(window);