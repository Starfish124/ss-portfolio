export type Project = {
  idx: string;
  code: string;
  name: string;
  sub: string;
  desc: string;
  cls: "ENTERPRISE" | "CLIENT" | "OPEN SOURCE" | "WEARABLE" | "PERSONAL" | "HARDWARE";
  status: string;
  stack: string[];
  metrics: { k: string; v: string }[];
};

export const PROJECTS: Project[] = [
  {
    idx: "01",
    code: "GT-CODE",
    name: "GT-Code",
    sub: "Sovereign coding agent on fully local models",
    desc: "A Claude Code class CLI coding agent that runs entirely on local models for a Big Six audit firm. The full agentic architecture rebuilt from first principles: todo planning, auto compaction, sub agents, project memory, hooks, confidence gated planning, a hybrid tool protocol. Hardened with code level interlocks. Office deliverables are blocked unless the source file was actually read, and every number shipped to Excel is provenance checked against real file contents, so the model cannot do maths in its head and get away with it.",
    cls: "ENTERPRISE",
    status: "LIVE · DEMO HARDENED",
    stack: ["Python", "Ollama", "qwen3:8b", "Rich TUI", "SQLite memory"],
    metrics: [
      { k: "SMOKE TESTS", v: "553" },
      { k: "LOOP GUARD RAILS", v: "8" },
      { k: "CLOUD CALLS", v: "0" },
    ],
  },
  {
    idx: "02",
    code: "GT-ASSURE",
    name: "GT Assure",
    sub: "AI control testing and PBC management for assurance teams",
    desc: "Takes the mechanical half of control testing off the team: evidence retrieval, first pass assessment, citation, PBC chasing. A named human approves every finding before export. Append only hash chained audit log for EU AI Act Art. 12 and 14 posture, pinned model digests verified at startup, frameworks as YAML config. Fully local, no external API ever touches the data path.",
    cls: "ENTERPRISE",
    status: "LIVE · 105/105 TESTS",
    stack: ["FastAPI", "ChromaDB", "Ollama", "PyMuPDF", "SQLite"],
    metrics: [
      { k: "TESTS GREEN", v: "105/105" },
      { k: "10 CONTROLS TESTED", v: "~11 MIN" },
      { k: "PBC AUTO MATCHED", v: "12/14" },
    ],
  },
  {
    idx: "03",
    code: "GLASSBOX",
    name: "Glassbox Agents",
    sub: "Open source glass box agent platform, Apache 2.0",
    desc: "Public reference implementation of the two lane sovereign architecture: a confidential lane that never touches the cloud, capability scoped tools, Dutch BSN and IBAN guardrails, a hash chained audit log, a KYA agent registry, human approval gates with timeout deny, and a zero build web console with live SSE run traces.",
    cls: "OPEN SOURCE",
    status: "PUBLIC · v0.2",
    stack: ["Python", "FastAPI", "RAG", "SSE", "Zero deps core"],
    metrics: [
      { k: "TESTS", v: "63" },
      { k: "LICENSE", v: "APACHE 2.0" },
      { k: "BLUEPRINT LAYERS", v: "7/7" },
    ],
  },
  {
    idx: "04",
    code: "BLUEPRINT",
    name: "Agentic Blueprint",
    sub: "Master AI architecture for a Big Six firm in the Netherlands",
    desc: "The strategy layer. A two lane platform: a sovereign internal lane on open weight models running in the EU for confidential client work, and an external Azure lane for productized services. Both share one data layer, MCP orchestration, and a glass box governance plane driven by the EU AI Act, NIS2 and DORA.",
    cls: "ENTERPRISE",
    status: "RESEARCH COMPLETE",
    stack: ["MCP", "vLLM", "Azure AI Foundry", "EU AI Act", "NIS2 / DORA"],
    metrics: [
      { k: "LANES", v: "2" },
      { k: "GOVERNANCE", v: "GLASS BOX" },
      { k: "REF. IMPL.", v: "SHIPPED" },
    ],
  },
  {
    idx: "05",
    code: "DAEMON-OS",
    name: "Daemon OS",
    sub: "A wearable OS you drive with pinch gestures and voice",
    desc: "An Iron Man style HUD. ESP32-S3 camera glasses stream your point of view, a Raspberry Pi 5 runs MediaPipe hand tracking and object detection and renders the shell in pure black, transparent on the combiner. Radial pinch menus sized for jittery tracking, AR world annotation with temporal stabilization, and a lens safe layout mode that survives 46 degree optics. Fully offline vendored.",
    cls: "WEARABLE",
    status: "SHELL VERIFIED · AWAITING GLASSES",
    stack: ["ESP32-S3", "Raspberry Pi 5", "MediaPipe", "Three.js", "WebSockets"],
    metrics: [
      { k: "INPUT SOURCES", v: "3" },
      { k: "GESTURE MENU", v: "7 WAY RADIAL" },
      { k: "CDN AT RUNTIME", v: "0" },
    ],
  },
  {
    idx: "06",
    code: "DAEMON-DECK",
    name: "Daemon Deck",
    sub: "Cyberpunk command deck with an always on resident AI",
    desc: "The Mac mini turned netrunner deck. NETMIND is an always on local AI with skills, semantic memory and the honesty to hand hard problems to a frontier model. FORGE is a holographic 3D editor, WORLD a live news globe, and an amber CRT remote terminal is reachable from anywhere over a private mesh. Shipped as a native Swift daemon with a menu bar controller and an iOS client.",
    cls: "PERSONAL",
    status: "ALWAYS ON",
    stack: ["Swift / SwiftNIO", "Python", "Ollama", "Tailscale", "xterm.js"],
    metrics: [
      { k: "RESIDENT TOOLS", v: "15" },
      { k: "SKILLS", v: "8" },
      { k: "UPTIME MODEL", v: "LAUNCHD" },
    ],
  },
  {
    idx: "07",
    code: "JARVIS",
    name: "Jarvis Voice",
    sub: "Always on voice agent with full access to the machine",
    desc: "Wake word listening on a broadcast mic, whisper.cpp ears, a Claude mind with real tool access to the machine, and a British Kokoro voice with a comms filter timbre. Three tier persistent memory, daily transcripts, and the same persona on Mac, web and iPhone. Five launchd agents keep it alive across reboots.",
    cls: "PERSONAL",
    status: "ALWAYS LISTENING",
    stack: ["whisper.cpp", "Claude", "Kokoro TTS", "launchd", "aiohttp"],
    metrics: [
      { k: "DAEMONS", v: "5" },
      { k: "MEMORY TIERS", v: "3" },
      { k: "SURFACES", v: "MAC · WEB · IOS" },
    ],
  },
  {
    idx: "08",
    code: "HIT-COCKPIT",
    name: "HIT Cockpit",
    sub: "Fully local agent suite for a Dutch import wholesaler",
    desc: "Four agents for a family wholesaler: invoice reconciliation, margin guard, SKU content factory and a seasonal buying analyst, all in plain Dutch for owners who are not technical. The sovereignty rules live in the architecture itself. Euros always come from SQL and the LLM only narrates them, every number is click traceable to its source row, and supplier prices never leave the building.",
    cls: "CLIENT",
    status: "PHASE 0 + SHELL LIVE",
    stack: ["FastAPI", "React", "SQLite", "Ollama", "Vite"],
    metrics: [
      { k: "AGENTS", v: "4" },
      { k: "DEMO ROWS", v: "~5,500" },
      { k: "EXTERNAL CALLS", v: "0" },
    ],
  },
  {
    idx: "09",
    code: "STRIDE",
    name: "Stride Console",
    sub: "AI marketing machine where a human presses publish",
    desc: "A LinkedIn content engine with seven recipes, a voice gate linter that every draft must pass, weekly pre generation on a schedule, an event engine, a source radar sweeping 19 feeds, and a PWA plus iOS shell. The machine drafts everything and a human presses publish.",
    cls: "CLIENT",
    status: "LIVE · 65 TESTS",
    stack: ["Next.js 16", "Tailwind v4", "TypeScript", "PWA", "launchd"],
    metrics: [
      { k: "RECIPES", v: "7" },
      { k: "SOURCES SWEPT", v: "19" },
      { k: "AUTO POSTS", v: "0 BY DESIGN" },
    ],
  },
  {
    idx: "10",
    code: "CPI-MOTOR",
    name: "CPI Marketing Motor",
    sub: "A language model running inside the browser tab",
    desc: "Handover content engine where the LLM runs in the browser via WebGPU, a custom MLC build of a 2.7B Dutch model, with a hardware preflight that tiers down across four model sizes before falling back gracefully. No server, no API keys, no data leaving the machine. Live on Vercel.",
    cls: "CLIENT",
    status: "LIVE ON VERCEL",
    stack: ["WebLLM / MLC", "WebGPU", "Fietje 2.7B", "Vanilla JS", "Vercel"],
    metrics: [
      { k: "MODEL TIERS", v: "4" },
      { k: "SERVER INFERENCE", v: "NONE" },
      { k: "LANGUAGE", v: "DUTCH" },
    ],
  },
  {
    idx: "11",
    code: "PI-NETRUNNER",
    name: "Pi Netrunner",
    sub: "Pocket cyberpunk deck on a 3.5 inch TFT",
    desc: "A Raspberry Pi 5 with a resistive touchscreen running a hand built curses OS: tile launcher, recon toolkit, live world map traffic visualizer, tmux as window manager, dock and undock profiles for HDMI. The project that started the whole netrunner aesthetic.",
    cls: "HARDWARE",
    status: "DAILY DRIVER",
    stack: ["Python curses", "i3", "tmux", "nmap / nuclei", "480×320 TFT"],
    metrics: [
      { k: "APP TILES", v: "12" },
      { k: "DISPLAY", v: "480×320" },
      { k: "GPU", v: "NONE, PURE TTY" },
    ],
  },
];

export const STATS = [
  { value: 11, suffix: "", label: "SYSTEMS SHIPPED", note: "30 days" },
  { value: 786, suffix: "", label: "TESTS GREEN", note: "553+105+63+65" },
  { value: 5, suffix: "", label: "ALWAYS ON DAEMONS", note: "launchd" },
  { value: 100, suffix: "%", label: "LOCAL INFERENCE", note: "client data path" },
];

export const TICKER = [
  "LOCAL INFERENCE",
  "HASH CHAINED AUDIT",
  "MEDIAPIPE HANDS",
  "WHISPER.CPP",
  "KOKORO TTS",
  "EU AI ACT",
  "WEBGPU",
  "TAILSCALE MESH",
  "PINCH RADIAL MENUS",
  "ANTI FABRICATION INTERLOCKS",
  "SSE RUN TRACES",
  "ALWAYS ON",
  "SOVEREIGN DATA",
  "ZERO CLOUD CALLS",
];

export const ARSENAL: { group: string; items: string[] }[] = [
  {
    group: "MODELS",
    items: ["qwen3", "hermes3", "whisper", "Kokoro", "Fietje 2.7B", "llava", "Claude"],
  },
  {
    group: "RUNTIMES",
    items: ["Ollama", "WebLLM / MLC", "whisper.cpp", "WebGPU", "vLLM"],
  },
  {
    group: "LANGUAGES",
    items: ["Python", "TypeScript", "Swift", "C++ (ESP32)", "SQL"],
  },
  {
    group: "PLATFORM",
    items: [
      "Next.js",
      "FastAPI",
      "ChromaDB",
      "SQLite",
      "Three.js",
      "MediaPipe",
      "SwiftNIO",
      "Tailscale",
      "launchd",
      "Raspberry Pi",
      "ESP32-S3",
    ],
  },
];

export const CONTACT = {
  email: "sarveshsingh740@gmail.com",
  github: "https://github.com/Starfish124",
};
