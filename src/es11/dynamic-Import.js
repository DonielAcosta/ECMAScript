const buttun = document.getElementById('btn');
buttun.addEventListener("click",async function(){
    const module = await import('./module.js');
    console.log(module);
    module.hello();
})