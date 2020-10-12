import { prompts } from "./data.js";

const promptBtn = document.getElementById("generate-btn");
let promptDisplay = document.getElementById("prompt-display");
const limit = prompts.length;

promptBtn.addEventListener("click", function () {
  promptBtn.disabled = true;
  const index = Math.floor(Math.random() * limit);
  const prompt = prompts[index];
  const promptAppear = `
  <p id="prompt">
  <b>${prompt} <br>
  Get ready to talk to an audience about this issue.</b>
</p>
<p id="submit-instructions">
  <em
    >After you are done with your recording, click the button below to submit
    your work.</em
  >
</p>
<div class="d-flex justify-content-center">
  <button onclick="window.location.href=''" class="btn btn-primary">
    Submit
  </button>
</div>

  `;
  promptDisplay.insertAdjacentHTML("afterbegin", promptAppear);
});
