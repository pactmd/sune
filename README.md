<div align="center">

![Banner for PACT](assets/pact-banner-transparent.svg)

Let's make a pact

---

[![Releases](https://img.shields.io/github/v/release/pactmd/sune)](https://github.com/pactmd/sune/releases)
[![License](https://img.shields.io/github/license/pactmd/sune)](LICENSE)

</div>

The Paper Adventure Companion Tools (or PACT) are a collection of tools that seek to put the control of digital character sheets back into the players hands.

This is [Sune](https://forgottenrealms.fandom.com/wiki/Sune), PACT's offline-first GUI, aiming to put **your** files back on **your** computer.

#### Planned Features:

- [ ] Character sheet management
- [ ] Movable dynamic sheet elements
- [ ] Markdown style text editor
- [ ] Connection to federated backend

#### Installing

Pre-built packages for Windows, macOS and Linux are found on the [Releases](https://github.com/pactmd/sune/releases) page.

#### Developing Requirements

All dependencies for developing should be covered by [Tauri](https://v2.tauri.app/) in their [Prerequisites Page](https://v2.tauri.app/start/prerequisites/).

#### Build

Clone the repository and run on the root folder:
```
cargo tauri dev
```