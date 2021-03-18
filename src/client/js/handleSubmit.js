import { isValidHttpUrl } from "./checkUrl";
import postToApi from "./postToApi";
async function handleSubmit(event) {
  event.preventDefault();
  let formText = document.getElementById("article-url").value;
  let agreementD = document.getElementById("agreement");
  let subjectivityD = document.getElementById("subjectivity");
  let confidenceD = document.getElementById("confidence");
  let ironyD = document.getElementById("irony");
  let score_tagD = document.getElementById("score_tag");
  let textD = document.getElementById("text");
  if (isValidHttpUrl(formText)) {
    const {
      agreement,
      subjectivity,
      confidence,
      irony,
      score_tag,
      text,
    } = await postToApi(formText);
    agreementD.innerText = "agreement: " + agreement;
    subjectivityD.innerText = `subjectivity: ${subjectivity}`;
    confidenceD.innerText = `confidence: ${confidence}`;
    ironyD.innerText = `irony: ${irony}`;
    score_tagD.innerText = `score tag: ${score_tag}`;
    textD.innerText = `text: ${text}`;
  } else {
    agreement.innerHTML = "";
    subjectivity.innerHTML = "";
    confidence.innerHTML = "";
    irony.innerHTML = "";
    score_tag.innerHTML = "";
    text.innerHTML = "please enter a valid url";
  }
}
export { handleSubmit };
