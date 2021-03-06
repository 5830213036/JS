$.validator.setDefaults({
    submitHandler: function() {
        $("#suc").show();
        setTimeout(window.location.href = "signin.html", 1000);
    }
});
$.validator.methods.equal = function(value, element, param) {
    return value == param;
};
$('#signUpForm').ready(function() {
    var validator = $("#signupForm").bind("invalid-form.validate", function() {
        $("#summary").html("Your form contains " + validator.numberOfInvalids() + " errors, see details below.");
    }).validate({
        debug: true,
        errorElement: "em",
        errorContainer: $("#warning, #summary"),
        errorPlacement: function(error, element) {
            error.appendTo(element.parent("div").next("span"));
        },
        success: function(label) {
            //label.text("").addClass("success");
            $("#err").hide();
        },
        rules: {
            username: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                email: true
            },
        },
        messages: {

            username: {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 2 characters"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            email: "Please enter a valid email address",
            message: "Please enter your message"
            
        },

        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
            $("#err").show();
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });
});

function validatePhone(tel) {
    var a = document.getElementById(tel).value;
    var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    if (filter.test(a)) {
        return true;
    } else {
        return false;
    }
};

$("#signup").click(function() {
    var newuser = {};
    newuser.username = $("#username").val();
    newuser.password = $("#password").val();
    newuser.email = $("#email").val();
    newuser.messages = $("#messages").val();
    console.log(newuser);

    console.log(newuser);
    var url = "http://localhost:3000/data";
    $.post(url, newuser, function(data, status) {
        console.log("complete " + data);
    });
});

