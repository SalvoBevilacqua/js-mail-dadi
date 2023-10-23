const mailVector = ["naruto@gmail.com", "itachi@gmail.com", "susanoo@gmail.com", "jiraya@gmail.com"];

const userMail = prompt("Inserisci la tua mail");

let found = false;

for (i = 0; i < mailVector.length; i ++) {
    if(userMail === mailVector[i])
    {
        found = true;
    }
}

if(found) {
    alert("Puoi accedere!");
}
else {
    alert("Non puoi accedere!");
    location.reload();
}