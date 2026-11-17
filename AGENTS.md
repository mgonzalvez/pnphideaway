# PnP Hideaway Maintenance Notes

## Stack

Static blog on GitHub Pages (`pnphideaway.gonzhome.us`). Hand-written HTML plus a
`jekyll/` helper folder. No build step required for the served pages.

## Key files

| File | Role |
|---|---|
| `index.html` | Blog home |
| `about.html`, `404.html` | Support pages |
| `feed.xml` | RSS feed — must stay in sync with published posts |
| `about/`, `assets/` | Supporting content and images |
| `jekyll/update` | Helper script for feed/post regeneration |

## Critical rules

1. Every new post must appear in both `index.html` and `feed.xml`.
2. Keep the sticky header and Related Sites dropdown identical to the other sites.
3. Theme toggle key and the pre-CSS inline theme script are part of the shared
   family pattern — do not remove them.

## Registry & provenance rule (portfolio-wide)

Personal project — completely separate from Apple work.

- No npm dependencies today. If any are ever added, commit an `.npmrc` pinning
  `registry=https://registry.npmjs.org` before the first lockfile is generated.
  Apple's internal mirror (`npm.apple.com`, `artifacts.apple.com/artifactory/...`)
  is unreachable from GitHub Actions and causes `ENOTFOUND` CI failures.
- Audit before pushing: `../scripts/check-registry.sh` (add `--fix` to normalize).
- No work credentials, internal hostnames, proprietary assets, or confidential
  material in this repo.
