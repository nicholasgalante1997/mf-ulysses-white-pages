export function titlecaseString(s: string): string {
    return s.length > 0 ? (s[0].toUpperCase() + s.slice(1)) : '';
}