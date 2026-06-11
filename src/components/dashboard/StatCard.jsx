import React from 'react'
import './StatCard.css'

const StatCard = ({ icon: Icon, title, value, subtitle, trend, color = 'blue', type = 'default', percentage = 0 }) => {
  return (
    <div className={`ent-kpi-card stat-card-${color}`} style={{ '--kpi-color': `var(--ent-${color})`, '--kpi-bg': `var(--ent-${color}-bg)` }}>
      <div className="stat-card-inner">
        <div className="stat-icon-wrap">
          <div className="stat-icon">
            <Icon size={24} />
          </div>
          {type === 'ring' && (
            <div className="stat-ring-mini">
              <svg width="40" height="40">
                <circle className="ring-bg" cx="20" cy="20" r="16" strokeWidth="3" />
                <circle 
                  className="ring-fill" cx="20" cy="20" r="16" strokeWidth="3" 
                  strokeDasharray={`${2 * Math.PI * 16}`}
                  strokeDashoffset={`${2 * Math.PI * 16 * (1 - percentage / 100)}`}
                />
              </svg>
            </div>
          )}
        </div>
        
        <div className="stat-content">
          <div className="stat-value-row">
            <h3>{value}</h3>
            {trend && (
              <span className={`stat-trend-tag ${trend.type}`}>
                {trend.type === 'up' ? '' : ''} {trend.value}
              </span>
            )}
          </div>
          <p className="stat-label">{title}</p>
          {subtitle && <span className="stat-subtitle">{subtitle}</span>}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .stat-card-inner { padding: 20px; }
        .stat-icon-wrap {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }
        .stat-ring-mini svg { transform: rotate(-90deg); }
        .stat-ring-mini .ring-bg { fill: none; stroke: rgba(0,0,0,0.05); }
        .stat-ring-mini .ring-fill { 
          fill: none; 
          stroke: currentColor; 
          stroke-linecap: round;
          transition: stroke-dashoffset 1s ease;
        }
        .stat-value-row {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 4px;
        }
        .stat-value-row h3 {
          font-size: 28px;
          font-weight: 800;
          margin: 0;
          color: #0f172a;
          letter-spacing: -1px;
        }
        .stat-trend-tag {
          font-size: 11px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
        }
        .stat-trend-tag.up { background: #dcfce7; color: #166534; }
        .stat-trend-tag.down { background: #fee2e2; color: #991b1b; }
        .stat-label {
          font-size: 14px;
          color: #64748b;
          font-weight: 600;
          margin: 0;
        }
        .stat-subtitle {
          font-size: 12px;
          color: #94a3b8;
          margin-top: 4px;
        }
      `}} />
    </div>
  )
}

export default StatCard
