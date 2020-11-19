class Thermostat {
  constructor(){
    this.temperature = 20
    this.powerSavingMode = true
  };

  getCurrentTemperature() {
    return this.temperature;
  }

  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }

  switchPowerSavingModeOff() {
    this.powerSavingMode = false;
  }

  switchPowerSavingModeOn() {
    this.powerSavingMode = true;
  }

  up() {
    this.temperature += 1
    if (this.isPowerSavingModeOn() == true) {
      this.temperature = this.temperature > 25 ? 25 : this.temperature
    } else {
      this.temperature = this.temperature > 32 ? 32 : this.temperature
    };
  };

  down(number) {
    this.temperature -= 1
    this.temperature = this.temperature < 10 ? 10 : this.temperature
  };

  reset() {
    this.temperature = 20
  };

  usage() {
    if (this.getCurrentTemperature() < 18) {
      return 'low-usage';
    } else if (this.getCurrentTemperature() < 26) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  };
}
