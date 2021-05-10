const getButton = (text) => {
  const x = [...document.querySelectorAll("button")].filter((b) =>
    b.textContent.includes(text)
  );
  return x.length && x[0];
};
const ding = () => {
  const a = new Audio("https://www.tones7.com/media/emergency_alarm.mp3");
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
          setTimeout(() => iterate(), 15000);
        } else {
          setTimeout(() => iterate(), 2500);
        }
      }
    }, 100);
  };
  process();
};

iterate();
