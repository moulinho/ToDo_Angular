import { PipePersonPipe } from './pipe-person.pipe';

describe('PipePersonPipe', () => {
  it('create an instance', () => {
    const pipe = new PipePersonPipe();
    expect(pipe).toBeTruthy();
  });
});
