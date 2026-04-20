export const CURRENCIES = [
  { code: 'USD', symbol: '$', label: 'US Dollar', locale: 'en-US' },
  { code: 'INR', symbol: '₹', label: 'Indian Rupee', locale: 'en-IN' },
  { code: 'EUR', symbol: '€', label: 'Euro', locale: 'de-DE' },
  { code: 'GBP', symbol: '£', label: 'British Pound', locale: 'en-GB' },
  { code: 'JPY', symbol: '¥', label: 'Japanese Yen', locale: 'ja-JP' },
  { code: 'AUD', symbol: 'A$', label: 'Australian Dollar', locale: 'en-AU' },
  { code: 'CAD', symbol: 'C$', label: 'Canadian Dollar', locale: 'en-CA' },
];

export const detectDefaultCurrency = () => {
  try {
    const locale = navigator.language;
    if (locale.includes('IN')) return 'INR';
    if (locale.includes('GB')) return 'GBP';
    if (locale.includes('JP')) return 'JPY';
    if (locale.includes('AU')) return 'AUD';
    if (locale.includes('CA')) return 'CAD';
    
    // Check for Euro zone common locales
    const euroLocales = ['DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'AT', 'FI', 'PT', 'IE'];
    if (euroLocales.some(ext => locale.includes(ext))) return 'EUR';
    
    return 'USD';
  } catch (e) {
    return 'USD';
  }
};

export const formatCurrency = (value: number, currencyCode: string) => {
  const currency = CURRENCIES.find(c => c.code === currencyCode) || CURRENCIES[0];
  return new Intl.NumberFormat(currency.locale, {
    style: 'currency',
    currency: currency.code,
    maximumFractionDigits: 0,
  }).format(value);
};
