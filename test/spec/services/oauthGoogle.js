'use strict';

describe('Service: oauthGoogle', function () {

  // load the service's module
  beforeEach(module('petroglyphApp'));

  // instantiate service
  var oauthGoogle;
  beforeEach(inject(function (_oauthGoogle_) {
    oauthGoogle = _oauthGoogle_;
  }));

  it('should do something', function () {
    expect(!!oauthGoogle).toBe(true);
  });

});
