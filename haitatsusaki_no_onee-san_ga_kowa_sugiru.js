// Data daftar chapter
const chapters = [
  { title: "Chapter 5", views: 1, date: "11/4/2025", link: "haitatsusaki_no_onee-san_ga_kowa_sugiru_chapter5.html" },
  { title: "Chapter 4", views: 1, date: "11/4/2025", link: "haitatsusaki_no_onee-san_ga_kowa_sugiru_chapter4.html" },
  { title: "Chapter 3", views: 1, date: "11/4/2025", link: "haitatsusaki_no_onee-san_ga_kowa_sugiru_chapter3.html" },
  { title: "Chapter 2,5", views: 1, date: "11/4/2025", link: "haitatsusaki_no_onee-san_ga_kowa_sugiru_chapter2,5.html" },
  { title: "Chapter 2", views: 1, date: "11/4/2025", link: "haitatsusaki_no_onee-san_ga_kowa_sugiru_chapter2.html" },
  { title: "Chapter 1.5", views: 1, date: "11/4/2025", link: "haitatsusaki_no_onee-san_ga_kowa_sugiru_chapter1,5.html" },
  { title: "Chapter 1", views: 1, date: "11/4/2025", link: "haitatsusaki_no_onee-san_ga_kowa_sugiru_chapter1.html" },
];

// Ambil elemen tempat menampilkan daftar
const listContainer = document.getElementById("chapterList");

// Loop isi daftar
chapters.forEach(chap => {
  const div = document.createElement("div");
  div.className = "chapter-row";
  div.innerHTML = `
    <a href="${chap.link}">${chap.title}</a>
    <div class="info">${chap.views} &nbsp; ${chap.date}</div>
  `;
  listContainer.appendChild(div);
});