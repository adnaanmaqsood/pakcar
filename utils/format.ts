export function formatPrice(price: number): string {
  if (price >= 10000000) {
    const crore = price / 10000000;
    return `${crore % 1 === 0 ? crore : crore.toFixed(2)} Crore`;
  }
  const lac = price / 100000;
  return `${lac % 1 === 0 ? lac : lac.toFixed(1)} Lac`;
}

export function formatMileage(km: number): string {
  return `${km.toLocaleString()} km`;
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return 'Today';
  if (days === 1) return 'Yesterday';
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} week${Math.floor(days / 7) > 1 ? 's' : ''} ago`;
  return `${Math.floor(days / 30)} month${Math.floor(days / 30) > 1 ? 's' : ''} ago`;
}
