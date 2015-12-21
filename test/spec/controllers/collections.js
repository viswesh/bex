'use strict';

describe('Controller: CollectionsCtrl', function () {

  // load the controller's module
  beforeEach(module('bexApp'));

  var CollectionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CollectionsCtrl = $controller('CollectionsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have books array in the scope', function () {
    expect(MainCtrl.books.length).toBe(0);
  });

  it('should allow removal of selected books', function () {
       expect(scope.allowremove).toEqual(true);
  });
});
