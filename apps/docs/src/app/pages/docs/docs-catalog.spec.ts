import { GetDocRoutes } from './docs-catalog';

describe('docs catalog', () => {
  it('exposes the public guide and API slugs', () => {
    const routes = GetDocRoutes().map((route) => route.route);

    expect(routes).toContain('/docs/quickstart');
    expect(routes).toContain('/docs/accounts/create');
    expect(routes).toContain('/docs/checkout-sessions');
  });
});
