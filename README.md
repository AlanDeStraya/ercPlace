# ERC Place - Tools for ERCs
(Formerly Sharepoint++)

Migrating to Heroku(Digital ocean?) as full stack web app.
Refactoring front end to React.
Adding sockets for live syncing, updates, and chat capability.

## To-Do:
- reduce main page components
- finder js
- esc to close popups (on sharepoint only?)
- radar map
- comms card
- in diversion app comms side announcement timer
- cad section/option tree
- diversion all staff broadcast script
- diversion > log > filterable; preformatted for email, cad; filter for written log

- EMS call questions
- logs => prewrite comms emails?
- auto select number of trains for obstruction plan finder based on date and time
- swap ercplace h2 and ul L margins, set popup h3 back to h2
- refactor IOS reference to React with single location for code description
- match table colors for dark mode, consider fire docs element colors
- npm 6 high severity vulnerabilities

## Questions:
- Which host, Heroku or Digital Ocean?
- Where to install modules/dependencies?

## Final cleanup:
- sort imports consistently
- remove test log statements
- consistent formatting

---

## ERC Place Diversion App
### Based on diversion checklist

- Login/auth
- Initiate diversion -> plan finder, broadcast alert, start clock
- Clock -> top right, change color at key times
- Initial screen mainline, switch to comms or SCADA on sides
- Chat box in corner
- Stream - log at top and suggestions below
    * Tech requested -> ETA -> arrival
    * Track authority -> cancellation

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

In progress

---

## Obstruction Plan Finder

A user-friendly obstruction plan tool for general use.

- No special training or knowledge required.
- Fast to use
- Provide visual of obstruction plan as well as simple description with more details available if needed
- Includes PA/PIDS info
- Includes customer service info

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
