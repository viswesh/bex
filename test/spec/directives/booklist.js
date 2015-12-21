'use strict';

describe('Directive: bookList', function () {

  // load the directive's module
  beforeEach(module('bexApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<book-list></book-list>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the bookList directive');
  }));
});
