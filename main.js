//scrolling animation from textcards to text
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

//auto expanding of comment text box
$(document)
  .one("focus.autoExpand", "textarea.autoExpand", function () {
    var savedValue = this.value;
    this.value = "";
    this.baseScrollHeight = this.scrollHeight;
    this.value = savedValue;
  })
  .on("input.autoExpand", "textarea.autoExpand", function () {
    var minRows = this.getAttribute("data-min-rows") | 0,
      rows;
    this.rows = minRows;
    rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 16);
    this.rows = minRows + rows;
  });

//Vue router
const fatwa = {
  template:
    '<div><h3 id="first"><u>Is OSAP permissible</u></h3><br/><zero-md src="./content/fatwa.md"></zero-md></div>',
};
const policies = {
  template:
    '<div><h3 id="second"><u>Important Policies and Definitions</u></h3><br/><zero-md src="./content/policies.md"></zero-md></div>',
};
const advice = {
  template:
    '<div><h3 id="third"><u>Some OSAP Advice</u></h3><br/><zero-md src="./content/advice.md"></zero-md></div>',
};
const faq = {
  template:
    '<div><h3 id="fourth"><u>FAQ</u></h3><br/><zero-md src="./content/faq.md"></zero-md></div>',
};

const routes = [
  { path: "", component: policies },
  { path: "/fatwa", component: fatwa },
  { path: "/policies", component: policies },
  { path: "/advice", component: advice },
  { path: "/faq", component: faq },
];
const router = new VueRouter({
  routes,
});
const app = new Vue({
  router,
}).$mount("#vueApp");
