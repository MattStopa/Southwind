"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };

  // code/southwind.js
  var require_southwind = __commonJS({
    "code/southwind.js"(exports, module) {
      var __SWCSS_PARSER = class {
        constructor() {
          __publicField(this, "alreadyInCodeSegement", false);
          __publicField(this, "braceList", []);
          __publicField(this, "currSegment", null);
        }
        createTopLevelCodeSegment(text, i) {
          let startOfLine = text.lastIndexOf("\n", i);
          let className = text.substring(startOfLine, i).replace(/^\s+|\s+$/g, "");
          let object = { children: [], name: className, code: "" };
          this.braceList.push(object);
          this.currSegment = object;
          this.alreadyInCodeSegement = true;
        }
        clipLastSegmentsCode(name) {
          this.currSegment.code = this.currSegment.code.substring(
            0,
            this.currSegment.code.length - name.length - 1
          );
        }
        createNestedCodeSegement(text, i) {
          let idx = text.lastIndexOf("\n", i);
          let name = text.substring(idx, i).replace(/^\s+|\s+$/g, "");
          let spacer = " ";
          if (name[0] === "&") {
            name = name.substring(1, name.length);
            spacer = "";
          }
          this.clipLastSegmentsCode(name);
          let object = {
            children: [],
            name: this.currSegment.name + spacer + name,
            code: "",
            parent: this.currSegment
          };
          this.currSegment.children.push(object);
          this.currSegment = object;
        }
        endCodeSegment(i) {
          this.currSegment.indexStop = i;
          if (this.currSegment.parent) {
            this.currSegment = this.currSegment.parent;
          } else {
            this.alreadyInCodeSegement = false;
          }
        }
        AddLetterToExistingSegment(text, i) {
          if (this.currSegment) {
            this.currSegment.code += text[i];
          }
        }
        parseSWScript(text, cb) {
          for (let i = 0; i < text.length; i++) {
            let letter = text[i];
            if (letter === "{") {
              if (this.alreadyInCodeSegement) {
                this.createNestedCodeSegement(text, i);
              } else {
                this.createTopLevelCodeSegment(text, i);
              }
            } else if (letter === "}") {
              this.endCodeSegment();
            } else {
              this.AddLetterToExistingSegment(text, i);
            }
          }
          this.renderItems(this.braceList, cb);
        }
        renderItems(braceList, cb) {
          braceList.forEach((item) => {
            if (item.children) {
              this.renderItems(item.children, cb);
            }
            cb(item.name, item.code);
          });
        }
      };
      var __SWCSS_MAPPINGS = class {
        static getColors(val1, val2) {
          if (val1 === "white") {
            return "#ffffff";
          } else if (val1 === "black") {
            return "#000";
          } else {
            let colors = {
              blue: [
                "",
                "#eff6ff",
                "#dbeafe",
                "#bfdbfe",
                "#93c5fd",
                "#60a5fa",
                "#3b82f6",
                "#2563eb",
                "#1d4ed8",
                "#1e40af",
                "#1e3a8a"
              ],
              green: [
                "",
                "#f0fdf4",
                "#dcfce7",
                "#bbf7d0",
                "#86efac",
                "#4ade80",
                "#22c55e",
                "#16a34a",
                "#15803d",
                "#166534",
                "#14532d"
              ],
              gray: [
                "",
                "#f9fafb",
                "#f3f4f6",
                "#e5e7eb",
                "#d1d5db",
                "#9ca3af",
                "#6b7280",
                "#4b5563",
                "#374151",
                "#1f2937",
                "#111827"
              ],
              red: [
                "",
                "#fef2f2",
                "#fee2e2",
                "#fecaca",
                "#fca5a5",
                "#f87171",
                "#ef4444",
                "#dc2626",
                "#b91c1c",
                "#991b1b",
                "#7f1d1d"
              ]
            };
            return colors[val1][val2];
          }
        }
      };
      __publicField(__SWCSS_MAPPINGS, "mpSwap", {
        m: "margin",
        mt: "margin-top",
        mb: "margin-bottom",
        mr: "margin-right",
        ml: "margin-left",
        p: "padding",
        pl: "padding-left",
        pr: "padding-right",
        pt: "padding-top",
        pb: "padding-bottom"
      });
      __publicField(__SWCSS_MAPPINGS, "borderSwap", {
        b: "border",
        bl: "border-left",
        br: "border-right",
        bt: "border-top",
        bb: "border-bottom"
      });
      __publicField(__SWCSS_MAPPINGS, "singleWord", {
        inline: "display: inline-block;",
        block: "display: block;",
        flex: "display: flex;",
        hidden: "display: none",
        pointer: "cursor: pointer;",
        tac: "text-align: center;",
        tal: "text-align: left;",
        dashed: "border-style: dashed !important;",
        fixed: "position: fixed;",
        relative: "position: relative;",
        "justify-between": "justify-content: space-between;",
        "flex-wrap": "flex-wrap: wrap;",
        "mx-auto": "margin: auto;"
      });
      __publicField(__SWCSS_MAPPINGS, "shadows", {
        1: "4px 4px 4px rgb(0 0 0 / 8%);",
        2: "4px 4px 4px rgb(0 0 0 / 16%);",
        3: "4px 4px 4px rgb(0 0 0 / 25%);",
        4: "4px 4px 4px rgb(0 0 0 / 32%);",
        5: "4px 4px 4px rgb(0 0 0 / 40%);"
      });
      var __SWCSS_CLASS_STRING_PROCESSOR = class {
        static background(classArray, important, self) {
          return `background-color: ${__SWCSS_MAPPINGS.getColors(
            classArray[1],
            classArray[2]
          )}${important};`;
        }
        static top(classArray) {
          return `top: ${parseInt(classArray[1]) * 0.125}rem;`;
        }
        static fontColor(classArray, important, self) {
          return `color: ${__SWCSS_MAPPINGS.getColors(
            classArray[1],
            classArray[2]
          )}${important};`;
        }
        static fontWeight(classArray, important) {
          return `font-weight: ${parseInt(classArray[1]) * 100}${important};`;
        }
        static lineHeight(classArray, important) {
          return `line-height: ${0.25 + parseInt(classArray[1]) * 0.125}rem${important};`;
        }
        static shadow(classArray, important, self) {
          return `box-shadow: ${__SWCSS_MAPPINGS.shadows[classArray[1]]}${important};`;
        }
        static width(classArray, important) {
          let arr = classArray[1].split("/");
          if (arr.length > 1) {
            return `width: ${parseInt(arr[0]) / parseInt(arr[1]) * 100}%${important};`;
          } else {
            return `width: ${parseInt(arr[0]) * 0.125}rem${important};`;
          }
        }
        static height(classArray, important) {
          return `height: ${parseInt(classArray[1]) * 0.125}rem${important};`;
        }
        static fontSize(classArray, important, self) {
          let num = parseInt(classArray[1]);
          return `font-size: ${0.25 + num * 0.125}rem${important};`;
        }
        static handleMarginAndPadding(classArray, important, negativeValue, self) {
          let val = __SWCSS_MAPPINGS.mpSwap[classArray[0]];
          if (val) {
            return `${val}: ${negativeValue}${parseInt(classArray[1]) * 0.125}rem${important};`;
          }
        }
        static borders(classArray, important, self) {
          let val = __SWCSS_MAPPINGS.borderSwap[classArray[0]];
          if (classArray[1] === "rad") {
            return `border-radius: ${parseInt(classArray[2] || 1) * 1}px${important};`;
          } else if (classArray[1] === "col") {
            return `border-color: ${__SWCSS_MAPPINGS.getColors(
              classArray[2],
              classArray[3]
            )}${important};`;
          } else if (val) {
            return `${val}-width: ${parseInt(classArray[1] || 1) * 1}px${important}; ${val}-style: solid${important};`;
          }
        }
        static flexGrow(classArray, important, self) {
          return `flex-grow: ${classArray[1]}${important};`;
        }
        static flexBasis(classArray, important, self) {
          return `flex-basis: ${classArray[1]}${important};`;
        }
        static oneWorders(word, self) {
          return __SWCSS_MAPPINGS.singleWord[word] || "";
        }
        static process(str) {
          let types = {
            default: "",
            hover: "",
            sm: "",
            md: "",
            lg: ""
          };
          str = str.replace(/\n/g, "");
          let items = str.split(" ");
          let matcher = {
            bg: "background",
            top: "top",
            fc: "fontColor",
            fw: "fontWeight",
            fs: "fontSize",
            lh: "lineHeight",
            shadow: "shadow",
            w: "width",
            basis: "flexBasis",
            grow: "flexGrow",
            b: "borders",
            h: "height"
          };
          let r = "";
          items.forEach((e) => {
            if (e.length === 0)
              return;
            let negativeValue = "";
            if (e[0] === "-") {
              negativeValue = "-";
              e = e.substring(1, e.length);
            }
            let x = e.split(":");
            let prefix = "default";
            if (x.length > 1) {
              prefix = x[0];
              e = x[1];
            }
            let important = "";
            if (e[0] === "_") {
              e = e.substring(1, e.length);
              important = " !important";
            }
            let tmp = null;
            if (tmp = this.oneWorders(e, this)) {
              return types[prefix] += tmp;
            }
            let classArray = e.split("-");
            let key1 = classArray[0];
            if (x = matcher[key1]) {
              let tmp2 = __SWCSS_CLASS_STRING_PROCESSOR[x](classArray, important, this) || "";
              if (tmp2) {
                return types[prefix] += tmp2;
              }
            }
            types[prefix] += this.handleMarginAndPadding(
              classArray,
              important,
              negativeValue,
              this
            ) || "";
          });
          return types;
        }
      };
      var SWCSS = class {
        static processSWClassString(swCode) {
          return __SWCSS_CLASS_STRING_PROCESSOR.process(swCode);
        }
        static processSWScript(code, content) {
          content = content || "";
          let parser = new __SWCSS_PARSER();
          parser.parseSWScript(code, (name, results) => {
            results = this.processSWClassString(results);
            if (results.default.length > 0) {
              content += `
            ${name} {
            ${results.default}
            }
        `;
            }
            if (results.hover.length > 0) {
              content += `
            ${name}:hover {
            ${results.hover}
            }
        `;
            }
            if (results.sm.length) {
              content += `
            @media (min-width: 628px) {
            ${name} {
                ${results.sm}
            }
            }
        `;
            }
            if (results.md.length) {
              content += `
            @media (min-width: 800px) {
            ${name} {
                ${results.md}
            }
            }
        `;
            }
            if (results.lg.length) {
              content += `
            @media (min-width: 1000px) {
            ${name} {
                ${results.lg}
            }
            }
        `;
            }
          });
          return content;
        }
      };
      __publicField(SWCSS, "classesAlreadyAdded", {});
      if (typeof window !== "undefined") {
        window.SWCSS = SWCSS();
      }
      module.exports = SWCSS;
    }
  });
  require_southwind();
})();
