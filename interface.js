  $(document).ready(function() {
    var thermostat = new Thermostat();
    updateDisplay();

    $('#select-city').submit(function(event) {
      event.preventDefault();
      var city = $('#current-city').val();
      $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=0ef46b0bb39bb57522170bbd6ff2e0a2&units=metric', function(data) {
        $('#current-temperature').text(data.main.temp);
        $('#location').text(data.name);
      });
    });

    $('#up').click(function() {
      thermostat.up();
      updateDisplay();
    });

    $('#down').click(function() {
      thermostat.down();
      updateDisplay();
    });

    $('#reset').click(function() {
      thermostat.reset();
      updateDisplay();
    });

    $('#powersaving-on').click(function() {
      thermostat.switchPowerSavingModeOn();
      $('#power-saving').text('On')
      updateDisplay();
    });

    $('#powersaving-off').click(function() {
      thermostat.switchPowerSavingModeOff();
      $('#power-saving').text('Off')
      updateDisplay();
    });

    function updateDisplay() {
      $('#temperature').text(thermostat.temperature);
      $('#temperature').attr('class', thermostat.usage());
      $.ajax({
             type: "POST",
             url: "http://localhost:4567/",
             data: JSON.stringify(thermostat),
             crossDomain: true,
             dataType: "json",
             success: function (data, status, jqXHR) {

                 alert("success");
             }
           })
         }
  });
