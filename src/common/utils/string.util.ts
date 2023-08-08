export function formatUnicorn(
  input: string,
  args: Record<string, string | number>,
): string {
  let output = input.toString();

  for (const arg in args) {
    output = output.replace(
      new RegExp(`{{${arg}}}`, 'gi'),
      args[arg].toString(),
    );
  }

  return output;
}

export function randomString(
  length: number,
  charset = 'abcdefghijklmnopqrstuvwxyz0123456789',
): string {
  let result = '';

  for (let i = 0; i < length; i++) {
    result += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return result;
}
