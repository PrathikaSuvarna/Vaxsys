function clicked(e)
{
    if(!confirm('Email Confirmation Sent')) {
        e.preventDefault();
    }
}
