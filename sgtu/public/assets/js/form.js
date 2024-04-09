$(document).ready(function(){
  $("#admissionForm").validate({	
    rules: {
      name:'required',
      email: {required: true,email: true},
      contact: 'required',
      neet:'required',
      course:'required',
      country:'required',
      state:'required',
      city:'required'
      //confirmContact: 'required'
    },
    messages: {
      name : "Name is required",
      email:{
        required: "Email is required",
        email:"Invalid email"
      },
      contact : "Phone No. is required",
      neet : "NEET Score is required",
      course : "Select a Course",
      country:'Country is required',
      state:'State is required',
      city:'City is required'
      //confirmContact: 'Accept terms'
    },
    submitHandler: admissionAction
  });

});

  function admissionAction(){
    var formdata = $('#admissionForm').serialize();

    $.ajax({
      type:'POST',
      data:formdata,
      url:"sendmail.php",
      dataType: "json",		
      beforeSend: function(){
        $('#preloader').show();
      },
      success:function(response){
        $('#preloader').hide();
        if(response.status == "success"){
          $("#admissionForm")[0].reset();
          swal({
            title: "Thank You!",
            text: "We will connect with you shortly.",
            icon: "success",
          });
        }else if(response.status == "fail"){
          swal({
            title: "Error !",
            text: "Something went wrong. Please try again.",
            icon: "error",
          });
        }
      }
    });
  }
