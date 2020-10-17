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
  <b><u>Question ${index + 1}:</u> ${prompt} <br><br>
  Get ready to talk to an audience about this issue. You can use <a href="https://vocaroo.com" target="_blank">Vocaroo</a> to record your answer, and then download it and save it on your local machine.</b>
</p>
</div>
<p id="submit-instructions">
  <em
    >After you are done with your recording, click the button below to submit
    your work. <br>
    Make sure to name your file with the date in yymmdd format, followed by an underscore and the letter</em> Q <em> and the question number, for example:</em> 201012_Q3.mp3 <em>if you get question 3.</em
  >
</p>
<div class="d-flex justify-content-center">
  <button onclick="window.location.href='https://classroom.google.com/u/1/c/MTkwNzAyOTk0NTY2/a/MTk3NDcwMTE0Nzk2/details'" class="btn btn-primary">
    Submit
  </button>
</div>

  `;
  promptDisplay.insertAdjacentHTML("afterbegin", promptAppear);
});
