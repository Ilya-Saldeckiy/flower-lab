$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 15000,
      values: [ 0, 10000],
      slide: function( event, ui ) {
        $( "#amount" ).val(ui.values[ 0 ]);
        $( "#amount2" ).val(ui.values[ 1 ]);
      }
    });
    $( "#amount" ).val($( "#slider-range" ).slider( "values", 0 ),
    $( "#amount2" ).val($( "#slider-range" ).slider( "values", 1)));
  } );

  function myFunction0(){
    document.getElementById("myDropdown0").classList.toggle("show");
  }

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }

  function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
  }

  function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show");
  }
  
  function myFunction5() {
    document.getElementById("myDropdown5").classList.toggle("show");
  }
  