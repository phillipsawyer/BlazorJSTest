alert("Hello!");

function attachHandlers() {
    document.getElementById("button").addEventListener("click", function () { alert("This works offline."); });

    var nameElement = document.getElementById("name");
    nameElement.addEventListener("keyup", function(e) {
        if (nameElement.value.indexOf("p") > -1) {
            document.getElementById("main-form").style.background = "red";
        }
    });

    nameElement.addEventListener("keyup", function (e) {
        if (nameElement.value.indexOf("p") == -1) {
            document.getElementById("main-form").style.background = "none";
        }
    });

    //document.getElementById("main-form").addEventListener("submit", function (event) {
    //    event.preventDefault();
    //    return fetch("api/SubmitForm", {
    //        method: "POST",
    //        headers: {
    //            "Content-Type": "application/json",
    //        },
    //        body: JSON.stringify({
    //            value: "sentValue"
    //        })
    //    });
    //});
}

function submitForm(query) {
    var form = document.querySelector(query);
    var formData = {
    };

    formData.Name = form.querySelector("#name").value;
    return formData;
}

