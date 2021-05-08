# Bot wspierający rejestrację na szczepienia

## Jak używać

Video z wyjasnieniem: https://youtube.com/watch?v=OZSCK3_I3z0

1. Wejdź na stronę wyszukiwania punktu szczepienia https://pacjent.erejestracja.ezdrowie.gov.pl/
2. Wprowadź na stronie kryteria wyszukiwania (województwo, zakres dat, godziny, typ szczepionki, rodzaj punktu)
3. Otwórz konsolę: F12 -> Konsola
4. Skopiuj poniższy kod i wciśnij enter

```
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
        } else {
          setTimeout(() => iterate(), 2500);
        }
      }
    }, 100);
  };
  process();
};

iterate();
```

Co 2.5 sekundy wyniki wyszukiwania będą odświeżane. Jeśli jakiś punkt będzie spełniał kryteria wyszukiwania, bot da znać dżwiękiem, więc można go po prostu zostawić w otwartej karcie i zająć się czymś innym ;)
