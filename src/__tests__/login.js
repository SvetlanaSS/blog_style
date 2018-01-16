import { addValues } from '../sum';

it('add values', () => {
    expect(addValues(1, 2)).toEqual(3);
    expect(addValues(2, 2)).toEqual(4);
});
