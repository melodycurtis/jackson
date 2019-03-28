/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
});

$('#bulkOrSingle').click(function() {
  if($('.add-one-org').is(':checked')) { location.href='academy-choices'; }
     else if ($('.add-bulk').is(':checked')) { location.href='bulk'; }
});
