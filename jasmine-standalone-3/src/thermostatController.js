(function(exports){
  function ThermostatController(){
    this._thermostat = new ThermostatModel();
    this._thermostatView = new ThermostatView();
  }

  ThermostatController.prototype.setEventListeners = function(){
    document.getElementById('temp')
      .addEventListener('click', this.number.bind(this));
    // document.getElementById('half-button')
    //   .addEventListener('click', this.halfNumber.bind(this));
    // document.getElementById('percent-button')
    //   .addEventListener('click', this.calculatePercentage.bind(this));
  }

  ThermostatController.prototype.number = function(){
    // let fraction = document.getElementById('percent1-input').value;
    // let whole = document.getElementById('percent2-input').value;
    let value = 2
    let result = this._thermostat.two(value);;
    this.displayResult(result);
  }

  ThermostatController.prototype.displayResult = function(result) {
    document.getElementById('temperatue')
      .innerHTML = this._thermostatView.buildOutput(result);
  }
  exports.ThermostatController = ThermostatController
})(this);
