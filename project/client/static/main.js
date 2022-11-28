// custom javascript

$(document).ready(function () {

  $("#upload").click(function () {
    var form_data = new FormData();
    form_data.append("file", $("#uploadfile").prop("files")[0]);

    $(function () {
      $.ajax({
        type: "POST",
        url: "/upload",
        data: form_data,
        contentType: false,
        cache: false,
        processData: false,
        success: function (data) {
          console.log("Success!");

          const file =$("#uploadfile").prop("files")[0];
          console.log(file);
          if (file){
            let reader = new FileReader();
            reader.onload = function(event){
              console.log(event.target.result);
              $('#imgPreview').attr('src', event.target.result);
              $('#imgPreview').show();
            }
            reader.readAsDataURL(file);
          }
        },
      });
    });
  });
});
