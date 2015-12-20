define(function () {
  'use strict';
  return ['VersionService', function(versionService) {
    return function(scope, elm, attrs) {
      elm.text(versionService.version);
    };
  }];
});
