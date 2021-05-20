window.onload = function(){
    var x = document.getElementById("recenzii");
    fetch('http://localhost:3000/recenzii', {
         method: 'get'
        }).then((response)=>{
            response.json().then((data)=>{
                for( let i = 0; i < data.length; i++ ){
                    var y = document.createElement("div")
                    y.innerHTML = "Comentariu adaugat de " + data[i].user + " :"
                    var z = document.createElement("div")
                    z.innerHTML = data[i].recenzie
                    var caseta = document.createElement("div")
                    caseta.append(y)
                    caseta.append(z)
                    buton_stergere = document.createElement("button")
                    buton_stergere.innerHTML = "X"
                    buton_stergere.style.height = "20px"
                    buton_stergere.style.marginTop = "10px"
                    buton_stergere.style.marginLeft = "100px"
                    let recenzie_id = data[i].id;
                    buton_stergere.onclick = function(){stergere(recenzie_id)};
                    caseta.style.display = "flex";
                    caseta.style.flexDirection = "column";
                    var caseta_finala = document.createElement("div");
                    caseta_finala.append(caseta)
                    caseta_finala.append(buton_stergere)
                    caseta_finala.style.display = "flex"
                    caseta_finala.style.flexDirection = "row"
                    caseta_finala.style.marginLeft = "50px"
                    caseta_finala.style.marginTop = "30px"
                    caseta_finala.style.borderStyle = "solid"
                    caseta_finala.style.width = "400px"
                    x.append(caseta_finala);
                } 
       
    })
});                  
}
//functia care posteaza recenziile
function posteaza(){
    var text = document.getElementById("text").value
    var utilizator = document.getElementById("username").value
    var recenzie = {
        user : utilizator,
        recenzie : text
    }
    fetch('http://localhost:3000/recenzii', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recenzie)
    }).then(function(response) {
       window.location.reload()
    })

}
//functia de stergere a unei recenzii (se apeleaza din forul de la inceputul fisierului)
function stergere(recenzie_id){
    fetch('http://localhost:3000/recenzii/' + recenzie_id, {
    method: 'delete',
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(function(response) 
    {
        window.location.reload();
    })
}
//la final se face reload pentru a reactualiza pagina dupa ce se poateaza/sterge o recenzie