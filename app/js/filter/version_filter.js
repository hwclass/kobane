define(function () {
  'use strict';
  return ['VersionService', function(versionService) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, versionService.version);
    };
  }];
});
