// const request = obj =>{
//     return new Promise((resolve, reject)=>{

//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method, obj.url, true);
//     xhr.send();
//     xhr.addEventListener('load', ()=>{
//         if(xhr.status >= 200 && xhr.status <300){
//             //funçaõ de callBac de sucesso
//             resolve(xhr.responseText);
//         }else{
//             //função de callBac de erro
//             reject(xhr.statusText);
//         }
//     })
        
//     })
    
// }

document.addEventListener('click', e=>{
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
})


async function carregaPagina(el){
    const href = el.getAttribute('href');

    fetch(href)
    .then(response  => response.text())
    .then(html =>     carregaResultado(html))
    .catch(e => console.error(e))
    
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response
}