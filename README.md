# Bot wspierający rejestrację na szczepienia


## Jak używać
1. Wejdź na stronę wyszukiwania punktu szczepienia https://pacjent.erejestracja.ezdrowie.gov.pl/
2. Wprowadź na stronie kryteria wyszukiwania (województwo, zakres dat, godziny, typ szczepionki, rodzaj punktu)
3. Otwórz konsolę: F12 -> Konsola
4. Skopiuj poniższy kod i wciśnij enter
```
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
```

Co 2.5 sekundy wyniki wyszukiwania będą odświeżane. Jeśli jakiś punkt będzie spełniał kryteria wyszukiwania, bot da znać dżwiękiem, więc można go po prostu zostawić w otwartej karcie i zająć się czymś innym ;)
