let menu = document.querySelector("#mobile-menu");
let menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("is_active");
  menuLinks.classList.toggle("active");
});

/*------------------ Cards Section----------------------------- */
let biographySet = document.querySelector("#biography__set");
let cardInfo = document.querySelector("#close__biography");
//let homeBtn = document.querySelector("#home__btn");
let popUp = document.querySelector(".pop__up");
let body = document.querySelector("body");

let cardInstructors = document.querySelector("#instructors");
let infoInstructors = document.querySelector("#info__instructors");

/*
homeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  biographySet.classList.toggle("active");

  popUp.classList.toggle("active");
  popUp.innerHTML = escrito;
  body.style.overflowY = "hidden";
});
*/
/*
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
*/
let btnWhatsapp = document.querySelector("#btnWhatsapp"),
  btnFacebook = document.querySelector("#btnFacebook"),
  btnInstagram = document.querySelector("#btnInstagram"),
  btnTikTok = document.querySelector("#btnTikTok");

btnWhatsapp.addEventListener("click", () => {
  window.open(
    "https://api.whatsapp.com/send/?phone=5491158758402&text&app_absent=0"
  );
});

btnFacebook.addEventListener("click", () => {
  window.open("https://www.facebook.com/yobailodetodo");
});

btnInstagram.addEventListener("click", () => {
  window.open("https://www.instagram.com/yobailodetodo/");
});

btnTikTok.addEventListener("click", () => {
  window.open(
    "https://m.tiktok.com/h5/share/usr/6785239001508938758.html?_d=secCgwIARCbDRjEFSACKAESPgo8T%2FLks8FqzvWmRGAd1dWwQVtul0b%2FzJYJjptMq%2FdW3T2lJkgaUPmeqvPr41cNWQj1stk%2BFlA9HAYxcGLJGgA%3D&language=es&sec_uid=MS4wLjABAAAAbjol8UV3v24oZTfoo7VDEhbXZtX4W95Uoj6CbfnDHh1cdo4pzfk_igO1vk6-4lZI&sec_user_id=MS4wLjABAAAAl5Q1Acnomgua0P8OH6KIVUHELrPkt8VBUanxF_jJ3_knwfzbUmYW0dMb6NUAs5Xz&share_app_id=1233&share_author_id=6785239001508938758&share_link_id=131dabff-374d-4ab7-b404-056da7d68ce0&timestamp=1643496250&u_code=dbai62bedca2lf&user_id=6803818351857959942&utm_campaign=client_share&utm_medium=android&utm_source=copy"
  );
});
