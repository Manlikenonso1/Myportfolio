import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react';
import { FadeIn } from '../components/ui/FadeIn';
import SEO from '../components/ui/SEO';
import { allProjects } from '../data/projects';
import { useTokens } from '../tokens/TokenProvider';

export default function ProjectDetails() {
  const { id } = useParams();
  
  const projectsData = {
    'appsatile': {
      id: 'appsatile',
      glance: { problem: "Designers were building screens with no shared components, so every handoff meant back-and-forth.", did: "Design tokens, a component library named to match the React props, and WCAG AA checks on every colour pair.", outcome: "One shared system used by every designer on the team. The founder said it made the whole app easier to use." },
      title: "Appsatile",
      type: "Design System",
      category: "B2B SaaS · 70+ components",
      role: "Product Designer. Co-built the system with two other designers; owned the icon library, the token export to code and component naming.",
      heroImg: "/appsatile-thumbnail.webp",
      liveLink: null,
      sliceCount: 33,
      overview: "Appsatile is a B2B workspace product. Designers were working on different parts of it at the same time, with nothing shared between them. I co-built the design system with two other designers. My parts were the icon library, exporting tokens in a format developers could use, and naming components.",
      problem: "Each part of the product had its own buttons, modals and input fields. Corner radii changed from page to page, handoffs took hours of back-and-forth in Slack, and one colour change meant editing dozens of unconnected files.",
      deliverables: ["Component Library", "Design Tokens Architecture", "Interactive Figma Specs", "WCAG 2.1 AA Compliance", "Documentation Guide"],
      metrics: [
        { value: "50%", label: "Faster handoffs to engineers" },
        { value: "AA", label: "Every colour pair in the system passes WCAG AA" },
        { value: "1", label: "Shared component library, used by every designer on the team" }
      ],
      metricsNote: "Handoff speed compares how long it took to hand a design to developers before the shared system with how long it took after. It got faster because components and tokens are named in the developers' own terms, so there was far less to explain.",
      decisions: [
        {
          pillar: "01. Tokens named the way developers write CSS",
          rationale: "We replaced loose hex values with layered tokens for colour, spacing and type: primitives, then semantic tokens, then components. Each token maps to one CSS variable, so a developer never has to guess whether a gap is 16px or 20px."
        },
        {
          pillar: "02. Component names that match the React props",
          rationale: "I sat with the front-end leads to see how they structure components in code. Then I named every Figma variant, boolean and state (hover, active, disabled) to mirror their React props, so a design file reads like the component it becomes."
        },
        {
          pillar: "03. Accessibility decided in the system, not on each screen",
          rationale: "I checked every text and background pair against WCAG AA before it went into the system. Focus rings and touch target sizes are tokens too, so anyone using the components gets them without thinking about it."
        }
      ],
      process: [
        {
          title: "Research before components",
          text: "Before drawing a component I collected established design systems and SaaS UI kits, then mapped what Appsatile needed against the Material 3 structure. That gave a six-part plan: foundations, base components, selection modules, app shell, data views and theming.",
          before: "/appsatile-process-1-before.webp", beforeLabel: "Moodboard · reference systems",
          after: "/appsatile-process-1-after.webp", afterLabel: "Structure plan · Material 3 audit"
        },
        {
          title: "One naming rule for every token",
          text: "Every token follows category / role / state and never a colour name. A primitive like Primary/brand/600 is aliased to a semantic token like action/primary/default, and the button uses that. Change the brand colour once and every component follows.",
          before: "/appsatile-process-2-before.webp", beforeLabel: "Token naming convention",
          after: "/appsatile-process-2-after.webp", afterLabel: "System overview"
        },
        {
          title: "Same screen, both themes",
          text: "Components only use semantic tokens, so dark mode is a token swap and not a redesign. I tested it on a real, dense screen: the Research Planning task view with its sidebar, list, tags and detail panel.",
          before: "/appsatile-process-3-before.webp", beforeLabel: "Light mode",
          after: "/appsatile-process-3-after.webp", afterLabel: "Dark mode · same components"
        }
      ],
      gallery: [
        { title: "The system at a glance", from: 1, to: 4, caption: "The foundations file every designer works from: tokens, components, icons and size modes in one place." },
        { title: "Colour", from: 5, to: 10, caption: "Primitives hold the raw values. Semantic tokens name the job, and components only ever point at the semantic layer, so no screen uses a raw colour." },
        { title: "Typography", from: 11, to: 12, caption: "One typeface and a small set of text styles, each with a token, so headings and body text match across the whole product." },
        { title: "Icons", from: 13, to: 17, caption: "The part I built and maintained: 868 icons. Stroke weight adapts to icon size, so an icon keeps the same visual weight as the text beside it at any size." },
        { title: "Spacing and size modes", from: 18, to: 23, caption: "A 4px spacing scale, and size modes where one switch changes a component's height, padding and text together." },
        { title: "Radius, border and shadow", from: 24, to: 27, caption: "The quieter tokens that stop corner radii and elevation drifting from page to page." },
        { title: "Focus and accessibility", from: 28, to: 29, caption: "Focus rings are specified once, with minimum thickness and contrast, and checked in light and dark." },
        { title: "Grid and breakpoints", from: 30, to: 33, caption: "One grid behaviour for desktop, laptop, tablet and mobile." }
      ],
      reviews: []
    },
    'appsatile-workspace': {
      id: 'appsatile-workspace',
      glance: { problem: "Three years of work sat in 18 Figma files when the product was paused before launch: status colours failing contrast, ten names for a place, and a core path split across six files.", did: "Icons, tokens for developers, Cabinet and the advanced filter at the company. Then an independent rebuild: audit, research, structure, a design system, screens and a full prototype.", outcome: "Rebuild, not shipped. One clear structure, every status colour passing WCAG AA, and a prototype that runs from sign-up to an installed app." },
      title: "Appsatile Workspace",
      type: "Product Design",
      category: "Business Workspace · Rebuild",
      role: "Product Designer",
      heroImg: "/appsatile-workspace-thumbnail.webp",
      prototypeLink: "https://www.figma.com/proto/rk1I3Fhrv0V8EljUAWdzer/Appsatile-Workspace--rebuild-?page-id=2%3A9&node-id=179-2251&starting-point-node-id=179%3A2251&scaling=scale-down&content-scaling=fixed",
      liveLink: null,
      sliceCount: 11,
      overview: "Appsatile is one workspace where a business runs its day-to-day work: tasks, files, email, leave and calendars in one place, organised around Hubs like London Office. I joined when it was called Alsoit, stayed through the rebrand as the only designer left, and helped shape Appsatile with a new team. When the product was paused before launch, I rebuilt it in a new file with my own content to finish what we started.",
      problem: "Going back through all 18 files, the gaps were clear. White text on the amber status chip measured 2.58:1, well under the 4.5:1 that text needs. Ten container names overlapped, so people could not tell a Hub from a Wallet from a Folder. Two navigation models were promised but only one was drawn, and the brand was violet while every button in the product was blue.",
      deliverables: ["Icon Library", "Tokens for Developers", "Cabinet", "Advanced Filter", "Audit · 18 Files", "Desk Research & Personas", "Structure & Flows", "Design System · Light & Dark", "Screens & Developer Handoff", "Full Prototype"],
      decisions: [
        {
          pillar: "01. Ten names became four",
          rationale: "Hub, Sub Hub, Wallet, Sub Wallet, List, Sub List, Folder, Sub Folder, Project and File became Hub, Folder, List and Record. Each level has one meaning, and the place you are in is always shown at the top of the page."
        },
        {
          pillar: "02. Records open beside the list",
          rationale: "Pilot opens any task, file or email in a side panel, so you never lose your place in a long list. Arrows step through records one by one, and Esc closes it."
        },
        {
          pillar: "03. The product finally looks like the brand",
          rationale: "Violet and Poppins came from Appsatile's own brand guidelines. Brand violet passes AA with white text at 7.03:1, and every status chip now pairs a dark shade on a light tint with a shape, so none relies on colour alone."
        }
      ],
      process: [
        {
          title: "The filter, rules first",
          text: "I designed the advanced filter at Appsatile. For the rebuild I started from a grey wireframe to settle the rules before any colour: pick a field, a rule and a value, group conditions, and see the count update as you type.",
          before: "/appsatile-workspace-process-1-before.webp", beforeLabel: "Wireframe · advanced filter",
          after: "/appsatile-workspace-process-1-after.webp", afterLabel: "Final · advanced filter"
        },
        {
          title: "Blue product, violet brand",
          text: "I applied both directions to the same screen, a task open in Pilot, so they could be compared fairly. The blue kept what the team knew. The violet matched the logo and brand guidelines, so the rebuild went violet.",
          before: "/appsatile-workspace-process-2-before.webp", beforeLabel: "Direction B · darker blue",
          after: "/appsatile-workspace-process-2-after.webp", afterLabel: "Direction A · brand violet"
        },
        {
          title: "Dark mode from the same tokens",
          text: "Every colour is a variable with light and dark modes, so dark mode is a switch rather than a second design. The violet lightens on dark surfaces so it still passes contrast.",
          before: "/appsatile-workspace-process-3-before.webp", beforeLabel: "Light mode",
          after: "/appsatile-workspace-process-3-after.webp", afterLabel: "Dark mode · same screen"
        }
      ],
      gallery: [
        { title: "The story in one screen", from: 1, to: 1, caption: "Three years on one product, and the rebuild I made afterwards to finish it." },
        { title: "Where it started", from: 2, to: 3, caption: "How I joined when it was called Alsoit, and what the product is." },
        { title: "What I led and what I shared", from: 4, to: 6, caption: "The rebrand with a new team, the icon library and tokens, and Cabinet and the advanced filter." },
        { title: "Why it stopped, and what I found", from: 7, to: 7, caption: "The product was paused before launch. Going back through the files, five problems stood out." },
        { title: "The rebuild and the prototype", from: 8, to: 9, caption: "One structure, the brand colours, light and dark, and a prototype that runs like a shipped product." },
        { title: "What I took from it", from: 10, to: 11, caption: "What I learned, what I would test next, and a note on what is and is not original work." }
      ],
      reviews: []
    },
    'aerovia': {
      id: 'aerovia',
      glance: { problem: "Airline sites hide fees until the last step and make fares hard to compare.", did: "A 6-step booking flow, side-by-side fare cards and a design system for web and mobile.", outcome: "Concept, not shipped. Every fee and bag price is shown before checkout." },
      title: "Aerovia",
      concept: true,
      type: "Product & Interface Design",
      category: "Airline & Travel Web App",
      role: "Product Designer",
      heroImg: "/aerovia-thumbnail.webp",
      liveLink: null,
      sliceCount: 10,
      overview: "Aerovia is a flight booking web platform engineered to eliminate stress and turbulence from travel planning. I designed the complete journey from destination inspiration to confirmed digital boarding passes, introducing a transparent 6-step waypoint architecture that does away with hidden fees and deceptive drip pricing.",
      problem: "Most airline websites are notorious for high cognitive fatigue: surprise baggage charges emerge on the very last step, ambiguous checkout flows leave travelers lost in multi-leg confusion, and cramped comparison tables make it nearly impossible to evaluate what each fare actually includes.",
      deliverables: ["End-to-End Booking UX Flow", "6-Step Guided Progress Architecture", "Transparent Fare Matrix", "Runway Teal Design System", "Responsive Mobile Web Experience"],
      metrics: [
        { value: "0", label: "Hidden fees at checkout" },
        { value: "6-Step", label: "Clear waypoint booking flow" },
        { value: "100%", label: "Upfront baggage & seat pricing" }
      ],
      decisions: [
        {
          pillar: "01. Six stops, one clear path",
          rationale: "Instead of ambiguous multi-page forms, a persistent waypoint progress bar anchors every step: Search → Flights → Fare → Travelers → Payment → Confirmed. Travelers always know exactly where they are and how many steps remain."
        },
        {
          pillar: "02. Compare at a glance with honest inclusions",
          rationale: "Rather than forcing users to click through separate tabs to compare baggage and seat rules, I designed side-by-side fare cards (Best, Cheapest, Fastest) with colour-coded tags and immediate price impact preview."
        },
        {
          pillar: "03. Calm teal aesthetic built for trust",
          rationale: "Travel anxiety is high during high-stakes booking. I paired deep Runway Teal with crisp negative space and warm amber accent badges to signal clarity and security without looking like another generic corporate travel portal."
        }
      ],
      process: [
        {
          title: "From Flyboo to Aerovia",
          text: "The flow started as a first draft called Flyboo, in a bright sky blue. I renamed it Aerovia for a calmer, more premium feel, and added one amber accent reserved for the recommended flight.",
          before: "/aerovia-process-1-before.webp", beforeLabel: "First draft · Flyboo",
          after: "/aerovia-process-1-after.webp", afterLabel: "Final · Aerovia"
        },
        {
          title: "Re-coloured for accessibility",
          text: "White text on the original sky blue (#0097DB) scored 3.3:1, which fails WCAG AA. The new Runway teal (#0F766E) scores 5.5:1 and passes, so every button and label stays readable.",
          before: "/aerovia-process-2-before.webp", beforeLabel: "Sky blue · 3.3:1 contrast",
          after: "/aerovia-process-2-after.webp", afterLabel: "Runway teal · 5.5:1 contrast"
        },
        {
          title: "Designing the wait",
          text: "Instead of a blank page while flights load, skeleton cards hold the layout, then results slide in from the top pick down. I prototyped this in Figma with Smart Animate.",
          before: "/aerovia-process-3-before.webp", beforeLabel: "Loading · skeleton",
          after: "/aerovia-process-3-after.webp", afterLabel: "Loaded · staggered reveal"
        }
      ],
      video: {
        src: "/aerovia-prototype.mp4",
        slice: 8,
        box: { left: '8.333%', width: '83.333%', top: '42.92%', height: '57.08%' }
      },
      reviews: []
    },
    'nikos-farm': {
      id: 'nikos-farm',
      glance: { problem: "The old shop showed no prices or buy buttons, and checking a product meant leaving the page.", did: "User flow, product grid, quick view, cart drawer and a one-page checkout, on desktop and mobile.", outcome: "Live at nikosfarm.com, with price and add to cart on every product card." },
      title: "Nikos Farm",
      type: "E-Commerce",
      category: "E-Commerce Interface",
      role: "Product Designer",
      heroImg: "/nikos-farm-thumbnail.webp",
      liveLink: "https://nikosfarm.com/",
      sliceCount: 10,
      overview: "Nikos Farm sells fresh organic fruit and vegetables directly to local customers. I redesigned their online shop from the ground up to make it clear what the farm sells, what it costs, and how to buy it.",
      problem: "The old site didn't show what the farm sold or what it cost. The homepage led with a stock photo, product cards had no prices or buy buttons, and checking a product meant leaving the shop page.",
      deliverables: ["User Flow", "Product Grid", "Quick View", "Cart Drawer", "One-Page Checkout", "Mobile Layouts"],
      decisions: [
        {
          pillar: "01. A cart that slides in, not a new page",
          rationale: "Adding a product opens a cart drawer over the shop. Shoppers can change quantities, remove items and see the total without losing their place, then go straight to checkout."
        },
        {
          pillar: "02. A quick view instead of a product page",
          rationale: "View Details opens a pop-up over the grid with weight, origin, stock, a quantity picker with a live total, and reviews in a tab. Closing it returns people to exactly where they were."
        },
        {
          pillar: "03. Price and buy button on every card",
          rationale: "The old site never showed a price. Every card now shows the price per kg, colour options and a cart button, so people can compare and buy without opening anything."
        }
      ],
      process: [
        {
          title: "A hero that shows the produce",
          text: "The old site opened on a stock photo of a tea plantation with a big AGRICULTURE overlay, so nothing on screen said what the farm actually sells. The new hero uses an aerial shot of the land with the four products in gold-ringed circles, a warmer type pairing and one clear Buy Now action.",
          before: "/nikos-farm-process-1-before.webp", beforeLabel: "Old homepage",
          after: "/nikos-farm-process-1-after.webp", afterLabel: "Final hero"
        },
        {
          title: "Mapping the journey before the screens",
          text: "I mapped every route from landing to a placed order before designing. It showed two needs: a way to add to cart straight from a product card, and a cart that never takes people away from the shop. The product cards were then built around those needs, with price per kg, colour options and a cart button on each.",
          before: "/nikos-farm-process-2-before.webp", beforeLabel: "User flow",
          after: "/nikos-farm-process-2-after.webp", afterLabel: "Product cards · price + add to cart"
        },
        {
          title: "Details without leaving the shop",
          text: "Clicking View Details opens a quick view over the product grid instead of a new page. Shoppers can check weight, origin and stock, pick a quantity with a live total, read reviews and add to cart, then close it and carry on browsing.",
          before: "/nikos-farm-process-3-before.webp", beforeLabel: "Shop grid",
          after: "/nikos-farm-process-3-after.webp", afterLabel: "Quick view · description + reviews"
        }
      ],
      reviews: [
        { name: "Diamond Nicholas", role: "Owner, Nikos Farm", avatar: "/nikos-farm-logo.png", text: "Chinonso redesigned our storefront from the ground up. The site looks stunning, our mobile checkout flows effortlessly, and our farm customers love the new experience." }
      ]
    },
    'cook-by-ugo': {
      id: 'cook-by-ugo',
      glance: { problem: "Delivery apps take up to 30% of every order and keep the customer data.", did: "Brand identity, a direct ordering site, a protein and side picker, and a 3-step checkout.", outcome: "Designs complete. The site is not live yet." },
      title: "Cook by Ugo",
      type: "Food & Hospitality",
      category: "Restaurant & Ordering Experience",
      role: "Product Designer · UI & brand",
      heroImg: "/cook-by-ugo-thumbnail.webp",
      liveLink: null,
      sliceCount: 10,
      overview: "Cook by Ugo brings authentic Nigerian home cooking to Newcastle upon Tyne. I designed their direct ordering website and brand identity, giving customers a smooth way to browse dishes, customize spice levels, and order takeout in minutes.",
      problem: "Third-party delivery apps were taking up to 30% commission on every order and locking away customer data. The restaurant needed their own ordering website that made ordering takeout quick and effortless, while showing off the authentic warmth of West African hospitality.",
      deliverables: ["Brand Identity System", "Direct Ordering Website", "Protein & Side Picker", "3-Step Checkout Drawer", "Mobile First UI"],
      targets: true,
      metrics: [
        { value: "3", label: "Steps to check out, in one drawer" },
        { value: "<90s", label: "Target time to complete an order" },
        { value: "0%", label: "Commission on direct orders vs up to 30% on delivery apps" }
      ],
      decisions: [
        {
          pillar: "01. Food photography first with clear choices",
          rationale: "Nigerian dishes are vibrant and rich. I led with large dish photos, then made each dish's options simple: a required protein choice and up to two optional sides, each with its price, so both longtime fans and first-time guests can order with zero confusion."
        },
        {
          pillar: "02. A short checkout, designed for under 90 seconds",
          rationale: "Nobody wants to fill out a long form when they are hungry. Checkout is three steps in one drawer: delivery details with an ASAP or scheduled time, payment by card or on delivery, then confirmation. A WhatsApp button stays on screen for people who would rather message."
        },
        {
          pillar: "03. A modern brand with Lagos colour",
          rationale: "I redesigned the first dark, template-like version into a warm cream base with jollof red, palm gold, ewedu green and adire indigo, plus aso-oke bands, adire dots and arch-shaped photos. Every text colour pair passes WCAG AA, and three fonts replace the original five."
        }
      ],
      process: [
        {
          title: "From a dark template to a warm brand",
          text: "The first version worked but looked like any restaurant template: near-black everywhere, five fonts and low-contrast grey text. I rebuilt it on a cream base with jollof red, palm gold, ewedu green and adire indigo, Nigerian textile patterns, and three fonts that all pass WCAG AA.",
          before: "/cook-by-ugo-process-1-before.webp", beforeLabel: "Version 1 · dark template",
          after: "/cook-by-ugo-process-1-after.webp", afterLabel: "Version 3 · modern Afro redesign"
        },
        {
          title: "Options that guide, not block",
          text: "Every dish asks for one required choice, the protein, plus up to two optional sides with their prices. The button stays inactive and says what is missing, then shows the live total once a protein is picked. I also added a spice level, from Mild to Naija hot.",
          before: "/cook-by-ugo-process-2-before.webp", beforeLabel: "No protein yet · button explains why",
          after: "/cook-by-ugo-process-2-after.webp", afterLabel: "Ready · add to order £14.49"
        },
        {
          title: "Two ways to pay",
          text: "Checkout slides in as a drawer over the menu, with a three-step bar. Some customers prefer to pay at the door, so payment offers card or pay on delivery. Choosing pay on delivery hides the card form and shows the exact amount to have ready.",
          before: "/cook-by-ugo-process-3-before.webp", beforeLabel: "Pay by card",
          after: "/cook-by-ugo-process-3-after.webp", afterLabel: "Pay on delivery"
        }
      ],
      reviews: []
    },
    'lazyzone': {
      id: 'lazyzone',
      glance: { problem: "Five AI tools that don't talk to each other, and no button says what an action costs.", did: "Audit (11 issues), research, flows, a light and dark design system, desktop, tablet and mobile screens, and handoff.", outcome: "The five tools used to act like five separate apps. Now they work as one, so a project gets made in one go. Every action shows its credit cost before you press it." },
      title: "LazyZoneLabs",
      type: "Product Design",
      category: "AI Creator Suite & Web App",
      role: "Product Designer (solo)",
      heroImg: "/lazyzone-thumbnail.webp",
      liveLink: "https://www.lazyzonelabs.com/",
      liveNote: "The redesign is live. The site has kept changing since, so it may not match these screens exactly.",
      sliceCount: 13,
      overview: "LazyZoneLabs is an AI studio with five tools: AI Scripting, Text to Speech, Imagine, AI Clipping and Video Enhancement. I audited the app as it was, then redesigned it end to end so each tool works on its own and all five can share one project: research, flows, wireframes, a token design system, desktop, tablet and mobile screens, and a developer handoff.",
      problem: "Before the redesign every tool was its own page and nothing passed between them, so a script had to be copied into Text to Speech by hand. Credits sat in a corner and no button said what an action would cost. A heuristic and WCAG 2.2 audit logged 11 issues, 6 of them high severity, from 3 root causes.",
      deliverables: ["Heuristic & WCAG 2.2 Audit · 11 Issues", "Personas, User Stories & Journey Map", "Sitemap & User Flows", "Wireframes", "Token Design System · Light & Dark", "Desktop, Tablet & Mobile Screens", "Clickable Prototype", "Developer Handoff & Accessibility Specs"],
      decisions: [
        {
          pillar: "01. One project, one tool or all five",
          rationale: "A project holds the tools you pick, in sidebar order. Every tool has the same Input box at the top, filled by the tool before it or by your own file, so a tool can work alone or as part of a chain. Moving on is always a button you press, never automatic."
        },
        {
          pillar: "02. Your work first, AI when asked",
          rationale: "The script opens as an editor: type, paste or drop a file into the same box, free. AI is a button, not a mode. Suggest rewrites one section for 1 credit and Draft with AI writes the whole script for 2. Captions work the same way: type your own, or Auto-caption for 1 credit."
        },
        {
          pillar: "03. Every cost on the button",
          rationale: "Every action that spends credits shows its price on the button and the balance left after it. Red is kept for the one action that moves the project forward. If the balance is too low, a top-up sheet states the shortfall and nothing is lost."
        }
      ],
      process: [
        {
          title: "From ten pages to one project",
          text: "The original app listed every AI feature as its own page beside socials and subscriptions, and the home screen was one link box. The redesign opens on what you want to make: presets, a single tool, or a new project that holds one to five tools.",
          before: "/lazyzone-process-1-before.webp", beforeLabel: "Before · original home",
          after: "/lazyzone-process-1-after.webp", afterLabel: "After · presets, single tools, recent work"
        },
        {
          title: "Writing first, AI when asked",
          text: "An early version made people choose between writing, uploading and AI before they could start. Now the script opens as one editor that takes typing, pasting or a dropped file, and AI only runs when you press Draft with AI or Suggest.",
          before: "/lazyzone-process-2-before.webp", beforeLabel: "Draft with AI · opt in, 2 credits",
          after: "/lazyzone-process-2-after.webp", afterLabel: "Write it yourself · free default"
        },
        {
          title: "Captions you control",
          text: "Video Enhancement gets a Captions switch and an editor. Type your own lines or let Auto-caption fill them for 1 credit. Every line keeps its own timing, stays editable and shows in a live preview with the spoken word highlighted.",
          before: "/lazyzone-process-3-before.webp", beforeLabel: "Video Enhancement · captions on",
          after: "/lazyzone-process-3-after.webp", afterLabel: "Caption editor · type my own"
        }
      ],
      gallery: [
        { title: "The redesign in one screen", from: 1, to: 1, caption: "Five tools, one project, and every cost on the button." },
        { title: "The problem and the reframe", from: 2, to: 3, caption: "What the audit of the original app found, and the decision to keep the five tools and connect them." },
        { title: "The rules and the system", from: 4, to: 5, caption: "Three rules I designed against, and how a project holds one tool or all five." },
        { title: "The five tools", from: 6, to: 8, caption: "Every tool shares one layout. Writing comes first and AI runs only when asked, including for captions." },
        { title: "States, mobile and tablet", from: 9, to: 10, caption: "Where every click leads, and how the same flow works on a phone and a tablet." },
        { title: "Handoff and accessibility", from: 11, to: 11, caption: "Colour variables, contrast, keyboard focus and an annotated screen for developers." },
        { title: "What I would want to know next", from: 12, to: 13, caption: "The questions I would check next, and what I learned." }
      ],
      reviews: [
        { name: "Stangly Sunday", role: "Founder, LazyZoneLabs", avatar: "/lazyzonelab-logo.png", text: "Finding a designer who genuinely understands product strategy and real user needs is rare. Chinonso combines great aesthetics with practical thinking. Highly recommended." }
      ]
    },
    'hsbc': {
      id: 'hsbc',
      glance: { problem: "Three menus that repeat each other, account numbers always visible, and scam checks that come too late.", did: "Audit (16 issues), competitor research, flows, wireframes, a design system and 25 iOS screens.", outcome: "Concept, not shipped. A clickable prototype covering 4 journeys, built around safety by default." },
      title: "HSBC UK",
      concept: true,
      type: "Product Design",
      category: "Mobile Banking App",
      role: "Product Designer (solo)",
      heroImg: "/hsbc-thumbnail.webp",
      prototypeLink: "https://www.figma.com/proto/DIyIHsRYjtPHAeQzfpxkex/Hsbc-Mobile-App-redesign?node-id=56-949&p=f&scaling=scale-down&content-scaling=fixed&starting-point-node-id=56%3A949&show-proto-sidebar=1&page-id=21%3A51",
      phoneProcess: true,
      liveLink: null,
      sliceCount: 12,
      overview: "An unofficial end-to-end redesign of the HSBC UK app I use every week. I audited my own account, studied what Monzo, Starling, Revolut and Barclays do well, then rebuilt the structure, flows, design system and 25 screens around two ideas: safe by default, and Global Money built into everyday banking.",
      problem: "The app has three navigation systems that repeat each other, shows the full sort code and account number even when the balance is hidden, and only checks for scams after every payee detail is typed. A heuristic and WCAG 2.2 review of five screens logged 16 issues, 6 of them high severity, from 3 root causes.",
      deliverables: ["Heuristic & WCAG 2.2 Audit · 16 Issues", "Competitor & Regulation Research", "Proto-personas & How Might We", "Information Architecture & 3 Flows", "Wireframes", "Token Design System · Light & Dark", "25 Screens · iOS", "Clickable Prototype · 4 Journeys"],
      decisions: [
        {
          pillar: "01. Three menus become five tabs",
          rationale: "Top tabs, a hamburger menu and a profile list held the same places. Now every destination has one home in a bottom tab bar the thumb can reach: Home, Pay, Cards, Safety and More."
        },
        {
          pillar: "02. Safe by default",
          rationale: "Security gets its own tab and one status on Home. Account numbers stay hidden until you hold to show, and adding a new payee starts with “What is this payment for?”, so a risky payment can be stopped before any details are typed."
        },
        {
          pillar: "03. Global built in",
          rationale: "HSBC already offers Global Money with live rates. Here currency balances sit on Home, Send abroad shows the rate, fee and countdown before you confirm, and travel mode on the card spends from the matching currency first."
        }
      ],
      process: [
        {
          title: "Making safety visible",
          text: "On the current Home, the sort code and account number stay on screen and security is split across three menus. The new Safety tab brings devices, call checks, fraud reports and a trusted contact together under one status you can read at a glance.",
          before: "/hsbc-process-1-before.webp", beforeLabel: "Before · current Home, details redacted",
          after: "/hsbc-process-1-after.webp", afterLabel: "After · Safety tab"
        },
        {
          title: "Ask why first, then the details",
          text: "The wireframe moved one question to the start of adding a payee. In the final screen it is a single tap list, and “Someone asked me to move money” leads straight to a stop screen with 159.",
          before: "/hsbc-process-2-before.webp", beforeLabel: "Wireframe · new payee reason",
          after: "/hsbc-process-2-after.webp", afterLabel: "Final · new payee reason"
        },
        {
          title: "From a new palette to HSBC’s own",
          text: "My first visual direction used its own colours and looked polished but not like HSBC. The final design keeps the hexagon idea and the depth, and moves everything onto HSBC red, black and white so it feels like the real bank.",
          before: "/hsbc-process-3-before.webp", beforeLabel: "Direction A · own palette",
          after: "/hsbc-process-3-after.webp", afterLabel: "Final · HSBC red and black"
        }
      ],
      reviews: []
    },
    'keel': {
      id: 'keel',
      glance: { problem: "Staying safe means five places: an authenticator, a web portal, a report button, a help page and a phone line. None of them say what happened next.", did: "Research, an audit of my own Microsoft 365 account (13 issues), flows, wireframes, three visual directions, a design system and 17 screens.", outcome: "Concept, not shipped. One app with four tabs, a three-minute setup and a clickable prototype." },
      title: "Keel",
      concept: true,
      type: "Product Design",
      category: "Security App",
      role: "Product Designer (solo)",
      heroImg: "/keel-thumbnail.webp",
      prototypeLink: "https://www.figma.com/proto/uZo6nyOc2J6HdOJ8pjXX5t/Keel-%C2%B7-work-account-safety--concept-?node-id=33-348&p=f&scaling=scale-down&content-scaling=fixed&starting-point-node-id=33%3A348&show-proto-sidebar=1&page-id=2%3A8",
      phoneProcess: true,
      liveLink: null,
      sliceCount: 10,
      overview: "Keel is a concept app that keeps a work account safe. I researched how work accounts get broken into, audited my own Microsoft 365 university account, then designed one app that explains sign-ins in plain words, gives every phishing report an answer, and gets people back in without calling the help desk.",
      problem: "85% of UK businesses that had a breach or attack last year were hit by phishing (Cyber Security Breaches Survey 2025). Yet the tools people use to stay safe are written for IT: sign-in prompts show only an app and a country, activity pages list IP addresses, and reporting an email ends in silence. My audit logged 13 issues, 4 of them serious, from 3 root causes.",
      deliverables: ["Research · UK Data & NCSC Guidance", "Heuristic & WCAG 2.2 Audit · 13 Issues", "Proto-personas & How Might We", "Structure & 4 Flows", "Wireframes · 10 Screens", "3 Visual Directions", "Design System · Light & Dark", "17 Screens · iOS", "Clickable Prototype"],
      decisions: [
        {
          pillar: "01. Plain words, not logs",
          rationale: "Every sign-in reads like a sentence: you, on your iPhone in Newcastle, 8:32 this morning. The approval prompt shows city, device, time and account, and you type the number from the sign-in screen, so a sleepy tap can’t approve a stranger."
        },
        {
          pillar: "02. Every action has an ending",
          rationale: "Block a sign-in and Keel says what it stopped and what to do next. Report an email and you hear back: removed, safe or still checking. Four prompts in three minutes pause automatically, because that pattern usually means someone is guessing."
        },
        {
          pillar: "03. Back in without a phone call",
          rationale: "Passkeys come first, as the NCSC now recommends. If the phone is lost, a passkey on another device, a backup code or a recovery contact gets you back in. The help desk is the last resort, with an ID check, because a phone call is exactly what attackers fake."
        }
      ],
      process: [
        {
          title: "A prompt you can actually answer",
          text: "Today’s Authenticator prompt shows an app and a country, and a “Map unavailable” box fills a quarter of it. Keel’s prompt answers “is this me?” with city, device, time and account, and makes No as easy to find as Yes.",
          before: "/keel-process-1-before.webp", beforeLabel: "Before · Authenticator prompt, my account",
          after: "/keel-process-1-after.webp", afterLabel: "After · Keel sign-in prompt"
        },
        {
          title: "Words first, then the look",
          text: "The greyscale wireframe settled the words before any colour: what we did, and what you should do. The final screen turns that into a short timeline with times, and one next step with a time estimate.",
          before: "/keel-process-2-before.webp", beforeLabel: "Wireframe · sign-in blocked",
          after: "/keel-process-2-after.webp", afterLabel: "Final · sign-in blocked"
        },
        {
          title: "Quiet paper, with tighter type",
          text: "Direction A, warm and editorial with a serif, felt like a trusted letter rather than an alarm. I kept its paper colours and the orange-only-for-risk rule, added Direction C’s bold number boxes, and moved to Inter so small text stays sharp.",
          before: "/keel-process-3-before.webp", beforeLabel: "Direction A · Quiet paper",
          after: "/keel-process-3-after.webp", afterLabel: "Final · Home"
        }
      ],
      gallery: [
        { title: "The concept in one screen", from: 1, to: 1, caption: "A security app for work accounts, written in plain words." },
        { title: "Research and audit", from: 2, to: 3, caption: "What UK data and guidance say, and the 13 issues I found auditing my own Microsoft 365 account." },
        { title: "Structure and flows", from: 4, to: 4, caption: "Five places become one app with four tabs, and the flows for setup, sign-in, reporting and recovery." },
        { title: "Wireframes and three directions", from: 5, to: 6, caption: "Ten screens in greyscale to settle the words, then three ways Keel could look." },
        { title: "The design system", from: 7, to: 7, caption: "Colour, type, components and icons, in light and dark." },
        { title: "Setup and final screens", from: 8, to: 9, caption: "A three-minute setup with no help desk, and the ten final screens." },
        { title: "What comes next", from: 10, to: 10, caption: "The personas are assumptions, so the next step is testing with the people it is for." }
      ],
      reviews: []
    },
    'huntly': {
      id: 'huntly',
      glance: { problem: "No pipeline view, an Add Job form missing company and title, and a cluttered sidebar.", did: "Audit (12 issues), research, flows, wireframes, a light and dark design system and handoff.", outcome: "A board for every application, an Add Job form that fills in from a link, and 12 desktop plus 6 mobile screens." },
      title: "HuntlyAi",
      type: "Product Design",
      category: "AI Job Search & Application Tracker",
      role: "Product Designer (solo)",
      heroImg: "/huntly-thumbnail.webp",
      liveLink: null,
      sliceCount: 10,
      overview: "HuntlyAi helps job seekers track every application, interview and follow-up in one place. It was built for a client. I audited what shipped, then redesigned it end to end: research, flows, wireframes, a token-based design system in light and dark, and a developer handoff.",
      problem: "The shipped product showed applications as a grid of cards with no pipeline view. The Add Job form skipped the company and job title, the sidebar had nine items with duplicates, and the landing page had typos in its first lines. A heuristic review found 12 issues across the app and the site.",
      deliverables: ["Heuristic Audit · 12 Issues", "Personas, User Stories & Journey Map", "Sitemap & User Flows", "Wireframes", "Token Design System · Light & Dark", "12 Desktop + 6 Mobile Screens", "Developer Handoff & Specs"],
      decisions: [
        {
          pillar: "01. One board instead of a card grid",
          rationale: "Applications now sit on a kanban board from Saved to Closed, with a count on every column and the same lines on every card: role, company, next step, age and the CV you sent. You can see where your whole search stands at a glance."
        },
        {
          pillar: "02. Gmail import you confirm",
          rationale: "Huntly reads job emails and shows what it thinks happened, with a flag when it is unsure. Nothing touches the board until you say yes, so the automation can never make your board wrong."
        },
        {
          pillar: "03. Built on tokens, ready for developers",
          rationale: "Every colour, space and radius is a Figma variable with Light and Dark modes, and every screen is built from 13 components with auto layout. Developers get token names, states and notes on the tricky interactions instead of guesses."
        }
      ],
      process: [
        {
          title: "From a card grid to one board",
          text: "The old dashboard listed applications as cards with status pills, and its details modal repeated what the card already showed. The redesign puts every application on one board by stage and opens details in a side drawer with a timeline, so you never lose your place.",
          before: "/huntly-process-1-before.webp", beforeLabel: "Before · card grid and modal",
          after: "/huntly-process-1-after.webp", afterLabel: "After · kanban board"
        },
        {
          title: "An Add form that asks the right things",
          text: "The old form asked for salary and location but not the company or the job title. Now you paste a job link, the company, title and location fill in from the post, and company and title are required.",
          before: "/huntly-process-2-before.webp", beforeLabel: "Before · Add Job form",
          after: "/huntly-process-2-after.webp", afterLabel: "After · link autofill"
        },
        {
          title: "One set of tokens, two themes",
          text: "Because every colour is a variable with Light and Dark modes, dark mode is a mode switch rather than a second design. I checked every text and status colour pair in both themes against WCAG AA.",
          before: "/huntly-process-3-before.webp", beforeLabel: "Light mode",
          after: "/huntly-process-3-after.webp", afterLabel: "Dark mode · same components"
        }
      ],
      reviews: []
    }
  };

  // Aliases
  projectsData['lazyzonelab'] = projectsData['lazyzone'];
  projectsData['huntly-ai'] = projectsData['huntly'];
  projectsData['huntlyai'] = projectsData['huntly'];

  const project = projectsData[id] || projectsData['appsatile'];

  // Chapters for the reading rail and the progress bar
  const chapters = [
    { id: 'summary', label: 'The story' },
    project.process && { id: 'process', label: 'How I got there' },
    project.decisions && { id: 'decisions', label: 'What I decided' },
    { id: 'screens', label: 'Final screens' },
    { id: 'contact', label: 'Contact' },
  ].filter(Boolean);
  // Hook line and accent colour are shared with the Projects page
  const meta = allProjects.find(p => p.id === project.id) || {};
  const accent = meta.accent || '#3B82F6';
  const { tk } = useTokens();
  const accentText = tk.theme === 'dark' ? `color-mix(in srgb, ${accent} 60%, white)` : `color-mix(in srgb, ${accent} 78%, black)`;
  const rootRef = useRef(null);
  const [activeChapter, setActiveChapter] = useState('summary');
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 });
  useEffect(() => {
    setActiveChapter('summary');
    const els = rootRef.current?.querySelectorAll('[data-chapter]') || [];
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActiveChapter(e.target.dataset.chapter); });
    }, { rootMargin: '-40% 0px -55% 0px' });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [project.id]);

  const sliceBg = project.id === 'appsatile' ? 'bg-[#f8f9fa]' : project.id === 'hsbc' ? 'bg-[#F5F2EC]' : project.id === 'keel' ? 'bg-[#F7F5F0]' : project.id === 'appsatile-workspace' ? 'bg-[#F6F4EF]' : project.id === 'cook-by-ugo' ? 'bg-[#1b4332]' : project.id === 'lazyzone' ? 'bg-[#0e0e10]' : project.id === 'huntly' ? 'bg-[#102219]' : project.id === 'aerovia' ? 'bg-[#07241f]' : 'bg-[#0d0f0d]';
  const renderSlice = (num) => {
              const prefix = project.id;
              
              if (prefix === 'appsatile' && num === 10) {
                return (
                  <iframe 
                    key={num}
                    src={`/appsatile-10.html`} 
                    className="w-full min-h-[800px] border-none block m-0 p-0 align-bottom bg-transparent"
                    style={{ border: 'none', margin: 0, padding: 0, display: 'block' }}
                    title={`Appsatile Section ${num}`}
                  />
                );
              }
              
              if (project.video && num === project.video.slice) {
                return (
                  <div key={num} className="relative w-full m-0 p-0 leading-none">
                    <img
                      src={`/${prefix}-${num}.webp`}
                      alt={`${project.title} Section ${num}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto block m-0 p-0 align-bottom object-cover"
                      style={{ display: 'block', margin: 0, padding: 0 }}
                    />
                    <video
                      src={project.video.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                      className="absolute object-contain rounded-[1.2vw] bg-[#050C0B]"
                      style={project.video.box}
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                );
              }

              const isVideo = prefix === 'appsatile' && [3, 16, 21, 31].includes(num);
              
              return isVideo ? (
                <video 
                  key={num}
                  src={`/${prefix}-${num}.mp4`} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-auto block m-0 p-0 align-bottom object-cover"
                  style={{ display: 'block', margin: 0, padding: 0 }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              ) : (
                <img 
                  key={num}
                  src={`/${prefix}-${num}.webp`} 
                  alt={`${project.title} Section ${num}`} 
                  loading={num > 1 ? "lazy" : "eager"}
                  decoding="async"
                  className="w-full h-auto block m-0 p-0 align-bottom object-cover" 
                  style={{ display: 'block', margin: 0, padding: 0 }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }} 
                />
              );
  };

  const goTo = (cid) => document.getElementById(cid)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });

  const projectOrder = ['appsatile-workspace', 'keel', 'lazyzone', 'huntly', 'appsatile', 'hsbc', 'nikos-farm', 'cook-by-ugo', 'aerovia'];
  const currentIndex = projectOrder.indexOf(project.id) !== -1 ? projectOrder.indexOf(project.id) : 0;
  const nextProjectKey = projectOrder[(currentIndex + 1) % projectOrder.length];
  const nextProject = projectsData[nextProjectKey] || projectsData['lazyzone'];

  return (
    <div ref={rootRef} style={{ '--acc': accent, '--acc-text': accentText }} className="w-full relative bg-[var(--t-bg)] min-h-screen transition-colors duration-300">
      {/* Reading progress */}
      <motion.div aria-hidden="true" className="fixed top-0 inset-x-0 h-[3px] z-[210] origin-left bg-[var(--acc)]" style={{ scaleX: progress }} />

      {/* 1. HERO: one line that says what this project is, then the cover */}
      <section className="relative z-10 pt-36 md:pt-44 pb-0 px-6 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[720px] pointer-events-none" style={{ background: 'radial-gradient(60% 55% at 50% 0%, color-mix(in srgb, var(--acc) 30%, transparent), transparent 70%)' }} />
        <FadeIn className="relative max-w-[1200px] mx-auto">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-6 text-[13px] font-semibold tracking-[0.16em] uppercase">
            <Link to="/projects" className="text-white/55 hover:text-white transition-colors">Projects</Link>
            <span className="text-white/30">/</span>
            <span className="text-[var(--acc-text)]">{project.title} · {project.type}</span>
          </div>
          <h1 className="font-['DM_Sans'] text-[clamp(38px,6vw,88px)] font-medium text-white tracking-[-0.04em] leading-[1.0] max-w-[1000px] mb-8">
            {meta.hook || project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 mb-10">
            {project.concept && (
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[var(--acc)] text-[var(--acc-text)] font-medium text-[14px]">Self-initiated concept</span>
            )}
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" data-cursor="Open live site" className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-[14px] hover:bg-white/90 transition-all active:scale-[0.97]">
                <span className="w-2 h-2 rounded-full bg-[#10b981] motion-safe:animate-pulse"></span>
                {project.liveLabel || 'Visit live site'}
                <ExternalLink size={15} strokeWidth={2.2} />
              </a>
            )}
            {project.prototypeLink && (
              <a href={project.prototypeLink} target="_blank" rel="noopener noreferrer" data-cursor="Open prototype" className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-[14px] hover:bg-white/90 transition-all active:scale-[0.97]">
                Try the prototype
                <ExternalLink size={15} strokeWidth={2.2} />
              </a>
            )}
            <span className="text-[15px] text-white/60">{project.category}</span>
          </div>
          {project.liveNote && <p className="text-[14.5px] leading-[1.55] text-white/60 max-w-[560px] m-0 -mt-5 mb-10">{project.liveNote}</p>}
          <img
            src={project.heroImg}
            alt={`${project.title} cover`}
            fetchPriority="high"
            decoding="async"
            className="w-full aspect-[4/3] md:aspect-[16/9] object-cover border border-white/10 bg-[var(--card)] transition-[border-radius] duration-300" style={{ borderRadius: 'var(--t-radius-lg)' }}
          />
        </FadeIn>
      </section>

      <section className="relative z-10 max-w-[1200px] mx-auto px-6 pt-10 pb-16">
        {/* Chapter chips */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-10 -mx-6 px-6 [scrollbar-width:none]">
          {chapters.slice(1).map((c) => (
            <button key={c.id} type="button" onClick={() => goTo(c.id)} className="shrink-0 px-3.5 py-1.5 rounded-full border border-white/15 text-[13px] font-medium text-white/75 hover:text-white hover:border-white/40 transition-colors">{c.label}</button>
          ))}
        </div>

        <div className="mb-20 flex flex-col gap-20 md:gap-28">

          {/* 2. THE STORY: one paragraph on the left, the facts on the right */}
          <div id="summary" data-chapter="summary" className="scroll-mt-28 pt-6 md:pt-10 grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-12 lg:gap-20 items-start">
            <FadeIn>
              <p className="font-['DM_Sans'] text-[24px] md:text-[32px] leading-[1.25] tracking-[-0.02em] text-white m-0 mb-6">
                {project.problem || project.objectives}
              </p>
              <p className="font-['Inter_Tight'] text-[17px] md:text-[18px] text-white/65 leading-[1.7] m-0 max-w-[640px]">
                {project.overview}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <dl className="m-0 flex flex-col">
                {[['My role', project.role], project.glance && ['What I did', project.glance.did], project.glance && ['Outcome', project.glance.outcome]].filter(Boolean).map(([label, text]) => (
                  <div key={label} className="py-5 border-t border-white/15 first:border-t-2 first:border-[var(--acc)]">
                    <dt className="text-[11px] font-bold tracking-[0.18em] uppercase text-[var(--acc-text)] mb-2">{label}</dt>
                    <dd className="m-0 font-['Inter_Tight'] text-[16px] leading-[1.6] text-white/85">{text}</dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          </div>

          {/* 3. THE NUMBERS */}
          {project.metrics && (
            <FadeIn>
              {(project.concept || project.targets) && (
                <div className="text-[12px] font-bold tracking-[0.2em] uppercase text-white/45 mb-5">{project.targets ? 'Design targets · site not live yet' : 'Design targets · not measured results'}</div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 gap-x-10">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="border-t-2 border-[var(--acc)] pt-5">
                    <div className="font-['DM_Sans'] text-[64px] md:text-[96px] font-medium text-white tracking-[-0.05em] leading-[0.9] mb-4">{metric.value}</div>
                    <div className="text-[15px] md:text-[16px] text-white/65 leading-[1.5] max-w-[280px]">{metric.label}</div>
                  </div>
                ))}
              </div>
              {project.metricsNote && (
                <p className="mt-8 text-[14px] leading-[1.6] text-white/55 max-w-[640px] m-0"><span className="font-semibold text-white/75">How this was measured: </span>{project.metricsNote}</p>
              )}
            </FadeIn>
          )}

          {/* 4. HOW I GOT THERE */}
          {project.process && (
            <div id="process" data-chapter="process" className="scroll-mt-28 flex flex-col gap-16 md:gap-24">
              <FadeIn>
                <div className="text-[12px] font-bold tracking-[0.2em] uppercase text-[var(--acc-text)] mb-3">Process</div>
                <h2 className="font-['DM_Sans'] text-[clamp(32px,4.4vw,60px)] font-medium text-white tracking-[-0.03em] leading-[1.05] m-0">How I got there</h2>
              </FadeIn>
              {project.process.map((step, idx) => (
                <FadeIn key={idx} className="flex flex-col gap-8">
                  <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 md:gap-10 items-start">
                    <div aria-hidden="true" className="font-['DM_Sans'] text-[72px] md:text-[120px] font-medium leading-[0.8] tracking-[-0.06em] text-transparent" style={{ WebkitTextStroke: '1.5px var(--acc)' }}>0{idx + 1}</div>
                    <div className="md:pt-2">
                      <h3 className="font-['DM_Sans'] text-[26px] md:text-[34px] font-medium text-white tracking-[-0.02em] leading-[1.1] m-0 mb-4">{step.title}</h3>
                      <p className="font-['Inter_Tight'] text-[17px] text-white/65 leading-[1.7] max-w-[680px] m-0">{step.text}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[['before', step.before, step.beforeLabel, step.beforeVideo], ['after', step.after, step.afterLabel, step.afterVideo]].map(([k, src, label, vid]) => (
                      <figure key={k} className="m-0">
                        {vid ? (
                          <video src={vid} poster={src} autoPlay muted loop playsInline preload="metadata" aria-label={label} className="w-full aspect-[4/3] object-cover object-top border border-white/10 bg-black" style={{ borderRadius: 'var(--t-radius-lg)' }} />
                        ) : (
                          <img src={src} alt={label} loading="lazy" decoding="async" className={`w-full ${project.phoneProcess ? 'aspect-square md:aspect-[4/3] object-cover object-center' : 'aspect-[4/3] object-cover object-top'} border border-white/10`} style={{ borderRadius: 'var(--t-radius-lg)' }} />
                        )}
                        <figcaption className="mt-3 text-[12px] font-semibold tracking-[0.12em] uppercase text-white/55">{label}</figcaption>
                      </figure>
                    ))}
                  </div>
                </FadeIn>
              ))}
            </div>
          )}

          {/* 5. WHAT I DECIDED */}
          {project.decisions && (
            <div id="decisions" data-chapter="decisions" className="scroll-mt-28">
              <FadeIn>
                <div className="text-[12px] font-bold tracking-[0.2em] uppercase text-[var(--acc-text)] mb-3">Decisions</div>
                <h2 className="font-['DM_Sans'] text-[clamp(32px,4.4vw,60px)] font-medium text-white tracking-[-0.03em] leading-[1.05] m-0 mb-12">What I decided, and why</h2>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
                {project.decisions.map((dec, idx) => (
                  <FadeIn key={idx} delay={idx * 0.08} className="border-t border-white/15 pt-6">
                    <h3 className="font-['DM_Sans'] text-[20px] md:text-[22px] font-medium text-white leading-[1.25] m-0 mb-3">{dec.pillar.replace(/^\d+\.\s*/, '')}</h3>
                    <p className="font-['Inter_Tight'] text-[16px] text-white/65 leading-[1.7] m-0">{dec.rationale}</p>
                  </FadeIn>
                ))}
              </div>
            </div>
          )}

          {/* Transition to Visual Walkthrough */}
          <div id="screens" data-chapter="screens" className="flex flex-col items-start scroll-mt-28">
            <div className="text-[12px] font-bold tracking-[0.2em] uppercase text-[var(--acc-text)] mb-3">The result</div>
            <h2 className="font-['DM_Sans'] text-[clamp(32px,4.4vw,60px)] font-medium text-white tracking-[-0.03em] leading-[1.05] m-0 mb-4">
              The final screens
            </h2>
            {project.liveLink && (
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-white text-black font-semibold text-[13px] hover:bg-white/90 transition-all"
              >
                <span>{project.liveLabel || 'Visit live site'}</span>
                <ExternalLink size={14} strokeWidth={2.2} />
              </a>
            )}
          </div>

        </div>

        {project.gallery ? (
          <div className="flex flex-col gap-20 mb-32">
            {project.gallery.map((sec, sIdx) => (
              <FadeIn key={sec.title} direction="up">
                <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-3 md:gap-10 items-start mb-6">
                  <h3 className="font-['DM_Sans'] text-[22px] md:text-[26px] font-medium text-white m-0">
                    <span className="text-[var(--acc-text)] mr-2">0{sIdx + 1}</span>{sec.title}
                  </h3>
                  <p className="font-['Inter_Tight'] text-[16px] text-white/65 leading-[1.65] max-w-[640px] m-0">{sec.caption}</p>
                </div>
                <div className={`w-full flex flex-col gap-0 overflow-hidden ring-1 ring-white/10 leading-none ${sliceBg}`} style={{ borderRadius: 'var(--t-radius-lg)' }}>
                  {Array.from({ length: sec.to - sec.from + 1 }, (_, i) => sec.from + i).map(renderSlice)}
                </div>
              </FadeIn>
            ))}
          </div>
        ) : (
          <FadeIn direction="up" className="w-full mb-32">
            <div className={`w-full flex flex-col gap-0 overflow-hidden ring-1 ring-white/10 leading-none ${sliceBg}`} style={{ borderRadius: 'var(--t-radius-lg)' }}>
              {Array.from({ length: project.sliceCount || 50 }, (_, i) => i + 1).map(renderSlice)}
            </div>
          </FadeIn>
        )}
      </section>

      {/* 7. REVIEWS */}
      {project.reviews && project.reviews.length > 0 && (
      <section className="bg-[var(--bg2)] py-20 border-y border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6">
           <FadeIn direction="up">
             <h2 className="font-['DM_Sans'] text-[24px] font-medium text-white mb-10">What the client said</h2>
           </FadeIn>
            <div className={`grid grid-cols-1 gap-6 ${project.reviews.length === 1 ? 'max-w-[720px]' : 'md:grid-cols-3'}`}>
               {project.reviews.map((quote, i) => (
                 <FadeIn key={i} delay={i * 0.1}>
                   <div className="bg-[var(--card)] p-8 rounded-2xl border border-[var(--border)] h-full">
                      <div className="flex gap-4 items-center mb-6">
                        {quote.avatar ? (
                          <img 
                            src={quote.avatar} 
                            alt={quote.name} 
                            className={`w-12 h-12 rounded-full border border-[var(--border)] ${
                              quote.avatar.includes('logo') ? 'object-contain p-1 bg-white/5' : 'object-cover'
                            }`} 
                          />
                        ) : (
                          <div className="w-12 h-12 rounded bg-[var(--bg2)] border border-[var(--border)] flex items-center justify-center font-bold text-white/30 text-[14px]">
                            {quote.name.split(' ').map(n=>n[0]).join('')}
                          </div>
                        )}
                        <div>
                          <div className="font-['DM_Sans'] font-medium text-white text-[16px]">{quote.name}</div>
                          <div className="text-[12px] text-[var(--muted)] mt-1">{quote.role}</div>
                       </div>
                     </div>
                     <p className="text-[14px] text-white/50 leading-[1.6]">"{quote.text}"</p>
                  </div>
                </FadeIn>
              ))}
           </div>
        </div>
      </section>
      )}

      {/* 8. NEXT PROJECT PREVIEW CARD */}
      <section className="px-6 py-16 max-w-[1200px] mx-auto border-t border-white/5">
        <FadeIn>
          <div className="p-8 md:p-12 rounded-2xl bg-[var(--card)] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-white/20 transition-all">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl overflow-hidden bg-black/40 border border-white/10 shrink-0">
                <img src={nextProject.heroImg} alt={nextProject.title} className="w-full h-full object-cover transition-transform duration-500 opacity-80 group-hover:opacity-100" />
              </div>
              <div>
                <div className="text-[12px] font-bold tracking-widest text-[var(--muted)] uppercase mb-1.5">Next Case Study</div>
                <h3 className="font-['DM_Sans'] text-[24px] md:text-[34px] font-medium text-white mb-1">{nextProject.title}</h3>
                <p className="text-white/50 text-[14px] md:text-[15px] font-light">{nextProject.category} · {nextProject.type}</p>
              </div>
            </div>
            <Link 
              to={`/projects/${nextProject.id}`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-white text-black font-semibold text-[15px] transition-all shrink-0 group-hover:shadow-white/20"
            >
              <span>View Case Study</span>
              <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* 9. CONTACT */}
      <section id="contact" data-chapter="contact" className="bg-[var(--bg)] px-6 pt-8 pb-28 scroll-mt-28">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-white text-[15px] font-semibold transition-all hover:bg-white hover:text-black">
              <ArrowLeft size={16} strokeWidth={2} />
              <span>All projects</span>
            </Link>
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black text-[15px] font-bold transition-all">
                <span>{project.liveLabel || 'Visit live site'}</span>
                <ExternalLink size={15} strokeWidth={2.2} />
              </a>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
