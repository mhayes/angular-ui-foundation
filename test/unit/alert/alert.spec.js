describe('alert', function() {
	var scope, element, $compile;

	beforeEach(module('foundation.alert'));

	beforeEach(module('src/app/alert/alert.html'));

	beforeEach(inject(function ($templateCache) {
		$templateCache.put('/src/app/alert/alert.html', $templateCache.get('src/app/alert/alert.html'));
	}));



	beforeEach(inject(function($rootScope, _$compile_, $controller) {
		scope = $rootScope;
		$compile = _$compile_;

		element = angular.element(
			'<div>' +
				'<alert ng-repeat="alert in alerts" data-fadeoutspeed="500" type="alert.type" animation="fade-out">' +
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

});

//
//	it("should fire callback when closed", function () {
//
//		var alerts = createAlerts();
//
//		scope.$apply(function () {
//			scope.removeAlert = jasmine.createSpy();
//		});
//
//		findCloseButton(1).click();
//		expect(scope.removeAlert).toHaveBeenCalledWith(1);
//	});
//
//	it('should not show close buttons if no close callback specified', function () {
//		var element = $compile('<alert>No close</alert>')(scope);
//		scope.$digest();
//		expect(findCloseButton(0).length).toEqual(0);
//	});
//
//	it('it should be possible to add additional classes for alert', function () {
//		var element = $compile('<alert class="alert-block" type="\'info\'">Default alert!</alert>')(scope);
//		scope.$digest();
//		expect(element).toHaveClass('alert-block');
//		expect(element).toHaveClass('alert-info');
//	});
//
//});