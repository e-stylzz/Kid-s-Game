import { ScienceModule } from './science.module';

describe('ScienceModule', () => {
  let scienceModule: ScienceModule;

  beforeEach(() => {
    scienceModule = new ScienceModule();
  });

  it('should create an instance', () => {
    expect(scienceModule).toBeTruthy();
  });
});
