function contactRequest(form) {
    //created by Mark VanDam
    var inName = form.name.value;
    var subject = "Web Form Submission";
    var inEmail = form.email.value;
    var inComm = form.comments.value;
    var body = inName + "'s Comments:\n" + inComm;
    //note: fictional email address, does not exist.			
    location = "mailto:info@navscapegeo.com?subject="+subject+"&cc="+inEmail+"&body="+body;
    return true;
}
