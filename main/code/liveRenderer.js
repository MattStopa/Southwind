document.querySelector('body').style['display'] = 'none'

let alreadyCalled = false;

function loadup() {
  if (alreadyCalled) return;
  alreadyCalled = true;
  let content = "";

  let cssDrop = document.createElement("style");
  cssDrop.innerHTML = content;
   document.querySelector("body").appendChild(cssDrop);

  /*
   *   Process inline styles that exist on first render
   */

  let allClasses = {};
  Array.from(document.querySelectorAll("*")).map((i) => {
    i.className
      .toString()
      .split(/\s+/)
      .forEach((e) => {
        allClasses[e] = 1;
      });
  });
  Object.keys(allClasses).map((name) => {
    let str = SWCSS.processSWClassString(name);

    if (str && str.default.length > 1) {
      content += `
        .${name.split("/").join("\\/")} { ${str.default}  }`;
    }
  });

  cssDrop.innerHTML += content;

  /*
   *   Process all the stylesheets with the 'ext' extension
   */

  content = "";

  document.querySelectorAll('[rel="ext"]').forEach((a) => {
    content = SWCSS.processSWScript(a.innerHTML, content);
    cssDrop.innerHTML += content;
    console.log("GOT HERE---------")
    // a.setAttribute('data-processed', true);
  });
  console.log("FINISHED")

  // setTimeout(() => { 
    // document.querySelector('body').style['display'] = 'block'
  // }, 1000)


  /*
   *  Handle dom elements being injected.
   */

  function handleMutatedElement(element) {
    content = "";

    if (element.getAttribute("rel") === "ext") {
      /* Process script tags */

      let data = element.innerHTML;
      content += SWCSS.processSWScript(data);
      element.dataset.processed = true;
    } else {
      /* Process class strings */

      element.classList.forEach((c) => {
        // if (this.classesAlreadyAdded && this.classesAlreadyAdded[c]) {
        //   return;
        // }

        let str = SWCSS.processSWClassString(c);
        if (str && str.default.length > 1) {
          content += `
        .${c.split("/").join("\\/")} { ${str.default}  }`;
        }
      });
    }
    cssDrop.innerHTML += content;

    /* Handle Children Elements */

    if (element.children.length > 0) {
      Array.prototype.slice.call(element.children).map((c) => {
        handleMutatedElement(c);
      });
    }
  }

  /*
   *  Handles new elements being added to the dom (ie react)
   */

  let observer = new MutationObserver(function (mutations) {
    // Remove dom updates that we are causing by adding styles
    if (
      mutations[0].addedNodes[0] &&
      mutations[0].addedNodes[0].nodeName === "#text"
    ) {
      return;
    }

    mutations.forEach(function (mutation) {
      for (var i = 0; i < mutation.addedNodes.length; i++) {
        if (mutation.addedNodes[i].classList) {
          handleMutatedElement(mutation.addedNodes[i]);
        }
      }
    });
  });

  /*
   *  Set observer to listen for Dom additions
   */

  observer.observe(document, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["class"],
  });
};

if(typeof window !== 'undefined') { 
  window.onload = loadup
}

if(typeof window !== 'undefined') { 
  window.onload()
}

