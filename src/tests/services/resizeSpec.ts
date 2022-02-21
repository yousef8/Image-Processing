import resize from '../../services/resize';

describe('Test resize function', function (): void {
  it('tests resize function with valid input', async function (): Promise<void> {
    try {
      await resize('fjord.jpg', 150, 150, 'fjord-resize(150×150).jpg');
      expect(1).toBe(1);
    } catch {
      expect(1).toBe(2);
    }
  });

  it('tests resize function with invalid input', async function (): Promise<void> {
    try {
      await resize('ord.jpg', 150, 150, 'fjord-resize(150×150).jpg');
      expect(1).toBe(2);
    } catch {
      expect(1).toBe(1);
    }
  });
});
