console.log("JS ok!");
//document.body.innerHTML=document.body.innerHTML+'<hr><h2>Assets</h2><img src="../assets/favicon/apple-touch-icon.png"><hr><h1>JS ok!</h1>';
$("#oradorForm").submit(function(e) {
    e.preventDefault(); // avoid to execute the actual submit of the form.
    var form = $(this);
    console.log(form.serialize());
    console.log(form);

	const formData = new FormData(e.target);
	const formProps = Object.fromEntries(formData);

	console.log(formData);
	console.log(formProps);	

    alert('Hola: '+formProps.name+' '+formProps.surname+'.\nRecibimos tu solicitud y quedo registrada para hablar de:\n'+formProps.details);
    /*var url = form.attr('action');*/
    /*
    $.ajax({
           type: "POST",
           url: url,
           data: form.serialize(), // serializes the form's elements.
           success: function(data)
           {
               alert(data); // show response from the php script.
           }
         });
    */
});

function toggleImgRef(){
	var element = document.getElementById("imgRef");
	element.classList.toggle("hidden");

	let accion=element.classList.contains('hidden')?'MOSTRAR':'OCULTAR';
	toggleImgRefLink.innerHTML=accion+' IMG REFERENCIA <span class="sr-only">IMAGEN DE REFERENCIA</span>';
}

/* Auto Import HTML */
/*
$(function () {
  var includes = $('[data-include]')
  $.each(includes, function () {
    var file = '' + $(this).data('include') + '.html';
    $(this).load(file);
  })
});
*/

/* Auto Import HTML */
(() => {
    const includes = document.getElementsByTagName('include');
    [].forEach.call(includes, i => {
        let filePath = i.getAttribute('src');
        fetch(filePath).then(file => {
            file.text().then(content => {
                i.insertAdjacentHTML('afterend', content);
                i.remove();
            });
        });
    });
})();