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
      thermostat.down(1000)
      expect(thermostat.temperature).toEqual(10);
    });
  });

  describe('up function', function(){
    it('increases the temperature', function(){
      thermostat.up(5)
      expect(thermostat.temperature).toEqual(25);
    });
  });

  describe('down function', function(){
    it('decreases the temperature', function(){
      thermostat.down(10)
      expect(thermostat.temperature).toEqual(10);
    });
  });

  describe('power saving mode', function(){
    it('when on max temperature is 25', function(){
      thermostat.up(10000)
      expect(thermostat.temperature).toEqual(25);
    });
    it('when off max temperature is 32', function(){
      thermostat.power_save('off')
      thermostat.up(10000)
      expect(thermostat.temperature).toEqual(32);
    });
    it('power_save is on by default', function(){
      expect(thermostat.powerSave).toEqual(true);
    });
    it('power_save can be turned off', function(){
      thermostat.power_save("off")
      expect(thermostat.powerSave).toEqual(false);
    });
    it('power_save can be turned on', function(){
      thermostat.power_save("off")
      thermostat.power_save("on")
      expect(thermostat.powerSave).toEqual(true);
    });
  });

  describe('reset function', function(){
    it('temperature is reset to 20', function(){
      thermostat.reset()
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('usage function', function(){
    it('temp < 18 is low-usage', function(){
      thermostat.down(10)
      expect(thermostat.usage()).toEqual('low-usage');
    });
    it('17 < temp <= 25 is medium-usage', function(){
      // console.log(thermostat.temperature)
      // console.log(thermostat.usage())
      // thermostat.temperatue = 20
      expect(thermostat.usage()).toEqual('medium-usage');
    });
    it('25 < temp is high-usage', function(){
      thermostat.power_save("off")
      thermostat.up(6)
      // thermostat.temperatue = 26
      expect(thermostat.usage()).toEqual('high-usage');
    });
  });

});
