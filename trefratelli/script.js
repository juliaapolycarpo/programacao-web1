// Seleziona pulsanti lingua e recupera lingua salvada, default italiano
const ita_tra = document.querySelector("#lang_it");
const eng_tra = document.querySelector("#lang_en_uk");

// Recupera la lingua salvata in locale
const saved = localStorage.getItem("lang");

//Imposta la lingua da usare, italiano default
const langToApply = saved ? saved : "it";

//applica subito la lingua
applyLang(langToApply);

//funzione principal per cambiate la lingua
function applyLang(lang) {
    //salva la nueva lingua in locale
    localStorage.setItem("lang", lang);

    //aggiorna il testo di tutti gli elementi
    for (const key in i18n[lang]) {
        const el = document.getElementById(key);
        if (el) el.innerHTML = i18n[lang][key];
    }

    //rimove la classe active da tutti i dropdown items
    document.querySelectorAll(".dropdown-item").forEach(item => {
        item.classList.remove("active");
    });


    //aggiunge active solo alla lingua corrente
    document.getElementById("lang_" + lang).classList.add("active");

}


//ascolta il click sui buttoni per cambiare lingua
ita_tra.addEventListener("click", () => applyLang("it"));
eng_tra.addEventListener("click", () => applyLang("en_uk"));

