const getButton = (text) => {
  const x = [...document.querySelectorAll("button")].filter((b) =>
    b.textContent.includes(text)
  );
  return x.length && x[0];
};
const ding = () => {
  const a = new Audio(
    "https://freesound.org/data/previews/387/387533_3829977-lq.mp3"
  );
  a.play();
};
const confirmDate = () => {
  setTimeout(() => {
    const confirmButton = getButton("Tak");
    confirmButton && confirmButton.click();
  }, 1500);
};
const iterate = () => {
  document.querySelector("button[type=submit]").click();
  const process = () => {
    setTimeout(() => {
      const loader = document.querySelector(".sc-gsTCUz > .sc-dQppl");
      if (loader) {
        process();
      } else {
        const selectButton = getButton("Wybierz");
        if (selectButton) {
          selectButton.click();
          confirmDate();
          ding();
        } else {
          setTimeout(() => iterate(), 2500);
        }
      }
    }, 100);
  };
  process();
};

iterate();
