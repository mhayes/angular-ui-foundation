describe('alert', function() {
	var scope, element, $compile, $animate;

	beforeEach(module('foundation.alert'));

	beforeEach(module('src/app/alert/alert.html'));

	beforeEach(inject(function ($templateCache) {
		$templateCache.put('/src/app/alert/alert.html', $templateCache.get('src/app/alert/alert.html'));
	}));

	beforeEach(inject(function($rootScope, _$compile_, _$animate_) {
		scope = $rootScope;
		$compile = _$compile_;
		$animate = _$animate_;

		element = angular.element(
			'<div>' +
				'<alert ng-repeat="alert in alerts" type="alert.type" animation="fade-out">' +
          '{{alert.message}}' +
				'</alert>' +
			'</div>'
		);

		scope.alerts = [
			{type:'success', message:'Completed successfully!'},
			{type:'alert', message:'Oh noes!'}
		];
	}));

	function createAlerts() {
		$compile(element)(scope);
		scope.$digest();
		return element.find('.alert-box');
	}

	it('should generate alerts using ng-repeat', function() {
		var alerts = createAlerts();
		expect(alerts.length).toEqual(2);
	});

	it('should attach the correct class to the alerts based on the type', function() {
		var alerts = createAlerts();
		expect(alerts.eq(0).hasClass('success')).toBe(true);
		expect(alerts.eq(1).hasClass('alert')).toBe(true);
	});

	it('should attach the correct text to the alerts', function() {
		var alerts = createAlerts();
		expect(alerts.eq(0).text()).toContain('Completed successfully');
		expect(alerts.eq(1).text()).toContain('Oh noes!');
	});

	it('should call leave parameter of animate object when close is clicked', function() {
		var alerts = createAlerts();
		var close = alerts.find('.close');
		var spy = spyOn($animate, 'leave');
		close.click();
		expect(spy).toHaveBeenCalled();
	});

});