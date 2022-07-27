const ftoc = function(fahrenheit) {

  return Math.round(((fahrenheit-32)*0.5556)*10) / 10;
};

const ctof = function(celsius) {

  return Math.round(((celsius * 1.8) + 32)*10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
