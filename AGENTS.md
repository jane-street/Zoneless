# AGENTS.md

Zoneless is an open-source, Stripe-compatible payments platform that uses USDC on Solana. Platforms like marketplaces can self-host their own instance.

This is an Nx monorepo with an Angular frontend (dashboard, checkout, connected-account onboarding, and docs), an Express API, and the Node SDK in [`sdks/node`](sdks/node).

Public product docs live in [`apps/docs`](apps/docs). Serve them with `npx nx serve docs` and update them in the same PR as the API or dashboard behaviour they describe. Edit the TypeScript page trees, not generated Markdown.

## Design

The API, object shapes, webhook events, and dashboard flows should match Stripe. If you are unsure how something should look, check the [Stripe docs](https://docs.stripe.com/api) and follow that structure. Zoneless uses USDC, Solana wallets, and crypto instead of cards and bank accounts.

Prefer existing patterns in this repo over new ones. Do not add a dependency unless the work cannot be done with what is already here.

## Code

- Write DRY TypeScript that matches the existing formatting, folder structure, and code structure
- PascalCase for function names, camelCase for variables
- Prefer `const` over `let`; use `async`/`await`
- Standalone Angular components with signals for state
- Zod for API request validation
- Reuse styles from the styles folder
- Remove unused code
- Comments only where the code cannot say it clearly

## Changes

Keep diffs small and focused. Add tests for behaviour you change. Do not produce one large untested patch.

Human process, PR size, and how to pick work are in [CONTRIBUTING.md](./CONTRIBUTING.md).
