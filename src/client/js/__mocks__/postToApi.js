export default async function (url) {
  console.log("here2")
  return Promise.resolve({
    agreement: "DISAGREEMENT",
    subjectivity: "SUBJECTIVE",
    confidence: "76",
    irony: "IRONIC",
    score_tag: "P",
    text: "Overreacted",
  });
}
