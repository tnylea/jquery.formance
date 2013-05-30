// Generated by CoffeeScript 1.6.2
(function() {
  var $,
    __slice = [].slice;

  require('./jquery.payment');

  $ = jQuery;

  $.validators = {};

  $.validators.fn = {};

  $.fn.validators = function() {
    var args, method;

    method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    return $.validators.fn[method].apply(this, args);
  };

  $.validators.validateCardNumber = function(num) {
    return $.payment.validateCardNumber(num);
  };

  $.validators.validateCardExpiry = function(expiry_string) {
    var expiry;

    expiry = $.payment.cardExpiryVal(expiry_string);
    return $.payment.validateCardExpiry(expiry.month, expiry.year);
  };

  $.validators.validateCardCVC = function(cvc, type) {
    return $.payment.validateCardCVC(cvc, type);
  };

  $.validators.validateDate = function(day, month, year) {
    if ((day == null) || isNaN(day) || (month == null) || isNaN(month) || (year == null) || isNaN(year)) {
      return false;
    }
    if (!(((0 < day && day <= 31)) && ((0 < month && month <= 12)) && ((1000 < year && year <= 10000)))) {
      return false;
    }
    return true;
  };

  $.validators.validateNumber = function(num) {
    return /^\d+$/.test(num);
  };

  $.validators.validateOntarioPhotoHealthCardNumber = function(str) {
    var regex, string;

    if (str == null) {
      return false;
    }
    regex = /^(\d{4})[\s|\-]*?(\d{3})[\s|\-]*?(\d{3})[\s|\-]*?([A-Za-z]{2})$/;
    string = str.replace(/[^a-zA-Z\d]/g, '');
    return regex.test(str);
  };

  $.validators.validatePhoneNumber = function(phone_string) {
    phone_string = phone_string.replace(/\(|\)|\s+|-/g, '');
    if (!/^\d+$/.test(phone_string)) {
      return false;
    }
    return phone_string.replace(/\D/g, '').length === 10;
  };

  $.validators.validatePostalCode = function(postal_code_string) {
    if (postal_code_string == null) {
      return false;
    }
    postal_code_string = postal_code_string.replace(/\s+/g, '');
    if (!/^[a-zA-Z\d]+$/.test(postal_code_string)) {
      return false;
    }
    postal_code_string = postal_code_string.replace(/[^a-zA-Z\d]/g, '');
    return /^[ABCEFGHJKLMNPRSTVXY][0-9][ABCEFGHJKLMNPRSTVWXYZ]\s?[0-9][ABCEFGHJKLMNPRSTVWXYZ][0-9]$/.test(postal_code_string.toUpperCase());
  };

  $.validators.fn.dateVal = function() {
    return $.validators.dateVal($(this).val());
  };

  $.validators.dateVal = function(date_string) {
    var day, month, year, _ref;

    _ref = date_string != null ? date_string.replace(/\s/g, '').split('/', 3) : [NaN, NaN, NaN], day = _ref[0], month = _ref[1], year = _ref[2];
    day = parseInt(day, 10);
    month = parseInt(month, 10);
    year = parseInt(year, 10);
    return {
      day: day,
      month: month,
      year: year
    };
  };

  $.validators.fn.cardExpiryVal = function() {
    return $validators.cardExpiryVal($(this).val());
  };

  $.validators.cardExpiryVal = $.payment.cardExpiryVal;

}).call(this);