window.onload = function(){
    fetch('http://localhost:3000/poze', {
         method: 'get'
        }).then((response)=>{
            response.json().then((data)=>{
                var x = document.getElementById("container-portfolio-container");
                x.style.justifyContent = "column"
                x.style.display = "flex"
                x.style.flexWrap = "wrap"
                for( i = 0; i < data.length; i++ ){
                    y = document.createElement("div")
                    z = document.createElement("img")
                    z.src = data[i].url
                    z.style.width = "300px";
                    y.append(z);
                    y.style.marginTop = "20px"
                    y.style.marginLeft = "20px"
                    x.append(y);
                }
            })
        });                   
}