import { NatureModule } from './nature.module';

describe('NatureModule', () => {
  let natureModule: NatureModule;

  beforeEach(() => {
    natureModule = new NatureModule();
  });

  it('should create an instance', () => {
    expect(natureModule).toBeTruthy();
  });
});
