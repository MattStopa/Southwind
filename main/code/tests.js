import SWCSS from './southwind.js'


function isEqual(v1, v2, spaceSensitive = false) {
  if(!spaceSensitive) { 
    v1 = v1.replace(/\s/g, '')
    v2 = v2.replace(/\s/g, '')
  }
  if (v1 !== v2) {
    console.error("Test Failed: Two values are not equal");
    console.error(JSON.stringify(v1));
    console.error(JSON.stringify(v2));
  } else {
    console.log("   Success");
  }
}

function translationTests() {
  isEqual(
    SWCSS.processSWClassString("bg-blue-1").default,
    "background-color: #eff6ff;"
  );
  isEqual(SWCSS.processSWClassString("fc-blue-1").default, "color: #eff6ff;");
  isEqual(SWCSS.processSWClassString("fw-2").default, "font-weight: 200;");
  isEqual(SWCSS.processSWClassString("lh-2").default, "line-height: 0.5rem;");
  isEqual(
    SWCSS.processSWClassString("shadow-1").default,
    "box-shadow: 4px 4px 4px rgb(0 0 0 / 8%);;"
  );
  isEqual(SWCSS.processSWClassString("w-1/1").default, "width: 100%;");
  isEqual(SWCSS.processSWClassString("w-1/2").default, "width: 50%;");
  isEqual(SWCSS.processSWClassString("mt-5").default, "margin-top: 0.625rem;");
  isEqual(
    SWCSS.processSWClassString("mb-5").default,
    "margin-bottom: 0.625rem;"
  );
  isEqual(
    SWCSS.processSWClassString("mr-5").default,
    "margin-right: 0.625rem;"
  );
  isEqual(SWCSS.processSWClassString("mr-200").default, "margin-right: 25rem;");
  isEqual(
    SWCSS.processSWClassString("b-2").default,
    "border-width: 2px; border-style: solid;"
  );
  isEqual(SWCSS.processSWClassString("b-rad-2").default, "border-radius: 2px;");
  isEqual(
    SWCSS.processSWClassString("b-col-gray-3").default,
    "border-color: #e5e7eb;"
  );
  isEqual(SWCSS.processSWClassString("fs-252").default, "font-size: 31.75rem;");
  isEqual(SWCSS.processSWClassString("fixed").default, "position: fixed;");
  isEqual(SWCSS.processSWClassString("top-5").default, "top: 0.625rem;");
  isEqual(
    SWCSS.processSWClassString("relative").default,
    "position: relative;"
  );
  isEqual(SWCSS.processSWClassString("mx-auto").default, "margin: auto;");

  // Test Negative
  isEqual(
    SWCSS.processSWClassString("-mt-5").default,
    "margin-top: -0.625rem;"
  );

  // Test Hover
  isEqual(
    SWCSS.processSWClassString("hover:mt-5").hover,
    "margin-top: 0.625rem;"
  );
  isEqual(
    SWCSS.processSWClassString("lg:bg-blue-7").lg,
    "background-color: #2563eb;"
  );
  isEqual(SWCSS.processSWClassString("w-23").default, "width: 2.875rem;");
}

translationTests();

function describe(description, cb) {
  console.log(`Testing: ${description}`);
  cb();
}

function codeConversionTests() {
  describe("Basic case", () => {
    isEqual(
      SWCSS.processSWScript(
        ".twitter-post .more { fw-6 fs-3 mt-1 fc-blue-5  }",
        ""
      ),
      `\n            .twitter-post .more {\n          font-weight: 600;font-size: 0.625rem;margin-top: 0.125rem;color: #60a5fa;\n        }\n      `
    );
  });

  describe("Case with hover", () => {
    isEqual(
      SWCSS.processSWScript(".twitter-post:hover { fw-6 }", ""),
      "\n        .twitter-post:hover {\n          font-weight: 600;\n        }\n      "
    );
  });

  describe("Case nested attributes", () => {
    let code = SWCSS.processSWScript(
      `
      .twitter-post {
        bg-blue-5
        .top {
          bg-blue-1
        }
      }
    `,
      ""
    );
    let expected = `\n        .twitter-post .top {\n          background-color: #eff6ff;\n        }\n      \n        .twitter-post {\n          background-color: #60a5fa;\n        }\n      `;
    isEqual(code, expected);
  });

  describe("Case multiple nested attributes", () => {
    let code = SWCSS.processSWScript(
      `
      .twitter-post {
        bg-blue-5
        .top {
          bg-blue-1
        }
        .bottom {
          bg-green-5 mt-5
        }
      }
    `,
      ""
    );
    let expected = `\n        .twitter-post .top {\n          background-color: #eff6ff;\n        }\n      \n        .twitter-post .bottom {\n          background-color: #4ade80;margin-top: 0.625rem;\n        }\n      \n        .twitter-post {\n          background-color: #60a5fa;\n        }\n      `;
    isEqual(code, expected);
  });

  describe("Case testing ampersands for 2 classes on same div", () => {
    let code = SWCSS.processSWScript(
      `
      .twitter-post {
        bg-blue-5
        .btn {
          mt-5
          &.blue { bg-blue-1 }
        }
      }
    `,
      ""
    );
    let expected = `\n        .twitter-post .btn.blue {\n          background-color: #eff6ff;\n        }\n      \n        .twitter-post .btn {\n          margin-top: 0.625rem;\n        }\n      \n        .twitter-post {\n          background-color: #60a5fa;\n        }\n      `;
    isEqual(code, expected);
  });

  describe("Case with children but no attributes", () => {
    let code = SWCSS.processSWScript(
      `
      .twitter-post {
        .btn {
          mt-5
          &.blue { bg-blue-1 }
        }
      }
    `,
      ""
    );
    let expected = `\n        .twitter-post .btn.blue {\n          background-color: #eff6ff;\n        }\n      \n        .twitter-post .btn {\n          margin-top: 0.625rem;\n        }\n      `;
    isEqual(code, expected);
  });
}

codeConversionTests();