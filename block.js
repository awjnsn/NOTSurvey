function try_removal(){
    try{
        document.getElementById('ek-modal').remove()
        document.getElementById('ek-overlay').remove()
        clearInterval(interval)
    }
    catch(e){}
}

let interval = setInterval(try_removal, 100);
