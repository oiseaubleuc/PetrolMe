<h1 align="center">PetrolMe</h1>
<p align="center">
  <b>Enterprise software suite for the Oil & Gas industry</b><br/>
  An operations management platform for upstream and midstream operators, plus a marketing site for an oil & gas intermediary.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-000000?style=flat-square&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/React-18-20232A?style=flat-square&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Zustand-state-443E38?style=flat-square" />
  <img src="https://img.shields.io/badge/Netlify-deploy-00C7B7?style=flat-square&logo=netlify&logoColor=white" />
</p>

---

## Overview

This repository contains two products:

| Product | What it is | Location |
|---|---|---|
| **Petrolisation OMS** | Operations Management System centralizing production, assets, maintenance, HSE, logistics, inventory and business intelligence | `petrolisation-oms/` |
| **NEXOIL** | Static landing site for an oil & gas intermediary | `index.html` |

## Petrolisation OMS

A full enterprise workspace built as a product demo: one shell, thirteen modules, a consistent design system.

### Modules

| Module | Route | Purpose |
|---|---|---|
| Executive Dashboard | `/` | KPIs, trends and live activity feed |
| Operations | `/operations` | Production monitoring by facility |
| Asset Management | `/assets` | Equipment registry and health |
| Maintenance | `/maintenance` | Work orders and planned maintenance |
| HSE | `/hse` | Health, safety and environment incidents |
| Inventory | `/inventory` | Stock levels and storage |
| Logistics | `/logistics` | Transport and distribution tracking |
| Facilities Map | `/maps` | Geographic view of all sites |
| Analytics | `/analytics` | Business intelligence charts |
| AI Assistant | `/ai` | Operational insights and recommendations |
| Reports | `/reports` | Generated operational reports |
| Document Center | `/documents` | Centralized document management |
| User Management | `/users` | Roles and access |

### Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router, static export) |
| UI | React 18, TypeScript, Tailwind CSS, Lucide icons |
| Motion | Framer Motion |
| State | Zustand |
| Charts | Recharts |
| Hosting | Netlify |

### Project structure

```
petrolisation-oms/src/
├── app/(workspace)/     one folder per module (operations, assets, hse, ...)
├── components/
│   ├── layout/          AppShell, Sidebar, Topbar, Breadcrumb
│   ├── ui/              KpiCard, DataTable, StatusBadge, Meter, Panel, ...
│   ├── charts/          Enterprise charts and sparklines
│   └── maps/            Facility map
└── lib/
    ├── data/            demo datasets per domain
    ├── store.ts         global state (Zustand)
    └── types.ts         shared domain types
```

## Getting started

**Operations platform**

```bash
git clone https://github.com/oiseaubleuc/PetrolMe.git
cd PetrolMe/petrolisation-oms
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to out/
```

**Landing site**

```bash
cd PetrolMe
npm install
npm run dev        # serves index.html
```

## Deployment

Deployed on Netlify as a static export. Build settings are in `netlify.toml`:

| Setting | Value |
|---|---|
| Base directory | `petrolisation-oms` |
| Build command | `npm run build` |
| Publish directory | `out` |

See [`NETLIFY.md`](NETLIFY.md) for troubleshooting.

## Disclaimer

All operational figures, facilities and organizations are synthetic demo data created for product demonstration. They are not affiliated with any real operator.

---

<p align="center">Developed by <a href="https://github.com/oiseaubleuc">Hoho</a> · Hohosolutions · Belgium</p>
