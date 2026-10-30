import React, { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Server,
  ShieldCheck,
  Terminal,
  X,
} from 'lucide-react'
import './styles.css'

const skills = [
  { title: 'Linux administration', detail: 'Ubuntu Server, users, permissions, system troubleshooting', icon: Terminal },
  { title: 'Storage & networking', detail: 'LVM, partitioning, NFS, SSH, basic TCP/IP', icon: Server },
  { title: 'Web infrastructure', detail: 'Apache2, Nginx, firewalld and iptables', icon: ShieldCheck },
]

const tools = ['Ubuntu Server', 'Bash', 'LVM', 'NFS', 'SSH', 'Apache2', 'Nginx', 'firewalld', 'iptables', 'SELinux']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Vishal Jaiswal home">
          V<span>.</span>J
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a className="nav-contact" href="mailto:rai737650@gmail.com" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Available for opportunities</p>
            <h1>Building <em>reliable</em><br />systems that scale.</h1>
            <p className="hero-intro">I’m Vishal Jaiswal, a Linux and DevOps professional focused on secure infrastructure, practical automation, and dependable server environments.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#experience">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-quiet" href="/resume.pdf" download>Download CV <Download size={16} /></a>
            </div>
          </div>
          <div className="hero-graphic" aria-label="Linux terminal illustration">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="terminal-card">
              <div className="terminal-top"><span /><span /><span /><small>vishal@server: ~</small></div>
              <div className="terminal-body">
                <p><b>$</b> whoami</p>
                <p className="terminal-value">vishal-jaiswal</p>
                <p><b>$</b> uptime</p>
                <p className="terminal-value">always improving<span className="cursor">_</span></p>
              </div>
            </div>
            <div className="graphic-label label-top">BPL / MP</div>
            <div className="graphic-label label-bottom">01 — 05</div>
          </div>
        </section>

        <section className="ticker" aria-label="Areas of expertise">
          <div className="ticker-track">
            <span>LINUX ADMINISTRATION</span><i>✦</i><span>DEVOPS</span><i>✦</i><span>SYSTEM SECURITY</span><i>✦</i><span>AUTOMATION</span><i>✦</i><span>LINUX ADMINISTRATION</span>
          </div>
        </section>

        <section className="about section-wrap" id="about">
          <div className="section-kicker">01 / Profile</div>
          <div className="about-content">
            <h2>Calm under pressure.<br /><span>Curious by default.</span></h2>
            <div className="about-text">
                <p>Detail-oriented Linux and DevOps professional with hands-on experience building, configuring, and troubleshooting Linux environments.</p>
                <p>I bring a systems-first approach to server administration, storage, networking, security, and Bash automation — always with reliability and clarity in mind.</p>
              <a className="text-link" href="mailto:rai737650@gmail.com">Start a conversation <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="capabilities section-wrap" id="skills">
          <div className="section-kicker">02 / What I do</div>
          <div className="capability-grid">
            {skills.map(({ title, detail, icon: Icon }, index) => (
              <article className="capability-card" key={title}>
                <div className="card-number">0{index + 1}</div>
                <Icon className="capability-icon" size={26} strokeWidth={1.5} />
                <h3>{title}</h3>
                <p>{detail}</p>
                <span className="card-arrow"><ArrowUpRight size={17} /></span>
              </article>
            ))}
          </div>
        </section>

        <section className="experience section-wrap" id="experience">
          <div className="section-kicker">03 / Experience</div>
          <div className="experience-heading">
            <h2>Learning by<br /><span>doing the work.</span></h2>
            <p>Practical experience across the core building blocks of Linux infrastructure.</p>
          </div>
          <article className="role">
            <div className="role-meta"><span>Professional experience</span><span>Bhopal, MP</span></div>
            <div className="role-main">
              <div>
                <p className="role-type">Internship</p>
                <h3>DevOps Intern</h3>
                <p className="company">Vected Technologies</p>
              </div>
              <div className="role-points">
                <p><Check size={16} /> Configured Ubuntu servers, users, groups, permissions, and routine troubleshooting.</p>
                <p><Check size={16} /> Built LVM and partitioning solutions for efficient disk space management.</p>
                <p><Check size={16} /> Deployed web servers and secured access with firewalls and SELinux.</p>
                <p><Check size={16} /> Wrote Bash scripts for log analysis and backup automation.</p>
              </div>
            </div>
          </article>
        </section>

        <section className="toolkit section-wrap">
          <div className="section-kicker">04 / Toolkit</div>
          <div className="toolkit-content">
            <h2>The tools behind<br /><span>the terminal.</span></h2>
            <div className="tool-list">
              {tools.map((tool) => <span key={tool}>{tool}</span>)}
            </div>
          </div>
        </section>

        <section className="education section-wrap" id="education">
          <div className="section-kicker">05 / Education</div>
          <div className="education-content">
            <div>
              <p className="eyebrow">Academic foundation</p>
              <h2>Engineering mindset,<br /><span>systems perspective.</span></h2>
            </div>
            <div className="education-list">
              <div className="education-item">
                <span>2021 — 2025</span>
                <div><h3>Bachelor of Engineering</h3><p>Bansal Institute of Research Technology and Science, Bhopal</p><small>Mechanical Engineering</small></div>
              </div>
              <div className="education-item">
                <span>Class XII</span>
                <div><h3>Govt. High School, Sehore</h3><p>Higher Secondary Education</p><small>82.8%</small></div>
              </div>
              <div className="education-item">
                <span>Class X</span>
                <div><h3>Govt. Higher Secondary School, Talen</h3><p>Secondary Education</p><small>82.8%</small></div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <p className="eyebrow">Have a system to build?</p>
          <h2>Let’s build<br /><em>what’s next.</em></h2>
          <div className="contact-details">
            <a className="contact-email" href="mailto:rai737650@gmail.com">rai737650@gmail.com <ArrowUpRight size={23} /></a>
            <a className="contact-phone" href="tel:+917987943217"><Phone size={18} /> +91 79879 43217</a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <span>© {new Date().getFullYear()} Vishal Jaiswal</span>
        <div className="social-links">
          <a href="https://linkedin.com/in/vishal-jaiswal-9b01b5318" target="_blank" rel="noreferrer"><Linkedin size={17} /> linkedin.com/in/vishal-jaiswal-9b01b5318</a>
          <a href="mailto:rai737650@gmail.com"><Mail size={17} /> Email</a>
          <a href="#top">Back to top <ChevronDown size={16} className="rotate-up" /></a>
        </div>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode><App /></StrictMode>,
)
