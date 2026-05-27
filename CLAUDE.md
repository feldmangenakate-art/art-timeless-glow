# Claude Code — Project Rules

## Branch workflow (mandatory)

**Never commit directly to `main`.** Every session must follow this workflow:

1. **At the start of every session**, create a feature branch from the latest `main`:
   ```
   git checkout main && git pull origin main
   git checkout -b feature/<short-description>
   ```
2. **Commit all work to that branch** — small, descriptive commits as you go.
3. **When the task is complete**, push the branch and open a PR:
   ```
   git push -u origin feature/<short-description>
   gh pr create --title "..." --body "..."
   ```
4. **Do not merge the PR yourself** — leave it open for Kate to review and merge.

This protects `main` from being overwritten and gives every session its own recoverable history.

## Image standards

- All artwork images: WebP format, max 800px width, 80% quality
- Artist portraits: `/public/artists/<id>.webp`
- Timeline/collection artwork: `/public/timeline/<id>.webp`
- Download from Wikimedia Commons where possible (public domain preferred)

## Data files

- Artist data: `src/data/artists-renaissance.ts`, `artists-baroque.ts`, `artists-18th-19th.ts`, `artists-modern.ts`
- Masterworks (featured, full four-pillar treatment): `src/data/masterworks.ts`
- Collection (gallery grid): `src/data/collection.ts`
- Each artist must have at least 3 works total (masterworksIds + collectionIds combined)
