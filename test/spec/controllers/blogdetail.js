'use strict';

describe('Controller: BlogdetailCtrl', function () {

  // load the controller's module
  beforeEach(module('alcoukApp'));

  var BlogdetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogdetailCtrl = $controller('BlogdetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BlogdetailCtrl.awesomeThings.length).toBe(3);
  });
});
