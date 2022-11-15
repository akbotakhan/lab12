console.log(document);

let h1 = document.querySelector("h1");
h1.innerHTML = "Lab12 Assignment";
h1.style.color = "blue";
document.body.appendChild(h1);

hr = document.createElement("hr");
document.body.appendChild(hr);

let h2 = document.createElement("h2");
h2.innerHTML = "Task";
h2.style.color = "red";
document.body.appendChild(h2);

let p1 = document.createElement("p1");
p1.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";
document.body.appendChild(p1);

let ul1 = document.createElement("ul");

let li1 = document.createElement("li");
li1.innerHTML = "find elements in the DOM (<b>5 points</b>);"
li1.classList.add = "class1"
li1.style.color = "green"
ul1.appendChild(li1);

li2 = document.createElement("li");
li2.innerHTML = "create/add/remove elements (<b>5 points</b>);"
li2.classList.add = "class2"
li2.style.color = "purple"
ul1.appendChild(li2);

li3 = document.createElement("li");
li3.innerHTML = "change content of the elements (<b>5 points</b>);"
li3.classList.add = "class1"
li3.style.color = "green"
ul1.appendChild(li3);

li4 = document.createElement("li");
li4.innerHTML = "change styles of the elements (<b>5 points</b>);"
li4.classList.add = "class2"
li4.style.color = "purple"
ul1.appendChild(li4);

li5 = document.createElement("li");
li5.innerHTML = "change attributes of the elements (<b>5 points</b>);"
li5.classList.add = "class1"
li5.style.color = "green"
ul1.appendChild(li5);

li6 = document.createElement("li");
li6.innerHTML = "change classes of the elements (<b>5 points</b>)."
li6.classList.add = "class2"
li6.style.color = "purple"
ul1.appendChild(li6);

document.body.appendChild(ul1);

let p2 = document.createElement("p2");
p2.innerText = "Basic necessary code can be found in the supplementary materials to the Lecture 12 via this "
document.body.appendChild(p2);

let a = document.createElement("a"); 
a.setAttribute("href", "https://github.com/yessen/nu_web_programming/tree/main/week12"); 
a.innerText = "link."
document.body.appendChild(a);

hr = document.createElement("hr");
document.body.appendChild(hr);

let h3 = document.createElement("h2");
h3.innerHTML = "Submission";
h3.style.color = "red"
document.body.appendChild(h3);

let p3 = document.createElement("p3");
p3.innerText = "To submit your work, follow these instructions:"
document.body.appendChild(p3);

ul2 = document.createElement("ul");

li7 = document.createElement("li");
li7.innerHTML = "Create a new repository on Github, named <b>lab12</b> (<b>1 point</b>)."
li7.classList.add = "class1"
li7.style.color = "green"
ul2.appendChild(li7);

li8 = document.createElement("li");
li8.innerHTML = "Clone this repository to your local machine and work inside it."
li8.classList.add = "class2"
li8.style.color = "purple"
ul2.appendChild(li8);

li9 = document.createElement("li");
li9.innerHTML = 'Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with "Hello, World!" message (<b>1 point</b>).'
li9.classList.add = "class1"
li9.style.color = "green"
ul2.appendChild(li9);

li10 = document.createElement("li");
li10.innerHTML = "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>)."
li10.classList.add = "class2"
li10.style.color = "purple"
ul2.appendChild(li10);

li11 = document.createElement("li");
li11.innerHTML = "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section)."
li11.classList.add = "class1"
li11.style.color = "green"
ul2.appendChild(li11);

li12 = document.createElement("li");
li12.innerHTML = "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>)."
li12.classList.add = "class2"
li12.style.color = "purple"
ul2.appendChild(li12);

li13 = document.createElement("li");
li13.innerHTML = "After you finish your work, submit it to the Github (<b>2 points</b>)."
li13.classList.add = "class1"
li13.style.color = "green"
ul2.appendChild(li13);

document.body.appendChild(ul2);

hr = document.createElement("hr");
document.body.appendChild(hr);

let p4 = document.createElement("p4");
p4.innerText = "Footer"
document.body.appendChild(p4);

console.log(document);