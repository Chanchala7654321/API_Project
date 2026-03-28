let arr = [];
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(Response => Response.json())
    .then(data => {
        arr = data;
    })
    .catch(error => {
        document.getElementById("rong").textContent = "there is not any student!...";
    })
function studentdata() {
    if (arr.length > 0) {
        let randemindev = Math.floor(Math.random() * arr.length)
        let student = arr[randemindev];
        document.getElementById("userId").textContent = "userId :" + (student.userId || "");
        document.getElementById("id").textContent = "id :" + (student.id || "");
        document.getElementById("title").textContent = "title :" + (student.title || "");
        document.getElementById("body").textContent = "body :" + (student.body || "");
    }
    else {
        document.getElementById("rong").textContent = "this student is not found";

    }

}
