/**
 * Visitor & Contact Tracking Utility
 * Stores visit logs, user sessions, and contact inquiries in localStorage.
 */

const STORAGE_KEYS = {
  VISITS: 'ardhendu_portfolio_visits',
  MESSAGES: 'ardhendu_portfolio_messages',
  SESSION: 'ardhendu_current_session'
};

// Helper to get browser & OS info
const getDeviceInfo = () => {
  const userAgent = navigator.userAgent || '';
  let os = 'Unknown OS';
  let browser = 'Unknown Browser';

  if (/windows/i.test(userAgent)) os = 'Windows';
  else if (/macintosh|mac os x/i.test(userAgent)) os = 'macOS';
  else if (/android/i.test(userAgent)) os = 'Android';
  else if (/iphone|ipad|ipod/i.test(userAgent)) os = 'iOS';
  else if (/linux/i.test(userAgent)) os = 'Linux';

  if (/chrome|crios/i.test(userAgent) && !/edge|opr/i.test(userAgent)) browser = 'Chrome';
  else if (/firefox|fxios/i.test(userAgent)) browser = 'Firefox';
  else if (/safari/i.test(userAgent) && !/chrome/i.test(userAgent)) browser = 'Safari';
  else if (/edg/i.test(userAgent)) browser = 'Edge';
  else if (/opr\//i.test(userAgent)) browser = 'Opera';

  return { os, browser, screen: `${window.innerWidth}x${window.innerHeight}` };
};

// Log a page visit
export const logPageVisit = (pathname) => {
  try {
    const visits = JSON.parse(localStorage.getItem(STORAGE_KEYS.VISITS) || '[]');
    let sessionId = sessionStorage.getItem(STORAGE_KEYS.SESSION);

    if (!sessionId) {
      sessionId = 'sess_' + Math.random().toString(36).substring(2, 9);
      sessionStorage.setItem(STORAGE_KEYS.SESSION, sessionId);
    }

    const { os, browser, screen } = getDeviceInfo();

    const newVisit = {
      id: 'vis_' + Date.now() + '_' + Math.random().toString(36).substring(2, 5),
      sessionId,
      pathname: pathname || '/',
      timestamp: new Date().toISOString(),
      formattedTime: new Date().toLocaleString(),
      os,
      browser,
      screen,
      checked: false
    };

    // Keep up to 200 recent visit logs
    const updatedVisits = [newVisit, ...visits].slice(0, 200);
    localStorage.setItem(STORAGE_KEYS.VISITS, JSON.stringify(updatedVisits));
    return newVisit;
  } catch (err) {
    console.error('Error logging visit:', err);
  }
};

// Log a contact form submission
export const logContactSubmission = (formData) => {
  try {
    const messages = JSON.parse(localStorage.getItem(STORAGE_KEYS.MESSAGES) || '[]');
    const { os, browser } = getDeviceInfo();

    const newMessage = {
      id: 'msg_' + Date.now(),
      name: formData.name,
      email: formData.email,
      subject: formData.subject || 'No Subject',
      message: formData.message,
      timestamp: new Date().toISOString(),
      formattedTime: new Date().toLocaleString(),
      os,
      browser,
      checked: false,
      status: 'New'
    };

    const updated = [newMessage, ...messages];
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(updated));
    return newMessage;
  } catch (err) {
    console.error('Error logging message:', err);
  }
};

// Get all visit logs
export const getVisitLogs = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.VISITS) || '[]');
  } catch {
    return [];
  }
};

// Get all contact messages
export const getContactMessages = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.MESSAGES) || '[]');
  } catch {
    return [];
  }
};

// Toggle checklist state for a visit
export const toggleVisitChecked = (visitId) => {
  try {
    const visits = JSON.parse(localStorage.getItem(STORAGE_KEYS.VISITS) || '[]');
    const updated = visits.map((v) => (v.id === visitId ? { ...v, checked: !v.checked } : v));
    localStorage.setItem(STORAGE_KEYS.VISITS, JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
};

// Toggle checklist state for a message
export const toggleMessageChecked = (messageId) => {
  try {
    const messages = JSON.parse(localStorage.getItem(STORAGE_KEYS.MESSAGES) || '[]');
    const updated = messages.map((m) =>
      m.id === messageId ? { ...m, checked: !m.checked, status: !m.checked ? 'Checked' : 'New' } : m
    );
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
};

// Clear all logs
export const clearAllLogs = () => {
  localStorage.removeItem(STORAGE_KEYS.VISITS);
  localStorage.removeItem(STORAGE_KEYS.MESSAGES);
};
