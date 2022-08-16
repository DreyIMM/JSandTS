const request = obj =>{
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', ()=>{
        if(xhr.status >= 200 && xhr.status <300){
            //funçaõ de callBac de sucesso
            obj.sucess(xhr.responseText);
        }else{
            //função de callBac de erro
            obj.error(xhr.statusText);
        }
    })
}

document.addEventListener('click', e=>{
    debugger
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
})


function carregaPagina(el){
    const href = el.getAttribute('href');
    
    request({
        method: 'GET',
        url: href,
        sucess(response){
            console.log(response)
            carregaResultado(response);
        },
        error(error){
            console.log(error)
        }
    })
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response
}