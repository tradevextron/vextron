# VEXTRON Market Analysis Automation

The Analytics page can now publish and display automated daily market analysis.

## What Was Added

- `lib/market-analysis.js` generates the daily report.
- `scripts/publish-market-analysis.js` manually publishes a report.
- `data/market-analysis/latest.json` stores the latest published report.
- `data/market-analysis/sources.json` stores default research categories.
- `dev-server.js` exposes:
  - `/api/market-analysis/latest`
  - `/api/market-analysis/publish`
- `analytics.html` renders the latest published report.

## Manual Publish

Run:

```powershell
node scripts\publish-market-analysis.js --force
```

## Automatic Publish Window

The generator is built around the 4:00 AM to 6:00 AM IST research window.

Start the dev server with scheduler enabled:

```powershell
$env:VEXTRON_ANALYTICS_SCHEDULER='true'
$env:PORT='5175'
node dev-server.js
```

The scheduler checks every 15 minutes and publishes once per day during the 4:00 AM to 6:00 AM IST window.

## Connecting Real Market And News Sources

Add trusted API URLs as a comma-separated environment variable:

```powershell
$env:VEXTRON_ANALYSIS_SOURCE_URLS='https://example.com/forex-feed,https://example.com/news-feed'
```

The current system is ready for real feeds, but live accuracy depends on the quality and licensing of the connected data/news APIs.

## Important

Without connected market/news APIs, the system publishes a safe "data sources required" report instead of pretending to have live market analysis.
