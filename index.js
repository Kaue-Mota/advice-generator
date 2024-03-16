const adviceUpdateButton = document.getElementById("btn_atualizar_conselho");
const adviceNumber = document.getElementById("number");
const adviceDescription = document.getElementById("advice");

async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const adviceContent = await response.json();
    const adviceId = `Advice #${adviceContent.slip.id}`;
    const adviceText = `"${adviceContent.slip.advice}"`;

    adviceNumber.innerHTML = adviceId;
    adviceDescription.innerHTML = adviceText;
}

adviceUpdateButton.addEventListener("click", getAdvice);

getAdvice();