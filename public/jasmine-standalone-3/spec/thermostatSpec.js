describe('thermostat',function() {

  var thermostat

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('temperature variable', function(){
    it('start temp is 20 degrees', function(){
      expect(thermostat.temperature).toEqual(20);
    });
    it('min temperature is 10', function(){
      for (var i = 0; i < 11; i++) {
        thermostat.down();
      }
      expect(thermostat.temperature).toEqual(10);
    });
  });

  describe('up function', function(){
    it('increases the temperature', function(){
      for (var i = 0; i < 5; i++) {
        thermostat.up();
      }
      expect(thermostat.temperature).toEqual(25);
    });
  });

  describe('down function', function(){
    it('decreases the temperature', function(){
      for (var i = 0; i < 10; i++) {
        thermostat.down();
      }
      expect(thermostat.temperature).toEqual(10);
    });
  });

  describe('power saving mode', function(){
    it('when on max temperature is 25', function(){
      for (var i = 0; i < 10; i++) {
        thermostat.up();
      }
      expect(thermostat.temperature).toEqual(25);
    });
    it('when off max temperature is 32', function(){
      thermostat.switchPowerSavingModeOff()
      for (var i = 0; i < 20; i++) {
        thermostat.up();
      }
      expect(thermostat.temperature).toEqual(32);
    });
    it('power_save is on by default', function(){
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
    it('power_save can be turned off', function(){
      thermostat.switchPowerSavingModeOff()
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });
    it('power_save can be turned on', function(){
      thermostat.switchPowerSavingModeOff()
      thermostat.switchPowerSavingModeOn()
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
  });

  describe('reset function', function(){
    it('temperature is reset to 20', function(){
      thermostat.reset()
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });

  describe('usage function', function(){
    it('temp < 18 is low-usage', function(){
      for (var i = 0; i < 3; i++) {
        thermostat.down();
      }
      expect(thermostat.usage()).toEqual('low-usage');
    });
    it('17 < temp <= 25 is medium-usage', function(){
      expect(thermostat.usage()).toEqual('medium-usage');
    });
    it('25 < temp is high-usage', function(){
      thermostat.switchPowerSavingModeOff()
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.usage()).toEqual('high-usage');
    });
  });

});
