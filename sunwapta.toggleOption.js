(function ($) {
  $.fn.toggleOption = function (value, show) {
    /// <summary>Show or hide the desired option</summary>
    return this.filter('select').each(function () {
      var select = $(this);
      if (typeof show === 'undefined') {
        show = select.find('option[value="' + value + '"]').length == 0;
      }
      if (show) {
        select.showOption(value);
      }
      else {
        select.hideOption(value);
      }
    });
  };
  $.fn.showOption = function (value) {
    /// <summary>Show the desired option in the location it was in when hideOption was first used</summary>
    return this.filter('select').each(function () {
      var select = $(this);
      var found = select.find('option[value="' + value + '"]').length != 0;
      if (found) return; // already there

      var info = select.data('opt' + value);
      if (!info) return; // abort... hideOption has not been used yet

      var targetIndex = info.data('i');
      var options = select.find('option');
      var lastIndex = options.length - 1;
      if (lastIndex == -1) {
        select.prepend(info);
      }
      else {
        options.each(function (i, e) {
          var opt = $(e);
          if (opt.data('i') > targetIndex) {
            opt.before(info);
            return false;
          }
          else if (i == lastIndex) {
            opt.after(info);
            return false;
          }
        });
      }
      return;
    });
  };
  $.fn.hideOption = function (value) {
    /// <summary>Hide the desired option, but remember where it was to be able to put it back where it was</summary>
    return this.filter('select').each(function () {
      var select = $(this);
      var opt = select.find('option[value="' + value + '"]').eq(0);
      if (!opt.length) return;

      if (!select.data('optionsModified')) {
        // remember the order
        select.find('option').each(function (i, e) {
          $(e).data('i', i);
        });
        select.data('optionsModified', true);
      }

      select.data('opt' + value, opt.detach());
      return;
    });
  };
})(jQuery);