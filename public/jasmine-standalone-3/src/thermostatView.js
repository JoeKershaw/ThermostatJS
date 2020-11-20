(function(exports){
  function ThermostatView(){}

  ThermostatView.prototype.buildOutput = function(result) {
    return `<h2>#{result}</h2>`
  }

  exports.ThermostatView = ThermostatView
})(this)
