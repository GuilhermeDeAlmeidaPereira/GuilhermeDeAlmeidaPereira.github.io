const TICKETS = [
  {
    id: "INC0018427",
    title: "Windows login rejected after password change",
    requester: "Amelia Chen",
    initials: "AC",
    department: "Finance",
    priority: "P2",
    type: "Incident",
    category: "Identity & Access",
    channel: "Phone",
    opened: "8 min ago",
    sla: "22 min",
    os: "Windows 11 Enterprise",
    description: "Amelia changed her domain password this morning. Outlook works on her phone, but her laptop says the password is incorrect and has now locked the account.",
    symptoms: ["User is at the corporate login screen", "Laptop was working offsite yesterday", "Mobile Outlook still receives email"],
    asset: { name: "Dell Latitude 5440", tag: "BNE-LT-0842", serial: "DL5440-7K2P", owner: "Amelia Chen", location: "BNE · L12", health: "Compliant" },
    actions: [
      { id: "verify", icon: "ID", label: "Verify identity", sub: "Confirm caller and callback details", result: "Identity verified using employee ID and registered callback number.", required: true },
      { id: "network", icon: "NW", label: "Check network at sign-in", sub: "Validate corporate connectivity", result: "Laptop is connected to guest Wi-Fi. Domain controller is not reachable from this network.", required: true },
      { id: "unlock", icon: "AD", label: "Unlock account", sub: "Check directory lockout status", result: "Account was locked after repeated attempts. Account unlocked in directory services.", required: true },
      { id: "cache", icon: "PW", label: "Test cached credentials", sub: "Compare old and new password", result: "Old cached password works offline; new password requires corporate network sync.", required: false },
      { id: "vpn", icon: "VPN", label: "Use pre-logon VPN", sub: "Synchronise the new credential", result: "Pre-logon VPN connected. New domain credential validated and cached successfully.", required: true },
      { id: "reimage", icon: "OS", label: "Reimage laptop", sub: "Reinstall managed Windows image", result: "Reimaging is not justified; identity and connectivity checks should be completed first.", required: false, poor: true }
    ],
    resolution: "Account unlocked and password synchronised over pre-logon VPN",
    knowledge: ["KB0012 · Password lockout workflow", "KB0048 · Pre-logon VPN guide"]
  },
  {
    id: "INC0018431",
    title: "Shared printer shows offline for entire floor",
    requester: "Noah Williams",
    initials: "NW",
    department: "Operations",
    priority: "P2",
    type: "Incident",
    category: "Printing",
    channel: "Portal",
    opened: "17 min ago",
    sla: "13 min",
    os: "Windows 10 Enterprise",
    description: "Users on level 9 cannot print to BNE-L09-MFP01. Jobs remain queued and the device appears offline from multiple workstations.",
    symptoms: ["Impact confirmed across 14 users", "Printer display shows Ready", "Secure print queue is accumulating jobs"],
    asset: { name: "Canon imageRUNNER ADV", tag: "BNE-PR-0091", serial: "CN-49318A", owner: "Shared Device", location: "BNE · L09", health: "Reachability issue" },
    actions: [
      { id: "scope", icon: "US", label: "Confirm impact", sub: "Check users and adjacent devices", result: "Fourteen users affected; alternate floor printer remains available.", required: true },
      { id: "ping", icon: "IP", label: "Ping printer IP", sub: "Test basic network reachability", result: "10.24.9.41 does not respond. Printer panel now reports 10.24.9.87.", required: true },
      { id: "port", icon: "TCP", label: "Inspect print port", sub: "Compare queue port and device IP", result: "Print server queue still points to old address 10.24.9.41.", required: true },
      { id: "spool", icon: "SP", label: "Restart print spooler", sub: "Clear stalled local jobs", result: "Spooler restarted, but the shared queue remains offline because the server port is incorrect.", required: false },
      { id: "reserve", icon: "DH", label: "Check DHCP reservation", sub: "Validate fixed printer address", result: "Reservation was removed during switch migration. Network team ownership confirmed.", required: true },
      { id: "driver", icon: "DR", label: "Reinstall user driver", sub: "Replace local print package", result: "Device-wide impact indicates this is not a single-user driver issue.", required: false, poor: true }
    ],
    escalationExpected: true,
    escalationGroup: "Network Operations",
    resolution: "Escalate for DHCP reservation and print-server port correction",
    knowledge: ["KB0121 · Shared printer triage", "KB0177 · Network device IP standards"]
  },
  {
    id: "INC0018440",
    title: "Teams room has video but no speaker audio",
    requester: "Sofia Martin",
    initials: "SM",
    department: "Executive Services",
    priority: "P1",
    type: "Incident",
    category: "Meeting Room AV",
    channel: "Walk-up",
    opened: "4 min ago",
    sla: "11 min",
    os: "Windows 11 IoT",
    description: "The 10:30 executive call is connected in Banksia Room. Remote video is visible, but no sound is coming from the room speakers. Microphone input appears normal.",
    symptoms: ["Call is currently in progress", "Remote participants can hear the room", "Room speakers worked earlier today"],
    asset: { name: "Logitech Teams Room", tag: "BNE-AV-0037", serial: "LTR-92A4Q", owner: "Facilities AV", location: "Banksia · L14", health: "Online" },
    actions: [
      { id: "impact", icon: "!", label: "Set high-impact priority", sub: "Record executive meeting impact", result: "Priority confirmed as P1 with immediate response and live user updates.", required: true },
      { id: "output", icon: "AU", label: "Check output device", sub: "Inspect Teams device settings", result: "Teams selected the display's HDMI audio instead of the room speakerphone.", required: true },
      { id: "speaker", icon: "SPK", label: "Select room speakers", sub: "Switch to certified AV output", result: "Logitech Tap Speaker selected; test tone is audible.", required: true },
      { id: "test", icon: "✓", label: "Run test call", sub: "Validate two-way room audio", result: "Two-way audio and content sharing validated with the organiser.", required: true },
      { id: "restart", icon: "↻", label: "Restart room system", sub: "Reboot during live meeting", result: "A restart would disrupt the active executive call and is not the least-impact action.", required: false, poor: true },
      { id: "webex", icon: "WX", label: "Open Webex diagnostics", sub: "Troubleshoot another platform", result: "Current meeting is in Teams; Webex diagnostics are not relevant to this incident.", required: false, poor: true }
    ],
    resolution: "Correct Teams room audio output selected and test call passed",
    knowledge: ["KB0204 · Teams Rooms audio checklist", "KB0207 · Executive AV incident response"]
  },
  {
    id: "INC0018446",
    title: "Connected to Wi-Fi but websites will not load",
    requester: "Liam O'Connor",
    initials: "LO",
    department: "Sales",
    priority: "P3",
    type: "Incident",
    category: "Network Connectivity",
    channel: "Chat",
    opened: "26 min ago",
    sla: "1 h 34 min",
    os: "Windows 11 Enterprise",
    description: "Laptop shows connected to CORP-WIFI with full signal. Teams is reconnecting and all websites time out. Other users nearby are online.",
    symptoms: ["Single user affected", "Valid corporate Wi-Fi connection", "Issue began after returning from a client site"],
    asset: { name: "HP EliteBook 840 G10", tag: "BNE-LT-1164", serial: "HP84-8Q21", owner: "Liam O'Connor", location: "BNE · L08", health: "Compliant" },
    actions: [
      { id: "scope", icon: "US", label: "Confirm scope", sub: "Compare nearby users", result: "Other users on CORP-WIFI are online. Incident is isolated to this endpoint.", required: true },
      { id: "ipconfig", icon: "IP", label: "Run ipconfig /all", sub: "Inspect addressing and DNS", result: "Valid DHCP address and gateway. DNS is manually set to an unreachable client-site server.", required: true },
      { id: "ping", icon: "NW", label: "Test gateway and DNS", sub: "Separate routing from name resolution", result: "Gateway and 1.1.1.1 respond; hostnames fail to resolve.", required: true },
      { id: "dns", icon: "DNS", label: "Restore automatic DNS", sub: "Reset adapter configuration", result: "DNS returned to DHCP-provided servers. nslookup and browsing now succeed.", required: true },
      { id: "renew", icon: "DH", label: "Release / renew DHCP", sub: "Request a fresh lease", result: "Lease renewed, but manual DNS configuration remains until corrected.", required: false },
      { id: "adapter", icon: "HW", label: "Replace Wi-Fi adapter", sub: "Order replacement hardware", result: "Hardware replacement is not supported by current evidence; radio and gateway connectivity work.", required: false, poor: true }
    ],
    resolution: "Removed stale static DNS and restored DHCP-provided configuration",
    knowledge: ["KB0063 · Windows connectivity triage", "KB0081 · DNS diagnostic commands"]
  },
  {
    id: "REQ0006724",
    title: "Move and configure workstation for new starter",
    requester: "Priya Sharma",
    initials: "PS",
    department: "People & Culture",
    priority: "P4",
    type: "Service Request",
    category: "IMACD",
    channel: "Catalog",
    opened: "2 h ago",
    sla: "1 day",
    os: "Windows 11 Enterprise",
    description: "Prepare and move a standard workstation from stock to desk 11.042 for a new starter arriving Monday. Include dual monitors, dock, keyboard, mouse, and asset handover.",
    symptoms: ["Manager approval attached", "User account and licence already provisioned", "Desk has power and network points"],
    asset: { name: "Lenovo ThinkPad T14 Gen 4", tag: "STK-LT-0288", serial: "PF4K-228A", owner: "IT Stock", location: "BNE · Storeroom", health: "Ready for deployment" },
    actions: [
      { id: "approval", icon: "✓", label: "Verify request approval", sub: "Check manager and catalogue data", result: "Manager approval, cost centre, user ID, and target location verified.", required: true },
      { id: "stock", icon: "AS", label: "Reserve stock assets", sub: "Laptop, dock and peripherals", result: "Laptop, USB-C dock, two monitors, keyboard, and mouse reserved in asset inventory.", required: true },
      { id: "build", icon: "OS", label: "Validate managed build", sub: "Check patches and standard apps", result: "Autopilot build complete, BitLocker escrowed, patches current, and standard apps installed.", required: true },
      { id: "install", icon: "IM", label: "Install and cable desk", sub: "Complete move and EHS check", result: "Desk installed, cables secured, display layout set, and safety check completed.", required: true },
      { id: "handover", icon: "ID", label: "Update ownership", sub: "Record CI and user handover", result: "CMDB location and owner updated; handover checklist prepared for the new starter.", required: true },
      { id: "dispose", icon: "X", label: "Retire the laptop", sub: "Mark asset for disposal", result: "Asset is deployment-ready and must not be retired.", required: false, poor: true }
    ],
    resolution: "Workstation installed, validated, and CMDB ownership updated",
    knowledge: ["KB0302 · New starter IMACD checklist", "KB0310 · Asset custody and handover"]
  },
  {
    id: "INC0018453",
    title: "USB-C dock detects keyboard but not monitors",
    requester: "Ethan Brooks",
    initials: "EB",
    department: "Legal",
    priority: "P3",
    type: "Incident",
    category: "Peripherals",
    channel: "Portal",
    opened: "41 min ago",
    sla: "1 h 19 min",
    os: "Windows 10 Enterprise",
    description: "After returning to the office, both external monitors show No Signal through the USB-C dock. Keyboard, mouse, Ethernet, and laptop charging all work.",
    symptoms: ["Two displays affected", "Dock USB and power functions work", "Displays work when connected directly by HDMI"],
    asset: { name: "Dell WD19S Dock", tag: "BNE-DK-0715", serial: "WD19-71FQ", owner: "Ethan Brooks", location: "BNE · L10", health: "Firmware review due" },
    actions: [
      { id: "cables", icon: "CB", label: "Reseat display cables", sub: "Check dock and monitor ends", result: "DisplayPort cables reseated. Monitors still report No Signal.", required: true },
      { id: "detect", icon: "DP", label: "Check Display Settings", sub: "Force display detection", result: "Windows detects only the internal panel; no external EDID data is reported.", required: true },
      { id: "power", icon: "PWR", label: "Power-cycle dock", sub: "Discharge and reconnect", result: "Dock power reset completed. USB remains available, but displays are still absent.", required: false },
      { id: "firmware", icon: "FW", label: "Update dock firmware", sub: "Apply approved WD19S package", result: "Outdated MST firmware updated. Both monitors are now detected at native resolution.", required: true },
      { id: "validate", icon: "✓", label: "Validate peripherals", sub: "Test displays, USB, LAN and power", result: "Dual displays, charging, Ethernet, keyboard, and mouse all pass testing.", required: true },
      { id: "monitors", icon: "HW", label: "Replace both monitors", sub: "Swap display hardware", result: "Both monitors pass direct HDMI testing; replacing them would not address the dock firmware fault.", required: false, poor: true }
    ],
    resolution: "Updated dock MST firmware and validated all connected peripherals",
    knowledge: ["KB0146 · USB-C dock troubleshooting", "KB0148 · Approved Dell dock firmware"]
  }
];

const STORAGE_KEY = "enterprise-support-lab-v1";
const defaultState = () => ({
  selectedId: TICKETS[0].id,
  tickets: Object.fromEntries(TICKETS.map(ticket => [ticket.id, { status: "Open", actions: [], logs: [], notes: [] }]))
});

let state = loadState();
let searchTerm = "";
let filterValue = "all";

const listEl = document.querySelector("#ticket-list");
const workbenchEl = document.querySelector("#ticket-workbench");
const toastEl = document.querySelector("#toast");

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved?.tickets) return defaultState();
    const fresh = defaultState();
    return {
      selectedId: TICKETS.some(t => t.id === saved.selectedId) ? saved.selectedId : fresh.selectedId,
      tickets: Object.fromEntries(TICKETS.map(t => [t.id, { ...fresh.tickets[t.id], ...(saved.tickets[t.id] || {}) }]))
    };
  } catch { return defaultState(); }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  updateSummary();
}

function ticketState(id) { return state.tickets[id]; }
function selectedTicket() { return TICKETS.find(t => t.id === state.selectedId); }
function escapeHtml(value) {
  return String(value).replace(/[&<>"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char]));
}
function nowLabel() { return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }); }

function updateSummary() {
  const statuses = Object.values(state.tickets).map(t => t.status);
  document.querySelector("#open-count").textContent = statuses.filter(s => s === "Open").length;
  document.querySelector("#resolved-count").textContent = statuses.filter(s => s === "Resolved").length;
  document.querySelector("#sla-count").textContent = TICKETS.filter(t => ["P1", "P2"].includes(t.priority) && ticketState(t.id).status === "Open").length;
}

function renderQueue() {
  const filtered = TICKETS.filter(ticket => {
    const s = ticketState(ticket.id);
    const textMatch = `${ticket.id} ${ticket.title} ${ticket.requester} ${ticket.category}`.toLowerCase().includes(searchTerm.toLowerCase());
    const filterMatch = filterValue === "all" ||
      (filterValue === "open" && s.status !== "Resolved") ||
      (filterValue === "resolved" && s.status === "Resolved") ||
      (filterValue === "priority" && ["P1", "P2"].includes(ticket.priority));
    return textMatch && filterMatch;
  });
  document.querySelector("#queue-total").textContent = filtered.length;
  listEl.innerHTML = filtered.length ? filtered.map(ticket => {
    const s = ticketState(ticket.id);
    return `<button class="ticket-card ${ticket.id === state.selectedId ? "active" : ""} ${s.status === "Resolved" ? "resolved" : ""}" data-ticket-id="${ticket.id}">
      <div class="ticket-card-top"><span class="ticket-id">${ticket.id}</span><span>${ticket.opened}</span></div>
      <h3>${ticket.title}</h3>
      <div class="ticket-card-bottom">
        <span class="user-chip"><span class="avatar">${ticket.initials}</span>${ticket.requester}</span>
        <span class="priority ${ticket.priority.toLowerCase()}">${s.status === "Resolved" ? "Closed" : ticket.priority}</span>
      </div>
    </button>`;
  }).join("") : `<div class="empty-state"><p>No tickets match this view.</p></div>`;
}

function renderWorkbench() {
  const ticket = selectedTicket();
  const s = ticketState(ticket.id);
  const allRequired = ticket.actions.filter(a => a.required).every(a => s.actions.includes(a.id));
  const stateClass = s.status.toLowerCase();
  const actionsHtml = ticket.actions.map(action => {
    const used = s.actions.includes(action.id);
    return `<button class="diagnostic-action ${used ? "used" : ""}" data-action-id="${action.id}" ${used || s.status === "Resolved" ? "disabled" : ""}>
      <span class="action-icon">${used ? "✓" : action.icon}</span>
      <span><strong>${action.label}</strong><small>${used ? "Completed" : action.sub}</small></span>
    </button>`;
  }).join("");
  const logsHtml = s.logs.length ? [...s.logs].reverse().map(log => `<div class="log-item ${log.evidence ? "evidence" : ""}">
    <strong>${escapeHtml(log.title)}</strong><p>${escapeHtml(log.text)}</p><time>${escapeHtml(log.time)} · Guilherme Pereira</time>
  </div>`).join("") : `<p class="empty-log">No investigation activity yet. Choose an action above to begin.</p>`;
  const notesHtml = s.notes.map(note => `<div class="log-item evidence"><strong>Technician work note</strong><p>${escapeHtml(note.text)}</p><time>${escapeHtml(note.time)} · Guilherme Pereira</time></div>`).join("");

  workbenchEl.innerHTML = `
    <div class="workbench-top">
      <div class="ticket-title-wrap">
        <div><span>${ticket.id}</span><span>·</span><span class="state-badge ${stateClass}">${s.status}</span></div>
        <h2>${ticket.title}</h2>
      </div>
      <div class="top-actions">
        <button class="button" id="escalate-ticket" ${s.status === "Resolved" || s.status === "Escalated" ? "disabled" : ""}>Escalate</button>
        <button class="button primary" id="resolve-ticket" ${s.status === "Resolved" || !allRequired ? "disabled" : ""}>Resolve ticket</button>
      </div>
    </div>
    <div class="workbench-scroll">
      <div class="ticket-meta">
        <div><span>Requester</span><strong>${ticket.requester}</strong></div>
        <div><span>Type</span><strong>${ticket.type}</strong></div>
        <div><span>Priority</span><strong>${ticket.priority}</strong></div>
        <div><span>Category</span><strong>${ticket.category}</strong></div>
        <div><span>SLA remaining</span><strong>${ticket.sla}</strong></div>
      </div>
      <div class="workbench-grid">
        <div class="primary-column">
          <div class="detail-block">
            <span class="detail-label">User report</span>
            <div class="description-card"><p>${ticket.description}</p><ul class="symptom-list">${ticket.symptoms.map(x => `<li>${x}</li>`).join("")}</ul></div>
          </div>
          <div class="detail-block">
            <h3>Investigation actions</h3>
            <div class="action-grid">${actionsHtml}</div>
          </div>
          <div class="detail-block">
            <h3>Activity & evidence</h3>
            <div class="activity-log">${notesHtml}${logsHtml}</div>
          </div>
        </div>
        <aside class="side-column">
          <div class="side-card">
            <h3>Configuration item</h3>
            <div class="asset-card">
              <div class="asset-visual" aria-hidden="true">▰</div>
              <div class="asset-body">
                <strong>${ticket.asset.name}</strong>
                <div class="asset-data">
                  <div><span>Asset tag</span><strong>${ticket.asset.tag}</strong></div>
                  <div><span>Serial</span><strong>${ticket.asset.serial}</strong></div>
                  <div><span>Owner</span><strong>${ticket.asset.owner}</strong></div>
                  <div><span>Location</span><strong>${ticket.asset.location}</strong></div>
                  <div><span>Operating system</span><strong>${ticket.os}</strong></div>
                  <div><span>Channel</span><strong>${ticket.channel}</strong></div>
                </div>
                <div class="health-row"><span>Endpoint status</span><span>● ${ticket.asset.health}</span></div>
              </div>
            </div>
          </div>
          <div class="side-card note-box">
            <h3>Add work note</h3>
            <textarea id="work-note" maxlength="400" placeholder="Record user contact, observations, commands, or next steps…"></textarea>
            <button class="button" id="add-note" ${s.status === "Resolved" ? "disabled" : ""}>Add to activity</button>
          </div>
          <div class="side-card">
            <h3>Related knowledge</h3>
            ${ticket.knowledge.map(k => `<button class="knowledge-link" data-kb="${k}"><span>${k}</span><span>↗</span></button>`).join("")}
          </div>
        </aside>
      </div>
      ${s.status === "Resolved" ? `<div class="completion-banner"><span class="action-icon">✓</span><div><strong>Case resolved</strong><p>${escapeHtml(s.resolution || ticket.resolution)} · Closure documented at ${escapeHtml(s.closedAt || "this session")}</p></div></div>` : ""}
    </div>`;
}

function renderAll() {
  renderQueue();
  renderWorkbench();
  updateSummary();
}

function useAction(actionId) {
  const ticket = selectedTicket();
  const s = ticketState(ticket.id);
  const action = ticket.actions.find(a => a.id === actionId);
  if (!action || s.actions.includes(actionId)) return;
  s.actions.push(actionId);
  s.logs.push({ title: action.label, text: action.result, time: nowLabel(), evidence: action.required && !action.poor });
  saveState();
  renderAll();
  showToast(action.poor ? "Action recorded — reconsider the evidence." : "Evidence added to the ticket.");
}

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toastEl.classList.remove("show"), 2400);
}

function openResolveModal() {
  const ticket = selectedTicket();
  const s = ticketState(ticket.id);
  const modalRoot = document.querySelector("#modal-root");
  modalRoot.innerHTML = `<div class="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="resolve-title">
    <form class="modal" id="resolve-form">
      <h3 id="resolve-title">Resolve ${ticket.id}</h3>
      <p>Choose a closure code and confirm the final resolution. Clear closure notes make the fix reusable and audit-ready.</p>
      <div class="resolution-options">
        <label><input type="radio" name="closure" value="Solved remotely" checked /> Solved remotely</label>
        <label><input type="radio" name="closure" value="Solved onsite" /> Solved onsite</label>
        <label><input type="radio" name="closure" value="Completed request" /> Completed service request</label>
      </div>
      <textarea name="resolution" aria-label="Resolution notes">${escapeHtml(ticket.resolution)}</textarea>
      <div class="modal-actions"><button type="button" class="button" data-close-modal>Cancel</button><button type="submit" class="button primary">Confirm resolution</button></div>
    </form>
  </div>`;
  modalRoot.querySelector("textarea").focus();
  modalRoot.querySelector("[data-close-modal]").addEventListener("click", () => modalRoot.innerHTML = "");
  modalRoot.querySelector(".modal-backdrop").addEventListener("click", e => { if (e.target.classList.contains("modal-backdrop")) modalRoot.innerHTML = ""; });
  modalRoot.querySelector("#resolve-form").addEventListener("submit", e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    s.status = "Resolved";
    s.resolution = `${data.get("closure")}: ${data.get("resolution")}`;
    s.closedAt = nowLabel();
    s.logs.push({ title: "Ticket resolved", text: s.resolution, time: s.closedAt, evidence: true });
    saveState();
    modalRoot.innerHTML = "";
    renderAll();
    showToast("Ticket resolved and progress saved.");
  });
}

function escalateTicket() {
  const ticket = selectedTicket();
  const s = ticketState(ticket.id);
  const requiredDone = ticket.actions.filter(a => a.required).every(a => s.actions.includes(a.id));
  const group = ticket.escalationGroup || (ticket.category === "Meeting Room AV" ? "EUC / AV Support" : "Level 2 EUC Support");
  s.status = "Escalated";
  s.logs.push({
    title: `Escalated to ${group}`,
    text: requiredDone ? "Escalation includes completed diagnostics, observed results, impact, and asset details." : "Escalated before all available L1 diagnostics were captured. Additional evidence may be requested.",
    time: nowLabel(), evidence: requiredDone || ticket.escalationExpected
  });
  saveState();
  renderAll();
  showToast(ticket.escalationExpected && requiredDone ? "Appropriate escalation prepared." : "Escalation recorded in the activity log.");
}

listEl.addEventListener("click", event => {
  const card = event.target.closest("[data-ticket-id]");
  if (!card) return;
  state.selectedId = card.dataset.ticketId;
  saveState();
  renderAll();
  if (window.innerWidth < 760) workbenchEl.scrollIntoView({ behavior: "smooth", block: "start" });
});

workbenchEl.addEventListener("click", event => {
  const action = event.target.closest("[data-action-id]");
  if (action) return useAction(action.dataset.actionId);
  if (event.target.closest("#resolve-ticket")) return openResolveModal();
  if (event.target.closest("#escalate-ticket")) return escalateTicket();
  if (event.target.closest("#add-note")) {
    const input = document.querySelector("#work-note");
    const text = input.value.trim();
    if (!text) return showToast("Write a note before adding it.");
    ticketState(state.selectedId).notes.unshift({ text, time: nowLabel() });
    saveState();
    renderAll();
    return showToast("Work note added.");
  }
  const kb = event.target.closest("[data-kb]");
  if (kb) showToast(`${kb.dataset.kb} opened in the knowledge base.`);
});

document.querySelector("#ticket-search").addEventListener("input", event => { searchTerm = event.target.value; renderQueue(); });
document.querySelector("#ticket-filter").addEventListener("change", event => { filterValue = event.target.value; renderQueue(); });
document.querySelector("#reset-lab").addEventListener("click", () => {
  if (!window.confirm("Reset all ticket progress and start a new lab session?")) return;
  state = defaultState();
  saveState();
  renderAll();
  showToast("Lab session reset.");
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll(".nav-link").forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    }
  });
}, { threshold: .35 });
document.querySelectorAll("main > section").forEach(section => observer.observe(section));

renderAll();
