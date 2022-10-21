# ERC Place - Tools for ERCs
(Formerly Sharepoint++)

Migrating to (?) as full stack web app.
Refactored front end to React.
Adding socket.io for live syncing, updates, and chat capability.

---

## DiversionLive
### An app to coordinate information and communication during diversion events

- Use obstruction plan finder to determine plan number.
- See info on plan.
- Add event details.
- Initiate diversion starts clock, opens DiversionLive section.

- Action suggestions are populated based on event details and completed actions.
- Action suggestions include train troubleshooting guides and work instruction procdures.
- Completed actions logged and editable, viewable in real time.
- Chat box for questions to and within controller group.
- Populate emails based on completed actions.
- Log filterable for paper book entries, per desk, etc.
- Database query-able for past incidents.
- State persist throughout ERC.Place, across refreshes.

---

## ATS

### Train control simulator

This is a simulation of the Automatic Train Control simulator
 - Online and can be available on any computer.
 - Will hopefully work as an obstruction plan animation.

#### 1.0 - Proof of Concept - 2022-06-15

At the point now where it looks reasonably realistic and there is some basic functionality.
Working interactive features include: station hold/close, track close, system hold/power.
The trains run line 1 without overlapping, and the signals and switches operate at the terminus stations.
The rest of the signals don't work yet, and only one platform is used at the termini.

#### 1.1 - Multi-File - 2022-06-23

Converted to a multi-file repository. Working on modifying DOM (alarms) with js.
Added train EB visual and functionality.

#### 2.0 - Diversions

In progress, on hold.

---

## Obstruction Plan Finder

A user-friendly obstruction plan tool for general use.

- No special training or knowledge required.
- Fast to use
- Provide visual of obstruction plan as well as simple description with more details available if needed
- Includes PA/PIDS info
- Includes customer service info

Merged into DiversionLive

---

## IOS Code Reference

Easy to find details and severity of IOS codes

- Color-coded
- Includes descriptions and notes

---

## Sharepoint++

A single page to access all ERC resources

- Links to access-controlled documents for security
- Easily searchable
- Dark mode preferece detection
- Live weather

---

## Diversion Checklist

A simple and quick checklist for diversions

- Timestamps when checked
- A couple items for Comms and SCADA
