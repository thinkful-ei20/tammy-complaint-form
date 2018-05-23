export const required = value => (value ? undefined : ' Required');
export const nonEmpty = value => 
  value.trim() !== '' ? undefined : 'Cannot be empty';
export const trackingNumberLength = value =>(value.trim().length === 5 ? undefined : 'Tracking number must be 5 characters long');
export const trackingNumber = value => (value.match(/^-{0,1}\d+$/) ? undefined : 'Only Numbers Allowed');
