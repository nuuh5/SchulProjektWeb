function fetchDocument(url) {
  // unfortunately fetch() does not support retrieving documents,
  // so we have to resort to good old XMLHttpRequest.
  var xhr = new XMLHttpRequest();

  return new Promise(function (resolve, reject) {
    xhr.open("GET", url, true);
    xhr.responseType = "document";
    xhr.setRequestHeader("Accept", "text/html");
    xhr.onload = function () {
      // .responseXML contains a ready-to-use Document object
      resolve(xhr.responseXML);
    };
    xhr.send();
  });
}

export default () => {
  import("https://cdn.ampproject.org/shadow-v0.js").then(function (AMP) {
    var container = document.createElement("div");
    document.querySelector("main-body").appendChild(container);

    // The AMP page you want to display
    var url = "https://kadetten-bilder.netlify.app/";

    // Use our fetchDocument method to get the doc
    fetchDocument(url).then(function (doc) {
      // Let AMP take over and render the page
      var ampedDoc = window.AMP.attachShadowDoc(container, doc, url);
    });
  });
};
