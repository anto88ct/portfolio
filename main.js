//--- email
const btn = document.getElementById("btn-submit")
const loadingDiv = document.getElementById("loading");
const spinner = document.getElementById("spinner");
let popupEmailSuccefully = document.getElementById("message-email-succefully");

function sendEmail(popUpEmail) {

    btn.addEventListener('click', () => {

        loadingDiv.classList.add("ad_loading");
        spinner.classList.add("ad_spinner");

        let paramas = {
            name: document.getElementById("name-form").value,
            email: document.getElementById("email-form").value,
            message: document.getElementById("message-form").value

        };


        const serviceID = "service_e338eeq";
        const templateID = "template_v4mjgi1";

        emailjs.send(serviceID, templateID, paramas)
            .then((requestState) => {

                document.getElementById("name-form").value = '';
                document.getElementById("email-form").value = '';;
                document.getElementById("message-form").value = '';
                console.log(requestState);
                loadingDiv.classList.remove("ad_loading");
                spinner.classList.remove("ad_spinner");
                popUpEmail();
                console.log("email inviata correttamente");

            })
            .catch((err) => console.log(err));
        console.log("button clicked");
    })

}

//callback
function popUpEmail() {

    popupEmailSuccefully.innerHTML = `
        <div id="message-email-succefully" class="container-fluid ad_email_succefully">
            <i class="fa-regular fa-circle-check" style="color: #4f7a28;"></i>
            <p>Email send succefully! <br>
            Thanks for your request! <br>We will reply you as soon as possible.</p>
        </div> 
    `;

    setTimeout(() => {
        //after 5 sec the popUp div expired
        popupEmailSuccefully.innerHTML = "";
    }, 6000);
}



sendEmail(popUpEmail);

//---buttons

//contact
const contactBtn = document.getElementById("ctn-btn");
const contactSection = document.getElementById("contacts");

contactBtn.addEventListener('click', () => {

    contactSection.scrollIntoView();
})

//popUp
const popup = document.getElementById("pop_up_row");
const closePopup = document.getElementById("x-pop-up");


closePopup.addEventListener('click', () => {

    console.log("clicked");
    popup.innerHTML = '';
    closePopup.style.display = 'none'; //hide x icon
});


//discover
const discoverBtn = document.getElementById("dsv-btn");
const skillsSection = document.getElementById("skills-section");

discoverBtn.addEventListener('click', () => {

    skillsSection.scrollIntoView();
})

