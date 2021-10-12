console.log("JS ok!");
//document.body.innerHTML=document.body.innerHTML+'<hr><h2>Assets</h2><img src="../assets/favicon/apple-touch-icon.png"><hr><h1>JS ok!</h1>';

const valorTicket=200;

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
});


if(document.getElementById("ticketCost")!=null){document.getElementById("ticketCost").innerHTML=valorTicket;}

$("#oradorForm").submit(function(e) {
    e.preventDefault(); // avoid to execute the actual submit of the form.
    var form = $(this);
    console.log(form.serialize());
    console.log(form);

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    console.log(formData);
    console.log(formProps); 

    alert('Hola: '+formProps.name+' '+formProps.surname+'.\nRecibimos tu compra de ('+formProps.qty+') tickets por $'+calcularTotal()+':\n'+'Enviamos el detalle de la reserva a: '+formProps.email);
});

$("#ticketsForm").submit(function(e) {
    e.preventDefault(); // avoid to execute the actual submit of the form.
    var form = $(this);
    console.log(form.serialize());
    console.log(form);

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    console.log(formData);
    console.log(formProps); 

    alert('Hola: '+formProps.name+' '+formProps.surname+'.\nRecibimos tu compra de ('+formProps.qty+') tickets por $'+calcularTotal()+':\n'+'Enviamos el detalle de la reserva a: '+formProps.email);
});

function setDiscount(e){
    document.getElementById("categorySelect").value=e.dataset.value;
    setActiveCard(e.dataset.value);
}

function setActiveCard(discount){
    document.querySelectorAll("#cardsContainerJS .card.col-2").forEach(e=>{
        if(e.dataset.value*1==discount){
            e.classList.add("active");
        }else{
            e.classList.remove("active");
        }
    });
}

function calcularTotal(){
    var qty=document.getElementById("qty").value*1;
    var cat=document.getElementById("categorySelect").value*1;
    var discount=cat>0?(cat/100)*valorTicket:0;
    var final=valorTicket-discount;

    let textTitle="";
    let textTotal="";

    setActiveCard(cat);

    if(qty<=0){return null;}
    //if(!qty>0){return null;}

    textTotal='$ ' + qty*final + ' ('+ qty +' X $'+ final +') ';
    if (discount>0){
        textTitle+='<p class="offSale">($'+final+' ['+cat+'% OFF!!])</p>';
        textTotal+='<p class="offSale">['+cat+'% OFF!!]</p>';
    }
    
    document.getElementById("descuentoTitulo").innerHTML=textTitle;
    document.getElementById("totalAPagar").innerHTML=textTotal;


    return final*qty;
}

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