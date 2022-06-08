window.addEventListener('load',() => {

    const params =(new URL(document.location)).searchParams;
    const name = params.get('moderna');

    document.getElementById('result-moderna').innerHTML = name;


})