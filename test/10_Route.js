describe('simple-route', function () {
	describe('Basic usage', function () {
		it('Call target URL', function () {
			var spy = sinon.spy();
			Route.add('exec', '/path/to/url', spy);
			Route.dispath('exec', '/path/to/url');
			expect(spy.called).to.be.ok();
		});
		it('.clear', function () {
			expect(function () {
				Route.clear();
			}).to.not.throwException();
		});
	});
	describe('Unit test', function () {
		beforeEach(function () {
			Route.clear();
		});
		it('Call target URL with queryStrings', function () {
			var spy = sinon.spy();
			Route.add('exec', '/path/to/url', spy);
			Route.dispath('exec', '/path/to/url?queryStrings');
			expect(spy.called).to.be.ok();
		});
		it('Call target RegExp', function () {
			var spy = sinon.spy();
			Route.add('exec', /\?/, spy);
			Route.dispath('exec', '/path/to/url?queryStrings');
			expect(spy.called).to.be.ok();
		});
		it('Call all callback', function () {
			var spy = sinon.spy();
			Route.add('exec', '/', spy);
			Route.dispath('exec');
			expect(spy.called).to.be.ok();
		});
	});
});
