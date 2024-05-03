export function convertToRawNumber(value: any) {
  return value.replace(/,/g, '');
}

export function formatNumber(value: any) {
  const list = value.split('.');
  const prefix = list[0].charAt(0) === '-' ? '-' : '';
  let num = prefix ? list[0].slice(1) : list[0];
  let result = '';
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
}

export function numberWithCommas(n: any, comma = ',') {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, comma);
}
