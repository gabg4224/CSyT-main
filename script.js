let menu = document.querySelector("#mobile-menu");
let menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("is_active");
  menuLinks.classList.toggle("active");
});

/*------------------ Cards Section----------------------------- */
let biographySet = document.querySelector("#biography__set");
let cardInfo = document.querySelector("#close__biography");
let homeBtn = document.querySelector("#home__btn");
let popUp = document.querySelector(".pop__up");
let body = document.querySelector("body");

let cardInstructors = document.querySelector("#instructors");
let infoInstructors = document.querySelector("#info__instructors");

homeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  biographySet.classList.toggle("active");

  popUp.classList.toggle("active");
  popUp.innerHTML = escrito;
  body.style.overflowY = "hidden";
});

cardInfo.addEventListener("click", () => {
  biographySet.classList.toggle("active");
  popUp.classList.toggle("active");
  popUp.innerHTML = "";
  body.style.overflowY = "auto";
});

let escrito = `<h2>Nuestra Historia</h2>
<div>


    <h3>Fundada en el año 2011 por su directora Albery Patiño
        en Maracay - Venezuela</h3>
    <p>
        ha contado con
        innumerables aprendices y un importante staff de
        instructores en sus años de enseñanza
    </p>


    <p>
        quienes han
        contribuido de forma importante con la evolución y
        crecimiento de la institución
    </p>

    <p>
        A partir de Marzo 2019 comenzamos nuestras
        actividades en Buenos Aires - Argentina
    </p>

    <p>
        formando a
        bailadores y presentando una oportunidad única a los
        venezolanos en el exterior para disfrutar del calor del
        baile.
    </p>

</div>


<div>
    <h3>Siempre comprometidos con nuestra vision y mision</h3>



    <p>
        Ser una organización líder en el ámbito artístico,
        con un amplio y diverso equipo de excelente nivel,
        beneficiándonos de los avances tecnológicos para
        complementar la enseñanza.
    </p>

    <p>
        Ofrecer instrucción profesional debrindar un tiempo de relax y seguidamente formar
        expertos en el área.
    </p>

</div>

<div>
    <h3>Nos distinguimos del resto por los valores que nos convierte en una familia</h3>



    <p>
        Solidaridad
    </p>

    <p>
        Integridad
    </p>

    <p>
       Tolerancia
    </p>
    <p>
        Excelencia
    </p>
</div>`;

let academy = document.querySelector("#academy");
let instructors = document.querySelector("#instructors");
let alumns = document.querySelector("#alumns");

let closeContainerAcademy = document.querySelector("#close__cardd__academy");
let closeContainerInstructors = document.querySelector(
  "#close__cardd__instructors"
);
let closeContainerAlumns = document.querySelector("#close__cardd__alumns");

closeContainerAcademy.addEventListener("click", (e) => {
  openCloseCard(academy);
});

closeContainerInstructors.addEventListener("click", (e) => {
  openCloseCard(instructors);
});

closeContainerAlumns.addEventListener("click", (e) => {
  openCloseCard(alumns);
});

let academyCounter = 0,
  instructorsCounter = 0,
  alumnsCounter = 0;

let returnCardAcademy = document.querySelector("#return__academy"),
  returnCardInstructors = document.querySelector("#return__instructors"),
  returnCardAlumns = document.querySelector("#return__alumns");

returnCardAcademy.addEventListener("click", (e) => {
  openCloseCard(academy);
  setDefaultCard("academy");
  academyCounter = 0;
});

returnCardInstructors.addEventListener("click", (e) => {
  openCloseCard(instructors);
  setDefaultCard("instructors");
  academyCounter = 0;
});

returnCardAlumns.addEventListener("click", (e) => {
  openCloseCard(alumns);
  setDefaultCard("alumns");
  academyCounter = 0;
});

let nextAcademy = document.querySelector("#next__academy"),
  prevAcademy = document.querySelector("#prev__academy"),
  writingAcademy = document.querySelector("#write__academy");

let nextInstructors = document.querySelector("#next__instructors"),
  prevInstructors = document.querySelector("#prev__instructors"),
  writingInstructors = document.querySelector("#write__instructors");

let nextAlumns = document.querySelector("#next__alumns"),
  prevAlumns = document.querySelector("#prev__alumns"),
  writingAlumns = document.querySelector("#write__alumns");

nextAcademy.addEventListener("click", (e) => {
  let value = "academy";
  setCounterNext(value);
  writingAcademy.innerHTML = academyChanges.at(academyCounter);
});

prevAcademy.addEventListener("click", (e) => {
  let value = "academy";
  setCounterPrev(value);
  writingAcademy.innerHTML = academyChanges.at(academyCounter);
});

nextInstructors.addEventListener("click", (e) => {
  let value = "instructors";
  setCounterNext(value);
  writingInstructors.innerHTML = instructorsChanges.at(instructorsCounter);
});

prevInstructors.addEventListener("click", (e) => {
  let value = "instructors";
  setCounterPrev(value);
  writingInstructors.innerHTML = instructorsChanges.at(instructorsCounter);
});

nextAlumns.addEventListener("click", (e) => {
  let value = "alumns";
  setCounterNext(value);
  writingAlumns.innerHTML = alumnsChanges.at(alumnsCounter);
});

prevAlumns.addEventListener("click", (e) => {
  let value = "alumns";
  setCounterPrev(value);
  writingAlumns.innerHTML = alumnsChanges.at(alumnsCounter);
});

let openCloseCard = (value) => {
  value.classList.toggle("active");
  value.firstElementChild.classList.toggle("active");
};
let setContent = (value) => {
  if (value == "academy") {
    writingAcademy.innerHTML = academyChanges.at(academyCounter);
  }
};
let setCounterNext = (value) => {
  if (value == "academy") {
    academyCounter++;
    if (academyCounter > academyChanges.length - 1) {
      academyCounter = 0;
    }
  } else if (value == "instructors") {
    instructorsCounter++;
    if (instructorsCounter > instructorsChanges.length - 1) {
      instructorsCounter = 0;
    }
  } else if (value == "alumns") {
    alumnsCounter++;
    if (alumnsCounter > alumnsChanges.length - 1) {
      alumnsCounter = 0;
    }
  }
};
let setCounterPrev = (value) => {
  if (value == "academy") {
    academyCounter--;
    if (academyCounter < 0) {
      academyCounter = academyChanges.length - 1;
    }
  } else if (value == "instructors") {
    instructorsCounter--;
    if (instructorsCounter < 0) {
      instructorsCounter = instructorsChanges.length - 1;
    }
  } else if (value == "alumns") {
    alumnsCounter--;
    if (alumnsCounter < 0) {
      alumnsCounter = alumnsChanges.length - 1;
    }
  }
};

let setDefaultCard = (value) => {
  if (value == "academy") {
    writingAcademy.innerHTML = academyChanges[0];
  } else if (value == "instructors") {
    writingInstructors.innerHTML = instructorsChanges[0];
  }
  if (value == "alumns") {
    writingAlumns.innerHTML = alumnsChanges[0];
  }
};

let returnFunction = (value) => {
  if (value == "academy") {
    openCloseCard(academy);
    setDefaultCard("academy");
    academyCounter = 0;
  } else if (value == "instructors") {
    openCloseCard(instructors);
    setDefaultCard("instructors");
    instructorsCounter = 0;
  } else if (value == "alumns") {
    openCloseCard(alumns);
    setDefaultCard("alumns");
    instructorsCounter = 0;
  }
};
