'use strict';

describe('Directive: content', function () {

  // load the directive's module
  beforeEach(module('petroglyphApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<content></content>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the content directive');
  }));
});
