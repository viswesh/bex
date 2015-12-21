'use strict';

describe('Service: bexService', function () {

  // load the service's module
  beforeEach(module('bexApp'));

  // instantiate service
  var bexService;
  beforeEach(inject(function (_bexService_) {
    bexService = _bexService_;
  }));

  it('should do something', function () {
    expect(!!bexService).toBe(true);
  });

});
