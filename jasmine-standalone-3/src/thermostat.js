class Thermostat {
  constructor(){
    this.temperature = 20
    this.powerSave = true
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

  up(number) {
    this.temperature += number
    if (this.powerSave == true) {
      this.temperature = this.temperature > 25 ? 25 : this.temperature
    } else {
      this.temperature = this.temperature > 32 ? 32 : this.temperature
    };
  };

  down(number) {
    this.temperature -= number
    this.temperature = this.temperature < 10 ? 10 : this.temperature
  };

  power_save(status) {
    this.powerSave = status == 'on' ? true : false
  };

  reset() {
    this.temperatue = 20
  };

  usage() {
    if (this.getCurrentTemperature() < 18) {
      console.log(this.getCurrentTemperature())
      return 'low-usage';
    } else if (this.getCurrentTemperature() < 26) {
      console.log(this.getCurrentTemperature())
      return 'medium-usage';
    } else {
      console.log(this.getCurrentTemperature())
      return 'high-usage';
    }
  };
}
