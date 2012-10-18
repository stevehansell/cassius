(function() {
	var Cassius = {
		init: function(cacheVersion, key) {
			var settings;
			(typeof cacheVersion === 'string') ? settings = normalizeSettings(cacheVersion, key) : settings = cacheVersion;
			this.cacheVersion = (settings.dev) ? Date.now() : settings.cacheVersion;
			this.key = settings.key || 'cassius';
			this.param = '?' + this.key + '=' + this.cacheVersion;
			return this;
		},
		path: function(filepath) {
			return filepath + this.param;
		}
	};
	
	function normalizeSettings(cacheVersion, key) {
		return {
			cacheVersion: cacheVersion,
			key: key
		};
	};
	
	window.Cassius = Cassius;
})();