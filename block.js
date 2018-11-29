function try_removal()
{
    try
    {
        //Trys to remove the elements, throws exception if the elements have not yet loaded
        document.getElementById('ek-modal').remove();
        document.getElementById('ek-overlay').remove();
        
        //Stops trying to remove the elements, as the have already been removed
        clearInterval(interval);
    }
    
    catch(e)
    {
        //Do nothing, we'll just try again later
    }
}

//Attemt to remove the popup until it no longer exists
let interval = setInterval(try_removal, 100);
