window.onload = function(){

    let d = new Date();
    document.getElementById("datum").innerHTML = "Datum och tid: " + d;

}
//telefonnummer i formen не работает, узнать почему
let selector = document.querySelectorAll('input [type="number"]');
let im = new Inputmask('+46 (99) 999-99-99');
m.mask(selector); 




const {form}  = document.forms;
function retrieveFormValue(event) {
    event.preventDefault();

    const {elements} = form;
    const values = {};

    for (i = 0; i < elements.length; i++){
        const formElement = elements[i];
        const {name} = formElement;

        if (name) {
            const { value} = formElement;

            values[name] =  value;
        }
    }

    console.log (values);

}

    form.addEventListener ('submit', retrieveFormValue);