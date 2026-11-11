/* Lazy Cal.com embed loader. Opens the demo booking as an on-site modal (no
   redirect, no new tab). @calcom/embed-react is imported on first use, so it
   stays out of the main bundle and never runs while prerendering. */
let calApi;

function loadCal(namespace) {
  if (!calApi) {
    calApi = import('@calcom/embed-react')
      .then(({ getCalApi }) => getCalApi({ namespace }))
      .then((cal) => {
        cal('ui', {
          hideEventTypeDetails: false,
          layout: 'month_view',
          cssVarsPerTheme: { light: { 'cal-brand': '#0c184a' }, dark: { 'cal-brand': '#4f7cff' } },
        });
        return cal;
      });
  }
  return calApi;
}

/* Falls back to opening the booking page in the same tab if the embed
   script fails to load. */
export function openCalModal(namespace, calLink, fallbackUrl) {
  loadCal(namespace)
    .then((cal) => cal('modal', { calLink, config: { layout: 'month_view' } }))
    .catch(() => { if (fallbackUrl) window.location.href = fallbackUrl; });
}
