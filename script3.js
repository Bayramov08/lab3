const cvData = {
    "Təhsil": ["Azərbaycan Texniki Universiteti - İnformasiya Təhlükəsizliyi (1-ci kurs, 2024 - hazırda davam edir)"],
    "Bacarıqlar": [
        "✔ Python, C++, Java",
        "✔ HTML, CSS, Java",
        "✔ Office proqramları"
    ],
    "İş Təcrübəsi": ["Halhazırda heç bir təcrübə yoxdu sadəcə praktika edirəm"],
    "Haqqımda": [
        "Açıq fikirli və komanda mühitində işləməyə uyğun biriyəm."
    ],
    "Şəxsi Keyfiyyətlər": [
        "✔ Səbirli",
        "✔Özünü inkişaf ",
        "✔ İnadkar",
        "✔ Stressə davamlı"
    ],
    "Hobbilər": [
        "Futbolla məşğul olmaq, yeni yerlər gəzmək yeni biliklər öyrənmək "
    ]
};

window.onload = function () {
    const sections = document.getElementsByClassName("block");
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const title = section.querySelector("h2").textContent;
        const content = section.querySelector(".info");
        const addBtn = section.querySelector(".add-btn");
        const input = section.querySelector("input");

        if (cvData[title]) {
            const ul = document.createElement("ul");
            cvData[title].forEach(item => {
                const li = document.createElement("li");
                li.textContent = item;
                li.onclick = () => {
                    const updated = prompt("Məlumatı redaktə et:", li.textContent);
                    if (updated) li.textContent = updated;
                };
                ul.appendChild(li);
            });
            content.innerHTML = "";
            content.appendChild(ul);
        }

        title.onclick = () => {
            content.style.display = content.style.display === "none" ? "block" : "none";
        };

        addBtn.onclick = () => {
            const val = input.value.trim();
            if (val) {
                let ul = content.querySelector("ul");
                if (!ul) {
                    ul = document.createElement("ul");
                    content.innerHTML = "";
                    content.appendChild(ul);
                }
                const li = document.createElement("li");
                li.textContent = val;
                li.onclick = () => {
                    const updated = prompt("Məlumatı redaktə et:", li.textContent);
                    if (updated) li.textContent = updated;
                };
                ul.appendChild(li);
                input.value = "";
            }
        };
    }
};
