import { GeographyModule } from './geography.module';

describe('GeographyModule', () => {
  let geographyModule: GeographyModule;

  beforeEach(() => {
    geographyModule = new GeographyModule();
  });

  it('should create an instance', () => {
    expect(geographyModule).toBeTruthy();
  });
});
