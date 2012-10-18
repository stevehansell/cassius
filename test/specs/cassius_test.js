describe('Cassius', function() {
	describe('init', function() {
		it('sets a cache busting version', function() {
			var cassius = Cassius.init('foo');
			expect(cassius.cacheVersion).toBe('foo');
		});
	
		it('optionally sets a cache busting key', function() {
			var cassius = Cassius.init('foo', 'bar');
			expect(cassius.key).toBe('bar');
		});
	
		it('creates a url param using the cache busting key/value', function() {
			var cassius = Cassius.init('foo', 'cachebuster');
			expect(cassius.param).toBe('?cachebuster=foo')
		});
		
		it('accepts an object for settings', function() {
			var cassius = Cassius.init({
				cacheVersion: 'clay', 
				key: 'cassius'
			});
			expect(cassius.cacheVersion).toBe('clay');
			expect(cassius.key).toBe('cassius');
		});
		
		it('generates a random cacheVersion when in dev mode', function() {
			spyOn(Date, 'now').andReturn(123456789);
			var cassius = Cassius.init({
				cacheVersion: 'clay', 
				key: 'cassius',
				dev: true
			});
			expect(cassius.cacheVersion).toBe(123456789);
		});
	});
	
	describe('path', function() {
		var cassius;
		beforeEach(function() {
			cassius = Cassius.init('clay', 'cassius');
		});
		
		it('returns the filepath with the cache busting param', function() {
			expect(cassius.path('/some/filename.js')).toBe('/some/filename.js?cassius=clay');
		});
	});
});