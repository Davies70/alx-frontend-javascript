export default function createInt8TypedArray(length, position, value) {
  try {
    const buffer = new ArrayBuffer(length);
    const div = new DataView(buffer);
    div.setInt8(position, value);
    return div;
  } catch (e) {
    throw new Error('Position outside range');
  }
}
