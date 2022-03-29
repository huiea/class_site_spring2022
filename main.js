function openexcerises(evt, tabnames) {

//Declare all varables
    var i, tabcontent, tablinks;

//Get all elemtns with class="tabcontent" and hide them 
    tabcontent=document .getElementByClassName("tabcontent");
    for (i=0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    //Get all elements with class="tablinks" and remove the class "active"
    tablinks=document.getElementsByClassName("tablinks");
    for (i =0; i < tablinks.length; i++)
    {
        tablinks[i].className= tablinks[i].className.replace("active","");
    }


    //Show the current tab, and add an active class to the link that opened the tab 
    document.getElementById(projectname).style.display="block";
    evt.currentTarget.className +="active";
}

