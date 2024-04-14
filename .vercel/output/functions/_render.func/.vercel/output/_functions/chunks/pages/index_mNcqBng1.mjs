/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderSlot, j as renderComponent, k as renderHead, l as createTransitionScope } from '../astro_DaX2_CQd.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                          */
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import { IoMdFootball } from 'react-icons/io';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { FaHome, FaUsers } from 'react-icons/fa';
import { FaShield } from 'react-icons/fa6';
import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import '@astrojs/db/dist/runtime/virtual.js';
/* empty css                          */

const $$Astro$6 = createAstro();
const $$WidgetPanel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$WidgetPanel;
  const { title, extraClass, headerButton = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="bg-slate-900/90 p-4"> <header class="border-b border-slate-300 mb-2"> <h2 class="font-bold uppercase text-slate-400/70">${title}</h2> ${headerButton ? renderTemplate`<button></button>` : ""} </header> <div${addAttribute(extraClass, "class")}> ${renderSlot($$result, $$slots["default"])} </div> </article>`;
}, "C:/Proyectos/soccer-game/src/components/common/WidgetPanel.astro", void 0);

const $$Astro$5 = createAstro();
const $$WidgetTable = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$WidgetTable;
  return renderTemplate`${maybeRenderHead()}<table> <thead> ${renderSlot($$result, $$slots["header"])} </thead> <tbody> ${renderSlot($$result, $$slots["default"])} </tbody> </table>`;
}, "C:/Proyectos/soccer-game/src/components/common/WidgetTable.astro", void 0);

const $$Astro$4 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Proyectos/soccer-game/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$3 = createAstro();
const $$Hexagon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Hexagon;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="font-bold text-2xl w-12 relative" data-astro-cid-w6f3dkxk> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 485.688 485.688" xml:space="preserve" class="white" data-astro-cid-w6f3dkxk><defs data-v-2562b565="" data-astro-cid-w6f3dkxk><linearGradient data-v-2562b565="" id="gradient-1442" x1="0%" y1="0%" x2="0%" y2="100%" data-astro-cid-w6f3dkxk><stop data-v-2562b565="" offset="0%" data-astro-cid-w6f3dkxk></stop> <stop data-v-2562b565="" offset="100%" data-astro-cid-w6f3dkxk></stop></linearGradient></defs> <path data-v-2562b565="" fill="url(#gradient-1442)" d="M364.269,453.155H121.416L0,242.844L121.416,32.533h242.853l121.419,210.312L364.269,453.155z M131.905,434.997h221.878    l110.939-192.152L353.783,50.691H131.905L20.966,242.844L131.905,434.997z" data-astro-cid-w6f3dkxk></path></svg> <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center" data-astro-cid-w6f3dkxk> ${text} </div> </div> `;
}, "C:/Proyectos/soccer-game/src/components/icons/Hexagon.astro", void 0);

function Currency({ text, type }) {
  const icons = [
    /* @__PURE__ */ jsx(RiMoneyDollarCircleFill, { className: "text-green-300 text-2xl" }),
    /* @__PURE__ */ jsx(IoMdFootball, { className: "text-yellow-300 text-2xl" })
  ];
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs(
      "svg",
      {
        className: "absolute w-28 -left-8 -top-8",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 150 80",
        width: "150",
        height: "80",
        preserveAspectRatio: "xMidYMid meet",
        children: [
          /* @__PURE__ */ jsxs("defs", { children: [
            /* @__PURE__ */ jsx("clipPath", { id: "__lottie_element_145", children: /* @__PURE__ */ jsx(
              "rect",
              {
                width: "150",
                height: "80",
                x: "0",
                y: "0"
              }
            ) }),
            /* @__PURE__ */ jsx("image", { "xlink:href": "data:;base64,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" }),
            /* @__PURE__ */ jsx(
              "mask",
              {
                id: "__lottie_element_152",
                "mask-type": "luminance",
                children: /* @__PURE__ */ jsxs(
                  "g",
                  {
                    transform: "matrix(1.9016200304031372,0,0,3.6199300289154053,17.77172088623047,119.1876449584961)",
                    opacity: "1",
                    style: { display: "block" },
                    children: [
                      /* @__PURE__ */ jsx(
                        "g",
                        {
                          opacity: "1",
                          transform: "matrix(1,0,0,1,38.5,-21)",
                          children: /* @__PURE__ */ jsx(
                            "path",
                            {
                              fill: "url(#gradient_1)",
                              "fill-opacity": "1",
                              d: " M28,-11.625 C28,-11.625 28,11.625 28,11.625 C28,11.625 -28,11.625 -28,11.625 C-28,11.625 -28,-11.625 -28,-11.625 C-28,-11.625 28,-11.625 28,-11.625z"
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "g",
                        {
                          opacity: "1",
                          transform: "matrix(1,0,0,1,0,0)",
                          children: /* @__PURE__ */ jsx(
                            "path",
                            {
                              fill: "url(#gradient_2)",
                              "fill-opacity": "1",
                              d: " M12.14900016784668,-37.7599983215332 C12.14900016784668,-37.7599983215332 -41.15999984741211,-6.578000068664551 -41.15999984741211,-6.578000068664551 C-41.15999984741211,-6.578000068664551 5.839000225067139,-5.4730000495910645 5.839000225067139,-5.4730000495910645 C5.839000225067139,-5.4730000495910645 11.821000099182129,-13.312000274658203 11.821000099182129,-13.312000274658203 C11.821000099182129,-13.312000274658203 12.14900016784668,-37.7599983215332 12.14900016784668,-37.7599983215332z"
                            }
                          )
                        }
                      )
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxs(
              "linearGradient",
              {
                id: "gradient_1",
                spreadMethod: "pad",
                gradientUnits: "userSpaceOnUse",
                x1: "0",
                y1: "0",
                x2: "100",
                y2: "0",
                children: [
                  /* @__PURE__ */ jsx(
                    "stop",
                    {
                      offset: "0%",
                      "stop-color": "rgb(255,255,255)"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "stop",
                    {
                      offset: "6%",
                      "stop-color": "rgb(128,128,128)"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "stop",
                    {
                      offset: "16%",
                      "stop-color": "rgb(0,0,0)"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "stop",
                    {
                      offset: "58%",
                      "stop-color": "rgb(0,0,0)"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "stop",
                    {
                      offset: "100%",
                      "stop-color": "rgb(0,0,0)"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "linearGradient",
              {
                id: "gradient_2",
                spreadMethod: "pad",
                gradientUnits: "userSpaceOnUse",
                x1: "10",
                y1: "0",
                x2: "115",
                y2: "-94",
                children: [
                  /* @__PURE__ */ jsx(
                    "stop",
                    {
                      offset: "0%",
                      "stop-color": "rgb(0,0,0)"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "stop",
                    {
                      offset: "4%",
                      "stop-color": "rgb(128,128,128)"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "stop",
                    {
                      offset: "9%",
                      "stop-color": "rgb(255,255,255)"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "stop",
                    {
                      offset: "19%",
                      "stop-color": "rgb(255,255,255)"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "stop",
                    {
                      offset: "28%",
                      "stop-color": "rgb(255,255,255)"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "mask",
              {
                id: "__lottie_element_160",
                "mask-type": "luminance",
                children: /* @__PURE__ */ jsxs(
                  "g",
                  {
                    transform: "matrix(1.9016200304031372,0,0,3.6199300289154053,17.77172088623047,119.1876449584961)",
                    opacity: "1",
                    style: { display: "block" },
                    children: [
                      /* @__PURE__ */ jsx(
                        "g",
                        {
                          opacity: "1",
                          transform: "matrix(1.2282999753952026,0,0,1,45.79600143432617,-20.86199951171875)",
                          children: /* @__PURE__ */ jsx(
                            "path",
                            {
                              fill: "url(#__lottie_element_163)",
                              "fill-opacity": "1",
                              d: " M28,-11.625 C28,-11.625 28,11.625 28,11.625 C28,11.625 -28,11.625 -28,11.625 C-28,11.625 -28,-11.625 -28,-11.625 C-28,-11.625 28,-11.625 28,-11.625z"
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "g",
                        {
                          opacity: "1",
                          transform: "matrix(1,0,0,1,0,0)",
                          children: /* @__PURE__ */ jsx(
                            "path",
                            {
                              fill: "url(#__lottie_element_164)",
                              "fill-opacity": "1",
                              d: " M12.14900016784668,-37.7599983215332 C12.14900016784668,-37.7599983215332 -41.15999984741211,-6.578000068664551 -41.15999984741211,-6.578000068664551 C-41.15999984741211,-6.578000068664551 5.839000225067139,-5.4730000495910645 5.839000225067139,-5.4730000495910645 C5.839000225067139,-5.4730000495910645 11.821000099182129,-13.312000274658203 11.821000099182129,-13.312000274658203 C11.821000099182129,-13.312000274658203 12.14900016784668,-37.7599983215332 12.14900016784668,-37.7599983215332z"
                            }
                          )
                        }
                      )
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxs(
              "linearGradient",
              {
                id: "__lottie_element_163",
                spreadMethod: "pad",
                gradientUnits: "userSpaceOnUse",
                x1: "0.43799999356269836",
                y1: "0",
                x2: "100",
                y2: "0",
                children: [
                  /* @__PURE__ */ jsx(
                    "stop",
                    {
                      offset: "0%",
                      "stop-color": "rgb(255,255,255)"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "stop",
                    {
                      offset: "6%",
                      "stop-color": "rgb(128,128,128)"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "stop",
                    {
                      offset: "16%",
                      "stop-color": "rgb(0,0,0)"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "stop",
                    {
                      offset: "58%",
                      "stop-color": "rgb(0,0,0)"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "stop",
                    {
                      offset: "100%",
                      "stop-color": "rgb(0,0,0)"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "linearGradient",
              {
                id: "__lottie_element_164",
                spreadMethod: "pad",
                gradientUnits: "userSpaceOnUse",
                x1: "10",
                y1: "0",
                x2: "115",
                y2: "-94",
                children: [
                  /* @__PURE__ */ jsx(
                    "stop",
                    {
                      offset: "0%",
                      "stop-color": "rgb(0,0,0)"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "stop",
                    {
                      offset: "4%",
                      "stop-color": "rgb(128,128,128)"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "stop",
                    {
                      offset: "9%",
                      "stop-color": "rgb(255,255,255)"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "stop",
                    {
                      offset: "19%",
                      "stop-color": "rgb(255,255,255)"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "stop",
                    {
                      offset: "28%",
                      "stop-color": "rgb(255,255,255)"
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("g", { "clip-path": "url(#__lottie_element_145)", children: [
            /* @__PURE__ */ jsx(
              "g",
              {
                className: "png",
                style: { display: "none" },
                transform: "matrix(1,0,0,1,0,0)",
                opacity: "0.001041666666668135",
                children: /* @__PURE__ */ jsx(
                  "image",
                  {
                    width: "150px",
                    height: "80px",
                    preserveAspectRatio: "xMidYMid slice",
                    "xlink:href": "data:;base64,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"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx(
              "g",
              {
                mask: "url(#__lottie_element_152)",
                style: { display: "block" },
                children: /* @__PURE__ */ jsx(
                  "g",
                  {
                    transform: "matrix(1,0,0,1,75,40)",
                    opacity: "1",
                    children: /* @__PURE__ */ jsx(
                      "g",
                      {
                        opacity: "1",
                        transform: "matrix(1,0,0,1,0,0)",
                        children: /* @__PURE__ */ jsx(
                          "path",
                          {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "fill-opacity": "0",
                            className: type === 0 ? "stroke-green-300" : "stroke-yellow-300",
                            "stroke-opacity": "1",
                            "stroke-width": "2",
                            d: " M-63.25,23.25 C-63.25,23.25 -38,-22.5 -38,-22.5 C-38,-22.5 53.5,-23 53.5,-23"
                          }
                        )
                      }
                    )
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx(
              "g",
              {
                mask: "url(#__lottie_element_160)",
                style: { display: "block" },
                children: /* @__PURE__ */ jsx(
                  "g",
                  {
                    transform: "matrix(1,0,0,1,75,40)",
                    opacity: "1",
                    children: /* @__PURE__ */ jsx(
                      "g",
                      {
                        opacity: "1",
                        transform: "matrix(1,0,0,1,0,0)",
                        children: /* @__PURE__ */ jsx(
                          "path",
                          {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "fill-opacity": "0",
                            stroke: "rgb(207,235,255)",
                            "stroke-opacity": "1",
                            "stroke-width": "2",
                            d: "M0 0"
                          }
                        )
                      }
                    )
                  }
                )
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center", children: [
      icons[type],
      /* @__PURE__ */ jsx("p", { className: "font-semibold text-lg", children: text })
    ] })
  ] });
}

const db = await createRemoteDatabaseClient(process.env.ASTRO_STUDIO_APP_TOKEN, {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.ASTRO_STUDIO_REMOTE_DB_URL ?? "https://db.services.astro.build");
const User = asDrizzleTable("User", { "columns": { "id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "User", "primaryKey": true } }, "name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "name", "collection": "User", "primaryKey": false, "optional": false } }, "email": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "email", "collection": "User", "primaryKey": false, "optional": false } }, "currency": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "currency", "collection": "User", "primaryKey": false, "optional": false } }, "hardCurrency": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "hardCurrency", "collection": "User", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);
const Team = asDrizzleTable("Team", { "columns": { "id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Team", "primaryKey": true } }, "name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "name", "collection": "Team", "primaryKey": false, "optional": false } }, "shield": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "shield", "collection": "Team", "primaryKey": false, "optional": false } }, "points": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "points", "collection": "Team", "primaryKey": false, "optional": false } }, "wins": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "wins", "collection": "Team", "primaryKey": false, "optional": false } }, "plays": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "plays", "collection": "Team", "primaryKey": false, "optional": false } }, "user_id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "user_id", "collection": "Team", "primaryKey": false, "optional": true, "references": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "User", "primaryKey": true } } } } }, "deprecated": false, "indexes": {} }, false);
const Player = asDrizzleTable("Player", { "columns": { "id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Player", "primaryKey": true } }, "name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "name", "collection": "Player", "primaryKey": false, "optional": false } }, "position": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "position", "collection": "Player", "primaryKey": false, "optional": false } }, "dorsal": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "dorsal", "collection": "Player", "primaryKey": false, "optional": false } }, "energy": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "energy", "collection": "Player", "primaryKey": false, "optional": false } }, "morale": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "morale", "collection": "Player", "primaryKey": false, "optional": false } }, "form": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "form", "collection": "Player", "primaryKey": false, "optional": false } }, "isGoalkeeper": { "type": "boolean", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "isGoalkeeper", "collection": "Player" } }, "team_id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "team_id", "collection": "Player", "primaryKey": false, "optional": true, "references": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Team", "primaryKey": true } } } } }, "deprecated": false, "indexes": {} }, false);
asDrizzleTable("PlayerAttributes", { "columns": { "speed": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "speed", "collection": "PlayerAttributes", "primaryKey": false, "optional": false } }, "physical": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "physical", "collection": "PlayerAttributes", "primaryKey": false, "optional": false } }, "shooting": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "shooting", "collection": "PlayerAttributes", "primaryKey": false, "optional": false } }, "passing": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "passing", "collection": "PlayerAttributes", "primaryKey": false, "optional": false } }, "dribbling": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "dribbling", "collection": "PlayerAttributes", "primaryKey": false, "optional": false } }, "defense": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "defense", "collection": "PlayerAttributes", "primaryKey": false, "optional": false } }, "reflexes": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "reflexes", "collection": "PlayerAttributes", "primaryKey": false, "optional": false } }, "diving": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "diving", "collection": "PlayerAttributes", "primaryKey": false, "optional": false } }, "handling": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "handling", "collection": "PlayerAttributes", "primaryKey": false, "optional": false } }, "positioning": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "positioning", "collection": "PlayerAttributes", "primaryKey": false, "optional": false } }, "kicking": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "kicking", "collection": "PlayerAttributes", "primaryKey": false, "optional": false } }, "aerialReach": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "aerialReach", "collection": "PlayerAttributes", "primaryKey": false, "optional": false } }, "player_id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "player_id", "collection": "PlayerAttributes", "primaryKey": true, "references": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Player", "primaryKey": true } } } } }, "deprecated": false, "indexes": {} }, false);

const users = await db.select().from(User);
await db.select().from(Team);
await db.select().from(Player);

const Teams = [
  {
    id: '1',
    name: '1K FC',
    shield: '398917228.png',
    points: 0,
    wins: 0,
    plays: 0,
    players: [
      {
        playerId: '1',
        isStarter: true,
      },
      {
        playerId: '2',
        isStarter: true,
      },
    ]
  },
  {
    id: '2',
    name: 'Aniquiladores FC',
    shield: '726173891.png',
    points: 0,
    wins: 0,
    plays: 0,
    players: []
  },
  {
    id: '3',
    name: 'El Barrio',
    shield: '916751113.png',
    points: 0,
    wins: 0,
    plays: 0,
    players: []
  },
  {
    id: '4',
    name: 'Jijantes FC',
    shield: '784325114.png',
    points: 0,
    wins: 0,
    plays: 0,
    players: []
  },
  {
    id: '5',
    name: 'Kunisports',
    shield: '469299352.png',
    points: 0,
    wins: 0,
    plays: 0,
    players: []
  },
  {
    id: '6',
    name: 'Los Troncos FC',
    shield: '183436923.png',
    points: 0,
    wins: 0,
    plays: 0,
    players: []
  },
  {
    id: '7',
    name: 'PIO FC',
    shield: '540564111.png',
    points: 0,
    wins: 0,
    plays: 0,
    players: []
  },
  {
    id: '8',
    name: 'Porcinos FC',
    shield: '560492363.png',
    points: 0,
    wins: 0,
    plays: 0,
    players: []
  },
  {
    id: '9',
    name: 'Rayo de Barcelona',
    shield: '799394206.png',
    points: 0,
    wins: 0,
    plays: 0,
    players: []
  },
  {
    id: '10',
    name: 'Saiyans FC',
    shield: '461216643.png',
    points: 0,
    wins: 0,
    plays: 0,
    players: []
  },
  {
    id: '11',
    name: 'Ultimate Móstoles',
    shield: '341755741.png',
    points: 0,
    wins: 0,
    plays: 0,
    players: []
  },
  {
    id: '12',
    name: 'xBuyer Team',
    shield: '44439489.png',
    points: 0,
    wins: 0,
    plays: 0,
    players: []
  },
];

const Players = [
  {
    id: '1',
    name: 'Lluis Alsina',
    teamId: '1',
    dorsal: 25,
    position: 2,
    energy: 100,
    morale: 90,
    form: 80,
    isGoalkeeper: false, // Indica si el jugador es portero o no
    attributes: {
      speed: 75,
      physical: 73,
      shooting: 80,
      passing: 77,
      dribbling: 78,
      defense: 63,
    },
    attributesGoalkeeper: {
      reflexes: 0,
      diving: 0,
      handling: 0,
      positioning: 0,
      kicking: 0,
      aerialReach: 0,
    },
    globalStats: {
      gamesPlayed: 9,
      goals: 9,
      assists: 6,
      yellowCards: 2,
      redCards: 0,
    },
    teamStats: {
      gamesPlayed: 9,
      goals: 9,
      assists: 6,
      yellowCards: 1,
      redCards: 0,
    }
  },
  {
    id: '2',
    name: 'Joan Canet',
    teamId: '1',
    dorsal: 7,
    position: 0,
    energy: 100,
    morale: 90,
    form: 80,
    isGoalkeeper: true, // Indica si el jugador es portero o no
    attributes: {
      speed: 0,
      physical: 0,
      shooting: 0,
      passing: 0,
      dribbling: 0,
      defense: 0,
    },
    attributesGoalkeeper: {
      reflexes: 70,
      diving: 72,
      handling: 76,
      positioning: 80,
      kicking: 72,
      aerialReach: 68,
    },
    globalStats: {
      gamesPlayed: 9,
      goals: 9,
      assists: 6,
      yellowCards: 2,
      redCards: 0,
    },
    teamStats: {
      gamesPlayed: 9,
      goals: 9,
      assists: 6,
      yellowCards: 1,
      redCards: 0,
    }
  },
  {
    id: '3',
    name: 'Marc Granero',
    teamId: '1',
    dorsal: 23,
    position: 1,
    energy: 100,
    morale: 90,
    form: 80,
    isGoalkeeper: false, // Indica si el jugador es portero o no
    attributes: {
      speed: 82,
      physical: 78,
      shooting: 86,
      passing: 76,
      dribbling: 79,
      defense: 80,
    },
    attributesGoalkeeper: {
      reflexes: 0,
      diving: 0,
      handling: 0,
      positioning: 0,
      kicking: 0,
      aerialReach: 0,
    },
    globalStats: {
      gamesPlayed: 9,
      goals: 9,
      assists: 6,
      yellowCards: 2,
      redCards: 0,
    },
    teamStats: {
      gamesPlayed: 9,
      goals: 9,
      assists: 6,
      yellowCards: 1,
      redCards: 0,
    }
  },
  {
    id: '4',
    name: 'Marcos Guerrero',
    teamId: '1',
    dorsal: 22,
    position: 1,
    energy: 100,
    morale: 90,
    form: 80,
    isGoalkeeper: false, // Indica si el jugador es portero o no
    attributes: {
      speed: 68,
      physical: 65,
      shooting: 67,
      passing: 62,
      dribbling: 64,
      defense: 67,
    },
    attributesGoalkeeper: {
      reflexes: 0,
      diving: 0,
      handling: 0,
      positioning: 0,
      kicking: 0,
      aerialReach: 0,
    },
    globalStats: {
      gamesPlayed: 9,
      goals: 9,
      assists: 6,
      yellowCards: 2,
      redCards: 0,
    },
    teamStats: {
      gamesPlayed: 9,
      goals: 9,
      assists: 6,
      yellowCards: 1,
      redCards: 0,
    }
  },
  {
    id: '5',
    name: 'Raúl Ledo',
    teamId: '1',
    dorsal: 33,
    position: 1,
    energy: 100,
    morale: 90,
    form: 80,
    isGoalkeeper: false, // Indica si el jugador es portero o no
    attributes: {
      speed: 67,
      physical: 64,
      shooting: 68,
      passing: 64,
      dribbling: 64,
      defense: 70,
    },
    attributesGoalkeeper: {
      reflexes: 0,
      diving: 0,
      handling: 0,
      positioning: 0,
      kicking: 0,
      aerialReach: 0,
    },
    globalStats: {
      gamesPlayed: 9,
      goals: 9,
      assists: 6,
      yellowCards: 2,
      redCards: 0,
    },
    teamStats: {
      gamesPlayed: 9,
      goals: 9,
      assists: 6,
      yellowCards: 1,
      redCards: 0,
    }
  },
  {
    id: '6',
    name: 'Marc Pluvins',
    teamId: '1',
    dorsal: 91,
    position: 2,
    energy: 100,
    morale: 90,
    form: 80,
    isGoalkeeper: false, // Indica si el jugador es portero o no
    attributes: {
      speed: 75,
      physical: 73,
      shooting: 78,
      passing: 70,
      dribbling: 75,
      defense: 78,
    },
    attributesGoalkeeper: {
      reflexes: 0,
      diving: 0,
      handling: 0,
      positioning: 0,
      kicking: 0,
      aerialReach: 0,
    },
    globalStats: {
      gamesPlayed: 9,
      goals: 9,
      assists: 6,
      yellowCards: 2,
      redCards: 0,
    },
    teamStats: {
      gamesPlayed: 9,
      goals: 9,
      assists: 6,
      yellowCards: 1,
      redCards: 0,
    }
  },
  {
    id: '7',
    name: 'Albert Dalmau',
    teamId: '1',
    dorsal: 30,
    position: 1,
    energy: 100,
    morale: 90,
    form: 80,
    isGoalkeeper: false, // Indica si el jugador es portero o no
    attributes: {
      speed: 72,
      physical: 74,
      shooting: 74,
      passing: 68,
      dribbling: 70,
      defense: 76,
    },
    attributesGoalkeeper: {
      reflexes: 0,
      diving: 0,
      handling: 0,
      positioning: 0,
      kicking: 0,
      aerialReach: 0,
    },
    globalStats: {
      gamesPlayed: 9,
      goals: 9,
      assists: 6,
      yellowCards: 2,
      redCards: 0,
    },
    teamStats: {
      gamesPlayed: 9,
      goals: 9,
      assists: 6,
      yellowCards: 1,
      redCards: 0,
    }
  },
  {
    id: '8',
    name: 'John de la Cruz',
    teamId: '1',
    dorsal: 8,
    position: 3,
    energy: 100,
    morale: 90,
    form: 80,
    isGoalkeeper: false, // Indica si el jugador es portero o no
    attributes: {
      speed: 75,
      physical: 70,
      shooting: 71,
      passing: 68,
      dribbling: 67,
      defense: 77,
    },
    attributesGoalkeeper: {
      reflexes: 0,
      diving: 0,
      handling: 0,
      positioning: 0,
      kicking: 0,
      aerialReach: 0,
    },
    globalStats: {
      gamesPlayed: 9,
      goals: 9,
      assists: 6,
      yellowCards: 2,
      redCards: 0,
    },
    teamStats: {
      gamesPlayed: 9,
      goals: 9,
      assists: 6,
      yellowCards: 1,
      redCards: 0,
    }
  },
  {
    id: '9',
    name: 'Albert Ruiz',
    teamId: '1',
    dorsal: 9,
    position: 3,
    energy: 100,
    morale: 90,
    form: 80,
    isGoalkeeper: false, // Indica si el jugador es portero o no
    attributes: {
      speed: 75,
      physical: 72,
      shooting: 73,
      passing: 73,
      dribbling: 77,
      defense: 78,
    },
    attributesGoalkeeper: {
      reflexes: 0,
      diving: 0,
      handling: 0,
      positioning: 0,
      kicking: 0,
      aerialReach: 0,
    },
    globalStats: {
      gamesPlayed: 9,
      goals: 9,
      assists: 6,
      yellowCards: 2,
      redCards: 0,
    },
    teamStats: {
      gamesPlayed: 9,
      goals: 9,
      assists: 6,
      yellowCards: 1,
      redCards: 0,
    }
  },
  {
    id: '10',
    name: 'Alberto Arnalot',
    teamId: '1',
    dorsal: 1,
    position: 0,
    energy: 100,
    morale: 90,
    form: 80,
    isGoalkeeper: false, // Indica si el jugador es portero o no
    attributes: {
      speed: 0,
      physical: 0,
      shooting: 0,
      passing: 0,
      dribbling: 0,
      defense: 0,
    },
    attributesGoalkeeper: {
      reflexes: 82,
      diving: 87,
      handling: 81,
      positioning: 72,
      kicking: 82,
      aerialReach: 80,
    },
    globalStats: {
      gamesPlayed: 9,
      goals: 9,
      assists: 6,
      yellowCards: 2,
      redCards: 0,
    },
    teamStats: {
      gamesPlayed: 9,
      goals: 9,
      assists: 6,
      yellowCards: 1,
      redCards: 0,
    }
  }
];

// Función para buscar un usuario por su ID
function findUserById(userId) {
  return users.find(user => user.id === userId);
}

// Función para formatear un numero en una moneda
function formatNumber(amount, isCurrency = false) {
  if (isCurrency) {
    return amount.toLocaleString('es-ES', {
      style: 'currency',
      currency: 'EUR',
    });
  } else {
    return amount.toLocaleString('es-ES');
  }
}

// Función para calcular media de un jugador
function calculatePlayerAverage(player, includeDecimals = false, useGoalkeeperAttributes = false) {
  let attributeCount = 0;
  let totalAttributes = 0;

  // Función para sumar los atributos no nulos
  const sumNonZeroAttributes = (attributes) => {
    for (const key in attributes) {
      if (Object.hasOwnProperty.call(attributes, key) && attributes[key] !== 0) {
        totalAttributes += attributes[key];
        attributeCount++;
      }
    }
  };

  // Suma los atributos relevantes del jugador
  sumNonZeroAttributes(player.attributes);

  // Si el jugador es un portero y se solicita, también suma los atributos específicos del portero
  if (player.isGoalkeeper && useGoalkeeperAttributes) {
    sumNonZeroAttributes(player.attributesGoalkeeper);
  }

  // Calcula la media de los atributos del jugador
  let average = totalAttributes / attributeCount;

  // Redondea la media si includeDecimals es false
  if (!includeDecimals) {
    average = Math.round(average);
  }

  return average;
}

// Función para simular los partidos
function simulateMatches(teams) {
  const totalTeams = teams.length;
  // Iterar sobre cada equipo
  for (let i = 0; i < totalTeams; i++) {
    // Iterar sobre los equipos restantes para jugar contra ellos
    for (let j = i + 1; j < totalTeams; j++) {
      // Simular los 2 partidos entre los equipos
      for (let k = 0; k < 2; k++) {
        // Simular el resultado del partido (ganado, empatado, perdido)
        const result = Math.floor(Math.random() * 3); // 0: Empate, 1: Ganado, 2: Perdido

        // Incrementar el número de partidos jugados para ambos equipos
        teams[i].plays++;
        teams[j].plays++;

        // Actualizar los puntos y las victorias según el resultado
        if (result === 0) {
          // Empate
          teams[i].points += 1;
          teams[j].points += 1;
        } else if (result === 1) {
          // Equipo i gana
          teams[i].points += 3;
          teams[i].wins++;
        } else {
          // Equipo j gana
          teams[j].points += 3;
          teams[j].wins++;
        }
      }
    }
  }
}

simulateMatches(Teams);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body data-astro-cid-sckkx6r4> <div class="sm-container h-dvh overflow-x-hidden" data-astro-cid-sckkx6r4> <header class="h-16 flex justify-between p-2" data-astro-cid-sckkx6r4> <div class="flex gap-2" data-astro-cid-sckkx6r4> <img src="/img/shirts/default-player.png" alt="Camiseta" data-astro-cid-sckkx6r4> <div data-astro-cid-sckkx6r4> <p class=" font-semibold" data-astro-cid-sckkx6r4>Nombre Equipo</p> <div class="w-full" data-astro-cid-sckkx6r4> <p class="text-right text-sm font-medium" data-astro-cid-sckkx6r4>50%</p> <div class="w-full h-1 bg-slate-950" data-astro-cid-sckkx6r4> <div class="w-1/2 h-full bg-blue-300" data-astro-cid-sckkx6r4></div> </div> </div> </div> ${renderComponent($$result, "Hexagon", $$Hexagon, { "text": "18", "data-astro-cid-sckkx6r4": true })} </div> <div class="flex gap-8 items-center" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Currency", Currency, { "text": formatNumber(findUserById("1").currency, true), "type": 0, "data-astro-cid-sckkx6r4": true, "data-astro-transition-persist": createTransitionScope($$result, "kjlyciom") })} ${renderComponent($$result, "Currency", Currency, { "text": formatNumber(findUserById("1").hardCurrency), "type": 1, "data-astro-cid-sckkx6r4": true, "data-astro-transition-persist": createTransitionScope($$result, "6xbvbalr") })} </div> </header> <aside class="bg-slate-950/90 py-4" data-astro-cid-sckkx6r4> <nav class="flex flex-col gap-4 items-center text-2xl" data-astro-cid-sckkx6r4> <a href="/" class="" data-astro-cid-sckkx6r4>${renderComponent($$result, "FaHome", FaHome, { "data-astro-cid-sckkx6r4": true })}</a> <a href="team" class="" data-astro-cid-sckkx6r4>${renderComponent($$result, "FaShield", FaShield, { "data-astro-cid-sckkx6r4": true })}</a> <a href="lineup" class="" data-astro-cid-sckkx6r4>${renderComponent($$result, "FaUsers", FaUsers, { "data-astro-cid-sckkx6r4": true })}</a> </nav> </aside> <main class="grid place-content-center" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> <footer class="bg-red-500 h-8 flex justify-between items-center px-4 text-sm" data-astro-cid-sckkx6r4> <p data-astro-cid-sckkx6r4>Soccer Manager EX</p> <data value="" data-astro-cid-sckkx6r4>17:25:47 01/03/2024</data> </footer> </div>  </body></html>`;
}, "C:/Proyectos/soccer-game/src/layouts/Layout.astro", "self");

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "", "description": "", "data-astro-cid-4kgod5xi": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container p-4 w-[91rem] grid grid-cols-2 gap-4" data-astro-cid-4kgod5xi> ${renderComponent($$result2, "WidgetPanel", $$WidgetPanel, { "title": "Squad", "data-astro-cid-4kgod5xi": true }, { "default": ($$result3) => renderTemplate` <div class="field" data-astro-cid-4kgod5xi></div> ` })} ${renderComponent($$result2, "WidgetPanel", $$WidgetPanel, { "title": "Lineup", "data-astro-cid-4kgod5xi": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "WidgetTable", $$WidgetTable, { "data-astro-cid-4kgod5xi": true }, { "default": ($$result4) => renderTemplate`  ${Players.map((player, index) => renderTemplate`<tr data-astro-cid-4kgod5xi> <td class="font-bold" data-astro-cid-4kgod5xi>${player.dorsal}</td> <td class="content-left" data-astro-cid-4kgod5xi> <img src="" alt="" data-astro-cid-4kgod5xi> <p data-astro-cid-4kgod5xi>${player.name}</p> </td> <td class="font-bold" data-astro-cid-4kgod5xi>${player.form}</td> <td class="font-bold" data-astro-cid-4kgod5xi>${player.morale}</td> <td class="font-bold" data-astro-cid-4kgod5xi>${player.energy}</td> <td class="font-bold" data-astro-cid-4kgod5xi>${calculatePlayerAverage(player, false, player.isGoalkeeper ? true : false)}</td> </tr>`)}`, "header": ($$result4) => renderTemplate`<tr data-astro-cid-4kgod5xi> <th data-astro-cid-4kgod5xi>Nº</th> <th class="content-left" data-astro-cid-4kgod5xi>Name</th> <th data-astro-cid-4kgod5xi>Forma</th> <th data-astro-cid-4kgod5xi>Moral</th> <th data-astro-cid-4kgod5xi>Energy</th> <th data-astro-cid-4kgod5xi>Average</th> </tr>` })} ` })} </main> ` })} `;
}, "C:/Proyectos/soccer-game/src/pages/lineup/index.astro", void 0);

const $$file$1 = "C:/Proyectos/soccer-game/src/pages/lineup/index.astro";
const $$url$1 = "/lineup";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  Teams.sort((a, b) => b.points - a.points);
  const users = await db.select().from(User);
  await db.select().from(Team);
  await db.select().from(Player);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "", "description": "", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container p-4 w-[91rem] grid gap-4 grid-cols-[30%1fr]" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "WidgetPanel", $$WidgetPanel, { "title": "Clasificaci\xF3n", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "WidgetTable", $$WidgetTable, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`  ${Teams.map(({ name, points, wins, plays }, index) => renderTemplate`<div data-astro-cid-j7pv25f6> <tr data-astro-cid-j7pv25f6> <td${addAttribute(`font-bold ${index === 0 || index === 1 ? "green" : ""} ${index === 9 || index === 10 || index === 11 ? "red" : ""}`, "class")} data-astro-cid-j7pv25f6>${index + 1}</td> <td class="content-left" data-astro-cid-j7pv25f6> <img src="" alt="" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>${name}</p> </td> <td class="font-bold" data-astro-cid-j7pv25f6>${points}</td> <td class="font-bold" data-astro-cid-j7pv25f6>${plays}</td> <td class="font-bold" data-astro-cid-j7pv25f6>${wins}</td> </tr> </div>`)}`, "header": ($$result4) => renderTemplate`<tr data-astro-cid-j7pv25f6> <th data-astro-cid-j7pv25f6>Pos</th> <th class="content-left" data-astro-cid-j7pv25f6>Equipo</th> <th data-astro-cid-j7pv25f6>Pts</th> <th data-astro-cid-j7pv25f6>Pj</th> <th data-astro-cid-j7pv25f6>Pg</th> </tr>` })} ` })} <div class="grid grid-cols-2 grid-rows-2 gap-4" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "WidgetPanel", $$WidgetPanel, { "title": "Partidos", "extraClass": "flex flex-col justify-around h-[calc(100%-2rem)]", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <div class="grid grid-cols-3 p-2 bg-slate-500/10" data-astro-cid-j7pv25f6> <div class="flex flex-col items-center justify-center" data-astro-cid-j7pv25f6> <img class="w-12" src="/img/teams/183436923.png" alt="" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>Nombre Equipo</p> </div> <div class="flex flex-col items-center justify-center gap-2" data-astro-cid-j7pv25f6> <div class="flex justify-center items-center gap-2" data-astro-cid-j7pv25f6> <span class="font-semibold text-2xl" data-astro-cid-j7pv25f6>3</span> <span data-astro-cid-j7pv25f6>-</span> <span class="font-semibold text-2xl" data-astro-cid-j7pv25f6>0</span> </div> <button class="text-xs bg-blue-700 font-semibold px-2 py-1 rounded-sm" data-astro-cid-j7pv25f6>
Ver partido
</button> </div> <div class="flex flex-col items-center justify-center" data-astro-cid-j7pv25f6> <img class="w-12" src="/img/teams/726173891.png" alt="" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>Nombre Equipo</p> </div> </div> <div class="grid grid-cols-3 p-2 bg-slate-500/10" data-astro-cid-j7pv25f6> <div class="flex flex-col items-center justify-center" data-astro-cid-j7pv25f6> <img class="w-12" src="/img/teams/183436923.png" alt="" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>Nombre Equipo</p> </div> <div class="flex flex-col items-center justify-center gap-2" data-astro-cid-j7pv25f6> <div class="flex flex-col justify-center items-center" data-astro-cid-j7pv25f6> <span class="font-semibold" data-astro-cid-j7pv25f6>17:25:47</span> <span class="font-semibold" data-astro-cid-j7pv25f6>01/03/2024</span> </div> </div> <div class="flex flex-col items-center justify-center" data-astro-cid-j7pv25f6> <img class="w-12" src="/img/teams/726173891.png" alt="" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>Nombre Equipo</p> </div> </div> ` })} ${renderComponent($$result2, "WidgetPanel", $$WidgetPanel, { "title": "Econom\xEDa", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`  ` })} ${renderComponent($$result2, "WidgetPanel", $$WidgetPanel, { "title": "Correo", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`${users.map((user) => renderTemplate`<div data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>${user.name}</p> </div>`)}` })} ${renderComponent($$result2, "WidgetPanel", $$WidgetPanel, { "title": "Temporada", "data-astro-cid-j7pv25f6": true })} </div> </main> ` })} `;
}, "C:/Proyectos/soccer-game/src/pages/index.astro", void 0);

const $$file = "C:/Proyectos/soccer-game/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
