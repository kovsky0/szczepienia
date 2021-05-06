let getSelectButton = () => {
  const x = [...document.querySelectorAll("button")].filter(b =>
    b.textContent.includes("Wybierz")
  );
  return x.length && x[0];
};
let ding = () => {
  const a = new Audio(
    "https://freesound.org/data/previews/387/387533_3829977-lq.mp3"
  );
  a.play();
};
let iterate = () => {
  document.querySelector('button[type=submit]').click();
  const process = () => {
    setTimeout(() => {
      const loader = document.querySelector(".sc-gsTCUz > .sc-dQppl");
      if (loader) {
        process();
      } else {
        const selectButton = getSelectButton();
        if (selectButton) {
          selectButton.click();
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
