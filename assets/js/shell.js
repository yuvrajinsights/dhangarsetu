const navigation = [
  ["index.html", "मुख्यपृष्ठ"],
  ["about.html", "विषयी"],
  ["events.html", "कार्यक्रम"],
  ["yojana.html", "सरकारी योजना"],
  ["updates.html", "बातम्या"],
  ["gallery.html", "गॅलरी"],
  ["matrimony.html", "विवाह परिचय"],
  ["registration.html", "नोंदणी"],
  ["contact.html", "संपर्क"],
];

const groupLink = "https://chat.whatsapp.com/EsLUuQfzZFVKvQSc2jBUO8?s=cl&p=a&iam=2";

document.querySelectorAll(".topbar__inner span").forEach((item) => {
  item.textContent = "Dhangarsetu";
});

document.querySelectorAll(".brand").forEach((brand) => {
  brand.innerHTML = '<img class="brand__logo" src="Logo.png" alt="Dhangarsetu logo"><span class="brand__text">Dhangarsetu</span>';
});

document.querySelectorAll(".nav-links").forEach((nav) => {
  nav.innerHTML = navigation.map(([href, label]) => `<a href="${href}">${label}</a>`).join("");
});

document.querySelectorAll(".site-footer").forEach((footer) => {
  footer.innerHTML = `<div class="footer__inner"><div><h3>Dhangarsetu</h3><p>एकत्र येऊ, शिक्षण घेऊ, प्रगती करू.</p></div><div><h3>जलद दुवे</h3><a href="yojana.html">सरकारी योजना</a><a href="gallery.html">गॅलरी</a><a href="matrimony.html">विवाह परिचय</a></div><div><h3>समूहात सहभागी व्हा</h3><a href="${groupLink}" target="_blank" rel="noopener">WhatsApp समूह</a><a href="mailto:info@dhangarsetu.org">info@dhangarsetu.org</a></div></div>`;
});

const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
const textNodes = [];
while (textWalker.nextNode()) textNodes.push(textWalker.currentNode);
textNodes.forEach((node) => {
  node.nodeValue = node.nodeValue
    .replaceAll("शेगर धनगर फाउंडेशन", "Dhangarsetu")
    .replaceAll("Shegar Dhangar Foundation", "Dhangarsetu");
});

document.querySelectorAll("[alt], [title], [aria-label]").forEach((item) => {
  ["alt", "title", "aria-label"].forEach((attribute) => {
    const value = item.getAttribute(attribute);
    if (value) item.setAttribute(attribute, value.replaceAll("शेगर धनगर फाउंडेशन", "Dhangarsetu").replaceAll("Shegar Dhangar Foundation", "Dhangarsetu"));
  });
});

if (location.pathname.endsWith("events.html")) {
  const events = document.querySelector("main .section.grid.grid--2");
  if (events) {
    events.insertAdjacentHTML("afterbegin", '<article class="card event reveal"><div class="datebox"><div><span>१४</span>नोव्हेंबर</div></div><div><h3>धनगर वधू-वर आणि पालक परिचय मेळावा २०२६</h3><p>तारीख: १४ नोव्हेंबर २०२६<br>वेळ व ठिकाण: लवकरच जाहीर करण्यात येईल</p><a class="btn btn--primary" href="registration.html">नोंदणी करा</a></div></article>');
  }
}

if (location.pathname.endsWith("gallery.html")) {
  const gallery = document.querySelector(".gallery");
  if (gallery) {
    gallery.insertAdjacentHTML("afterbegin", '<button class="photo-tile reveal" type="button" data-lightbox><img src="Images/2025%20Program%20Opening.jpeg" alt="२०२५ कार्यक्रमाचे उद्घाटन"><span>२०२५ कार्यक्रमाचे उद्घाटन</span></button><button class="photo-tile reveal" type="button" data-lightbox><img src="Images/Certificate%20Distribution.jpeg" alt="प्रमाणपत्र वितरण"><span>प्रमाणपत्र वितरण</span></button><button class="photo-tile reveal" type="button" data-lightbox><img src="Images/Certificate%20Distribution%202.jpeg" alt="प्रमाणपत्र वितरण समारंभ"><span>प्रमाणपत्र वितरण समारंभ</span></button><button class="photo-tile reveal" type="button" data-lightbox><img src="Images/Bharne%20Mama%20Felicitation%20.jpeg" alt="भरणे मामा यांचा सत्कार"><span>भरणे मामा यांचा सत्कार</span></button><button class="photo-tile reveal" type="button" data-lightbox><img src="Images/Bharne%20Mama%20Satkar.jpeg" alt="भरणे मामा सत्कार सोहळा"><span>भरणे मामा सत्कार सोहळा</span></button><button class="photo-tile reveal" type="button" data-lightbox><img src="Images/Dhangar%20reservation%20Protest.jpeg" alt="धनगर आरक्षण आंदोलन"><span>धनगर आरक्षण आंदोलन</span></button><button class="photo-tile reveal" type="button" data-lightbox><img src="Images/Main%20Picture.jpeg" alt="समाज उपक्रमाची झलक"><span>समाज उपक्रमाची झलक</span></button>');
  }
}
