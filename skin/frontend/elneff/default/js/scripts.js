
/* StickyPanel
 * Used to make items sticky at top of screen.
 */

$().ready(function () {
  var stickyPanelOptions = {
    afterDetachCSSClass: "",
    topPadding: 0,
    savePanelSpace: true
  };
  $(".navigation").stickyPanel(stickyPanelOptions);
});