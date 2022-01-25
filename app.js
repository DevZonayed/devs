function trigger(){
    let inputname = document.getElementById('name').value ;
    let inputtitle = document.getElementById('title').value ;
    let inputdesc = document.getElementById('desc').value ;
    let inputimage = document.getElementById('imagelink').value ;
    let data = [];

    data.push({
        name : inputname,
        title : inputtitle,
        desc :inputdesc,
        image : inputimage
    });

    localStorage.setItem('data' , JSON.stringify(data))

    let mainfild = document.getElementById('result');
    
    const finaldata = JSON.parse(localStorage.getItem('data'));

    finaldata.map( fdata =>{
        mainfild.innerHTML += `

            <div class="card">
                <div class="name">${fdata.name}</div>
                <div class="profile_image"><img src="${fdata.image}" alt=""></div>
                <div class="title">${fdata.title}</div>
                <div class="desc">${fdata.desc}</div>
            </div>

        `;

    });

    inputname = document.getElementById('name').value = '' ;
    inputtitle = document.getElementById('title').value = '' ;
    inputdesc = document.getElementById('desc').value = '' ;
    inputimage = document.getElementById('imagelink').value = '' ;
    


    
    
}    
