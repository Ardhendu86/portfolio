import React, { useState, useEffect } from 'react';
import {
  getVisitLogs,
  getContactMessages,
  toggleVisitChecked,
  toggleMessageChecked,
  clearAllLogs
} from '../../utils/visitorTracker';
import { HoloIcon, HoloBadge } from '../../common/Hologram';

/**
 * HiddenDashboard Component
 * Hidden Admin / Analytics Checklist page.
 * Tracks user visits, visitor device info, and contact inquiry checklist in one private dashboard.
 */
const HiddenDashboard = () => {
  const [activeTab, setActiveTab] = useState('messages');
  const [visits, setVisits] = useState([]);
  const [messages, setMessages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setVisits(getVisitLogs());
    setMessages(getContactMessages());
  };

  const handleToggleMessage = (id) => {
    const updated = toggleMessageChecked(id);
    setMessages(updated);
  };

  const handleToggleVisit = (id) => {
    const updated = toggleVisitChecked(id);
    setVisits(updated);
  };

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear all visitor and message history?')) {
      clearAllLogs();
      setVisits([]);
      setMessages([]);
    }
  };

  // Export data as CSV
  const exportToCSV = () => {
    let csvContent = 'data:text/csv;charset=utf-8,';

    if (activeTab === 'messages') {
      csvContent += 'Name,Email,Subject,Message,Date,OS,Browser,Status\n';
      messages.forEach((m) => {
        csvContent += `"${m.name}","${m.email}","${m.subject}","${m.message.replace(/"/g, '""')}","${m.formattedTime}","${m.os}","${m.browser}","${m.status}"\n`;
      });
    } else {
      csvContent += 'Visit ID,Session ID,Page Visited,Date,OS,Browser,Screen,Checked\n';
      visits.forEach((v) => {
        csvContent += `"${v.id}","${v.sessionId}","${v.pathname}","${v.formattedTime}","${v.os}","${v.browser}","${v.screen}","${v.checked ? 'Yes' : 'No'}"\n`;
      });
    }

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `portfolio_${activeTab}_export_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Unique session count
  const uniqueSessions = new Set(visits.map((v) => v.sessionId)).size;
  const checkedMessagesCount = messages.filter((m) => m.checked).length;
  const checkedVisitsCount = visits.filter((v) => v.checked).length;

  const filteredMessages = messages.filter(
    (m) =>
      m.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.subject?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.message?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredVisits = visits.filter(
    (v) =>
      v.pathname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.os?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.browser?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-5" style={{ minHeight: '85vh', background: 'var(--background-color)' }}>
      <div className="container py-4">
        {/* Hidden Dashboard Header */}
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4 pb-3 border-bottom border-secondary border-opacity-25">
          <div>
            <div className="mb-2">
              <HoloBadge icon="bi-shield-lock-fill" text="Private Admin Space" variant="neon" />
            </div>
            <h1 className="h3 fw-bold theme-contrast-text mb-1 d-flex align-items-center gap-2">
              <span>Visitor &amp; User Inquiry Checklist</span>
              <span className="badge bg-secondary bg-opacity-25 text-info fs-6">Hidden Page</span>
            </h1>
            <p className="small text-muted mb-0">
              Private log tracker of users checking your portfolio and submitting contact inquiries.
            </p>
          </div>

          <div className="d-flex gap-2">
            <button
              onClick={exportToCSV}
              className="btn btn-sm btn-outline-info rounded-3 d-inline-flex align-items-center gap-2"
            >
              <i className="bi bi-download"></i> Export CSV
            </button>
            <button
              onClick={handleClear}
              className="btn btn-sm btn-outline-danger rounded-3 d-inline-flex align-items-center gap-2"
            >
              <i className="bi bi-trash3"></i> Clear Logs
            </button>
          </div>
        </div>

        {/* Analytics Summary Cards */}
        <div className="row g-3 mb-4">
          <div className="col-lg-3 col-sm-6">
            <div className="card theme-card holo-card p-3 rounded-4 shadow-sm h-100">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <span className="small text-muted d-block mb-1">Total Page Visits</span>
                  <h3 className="fw-bold mb-0 text-info">{visits.length}</h3>
                </div>
                <HoloIcon icon="bi-eye-fill" size="md" variant="cyan" showCorners={true} />
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="card theme-card holo-card p-3 rounded-4 shadow-sm h-100">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <span className="small text-muted d-block mb-1">Unique Visitors</span>
                  <h3 className="fw-bold mb-0 text-white">{uniqueSessions}</h3>
                </div>
                <HoloIcon icon="bi-people-fill" size="md" variant="neon" showCorners={true} />
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="card theme-card holo-card p-3 rounded-4 shadow-sm h-100">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <span className="small text-muted d-block mb-1">Contact Inquiries</span>
                  <h3 className="fw-bold mb-0 text-warning">{messages.length}</h3>
                </div>
                <HoloIcon icon="bi-envelope-paper-fill" size="md" variant="amber" showCorners={true} />
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="card theme-card holo-card p-3 rounded-4 shadow-sm h-100">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <span className="small text-muted d-block mb-1">
                    {activeTab === 'messages' ? 'Checked Inquiries' : 'Checked Visits'}
                  </span>
                  <h3 className="fw-bold mb-0 text-success">
                    {activeTab === 'messages'
                      ? `${checkedMessagesCount} / ${messages.length}`
                      : `${checkedVisitsCount} / ${visits.length}`}
                  </h3>
                </div>
                <HoloIcon icon="bi-check-all" size="md" variant="emerald" showCorners={true} />
              </div>
            </div>
          </div>
        </div>

        {/* Tab Selection & Search Filter */}
        <div className="card theme-card holo-card p-4 rounded-4 shadow-sm mb-4">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
            <div className="nav nav-pills gap-2">
              <button
                onClick={() => setActiveTab('messages')}
                className={`btn btn-sm rounded-pill px-3 py-2 fw-semibold ${
                  activeTab === 'messages'
                    ? 'btn-info text-white shadow'
                    : 'btn-dark text-muted border border-secondary border-opacity-25'
                }`}
              >
                <i className="bi bi-card-checklist me-1"></i> User Inquiries Checklist ({messages.length})
              </button>
              <button
                onClick={() => setActiveTab('visits')}
                className={`btn btn-sm rounded-pill px-3 py-2 fw-semibold ${
                  activeTab === 'visits'
                    ? 'btn-info text-white shadow'
                    : 'btn-dark text-muted border border-secondary border-opacity-25'
                }`}
              >
                <i className="bi bi-clock-history me-1"></i> Page Visit History ({visits.length})
              </button>
            </div>

            <div style={{ minWidth: '240px' }}>
              <input
                type="text"
                className="form-control form-control-sm rounded-pill"
                placeholder="Search list..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* TAB 1: User Inquiries Checklist */}
          {activeTab === 'messages' && (
            <div className="table-responsive">
              {filteredMessages.length === 0 ? (
                <div className="text-center py-5">
                  <i className="bi bi-inbox text-muted fs-1 mb-2 d-block"></i>
                  <p className="text-muted mb-0">No contact inquiries recorded yet.</p>
                  <small className="opacity-50">When someone submits the Contact Form, their name and message appear here.</small>
                </div>
              ) : (
                <table className="table table-dark table-hover align-middle mb-0" style={{ background: 'transparent' }}>
                  <thead>
                    <tr className="border-bottom border-secondary border-opacity-25 text-info">
                      <th style={{ width: '40px' }}>Check</th>
                      <th>User Name</th>
                      <th>Email</th>
                      <th>Subject</th>
                      <th>Message</th>
                      <th>Submitted On</th>
                      <th>Device</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMessages.map((msg) => (
                      <tr
                        key={msg.id}
                        className={msg.checked ? 'opacity-50' : ''}
                        style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}
                      >
                        <td>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            checked={msg.checked}
                            onChange={() => handleToggleMessage(msg.id)}
                            style={{ cursor: 'pointer' }}
                          />
                        </td>
                        <td className="fw-bold theme-contrast-text">{msg.name}</td>
                        <td>
                          <a href={`mailto:${msg.email}`} className="text-info text-decoration-none small">
                            {msg.email}
                          </a>
                        </td>
                        <td className="small text-light">{msg.subject}</td>
                        <td className="small text-muted" style={{ maxWidth: '300px' }}>
                          <span className="text-truncate d-block" title={msg.message}>
                            {msg.message}
                          </span>
                        </td>
                        <td className="small text-muted">{msg.formattedTime}</td>
                        <td className="small">
                          <span className="badge bg-secondary bg-opacity-25 text-light">
                            {msg.os} &bull; {msg.browser}
                          </span>
                        </td>
                        <td>
                          <span
                            className={`badge ${
                              msg.checked
                                ? 'bg-success bg-opacity-25 text-success'
                                : 'bg-warning bg-opacity-25 text-warning'
                            }`}
                          >
                            {msg.checked ? 'Reviewed' : 'Pending'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}

          {/* TAB 2: Page Visit Logs */}
          {activeTab === 'visits' && (
            <div className="table-responsive">
              {filteredVisits.length === 0 ? (
                <div className="text-center py-5">
                  <i className="bi bi-activity text-muted fs-1 mb-2 d-block"></i>
                  <p className="text-muted mb-0">No visitor logs recorded yet.</p>
                </div>
              ) : (
                <table className="table table-dark table-hover align-middle mb-0" style={{ background: 'transparent' }}>
                  <thead>
                    <tr className="border-bottom border-secondary border-opacity-25 text-info">
                      <th style={{ width: '40px' }}>Check</th>
                      <th>Page Path</th>
                      <th>Visit Date &amp; Time</th>
                      <th>Operating System</th>
                      <th>Browser</th>
                      <th>Screen Size</th>
                      <th>Session ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredVisits.map((v) => (
                      <tr
                        key={v.id}
                        className={v.checked ? 'opacity-50' : ''}
                        style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}
                      >
                        <td>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            checked={v.checked}
                            onChange={() => handleToggleVisit(v.id)}
                            style={{ cursor: 'pointer' }}
                          />
                        </td>
                        <td>
                          <span className="badge bg-info bg-opacity-10 text-info border border-info border-opacity-25">
                            {v.pathname}
                          </span>
                        </td>
                        <td className="small text-light">{v.formattedTime}</td>
                        <td className="small text-muted">{v.os}</td>
                        <td className="small text-muted">{v.browser}</td>
                        <td className="small text-muted">{v.screen}</td>
                        <td className="small font-monospace text-muted">{v.sessionId}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HiddenDashboard;
