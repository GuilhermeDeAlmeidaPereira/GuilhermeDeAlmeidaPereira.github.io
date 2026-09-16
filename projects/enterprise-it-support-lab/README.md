# Enterprise IT Support Lab

An interactive, browser-based L1 desktop-support simulation by **Guilherme de Almeida Pereira**, Brisbane, Australia.

- [Open the public lab](https://guilhermedealmeidapereira.github.io/projects/enterprise-it-support-lab/)
- [View my portfolio](https://guilhermedealmeidapereira.github.io/#projects)
- [Guia passo a passo em português](GUIA_PT-BR.md)

## Purpose

Practise structured incident handling: read the report, establish impact, investigate the evidence, document the work, and choose a suitable resolution or escalation. The project brings together front-end development and service desk workflows. It is a personal learning project with fictional users and devices.

## Try it in two minutes

1. Select **Connected to Wi-Fi but websites will not load** (`INC0018446`).
2. Select **Confirm scope**, **Run ipconfig /all**, and **Test gateway and DNS**. Read each result in **Activity & evidence**.
3. Explain the diagnosis in a work note: IP connectivity works, but a stale manually configured DNS server prevents hostname resolution.
4. Select **Restore automatic DNS**. The simulated result confirms that name resolution and browsing work again.
5. Select **Resolve ticket**, review the closure code and resolution notes, and confirm.
6. Reload the page: your progress remains in this browser. The reset button starts a fresh session after confirmation.

## Included cases

| Ticket | Scenario | Intended learning outcome |
| --- | --- | --- |
| INC0018427 | Windows login rejected after a password change | Verify identity; distinguish lockout, cached credentials and corporate connectivity |
| INC0018431 | Shared printer offline for an entire floor | Compare printer and queue IP addresses; gather evidence and escalate to Network Operations |
| INC0018440 | Teams room has video but no speaker audio | Check output selection and validate two-way audio while limiting meeting disruption |
| INC0018446 | Wi-Fi connected but websites fail | Separate routing from DNS resolution and validate recovery |
| REQ0006724 | Move and configure a new starter's workstation | Practise approval, stock, managed-build, installation and asset-handover checks |
| INC0018453 | USB-C dock detects keyboard but not monitors | Isolate the dock/display problem, apply the simulated firmware fix and validate peripherals |

Priorities and diagnostic results belong to these fictional scenarios. Real actions must follow the organisation's procedures, permissions and change controls.

## What works

- Six predefined tickets with search and status/priority filters.
- Diagnostic actions with written results and feedback for unsuitable actions.
- Work notes, an activity history and associated device information.
- Resolution enabled after the required diagnostic actions have been selected.
- Escalation with a recorded destination and diagnostic-completeness feedback.
- Closure codes, editable resolution notes and browser-local progress.
- A responsive interface and a project overview.

## Scope and current limitations

- This is a simulation. Buttons show authored diagnostic results; they do not run commands or modify real devices, accounts, printers or networks.
- The ticket workflow is inspired by ITSM tools. There is no ServiceNow, Active Directory, Intune, Teams, Zoom or Webex integration.
- Teams audio is the implemented meeting-room case. There are no dedicated Zoom or Webex cases in this version.
- Tickets are predefined; the app has no new-ticket form, shared backend, account system or cross-device synchronisation.
- Asset details are displayed as scenario data. The IMACD actions record simulated updates; there is no editable inventory database.
- SLA values are illustrative labels, not live countdowns. Knowledge-base buttons display a notification; full articles are not implemented.
- Required actions form a simple completion checklist; the app does not grade every action sequence or judge free-text notes. It also permits resolving the printer case after the checklist, even though escalation is the intended exercise.
- Every visitor works on a separate browser-local session. Clearing site data removes progress, and progress on the Sites and GitHub Pages addresses is separate.

## Technology and files

| File | Responsibility |
| --- | --- |
| `index.html` | Page structure, navigation and project overview |
| `styles.css` | Layout, component styling and responsive behaviour |
| `app.js` | Scenario data, rendering, interactions and localStorage persistence |

There are no build dependencies, API keys or server components. The browser stores progress under `enterprise-support-lab-v1` in localStorage.

## Run locally

Serve this folder with VS Code Live Server, or run the following from this directory if Python is installed:

```sh
python -m http.server 8000
```

Then open `http://localhost:8000`. Use a local server for consistent browser storage behaviour.

## Hosting

The public demo above is already hosted. The source is also included in the portfolio's GitHub Pages repository at `projects/enterprise-it-support-lab/`, so the same static files can be served at:

`https://guilhermedealmeidapereira.github.io/projects/enterprise-it-support-lab/`

A custom domain is optional. To move this into a standalone project repository later, copy this directory's contents into that repository's root and configure GitHub Pages to publish the main branch and root folder. No application-code changes are needed.

## Manual acceptance checks

| Check | Expected result |
| --- | --- |
| Fresh browser session | Six tickets; no completed actions or notes |
| Select and search tickets | Correct ticket details and matching queue results |
| Attempt early resolution | Resolve remains disabled until required actions are completed |
| Complete and resolve the DNS case | Correct evidence, closure notes and Resolved status |
| Diagnose and escalate the printer case | Network Operations escalation appears in the activity history |
| Add a note and reload | Note, actions and status remain available in the same browser |
| Open in a different browser/private window | An independent fresh session |
| Reset, then cancel | Existing progress remains |
| Reset, then confirm | All tickets return to their initial state |
| Narrow mobile viewport | Queue, controls and ticket details remain usable |

## Demonstrating the project

Show one resolved incident and one justified escalation. Explain what you investigated, why each step was appropriate, what evidence changed your diagnosis, and how you communicated the result. Treat this as evidence of learning and reasoning; do not present simulated actions as production infrastructure administration.
