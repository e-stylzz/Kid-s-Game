import { MathModule } from './math.module';

describe('MathModule', () => {
  let mathModule: MathModule;

  beforeEach(() => {
    mathModule = new MathModule();
  });

  it('should create an instance', () => {
    expect(mathModule).toBeTruthy();
  });
});
