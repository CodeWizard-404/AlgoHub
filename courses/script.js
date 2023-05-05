const chapters = [
    "Introduction",
    "Notions de base",
    "Type simple",
    "Structure conditionnelles",
    "Structures itératives",
    "Tableaux",
    "Chaînes de caractères",
    "Fonctions sur les chaînes de caractères",
    "Enregistrements",
    "Procedures & Fonctions",
    "Récursivité",
    "Recherche & Tri",
    "Pointeurs",
    "Listes chaînées",
    "Piles & Files",
    "Arbres"
  ];
  
  window.addEventListener("DOMContentLoaded", () => {
    const chapterTitle = document.getElementById("chapter-title");
    const currentPage = window.location.pathname.split("/").pop();
    const currentPageNumber = parseInt(currentPage.match(/\d+/)[0]);
    chapterTitle.textContent = `Chapitre ${currentPageNumber}: ${chapters[currentPageNumber - 1]}`;
  });




  const videoIds = [
    "nrbBmoINqtk", 
    "ME1CNzcHOCY", 
    "1eyf1-RU_eg",
    "xyQrVEFz9kw",
    "b4DPj0XAfSg",
    "eE9MnoS0lc0",
    "Ws-mVAJDFAw",
    "z9m3Qr3SowE",
    "oKXP1HZ8xIs",
    "ou_G7_zodR4",
    "STWnc6ZY2fw",
    "qLVrwCvVPGo",
    "DplxIq0mc_Y",
    "MCIwn7mY4jY",
    "Flk5yrlx5Qo",
    "Gt2yBZAhsGM"
  ];

  
  window.addEventListener("DOMContentLoaded", () => {
    const courseVideo = document.getElementById("course-video");
    const currentPage = window.location.pathname.split("/").pop();
    const currentPageNumber = parseInt(currentPage.match(/\d+/)[0]);
    courseVideo.src = `https://www.youtube.com/embed/${videoIds[currentPageNumber - 1]}`;
  });
  









  




  