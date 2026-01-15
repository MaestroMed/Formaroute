import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind CSS classes with clsx
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format price with French locale
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 * Format phone number for display
 */
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/);
  if (match) {
    return `${match[1]} ${match[2]} ${match[3]} ${match[4]} ${match[5]}`;
  }
  return phone;
}

/**
 * Format phone number for tel: href
 */
export function formatPhoneHref(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.startsWith('0')) {
    return `+33${cleaned.slice(1)}`;
  }
  return `+${cleaned}`;
}

/**
 * Slugify a string
 */
export function slugify(text: string): string {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}

/**
 * Capitalize first letter
 */
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Format ville name from slug
 */
export function formatVilleName(slug: string): string {
  return slug
    .split('-')
    .map((word) => {
      // Handle special cases like "sous", "la", "le", "les"
      if (['sous', 'la', 'le', 'les', 'sur', 'en', 'de', 'du', 'd'].includes(word)) {
        return word;
      }
      return capitalize(word);
    })
    .join('-')
    .replace(/-la-/g, '-la-')
    .replace(/-le-/g, '-le-')
    .replace(/-les-/g, '-les-')
    .replace(/-sous-/g, '-sous-')
    .replace(/-sur-/g, '-sur-');
}

/**
 * Calculate reading time
 */
export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}

/**
 * Generate SEO-friendly meta description
 */
export function generateMetaDescription(text: string, maxLength = 155): string {
  const cleaned = text.replace(/\s+/g, ' ').trim();
  return truncate(cleaned, maxLength);
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Check if we're on the client side
 */
export const isClient = typeof window !== 'undefined';

/**
 * Check if we're on mobile
 */
export function isMobile(): boolean {
  if (!isClient) return false;
  return window.innerWidth < 768;
}
