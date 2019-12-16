/* Connecting Lorem picsum API */

fetch('https://picsum.photos/v2/list?page=2&limit=20').then(
    res => {
        res.json().then(
            data => {
                console.log(data);
                if (data.length > 0) {
                    var temp = "";

                    /* Displaing img from JSON &  Data-mining */
                    
                    data.forEach((u) => {
                        temp += "<tr>";
//                        temp += "<td>" + u.author + "</td>";
//                        temp += "<td>" + u.width + "</td>";
//                        temp += "<td>" + u.height + "</td>";
                        temp += "<td> <img src=" + u.download_url + ' onclick="expand(this);">' + "</td></tr>";


                    })

                    document.getElementById("data").innerHTML = temp;

                }
            })
    })

/* Function onclick maximizing img on the right side */

function expand(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
}





/* Scroll function */


document.getElementById("nav").addEventListener("nav", scrollFunction);

function scrollFunction() {
    document.getElementById("nav");
}
