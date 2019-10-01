

function expandForm(){
    var newForm = document.getElementById("newForm");
    // newForm.style.display = "block";
    if (newForm.style.display === "none" || newForm.style.display ===''){
        newForm.style.display = "block";
    } else {
        newForm.reset();
        newForm.style.display = "none";
      }
}

function addArtist(){
    var imageURLForm = document.getElementById("imageURLForm").value
    var name = document.getElementById("artistNameForm").value;
    var aboutArtistForm = document.getElementById("aboutArtistForm").value;
    var table = document.getElementById("artisTable")
    addRow(table, imageURLForm, name, aboutArtistForm);
    var newForm = document.getElementById("newForm");
    if (newForm.style.display === "none" || newForm.style.display ===''){
        newForm.style.display = "block";
    } else {
        newForm.reset();
        newForm.style.display = "none";
      }


}

function addRow(table, imageURLForm, name, aboutArtistForm){
    var rowCnt = table.rows.length;
    var tr = table.insertRow(rowCnt);
    tr = table.insertRow(rowCnt);

    for (var c = 0; c < 3; c++){
        var td = document.createElement('td');
        td = tr.insertCell(c);

        if(c==0){
            var image = document.createElement('img');
            image.setAttribute('src', imageURLForm);
            td.appendChild(image)
        }
        if(c==1){
            var h3 = document.createElement('h3');
            h3.appendChild(document.createTextNode(name))
            var p1 = document.createElement('p');
            var p2 = document.createElement('p');
            p2.appendChild(document.createTextNode(aboutArtistForm))
            td.appendChild(h3);
            td.appendChild(p1);
            td.appendChild(p2);
        }
        if(c==2){
            var button = document.createElement('input');
            button.setAttribute('type', 'button');
            button.setAttribute('class', 'deleteBtn');
            button.setAttribute('value', 'Delete');
            button.setAttribute('onclick', 'removeRow(this)');
            td.appendChild(button);
        }
    }

}

function removeRow(oButton){
    var table = document.getElementById('artisTable');
    table.deleteRow(oButton.parentNode.parentNode.rowIndex);
}