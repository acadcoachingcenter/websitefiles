import { useState } from "react";

const C = {
  bg:"#0f1117",bgCard:"#1a1d2e",bgSidebar:"#12141f",border:"#2a2d3e",
  accent:"#6c63ff",accentLight:"#a89cff",accentGlow:"rgba(108,99,255,0.13)",
  green:"#22c55e",orange:"#f59e0b",red:"#ef4444",blue:"#3b82f6",pink:"#ec4899",
  teal:"#14b8a6",textPrimary:"#e2e8f0",textSecondary:"#94a3b8",textMuted:"#64748b",
};

// ── Logo ─────────────────────────────────────────────────────────────────────
const Logo = ({ size = 36, showText = true }: { size?: number; showText?: boolean }) => (
  <div style={{ display:"flex", alignItems:"center", gap:10 }}>
    <img
      src="/logo.png"
      alt="ACAD Logo"
      style={{ height:size, width:"auto", objectFit:"contain", borderRadius:6 }}
      onError={(e) => {
        const el = e.currentTarget as HTMLImageElement;
        el.style.display = "none";
        const fb = document.createElement("div");
        fb.style.cssText = `width:${size}px;height:${size}px;border-radius:10px;background:linear-gradient(135deg,#6c63ff,#3b82f6);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:${Math.round(size*0.44)}px;color:#fff;letter-spacing:-1px;`;
        fb.textContent = "AC";
        el.parentNode?.insertBefore(fb, el);
      }}
    />
    {showText && (
      <div style={{ lineHeight:1 }}>
        <div style={{ fontWeight:800, fontSize:18, color:C.textPrimary, letterSpacing:1 }}>ACAD</div>
        <div style={{ fontSize:9, color:C.textMuted, letterSpacing:2, textTransform:"uppercase" }}>Online Tuition</div>
      </div>
    )}
  </div>
);

// ── Icon ─────────────────────────────────────────────────────────────────────
const I = ({ d, s=18, c="currentColor" }: { d:string; s?:number; c?:string }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d={d}/>
  </svg>
);
const ic: Record<string,string> = {
  home:"M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10",
  book:"M4 19.5A2.5 2.5 0 016.5 17H20 M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5z",
  video:"M23 7l-7 5 7 5V7z M1 5h15a2 2 0 012 2v10a2 2 0 01-2 2H1z",
  check:"M9 11l3 3L22 4 M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11",
  chart:"M18 20V10 M12 20V4 M6 20v-6",
  settings:"M12 15a3 3 0 100-6 3 3 0 000 6z M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z",
  logout:"M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4 M16 17l5-5-5-5 M21 12H9",
  menu:"M3 12h18 M3 6h18 M3 18h18",
  bell:"M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 01-3.46 0",
  user:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2 M12 11a4 4 0 100-8 4 4 0 000 8z",
  users:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75",
  star:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  clock:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 6v6l4 2",
  award:"M12 15a7 7 0 100-14 7 7 0 000 14z M8.21 13.89L7 23l5-3 5 3-1.21-9.12",
  calendar:"M3 4h18v18H3z M16 2v4 M8 2v4 M3 10h18",
  edit:"M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7 M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z",
  upload:"M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4 M17 8l-5-5-5 5 M12 3v12",
  dollar:"M12 1v22 M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6",
  file:"M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6",
  target:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 18a6 6 0 100-12 6 6 0 000 12z M12 14a2 2 0 100-4 2 2 0 000 4z",
  trending:"M23 6l-9.5 9.5-5-5L1 18",
  grid:"M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z",
  shield:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  zap:"M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  globe:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M2 12h20 M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z",
  mail:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6",
};

// ── Mock Data ────────────────────────────────────────────────────────────────
const mockStudents = [
  {id:1,name:"Arjun Kumar",grade:"XII",courses:5,avg:82,status:"active"},
  {id:2,name:"Sneha Rajan",grade:"XI",courses:4,avg:76,status:"active"},
  {id:3,name:"Vikram S",grade:"XII",courses:3,avg:90,status:"active"},
  {id:4,name:"Ananya P",grade:"XI",courses:5,avg:68,status:"inactive"},
];
const mockCourses = [
  {id:1,name:"Physics – Mechanics",tutor:"Mr. Ravi Shankar",progress:72,lessons:24,done:17,color:C.accent,next:"Newton's Laws – Part 3"},
  {id:2,name:"Chemistry – Organic",tutor:"Ms. Priya Nair",progress:58,lessons:30,done:17,color:C.green,next:"Hydrocarbons – Alkenes"},
  {id:3,name:"Biology – Cell Biology",tutor:"Dr. Meena R",progress:90,lessons:20,done:18,color:C.orange,next:"Cell Division – Meiosis"},
  {id:4,name:"Maths – Calculus",tutor:"Mr. Suresh V",progress:44,lessons:28,done:12,color:C.blue,next:"Integration by Parts"},
  {id:5,name:"English – Literature",tutor:"Ms. Kavya M",progress:65,lessons:16,done:10,color:C.pink,next:"Shakespeare – Macbeth"},
];
const mockLive = [
  {id:1,subject:"Physics",topic:"Projectile Motion",tutor:"Mr. Ravi Shankar",time:"Today, 4:00 PM",status:"upcoming",duration:"60 min"},
  {id:2,subject:"Chemistry",topic:"Alkenes & Alkynes",tutor:"Ms. Priya Nair",time:"Today, 6:00 PM",status:"upcoming",duration:"75 min"},
  {id:3,subject:"Biology",topic:"Meiosis",tutor:"Dr. Meena R",time:"Yesterday, 4:00 PM",status:"completed",duration:"60 min"},
  {id:4,subject:"Maths",topic:"Integration",tutor:"Mr. Suresh V",time:"Tomorrow, 5:00 PM",status:"scheduled",duration:"90 min"},
];
const mockAssignments = [
  {id:1,subject:"Physics",title:"Newton's Laws – Problem Set",due:"Mar 11",status:"pending",marks:20,score:0},
  {id:2,subject:"Chemistry",title:"Organic Reactions Worksheet",due:"Mar 10",status:"submitted",marks:15,score:0},
  {id:3,subject:"Biology",title:"Cell Structure Diagram",due:"Mar 8",status:"graded",score:13,marks:15},
  {id:4,subject:"Maths",title:"Calculus Practice Paper",due:"Mar 14",status:"pending",marks:25,score:0},
  {id:5,subject:"English",title:"Essay – Macbeth Analysis",due:"Mar 9",status:"overdue",marks:10,score:0},
];
const mockEvents = [
  {id:1,title:"NEET 2026 Strategy Masterclass",date:"Mar 15, 2026",time:"5:00 PM",type:"Webinar",seats:200,registered:142,color:C.accent,speaker:"Dr. Meena R"},
  {id:2,title:"JEE Mains – Last Mile Prep",date:"Mar 18, 2026",time:"4:00 PM",type:"Workshop",seats:100,registered:89,color:C.orange,speaker:"Mr. Suresh V"},
  {id:3,title:"Open House – Meet Our Tutors",date:"Mar 22, 2026",time:"10:00 AM",type:"Offline",seats:50,registered:31,color:C.green,speaker:"ACAD Team"},
  {id:4,title:"Biology Olympiad Bootcamp",date:"Apr 2, 2026",time:"3:00 PM",type:"Workshop",seats:80,registered:22,color:C.teal,speaker:"Dr. Meena R"},
  {id:5,title:"Study Skills & Time Management",date:"Apr 8, 2026",time:"6:00 PM",type:"Webinar",seats:300,registered:178,color:C.blue,speaker:"Ms. Kavya M"},
];
const mockBlogs = [
  {id:1,title:"How to Score 650+ in NEET 2026",tag:"NEET",author:"Dr. Meena R",date:"Mar 5, 2026",read:"6 min",color:C.accent,summary:"A complete breakdown of chapter-wise weightage, revision strategies, and common mistakes students make in the final month."},
  {id:2,title:"JEE Mains vs Advanced – Key Differences",tag:"JEE",author:"Mr. Suresh V",date:"Mar 2, 2026",read:"4 min",color:C.blue,summary:"Understand the pattern, syllabus overlap, and how to balance preparation for both exams without burning out."},
  {id:3,title:"Top 10 Biology Topics for NEET 2026",tag:"Biology",author:"Dr. Meena R",date:"Feb 28, 2026",read:"5 min",color:C.green,summary:"From Genetics to Human Physiology — these chapters are high-yield and appear repeatedly across NEET papers."},
  {id:4,title:"Organic Chemistry Made Easy",tag:"Chemistry",author:"Ms. Priya Nair",date:"Feb 22, 2026",read:"7 min",color:C.orange,summary:"Reaction mechanisms, trick mnemonics and a master list of named reactions to ace the chemistry section."},
  {id:5,title:"How to Build a 90-Day Study Plan",tag:"Strategy",author:"Ms. Kavya M",date:"Feb 15, 2026",read:"5 min",color:C.teal,summary:"A realistic, hour-by-hour weekly template for Class XII students balancing boards and competitive exam prep."},
];
const mockNEET = [
  {id:1,title:"NEET Crash Course – Biology",chapters:38,videos:110,tests:20,color:C.green,tag:"Most Popular"},
  {id:2,title:"NEET Crash Course – Chemistry",chapters:30,videos:90,tests:18,color:C.orange,tag:""},
  {id:3,title:"NEET Crash Course – Physics",chapters:28,videos:85,tests:15,color:C.accent,tag:""},
  {id:4,title:"JEE Mains – Maths Booster",chapters:22,videos:70,tests:25,color:C.blue,tag:"JEE"},
  {id:5,title:"JEE Advanced – Physics Master",chapters:18,videos:60,tests:20,color:C.pink,tag:"JEE Advanced"},
];
const mockEssentials = [
  {id:1,type:"Notes",title:"NCERT Biology – Complete Summary",subject:"Biology",size:"2.4 MB",downloads:1240,color:C.green},
  {id:2,type:"PYQ",title:"NEET 2015–2025 Previous Papers",subject:"All Subjects",size:"18 MB",downloads:3890,color:C.accent},
  {id:3,type:"Formula",title:"Physics Formula Sheet – Class XII",subject:"Physics",size:"0.8 MB",downloads:2100,color:C.blue},
  {id:4,type:"Notes",title:"Organic Chemistry Reaction Map",subject:"Chemistry",size:"1.2 MB",downloads:980,color:C.orange},
  {id:5,type:"PYQ",title:"JEE Mains 2018–2025 Papers",subject:"All Subjects",size:"22 MB",downloads:2750,color:C.teal},
  {id:6,type:"Formula",title:"Maths Formula Handbook",subject:"Maths",size:"1.1 MB",downloads:1560,color:C.pink},
];
const scoreData = [{m:"Oct",s:62},{m:"Nov",s:70},{m:"Dec",s:68},{m:"Jan",s:75},{m:"Feb",s:80},{m:"Mar",s:85}];
const notifs = [
  {id:1,msg:"Live class in 30 min – Physics",time:"3:30 PM"},
  {id:2,msg:"Assignment graded: Biology",time:"Yesterday"},
  {id:3,msg:"New material: Organic Chemistry",time:"2 days ago"},
];

// ── Helpers ──────────────────────────────────────────────────────────────────
const PBar = ({ pct, color=C.accent, h=6 }: { pct:number; color?:string; h?:number }) => (
  <div style={{ height:h, background:C.border, borderRadius:4, overflow:"hidden" }}>
    <div style={{ height:"100%", width:`${pct}%`, background:color, borderRadius:4 }}/>
  </div>
);
const Badge = ({ label, color }: { label:string; color:string }) => (
  <span style={{ fontSize:11, fontWeight:700, padding:"2px 9px", borderRadius:10, background:color+"22", color, border:`1px solid ${color}44` }}>{label}</span>
);
const Card = ({ children, style={} }: { children:React.ReactNode; style?:React.CSSProperties }) => (
  <div style={{ background:C.bgCard, border:`1px solid ${C.border}`, borderRadius:14, ...style }}>{children}</div>
);
const SectionTitle = ({ title, sub="" }: { title:string; sub?:string }) => (
  <div style={{ marginBottom:20 }}>
    <div style={{ fontWeight:700, fontSize:18, color:C.textPrimary }}>{title}</div>
    {sub && <div style={{ fontSize:13, color:C.textMuted, marginTop:3 }}>{sub}</div>}
  </div>
);

// ── Google Auth Button ────────────────────────────────────────────────────────
const GoogleBtn = ({ label, onEnter, role }: { label:string; onEnter:(r:string)=>void; role:string }) => {
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => { setLoading(false); onEnter(role); }, 1200);
  };
  return (
    <button onClick={handleClick} style={{ width:"100%", padding:"11px", borderRadius:10, border:`1px solid ${C.border}`, background:C.bg, color:C.textPrimary, fontWeight:600, fontSize:14, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:10, marginBottom:16, opacity:loading?0.7:1 }}>
      {loading ? <span style={{ fontSize:13, color:C.textMuted }}>Connecting to Google...</span> : <>
        <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.1 29.3 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.3 1 7.2 2.8l5.7-5.7C33.5 7.1 29 5 24 5 13 5 4 14 4 25s9 20 20 20c11 0 20-9 20-20 0-1.3-.1-2.6-.4-3.9z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.6 18.9 13 24 13c2.8 0 5.3 1 7.2 2.8l5.7-5.7C33.5 7.1 29 5 24 5 16.3 5 9.7 9 6.3 14.7z"/><path fill="#4CAF50" d="M24 45c4.9 0 9.3-1.8 12.7-4.8l-5.9-5c-1.7 1.3-3.9 2-6.8 2-5.2 0-9.6-3-11.3-7.2l-6.6 5.1C9.5 41 16.3 45 24 45z"/><path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.3 5.7l5.9 5C41.4 36.1 44 31 44 25c0-1.3-.1-2.6-.4-3.9z"/></svg>
        {label}
      </>}
    </button>
  );
};

// ── Landing ───────────────────────────────────────────────────────────────────
const Landing = ({ onLogin, goToSection }: { onLogin:()=>void; goToSection:(s:string)=>void }) => {
  const features = [
    {icon:"video",title:"Live Interactive Classes",desc:"Real-time HD video sessions with expert tutors and instant doubt clearing."},
    {icon:"book",title:"Structured Courses",desc:"CBSE & NEET/JEE aligned curriculum with chapter-wise resources."},
    {icon:"check",title:"Smart Assignments",desc:"Auto-graded practice with instant feedback and performance analytics."},
    {icon:"chart",title:"Progress Tracking",desc:"Detailed weekly reports to monitor improvement across subjects."},
    {icon:"award",title:"NEET & JEE Prep",desc:"Dedicated crash courses, mock tests, and rank predictor tools."},
    {icon:"users",title:"Expert Tutors",desc:"Handpicked educators with proven records from Chennai."},
  ];
  const navLinks = [
    {label:"Courses",section:"courses"},
    {label:"Events",section:"events"},
    {label:"Blog",section:"blog"},
    {label:"NEET/JEE",section:"neet"},
  ];
  return (
    <div style={{ background:C.bg, minHeight:"100vh", color:C.textPrimary, fontFamily:"'Segoe UI',sans-serif" }}>
      <nav style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"16px 48px", borderBottom:`1px solid ${C.border}`, background:C.bgSidebar, position:"sticky", top:0, zIndex:100 }}>
        <Logo/>
        <div style={{ display:"flex", gap:28, fontSize:14 }}>
          {navLinks.map(l => (
            <span key={l.label} onClick={() => goToSection(l.section)}
              style={{ cursor:"pointer", color:C.textSecondary, fontWeight:500, padding:"4px 0", borderBottom:"2px solid transparent" }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color=C.accentLight; (e.target as HTMLElement).style.borderBottomColor=C.accent; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color=C.textSecondary; (e.target as HTMLElement).style.borderBottomColor="transparent"; }}>
              {l.label}
            </span>
          ))}
        </div>
        <div style={{ display:"flex", gap:10 }}>
          <button onClick={onLogin} style={{ padding:"8px 20px", borderRadius:8, border:`1px solid ${C.accent}`, background:"transparent", color:C.accentLight, cursor:"pointer", fontWeight:600 }}>Login</button>
          <button onClick={onLogin} style={{ padding:"8px 20px", borderRadius:8, border:"none", background:C.accent, color:"#fff", cursor:"pointer", fontWeight:600 }}>Get Started</button>
        </div>
      </nav>
      <div style={{ textAlign:"center", padding:"90px 24px 60px", background:`radial-gradient(ellipse at top,${C.accentGlow} 0%,transparent 60%)` }}>
        <div style={{ display:"inline-block", background:C.accentGlow, border:`1px solid ${C.accent}`, borderRadius:20, padding:"4px 16px", fontSize:12, color:C.accentLight, marginBottom:20 }}>🎯 NEET · JEE · CBSE · Class XI & XII</div>
        <h1 style={{ fontSize:52, fontWeight:800, margin:"0 0 20px", lineHeight:1.15 }}>
          Learn Smarter.<br/>
          <span style={{ background:`linear-gradient(90deg,${C.accent},${C.blue})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Score Higher.</span>
        </h1>
        <p style={{ fontSize:18, color:C.textSecondary, maxWidth:560, margin:"0 auto 36px" }}>
          ACAD Online Tuition Center — expert-led live classes, structured courses, and exam-ready content for students across Tamil Nadu.
        </p>
        <div style={{ display:"flex", gap:12, justifyContent:"center" }}>
          <button onClick={onLogin} style={{ padding:"14px 36px", borderRadius:10, background:`linear-gradient(135deg,${C.accent},${C.blue})`, border:"none", color:"#fff", fontSize:16, fontWeight:700, cursor:"pointer" }}>Start Learning Free</button>
          <button style={{ padding:"14px 36px", borderRadius:10, border:`1px solid ${C.border}`, background:"transparent", color:C.textPrimary, fontSize:16, cursor:"pointer" }}>Watch Demo ▶</button>
        </div>
        <div style={{ display:"flex", gap:36, justifyContent:"center", marginTop:48, flexWrap:"wrap" }}>
          {[["500+","Students"],["20+","Expert Tutors"],["95%","Exam Success"],["5+","Subjects"]].map(([n,l]) => (
            <div key={l} style={{ textAlign:"center" }}>
              <div style={{ fontSize:28, fontWeight:800, color:C.accentLight }}>{n}</div>
              <div style={{ fontSize:13, color:C.textSecondary }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding:"60px 48px", maxWidth:1100, margin:"0 auto" }}>
        <h2 style={{ textAlign:"center", fontSize:32, fontWeight:700, marginBottom:48 }}>Everything you need to excel</h2>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }}>
          {features.map(f => (
            <Card key={f.title} style={{ padding:24 }}>
              <div style={{ width:44, height:44, borderRadius:10, background:C.accentGlow, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:14 }}>
                <I d={ic[f.icon]} c={C.accentLight}/>
              </div>
              <div style={{ fontWeight:700, marginBottom:8 }}>{f.title}</div>
              <div style={{ fontSize:13, color:C.textSecondary, lineHeight:1.6 }}>{f.desc}</div>
            </Card>
          ))}
        </div>
      </div>
      <footer style={{ borderTop:`1px solid ${C.border}`, padding:"24px 48px", display:"flex", justifyContent:"space-between", color:C.textMuted, fontSize:13 }}>
        <span>© 2026 ACAD Online Tuition Center, Chennai</span>
        <span>contact@acadapp.in · acadapp.in</span>
      </footer>
    </div>
  );
};

// ── Login ─────────────────────────────────────────────────────────────────────
const LoginPage = ({ onBack, onEnter }: { onBack:()=>void; onEnter:(r:string)=>void }) => {
  const [tab, setTab] = useState("login");
  const [role, setRole] = useState("Student");
  return (
    <div style={{ minHeight:"100vh", background:C.bg, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Segoe UI',sans-serif" }}>
      <div style={{ width:440, background:C.bgCard, borderRadius:18, border:`1px solid ${C.border}`, padding:40 }}>
        <div style={{ marginBottom:28 }}><Logo/></div>
        <div style={{ display:"flex", gap:4, marginBottom:24, background:C.bg, borderRadius:10, padding:4 }}>
          {["login","register"].map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ flex:1, padding:"8px", borderRadius:8, border:"none", background:tab===t?C.accent:"transparent", color:tab===t?"#fff":C.textSecondary, fontWeight:600, cursor:"pointer", textTransform:"capitalize" }}>{t}</button>
          ))}
        </div>
        <GoogleBtn label={tab==="login"?"Continue with Google":"Sign up with Google"} onEnter={onEnter} role={role}/>
        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:16 }}>
          <div style={{ flex:1, height:1, background:C.border }}/><span style={{ fontSize:12, color:C.textMuted }}>or with email</span><div style={{ flex:1, height:1, background:C.border }}/>
        </div>
        <div style={{ marginBottom:14 }}>
          <label style={{ fontSize:12, color:C.textMuted, display:"block", marginBottom:6 }}>I am a</label>
          <div style={{ display:"flex", gap:8 }}>
            {["Student","Tutor","Admin"].map(r => (
              <button key={r} onClick={() => setRole(r)} style={{ flex:1, padding:"8px", borderRadius:8, border:`1px solid ${role===r?C.accent:C.border}`, background:role===r?C.accentGlow:"transparent", color:role===r?C.accentLight:C.textSecondary, fontWeight:600, cursor:"pointer", fontSize:13 }}>{r}</button>
            ))}
          </div>
        </div>
        {tab==="register" && (
          <div style={{ marginBottom:14 }}>
            <label style={{ fontSize:12, color:C.textMuted, display:"block", marginBottom:6 }}>Full Name</label>
            <input style={{ width:"100%", padding:"10px 12px", borderRadius:8, background:C.bg, border:`1px solid ${C.border}`, color:C.textPrimary, fontSize:14, boxSizing:"border-box" }} placeholder="Your full name"/>
          </div>
        )}
        <div style={{ marginBottom:14 }}>
          <label style={{ fontSize:12, color:C.textMuted, display:"block", marginBottom:6 }}>Email</label>
          <input style={{ width:"100%", padding:"10px 12px", borderRadius:8, background:C.bg, border:`1px solid ${C.border}`, color:C.textPrimary, fontSize:14, boxSizing:"border-box" }} placeholder="you@email.com"/>
        </div>
        <div style={{ marginBottom:22 }}>
          <label style={{ fontSize:12, color:C.textMuted, display:"block", marginBottom:6 }}>Password</label>
          <input type="password" style={{ width:"100%", padding:"10px 12px", borderRadius:8, background:C.bg, border:`1px solid ${C.border}`, color:C.textPrimary, fontSize:14, boxSizing:"border-box" }} placeholder="••••••••"/>
        </div>
        <button onClick={() => onEnter(role)} style={{ width:"100%", padding:"12px", borderRadius:10, background:`linear-gradient(135deg,${C.accent},${C.blue})`, border:"none", color:"#fff", fontWeight:700, fontSize:15, cursor:"pointer" }}>
          {tab==="login"?"Login":"Create Account"}
        </button>
        <div style={{ textAlign:"center", marginTop:16 }}>
          <span onClick={onBack} style={{ fontSize:13, color:C.textMuted, cursor:"pointer" }}>← Back to Home</span>
        </div>
      </div>
    </div>
  );
};

// ── Sidebar ───────────────────────────────────────────────────────────────────
const navByRole: Record<string,{key:string;label:string;icon:string}[]> = {
  Student:[
    {key:"dashboard",label:"Dashboard",icon:"home"},
    {key:"courses",label:"My Courses",icon:"book"},
    {key:"live",label:"Live Classes",icon:"video"},
    {key:"assignments",label:"Assignments",icon:"check"},
    {key:"progress",label:"Progress",icon:"chart"},
    {key:"events",label:"Events",icon:"calendar"},
    {key:"blog",label:"Blog",icon:"edit"},
    {key:"neet",label:"NEET | JEE",icon:"target"},
    {key:"essentials",label:"Essentials",icon:"file"},
    {key:"settings",label:"Settings",icon:"settings"},
  ],
  Tutor:[
    {key:"tdashboard",label:"Dashboard",icon:"home"},
    {key:"tstudents",label:"My Students",icon:"users"},
    {key:"tschedule",label:"Schedule",icon:"calendar"},
    {key:"tupload",label:"Upload Material",icon:"upload"},
    {key:"tassign",label:"Assignments",icon:"check"},
    {key:"tearnings",label:"Earnings",icon:"dollar"},
    {key:"events",label:"Events",icon:"calendar"},
    {key:"settings",label:"Settings",icon:"settings"},
  ],
  Admin:[
    {key:"adashboard",label:"Dashboard",icon:"home"},
    {key:"ausers",label:"Users",icon:"users"},
    {key:"acourses",label:"Courses",icon:"book"},
    {key:"aenroll",label:"Enrollments",icon:"check"},
    {key:"aanalytics",label:"Analytics",icon:"chart"},
    {key:"aevents",label:"Events",icon:"calendar"},
    {key:"asupport",label:"Support",icon:"shield"},
    {key:"settings",label:"Settings",icon:"settings"},
  ],
};

const Sidebar = ({ role, active, setActive, onLogout, collapsed, setCollapsed }:
  { role:string; active:string; setActive:(p:string)=>void; onLogout:()=>void; collapsed:boolean; setCollapsed:(f:(c:boolean)=>boolean)=>void }) => {
  const items = navByRole[role] || navByRole.Student;
  return (
    <div style={{ width:collapsed?64:220, background:C.bgSidebar, borderRight:`1px solid ${C.border}`, height:"100vh", display:"flex", flexDirection:"column", transition:"width 0.2s", flexShrink:0, overflowY:"auto" }}>
      <div style={{ padding:collapsed?"18px 14px":"18px 18px", borderBottom:`1px solid ${C.border}`, flexShrink:0 }}>
        {collapsed ? <Logo size={32} showText={false}/> : <Logo size={32}/>}
      </div>
      <div style={{ fontSize:10, color:C.textMuted, padding:collapsed?"8px 14px":"8px 18px", letterSpacing:1, textTransform:"uppercase" }}>{!collapsed&&role}</div>
      <nav style={{ flex:1, padding:"4px 0" }}>
        {items.map(n => (
          <div key={n.key} onClick={() => setActive(n.key)}
            style={{ display:"flex", alignItems:"center", gap:12, padding:collapsed?"12px 20px":"10px 18px", cursor:"pointer", borderLeft:active===n.key?`3px solid ${C.accent}`:"3px solid transparent", background:active===n.key?C.accentGlow:"transparent", color:active===n.key?C.accentLight:C.textSecondary, fontWeight:active===n.key?600:400 }}>
            <I d={ic[n.icon]} s={17} c={active===n.key?C.accentLight:C.textSecondary}/>
            {!collapsed && <span style={{ fontSize:13 }}>{n.label}</span>}
          </div>
        ))}
      </nav>
      <div style={{ borderTop:`1px solid ${C.border}`, padding:collapsed?"14px 20px":"14px 18px", flexShrink:0 }}>
        <div onClick={onLogout} style={{ display:"flex", alignItems:"center", gap:12, cursor:"pointer", color:C.textMuted, fontSize:13 }}>
          <I d={ic.logout} s={17} c={C.textMuted}/>{!collapsed&&"Logout"}
        </div>
      </div>
    </div>
  );
};

const Topbar = ({ page, role, notifOpen, setNotifOpen, setCollapsed }:
  { page:string; role:string; notifOpen:boolean; setNotifOpen:(f:(o:boolean)=>boolean)=>void; collapsed:boolean; setCollapsed:(f:(c:boolean)=>boolean)=>void }) => (
  <div style={{ height:58, background:C.bgCard, borderBottom:`1px solid ${C.border}`, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 22px", flexShrink:0 }}>
    <div style={{ display:"flex", alignItems:"center", gap:14 }}>
      <div onClick={() => setCollapsed((c:boolean) => !c)} style={{ cursor:"pointer", color:C.textSecondary }}><I d={ic.menu}/></div>
      <span style={{ fontWeight:700, fontSize:15, color:C.textPrimary, textTransform:"capitalize" }}>{page}</span>
    </div>
    <div style={{ display:"flex", alignItems:"center", gap:14 }}>
      <Badge label={role} color={role==="Admin"?C.red:role==="Tutor"?C.green:C.accent}/>
      <div style={{ position:"relative" }}>
        <div onClick={() => setNotifOpen((o:boolean) => !o)} style={{ cursor:"pointer", position:"relative" }}>
          <I d={ic.bell} c={C.textSecondary}/>
          <span style={{ position:"absolute", top:-4, right:-4, width:8, height:8, borderRadius:"50%", background:C.red }}/>
        </div>
        {notifOpen && (
          <div style={{ position:"absolute", right:0, top:34, width:280, background:C.bgCard, border:`1px solid ${C.border}`, borderRadius:12, zIndex:200 }}>
            <div style={{ padding:"12px 16px", borderBottom:`1px solid ${C.border}`, fontWeight:700, fontSize:13 }}>Notifications</div>
            {notifs.map(n => (
              <div key={n.id} style={{ padding:"12px 16px", borderBottom:`1px solid ${C.border}`, fontSize:12 }}>
                <div style={{ color:C.textPrimary, marginBottom:3 }}>{n.msg}</div>
                <div style={{ fontSize:11, color:C.textMuted }}>{n.time}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div style={{ width:32, height:32, borderRadius:"50%", background:`linear-gradient(135deg,${C.accent},${C.blue})`, display:"flex", alignItems:"center", justifyContent:"center", fontWeight:700, fontSize:12, color:"#fff" }}>
        {role[0]}K
      </div>
    </div>
  </div>
);

// ── Student Pages ─────────────────────────────────────────────────────────────
const StudentDashboard = () => (
  <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
    <div style={{ background:`linear-gradient(135deg,${C.accentGlow},transparent)`, border:`1px solid ${C.accent}44`, borderRadius:16, padding:"22px 28px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
      <div>
        <div style={{ fontSize:12, color:C.textMuted, marginBottom:4 }}>Welcome back 👋</div>
        <div style={{ fontSize:22, fontWeight:700 }}>Arjun Kumar</div>
        <div style={{ fontSize:13, color:C.textSecondary, marginTop:3 }}>Class XII · 5 courses enrolled</div>
      </div>
      <div style={{ textAlign:"center" }}>
        <div style={{ fontSize:32, fontWeight:800, color:C.accentLight }}>🔥 12</div>
        <div style={{ fontSize:11, color:C.textMuted }}>day streak</div>
      </div>
    </div>
    <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:14 }}>
      {([{l:"Enrolled",v:5,i:"book",c:C.accent},{l:"Live Today",v:2,i:"video",c:C.green},{l:"Pending",v:3,i:"check",c:C.orange},{l:"Avg Score",v:"80%",i:"chart",c:C.blue}] as {l:string;v:number|string;i:string;c:string}[]).map(s => (
        <Card key={s.l} style={{ padding:"16px 20px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
            <div><div style={{ fontSize:12, color:C.textMuted, marginBottom:6 }}>{s.l}</div><div style={{ fontSize:26, fontWeight:800, color:s.c }}>{s.v}</div></div>
            <div style={{ background:s.c+"22", borderRadius:9, padding:8 }}><I d={ic[s.i]} c={s.c}/></div>
          </div>
        </Card>
      ))}
    </div>
    <div style={{ display:"grid", gridTemplateColumns:"1.4fr 1fr", gap:18 }}>
      <Card style={{ padding:22 }}>
        <div style={{ fontWeight:700, marginBottom:18, fontSize:15 }}>Course Progress</div>
        {mockCourses.slice(0,4).map(c => (
          <div key={c.id} style={{ marginBottom:16 }}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6, fontSize:13 }}>
              <span>{c.name}</span><span style={{ color:c.color, fontWeight:700 }}>{c.progress}%</span>
            </div>
            <PBar pct={c.progress} color={c.color}/>
          </div>
        ))}
      </Card>
      <Card style={{ padding:22 }}>
        <div style={{ fontWeight:700, marginBottom:16, fontSize:15 }}>Upcoming Classes</div>
        {mockLive.filter(c => c.status==="upcoming").map(cl => (
          <div key={cl.id} style={{ background:C.bg, borderRadius:10, padding:14, marginBottom:12 }}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
              <span style={{ fontWeight:600, fontSize:13 }}>{cl.subject}</span>
              <Badge label="LIVE" color={C.green}/>
            </div>
            <div style={{ fontSize:12, color:C.textSecondary, marginBottom:4 }}>{cl.topic}</div>
            <div style={{ fontSize:11, color:C.textMuted }}>{cl.time}</div>
            <button style={{ marginTop:10, width:"100%", padding:"7px", borderRadius:8, background:C.accent, border:"none", color:"#fff", fontSize:12, fontWeight:600, cursor:"pointer" }}>Join Class</button>
          </div>
        ))}
      </Card>
    </div>
  </div>
);

const CoursesPage = () => (
  <div>
    <SectionTitle title="My Courses" sub="Track your learning journey"/>
    <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:18 }}>
      {mockCourses.map(c => (
        <Card key={c.id} style={{ overflow:"hidden" }}>
          <div style={{ height:5, background:c.color }}/>
          <div style={{ padding:22 }}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:10 }}>
              <div style={{ fontWeight:700, fontSize:15 }}>{c.name}</div>
              <span style={{ color:c.color, fontWeight:700 }}>{c.progress}%</span>
            </div>
            <div style={{ fontSize:12, color:C.textSecondary, marginBottom:14 }}>Tutor: {c.tutor}</div>
            <PBar pct={c.progress} color={c.color}/>
            <div style={{ display:"flex", justifyContent:"space-between", marginTop:8, fontSize:12, color:C.textMuted }}><span>{c.done}/{c.lessons} lessons</span></div>
            <div style={{ marginTop:12, padding:"10px 12px", background:C.bg, borderRadius:8, fontSize:12, color:C.textSecondary }}>▶ Next: {c.next}</div>
            <button style={{ marginTop:14, width:"100%", padding:"9px", borderRadius:8, background:"transparent", border:`1px solid ${c.color}`, color:c.color, fontWeight:600, fontSize:13, cursor:"pointer" }}>Continue Learning</button>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

const LivePage = () => {
  const sc: Record<string,string> = {upcoming:C.green,completed:C.textMuted,scheduled:C.blue};
  return (
    <div>
      <SectionTitle title="Live Classes"/>
      {mockLive.map(cl => (
        <Card key={cl.id} style={{ padding:"18px 22px", marginBottom:12, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <div style={{ display:"flex", gap:16, alignItems:"center" }}>
            <div style={{ width:46, height:46, borderRadius:12, background:C.accentGlow, display:"flex", alignItems:"center", justifyContent:"center" }}><I d={ic.video} c={C.accentLight}/></div>
            <div>
              <div style={{ fontWeight:700, marginBottom:3 }}>{cl.subject} – {cl.topic}</div>
              <div style={{ fontSize:12, color:C.textSecondary }}>{cl.tutor}</div>
              <div style={{ fontSize:11, color:C.textMuted, marginTop:3 }}>{cl.time} · {cl.duration}</div>
            </div>
          </div>
          <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:8 }}>
            <Badge label={cl.status.toUpperCase()} color={sc[cl.status]}/>
            {cl.status!=="completed" && <button style={{ padding:"7px 16px", borderRadius:8, background:cl.status==="upcoming"?C.accent:C.border, border:"none", color:"#fff", fontWeight:600, fontSize:12, cursor:"pointer" }}>{cl.status==="upcoming"?"Join Now":"Remind Me"}</button>}
            {cl.status==="completed" && <button style={{ padding:"7px 16px", borderRadius:8, background:"transparent", border:`1px solid ${C.border}`, color:C.textSecondary, fontWeight:600, fontSize:12, cursor:"pointer" }}>Watch Recording</button>}
          </div>
        </Card>
      ))}
    </div>
  );
};

const AssignmentsPage = () => {
  const sc: Record<string,string> = {pending:C.orange,submitted:C.blue,graded:C.green,overdue:C.red};
  return (
    <div>
      <SectionTitle title="Assignments"/>
      {mockAssignments.map(a => (
        <Card key={a.id} style={{ padding:"16px 20px", marginBottom:12, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <div style={{ display:"flex", gap:14, alignItems:"center" }}>
            <div style={{ width:42, height:42, borderRadius:10, background:sc[a.status]+"22", display:"flex", alignItems:"center", justifyContent:"center" }}><I d={ic.check} c={sc[a.status]} s={17}/></div>
            <div>
              <div style={{ fontWeight:600, marginBottom:3 }}>{a.title}</div>
              <div style={{ fontSize:12, color:C.textSecondary }}>{a.subject} · Due: {a.due}</div>
              {a.status==="graded" && <div style={{ fontSize:12, color:C.green, marginTop:3 }}>Score: {a.score}/{a.marks}</div>}
            </div>
          </div>
          <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:8 }}>
            <Badge label={a.status.toUpperCase()} color={sc[a.status]}/>
            <span style={{ fontSize:11, color:C.textMuted }}>{a.marks} marks</span>
            {(a.status==="pending"||a.status==="overdue") && <button style={{ padding:"6px 14px", borderRadius:8, background:a.status==="overdue"?C.red:C.accent, border:"none", color:"#fff", fontWeight:600, fontSize:12, cursor:"pointer" }}>Submit</button>}
          </div>
        </Card>
      ))}
    </div>
  );
};

const ProgressPage = () => (
  <div>
    <SectionTitle title="Progress & Analytics"/>
    <div style={{ display:"grid", gridTemplateColumns:"1.3fr 1fr", gap:20, marginBottom:20 }}>
      <Card style={{ padding:22 }}>
        <div style={{ fontWeight:700, marginBottom:20 }}>Score Trend (Last 6 months)</div>
        <div style={{ display:"flex", alignItems:"flex-end", gap:10, height:130 }}>
          {scoreData.map(d => (
            <div key={d.m} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:5 }}>
              <span style={{ fontSize:11, color:C.accentLight, fontWeight:700 }}>{d.s}</span>
              <div style={{ width:"100%", height:`${(d.s/100)*110}px`, background:`linear-gradient(to top,${C.accent},${C.blue})`, borderRadius:"4px 4px 0 0" }}/>
              <span style={{ fontSize:10, color:C.textMuted }}>{d.m}</span>
            </div>
          ))}
        </div>
      </Card>
      <Card style={{ padding:22 }}>
        <div style={{ fontWeight:700, marginBottom:16 }}>Subject-wise</div>
        {mockCourses.map(c => (
          <div key={c.id} style={{ marginBottom:14 }}>
            <div style={{ display:"flex", justifyContent:"space-between", fontSize:13, marginBottom:5 }}>
              <span style={{ color:C.textSecondary }}>{c.name.split("–")[0].trim()}</span>
              <span style={{ color:c.color, fontWeight:700 }}>{c.progress}%</span>
            </div>
            <PBar pct={c.progress} color={c.color}/>
          </div>
        ))}
      </Card>
    </div>
    <Card style={{ padding:22 }}>
      <div style={{ fontWeight:700, marginBottom:16 }}>Achievements</div>
      <div style={{ display:"flex", gap:14 }}>
        {[{t:"12-Day Streak",e:"🔥",d:"Consistent"},{t:"Top Scorer",e:"🏆",d:"Biology 90%"},{t:"5 Courses",e:"📚",d:"Multi-subject"},{t:"Submitter",e:"✅",d:"On time"}].map(a => (
          <div key={a.t} style={{ flex:1, background:C.bg, borderRadius:12, padding:16, textAlign:"center" }}>
            <div style={{ fontSize:26, marginBottom:6 }}>{a.e}</div>
            <div style={{ fontWeight:700, fontSize:12, marginBottom:3 }}>{a.t}</div>
            <div style={{ fontSize:11, color:C.textMuted }}>{a.d}</div>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

const EventsPage = () => (
  <div>
    <SectionTitle title="Events & Webinars" sub="Register for upcoming sessions, workshops and open houses"/>
    <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:18 }}>
      {mockEvents.map(e => (
        <Card key={e.id} style={{ overflow:"hidden" }}>
          <div style={{ height:5, background:e.color }}/>
          <div style={{ padding:22 }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:10 }}>
              <div style={{ fontWeight:700, fontSize:15, flex:1, paddingRight:10 }}>{e.title}</div>
              <Badge label={e.type} color={e.color}/>
            </div>
            <div style={{ fontSize:13, color:C.textSecondary, marginBottom:4 }}>🎙 {e.speaker}</div>
            <div style={{ fontSize:12, color:C.textMuted, marginBottom:14 }}>📅 {e.date} · {e.time}</div>
            <div style={{ marginBottom:8, fontSize:12, color:C.textSecondary, display:"flex", justifyContent:"space-between" }}>
              <span>Registered</span><span style={{ color:e.color, fontWeight:700 }}>{e.registered}/{e.seats}</span>
            </div>
            <PBar pct={Math.round(e.registered/e.seats*100)} color={e.color} h={5}/>
            <button style={{ marginTop:14, width:"100%", padding:"9px", borderRadius:8, background:e.color, border:"none", color:"#fff", fontWeight:700, fontSize:13, cursor:"pointer" }}>Register Now</button>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

const BlogPage = () => {
  const [open, setOpen] = useState<number|null>(null);
  if (open !== null) {
    const b = mockBlogs.find(x => x.id===open)!;
    return (
      <div style={{ maxWidth:720 }}>
        <div onClick={() => setOpen(null)} style={{ fontSize:13, color:C.textMuted, cursor:"pointer", marginBottom:20 }}>← Back to Blog</div>
        <Badge label={b.tag} color={b.color}/>
        <h2 style={{ fontSize:26, fontWeight:800, margin:"14px 0 10px" }}>{b.title}</h2>
        <div style={{ fontSize:13, color:C.textMuted, marginBottom:24 }}>By {b.author} · {b.date} · {b.read} read</div>
        <Card style={{ padding:28 }}>
          <p style={{ color:C.textSecondary, lineHeight:1.9, fontSize:15 }}>{b.summary}</p>
          <p style={{ color:C.textSecondary, lineHeight:1.9, marginTop:16, fontSize:15 }}>This article provides in-depth guidance to help students systematically approach their exam preparation. Key takeaways include time-boxing study sessions, spaced repetition for retention, and consistent revision of previous year papers.</p>
          <p style={{ color:C.textSecondary, lineHeight:1.9, marginTop:16, fontSize:15 }}>Students who follow a structured schedule combined with regular mock tests tend to score significantly higher. Always analyse your mistakes after each test — that's where real improvement happens.</p>
        </Card>
      </div>
    );
  }
  return (
    <div>
      <SectionTitle title="Blog" sub="Expert tips, strategies and subject guides"/>
      <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
        {mockBlogs.map(b => (
          <Card key={b.id} style={{ padding:22, display:"flex", gap:20, alignItems:"flex-start", cursor:"pointer" }} onClick={() => setOpen(b.id)}>
            <div style={{ width:48, height:48, borderRadius:12, background:b.color+"22", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}><I d={ic.edit} c={b.color}/></div>
            <div style={{ flex:1 }}>
              <div style={{ display:"flex", gap:8, alignItems:"center", marginBottom:8 }}>
                <Badge label={b.tag} color={b.color}/>
                <span style={{ fontSize:11, color:C.textMuted }}>{b.read} read</span>
              </div>
              <div style={{ fontWeight:700, fontSize:15, marginBottom:6 }}>{b.title}</div>
              <div style={{ fontSize:13, color:C.textSecondary, lineHeight:1.6, marginBottom:6 }}>{b.summary}</div>
              <div style={{ fontSize:11, color:C.textMuted }}>By {b.author} · {b.date}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const NEETPage = () => (
  <div>
    <SectionTitle title="NEET | JEE Support" sub="Crash courses, mock tests, rank predictor and more"/>
    <div style={{ background:`linear-gradient(135deg,${C.accent}22,${C.blue}22)`, border:`1px solid ${C.accent}44`, borderRadius:16, padding:"24px 28px", marginBottom:24, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
      <div>
        <div style={{ fontWeight:800, fontSize:20, marginBottom:6 }}>🎯 NEET 2026 — 90 Days to Go</div>
        <div style={{ fontSize:13, color:C.textSecondary }}>Access all crash courses, mock tests and PYQ banks below</div>
      </div>
      <button style={{ padding:"10px 24px", borderRadius:10, background:C.accent, border:"none", color:"#fff", fontWeight:700, cursor:"pointer" }}>Start Free Trial</button>
    </div>
    <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14, marginBottom:24 }}>
      {[{t:"Full Mock Test",e:"📝",desc:"3 hrs · 180 Qs · NEET pattern"},{t:"Chapter Test",e:"📖",desc:"30 min · 45 Qs · topic-wise"},{t:"Rank Predictor",e:"📊",desc:"Enter score → get rank estimate"}].map(x => (
        <Card key={x.t} style={{ padding:20, textAlign:"center", cursor:"pointer" }}>
          <div style={{ fontSize:30, marginBottom:10 }}>{x.e}</div>
          <div style={{ fontWeight:700, marginBottom:4 }}>{x.t}</div>
          <div style={{ fontSize:12, color:C.textMuted, marginBottom:14 }}>{x.desc}</div>
          <button style={{ width:"100%", padding:"8px", borderRadius:8, background:C.accent, border:"none", color:"#fff", fontWeight:600, cursor:"pointer", fontSize:13 }}>Start</button>
        </Card>
      ))}
    </div>
    <div style={{ fontWeight:700, fontSize:16, marginBottom:16 }}>Crash Courses</div>
    <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
      {mockNEET.map(c => (
        <Card key={c.id} style={{ padding:"18px 22px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <div style={{ display:"flex", gap:16, alignItems:"center" }}>
            <div style={{ width:44, height:44, borderRadius:12, background:c.color+"22", display:"flex", alignItems:"center", justifyContent:"center" }}><I d={ic.zap} c={c.color}/></div>
            <div>
              <div style={{ display:"flex", gap:8, alignItems:"center", marginBottom:4 }}>
                <div style={{ fontWeight:700 }}>{c.title}</div>
                {c.tag && <Badge label={c.tag} color={c.color}/>}
              </div>
              <div style={{ fontSize:12, color:C.textMuted }}>{c.chapters} chapters · {c.videos} videos · {c.tests} tests</div>
            </div>
          </div>
          <button style={{ padding:"8px 20px", borderRadius:8, background:"transparent", border:`1px solid ${c.color}`, color:c.color, fontWeight:600, fontSize:13, cursor:"pointer" }}>Enroll</button>
        </Card>
      ))}
    </div>
  </div>
);

const EssentialsPage = () => {
  const tc: Record<string,string> = {Notes:C.green,PYQ:C.accent,Formula:C.orange};
  return (
    <div>
      <SectionTitle title="Academic Essentials" sub="Notes, PYQs, formula sheets and video library"/>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14, marginBottom:24 }}>
        {[{l:"Total Resources",v:"120+",c:C.accent},{l:"Downloads",v:"18K+",c:C.green},{l:"Subjects",v:"6",c:C.orange}].map(s => (
          <Card key={s.l} style={{ padding:"18px 20px", textAlign:"center" }}>
            <div style={{ fontSize:28, fontWeight:800, color:s.c, marginBottom:4 }}>{s.v}</div>
            <div style={{ fontSize:13, color:C.textMuted }}>{s.l}</div>
          </Card>
        ))}
      </div>
      <div style={{ display:"flex", gap:8, marginBottom:20 }}>
        {["All","Notes","PYQ","Formula"].map(f => (
          <button key={f} style={{ padding:"7px 16px", borderRadius:8, background:f==="All"?C.accent:C.bgCard, border:`1px solid ${f==="All"?C.accent:C.border}`, color:f==="All"?"#fff":C.textSecondary, fontWeight:600, fontSize:13, cursor:"pointer" }}>{f}</button>
        ))}
      </div>
      <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
        {mockEssentials.map(r => (
          <Card key={r.id} style={{ padding:"16px 20px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <div style={{ display:"flex", gap:14, alignItems:"center" }}>
              <div style={{ width:42, height:42, borderRadius:10, background:tc[r.type]+"22", display:"flex", alignItems:"center", justifyContent:"center" }}><I d={ic.file} c={tc[r.type]} s={17}/></div>
              <div>
                <div style={{ fontWeight:600, marginBottom:3 }}>{r.title}</div>
                <div style={{ fontSize:12, color:C.textMuted }}>{r.subject} · {r.size} · {r.downloads.toLocaleString()} downloads</div>
              </div>
            </div>
            <div style={{ display:"flex", gap:10, alignItems:"center" }}>
              <Badge label={r.type} color={tc[r.type]}/>
              <button style={{ padding:"7px 16px", borderRadius:8, background:tc[r.type], border:"none", color:"#fff", fontWeight:600, fontSize:12, cursor:"pointer" }}>Download</button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const SettingsPage = ({ role }: { role:string }) => {
  const [em, setEm] = useState(true);
  const [sm, setSm] = useState(false);
  const Toggle = ({ v, s }: { v:boolean; s:(x:boolean)=>void }) => (
    <div onClick={() => s(!v)} style={{ width:42, height:22, borderRadius:12, background:v?C.accent:C.border, cursor:"pointer", position:"relative" }}>
      <div style={{ width:16, height:16, borderRadius:"50%", background:"#fff", position:"absolute", top:3, left:v?23:3, transition:"left 0.2s" }}/>
    </div>
  );
  return (
    <div style={{ maxWidth:620 }}>
      <SectionTitle title="Settings"/>
      <Card style={{ padding:24, marginBottom:18 }}>
        <div style={{ fontWeight:700, marginBottom:16 }}>Profile</div>
        {[["Full Name","Arjun Kumar"],["Email","arjun@email.com"],["Phone","+91 98765 43210"],["Class / Grade","Class XII (CBSE)"]].map(([l,v]) => (
          <div key={l} style={{ marginBottom:14 }}>
            <label style={{ fontSize:12, color:C.textMuted, display:"block", marginBottom:5 }}>{l}</label>
            <input defaultValue={v} style={{ width:"100%", padding:"10px 12px", borderRadius:8, background:C.bg, border:`1px solid ${C.border}`, color:C.textPrimary, fontSize:14, boxSizing:"border-box" }}/>
          </div>
        ))}
        <div style={{ marginBottom:16 }}>
          <label style={{ fontSize:12, color:C.textMuted, display:"block", marginBottom:5 }}>Linked Google Account</label>
          <div style={{ display:"flex", alignItems:"center", gap:10, padding:"10px 12px", borderRadius:8, background:C.bg, border:`1px solid ${C.border}` }}>
            <svg width="16" height="16" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.1 29.3 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.3 1 7.2 2.8l5.7-5.7C33.5 7.1 29 5 24 5 13 5 4 14 4 25s9 20 20 20c11 0 20-9 20-20 0-1.3-.1-2.6-.4-3.9z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.6 18.9 13 24 13c2.8 0 5.3 1 7.2 2.8l5.7-5.7C33.5 7.1 29 5 24 5 16.3 5 9.7 9 6.3 14.7z"/><path fill="#4CAF50" d="M24 45c4.9 0 9.3-1.8 12.7-4.8l-5.9-5c-1.7 1.3-3.9 2-6.8 2-5.2 0-9.6-3-11.3-7.2l-6.6 5.1C9.5 41 16.3 45 24 45z"/><path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.3 5.7l5.9 5C41.4 36.1 44 31 44 25c0-1.3-.1-2.6-.4-3.9z"/></svg>
            <span style={{ fontSize:13, color:C.textSecondary }}>arjun@gmail.com</span>
            <Badge label="Connected" color={C.green}/>
          </div>
        </div>
        <button style={{ padding:"10px 24px", borderRadius:8, background:C.accent, border:"none", color:"#fff", fontWeight:600, cursor:"pointer" }}>Save Changes</button>
      </Card>
      <Card style={{ padding:24 }}>
        <div style={{ fontWeight:700, marginBottom:16 }}>Notifications</div>
        {([["Email Notifications",em,setEm],["SMS Notifications",sm,setSm]] as [string,boolean,(x:boolean)=>void][]).map(([l,v,s]) => (
          <div key={l} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 }}>
            <span style={{ fontSize:14 }}>{l}</span><Toggle v={v} s={s}/>
          </div>
        ))}
      </Card>
    </div>
  );
};

// ── Tutor Pages ───────────────────────────────────────────────────────────────
const TutorDashboard = () => (
  <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
    <div style={{ background:`linear-gradient(135deg,${C.green}22,transparent)`, border:`1px solid ${C.green}44`, borderRadius:16, padding:"22px 28px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
      <div>
        <div style={{ fontSize:12, color:C.textMuted, marginBottom:4 }}>Welcome back 👋</div>
        <div style={{ fontSize:22, fontWeight:700 }}>Mr. Ravi Shankar</div>
        <div style={{ fontSize:13, color:C.textSecondary, marginTop:3 }}>Physics Tutor · 4 Students</div>
      </div>
      <div style={{ textAlign:"center" }}>
        <div style={{ fontSize:32, fontWeight:800, color:C.green }}>⭐ 4.9</div>
        <div style={{ fontSize:11, color:C.textMuted }}>avg rating</div>
      </div>
    </div>
    <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:14 }}>
      {([{l:"Students",v:4,i:"users",c:C.accent},{l:"Classes Today",v:2,i:"video",c:C.green},{l:"Assignments",v:6,i:"check",c:C.orange},{l:"Earnings",v:"₹18K",i:"dollar",c:C.teal}] as {l:string;v:number|string;i:string;c:string}[]).map(s => (
        <Card key={s.l} style={{ padding:"16px 20px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
            <div><div style={{ fontSize:12, color:C.textMuted, marginBottom:6 }}>{s.l}</div><div style={{ fontSize:26, fontWeight:800, color:s.c }}>{s.v}</div></div>
            <div style={{ background:s.c+"22", borderRadius:9, padding:8 }}><I d={ic[s.i]} c={s.c}/></div>
          </div>
        </Card>
      ))}
    </div>
    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:18 }}>
      <Card style={{ padding:22 }}>
        <div style={{ fontWeight:700, marginBottom:16 }}>My Students</div>
        {mockStudents.map(s => (
          <div key={s.id} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 0", borderBottom:`1px solid ${C.border}` }}>
            <div style={{ display:"flex", gap:10, alignItems:"center" }}>
              <div style={{ width:32, height:32, borderRadius:"50%", background:C.accentGlow, display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:700, color:C.accentLight }}>{s.name[0]}</div>
              <div><div style={{ fontSize:13, fontWeight:600 }}>{s.name}</div><div style={{ fontSize:11, color:C.textMuted }}>Class {s.grade}</div></div>
            </div>
            <div style={{ textAlign:"right" }}>
              <div style={{ fontSize:13, fontWeight:700, color:C.green }}>{s.avg}%</div>
              <Badge label={s.status} color={s.status==="active"?C.green:C.textMuted}/>
            </div>
          </div>
        ))}
      </Card>
      <Card style={{ padding:22 }}>
        <div style={{ fontWeight:700, marginBottom:16 }}>Today's Schedule</div>
        {mockLive.slice(0,3).map(cl => (
          <div key={cl.id} style={{ background:C.bg, borderRadius:10, padding:14, marginBottom:10 }}>
            <div style={{ fontWeight:600, fontSize:13, marginBottom:3 }}>{cl.topic}</div>
            <div style={{ fontSize:12, color:C.textMuted }}>{cl.time} · {cl.duration}</div>
            <Badge label={cl.status.toUpperCase()} color={cl.status==="upcoming"?C.green:C.textMuted}/>
          </div>
        ))}
      </Card>
    </div>
  </div>
);

const TutorStudents = () => (
  <div>
    <SectionTitle title="My Students"/>
    {mockStudents.map(s => (
      <Card key={s.id} style={{ padding:"18px 22px", marginBottom:12, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <div style={{ display:"flex", gap:14, alignItems:"center" }}>
          <div style={{ width:46, height:46, borderRadius:"50%", background:`linear-gradient(135deg,${C.accent},${C.blue})`, display:"flex", alignItems:"center", justifyContent:"center", fontWeight:700, color:"#fff" }}>{s.name[0]}</div>
          <div><div style={{ fontWeight:700, marginBottom:3 }}>{s.name}</div><div style={{ fontSize:12, color:C.textSecondary }}>Class {s.grade} · {s.courses} courses</div></div>
        </div>
        <div style={{ display:"flex", gap:16, alignItems:"center" }}>
          <div style={{ textAlign:"center" }}><div style={{ fontSize:20, fontWeight:800, color:C.green }}>{s.avg}%</div><div style={{ fontSize:11, color:C.textMuted }}>Avg Score</div></div>
          <Badge label={s.status} color={s.status==="active"?C.green:C.textMuted}/>
          <button style={{ padding:"8px 16px", borderRadius:8, background:"transparent", border:`1px solid ${C.accent}`, color:C.accentLight, fontWeight:600, fontSize:12, cursor:"pointer" }}>View Report</button>
        </div>
      </Card>
    ))}
  </div>
);

const TutorSchedule = () => (
  <div>
    <SectionTitle title="My Schedule"/>
    {mockLive.map(cl => (
      <Card key={cl.id} style={{ padding:"18px 22px", marginBottom:12, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <div>
          <div style={{ fontWeight:700, marginBottom:4 }}>{cl.subject} – {cl.topic}</div>
          <div style={{ fontSize:12, color:C.textSecondary }}>{cl.time} · {cl.duration}</div>
        </div>
        <div style={{ display:"flex", gap:10, alignItems:"center" }}>
          <Badge label={cl.status.toUpperCase()} color={cl.status==="upcoming"?C.green:cl.status==="scheduled"?C.blue:C.textMuted}/>
          {cl.status!=="completed" && <button style={{ padding:"7px 14px", borderRadius:8, background:C.accent, border:"none", color:"#fff", fontWeight:600, fontSize:12, cursor:"pointer" }}>Start</button>}
        </div>
      </Card>
    ))}
  </div>
);

const TutorUpload = () => (
  <div style={{ maxWidth:600 }}>
    <SectionTitle title="Upload Material"/>
    <Card style={{ padding:28 }}>
      <div style={{ border:`2px dashed ${C.border}`, borderRadius:12, padding:"40px 24px", textAlign:"center", marginBottom:22, cursor:"pointer" }}>
        <I d={ic.upload} c={C.textMuted} s={36}/>
        <div style={{ fontWeight:600, marginTop:12, marginBottom:4 }}>Drag & drop files here</div>
        <div style={{ fontSize:13, color:C.textMuted }}>PDF, DOCX, PPT, MP4 up to 500 MB</div>
        <button style={{ marginTop:14, padding:"9px 22px", borderRadius:8, background:C.accent, border:"none", color:"#fff", fontWeight:600, cursor:"pointer" }}>Browse Files</button>
      </div>
      {[["Title","Projectile Motion – Notes"],["Subject","Physics"],["Chapter","Kinematics"]].map(([l,p]) => (
        <div key={l} style={{ marginBottom:14 }}>
          <label style={{ fontSize:12, color:C.textMuted, display:"block", marginBottom:5 }}>{l}</label>
          <input defaultValue={p} style={{ width:"100%", padding:"10px 12px", borderRadius:8, background:C.bg, border:`1px solid ${C.border}`, color:C.textPrimary, fontSize:14, boxSizing:"border-box" }}/>
        </div>
      ))}
      <button style={{ padding:"11px 28px", borderRadius:8, background:C.green, border:"none", color:"#fff", fontWeight:700, cursor:"pointer" }}>Upload Material</button>
    </Card>
  </div>
);

const TutorEarnings = () => (
  <div>
    <SectionTitle title="Earnings"/>
    <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14, marginBottom:24 }}>
      {[{l:"This Month",v:"₹18,500",c:C.green},{l:"Last Month",v:"₹16,200",c:C.accent},{l:"Total",v:"₹1,24,000",c:C.orange}].map(s => (
        <Card key={s.l} style={{ padding:"20px", textAlign:"center" }}>
          <div style={{ fontSize:26, fontWeight:800, color:s.c, marginBottom:4 }}>{s.v}</div>
          <div style={{ fontSize:13, color:C.textMuted }}>{s.l}</div>
        </Card>
      ))}
    </div>
    <Card style={{ padding:22 }}>
      <div style={{ fontWeight:700, marginBottom:16 }}>Monthly Earnings</div>
      <div style={{ display:"flex", alignItems:"flex-end", gap:12, height:120 }}>
        {[{m:"Oct",v:12000},{m:"Nov",v:14500},{m:"Dec",v:13000},{m:"Jan",v:16200},{m:"Feb",v:16200},{m:"Mar",v:18500}].map(d => (
          <div key={d.m} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:5 }}>
            <span style={{ fontSize:10, color:C.green, fontWeight:700 }}>₹{(d.v/1000).toFixed(0)}K</span>
            <div style={{ width:"100%", height:`${(d.v/20000)*100}px`, background:`linear-gradient(to top,${C.green},${C.teal})`, borderRadius:"4px 4px 0 0" }}/>
            <span style={{ fontSize:10, color:C.textMuted }}>{d.m}</span>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

// ── Admin Pages ───────────────────────────────────────────────────────────────
const AdminDashboard = () => (
  <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
    <div style={{ background:`linear-gradient(135deg,${C.red}22,transparent)`, border:`1px solid ${C.red}44`, borderRadius:16, padding:"22px 28px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
      <div>
        <div style={{ fontSize:12, color:C.textMuted, marginBottom:4 }}>Admin Panel 🛡</div>
        <div style={{ fontSize:22, fontWeight:700 }}>ACAD Control Center</div>
        <div style={{ fontSize:13, color:C.textSecondary, marginTop:3 }}>Manage users, courses & platform</div>
      </div>
      <div style={{ textAlign:"center" }}>
        <div style={{ fontSize:32, fontWeight:800, color:C.orange }}>🟢 Live</div>
        <div style={{ fontSize:11, color:C.textMuted }}>platform status</div>
      </div>
    </div>
    <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:14 }}>
      {([{l:"Total Students",v:512,i:"users",c:C.accent},{l:"Tutors",v:20,i:"user",c:C.green},{l:"Courses",v:38,i:"book",c:C.orange},{l:"Revenue",v:"₹4.2L",i:"dollar",c:C.teal}] as {l:string;v:number|string;i:string;c:string}[]).map(s => (
        <Card key={s.l} style={{ padding:"16px 20px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
            <div><div style={{ fontSize:12, color:C.textMuted, marginBottom:6 }}>{s.l}</div><div style={{ fontSize:26, fontWeight:800, color:s.c }}>{s.v}</div></div>
            <div style={{ background:s.c+"22", borderRadius:9, padding:8 }}><I d={ic[s.i]} c={s.c}/></div>
          </div>
        </Card>
      ))}
    </div>
    <div style={{ display:"grid", gridTemplateColumns:"1.3fr 1fr", gap:18 }}>
      <Card style={{ padding:22 }}>
        <div style={{ fontWeight:700, marginBottom:16 }}>Platform Revenue (2026)</div>
        <div style={{ display:"flex", alignItems:"flex-end", gap:10, height:120 }}>
          {[{m:"Oct",v:28000},{m:"Nov",v:32000},{m:"Dec",v:30000},{m:"Jan",v:38000},{m:"Feb",v:40000},{m:"Mar",v:42000}].map(d => (
            <div key={d.m} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:4 }}>
              <span style={{ fontSize:9, color:C.orange, fontWeight:700 }}>₹{(d.v/1000).toFixed(0)}K</span>
              <div style={{ width:"100%", height:`${(d.v/45000)*100}px`, background:`linear-gradient(to top,${C.orange},${C.red})`, borderRadius:"4px 4px 0 0" }}/>
              <span style={{ fontSize:9, color:C.textMuted }}>{d.m}</span>
            </div>
          ))}
        </div>
      </Card>
      <Card style={{ padding:22 }}>
        <div style={{ fontWeight:700, marginBottom:16 }}>Recent Enrollments</div>
        {mockStudents.map(s => (
          <div key={s.id} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"8px 0", borderBottom:`1px solid ${C.border}` }}>
            <div style={{ fontSize:13, fontWeight:500 }}>{s.name}</div>
            <Badge label={s.status} color={s.status==="active"?C.green:C.textMuted}/>
          </div>
        ))}
      </Card>
    </div>
  </div>
);

const AdminUsers = () => (
  <div>
    <SectionTitle title="User Management"/>
    <div style={{ display:"flex", gap:10, marginBottom:18 }}>
      {["All","Students","Tutors","Admins"].map(f => (
        <button key={f} style={{ padding:"7px 16px", borderRadius:8, background:f==="All"?C.accent:C.bgCard, border:`1px solid ${f==="All"?C.accent:C.border}`, color:f==="All"?"#fff":C.textSecondary, fontWeight:600, fontSize:13, cursor:"pointer" }}>{f}</button>
      ))}
      <button style={{ marginLeft:"auto", padding:"7px 16px", borderRadius:8, background:C.green, border:"none", color:"#fff", fontWeight:600, fontSize:13, cursor:"pointer" }}>+ Add User</button>
    </div>
    <Card style={{ padding:0, overflow:"hidden" }}>
      <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr 1fr", padding:"12px 20px", background:C.bg, fontSize:11, color:C.textMuted, fontWeight:700, textTransform:"uppercase", letterSpacing:1 }}>
        <span>Name</span><span>Role</span><span>Grade</span><span>Avg</span><span>Status</span>
      </div>
      {mockStudents.map(s => (
        <div key={s.id} style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr 1fr", padding:"14px 20px", borderTop:`1px solid ${C.border}`, alignItems:"center", fontSize:13 }}>
          <span style={{ fontWeight:600 }}>{s.name}</span>
          <span style={{ color:C.textSecondary }}>Student</span>
          <span style={{ color:C.textSecondary }}>Class {s.grade}</span>
          <span style={{ color:C.green, fontWeight:700 }}>{s.avg}%</span>
          <Badge label={s.status} color={s.status==="active"?C.green:C.textMuted}/>
        </div>
      ))}
    </Card>
  </div>
);

const AdminAnalytics = () => (
  <div>
    <SectionTitle title="Platform Analytics"/>
    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:18, marginBottom:20 }}>
      <Card style={{ padding:22 }}>
        <div style={{ fontWeight:700, marginBottom:16 }}>Enrollment Growth</div>
        <div style={{ display:"flex", alignItems:"flex-end", gap:10, height:120 }}>
          {[{m:"Oct",v:60},{m:"Nov",v:80},{m:"Dec",v:95},{m:"Jan",v:120},{m:"Feb",v:150},{m:"Mar",v:180}].map(d => (
            <div key={d.m} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:4 }}>
              <span style={{ fontSize:10, color:C.accentLight, fontWeight:700 }}>{d.v}</span>
              <div style={{ width:"100%", height:`${(d.v/200)*100}px`, background:`linear-gradient(to top,${C.accent},${C.blue})`, borderRadius:"4px 4px 0 0" }}/>
              <span style={{ fontSize:9, color:C.textMuted }}>{d.m}</span>
            </div>
          ))}
        </div>
      </Card>
      <Card style={{ padding:22 }}>
        <div style={{ fontWeight:700, marginBottom:16 }}>Subject Popularity</div>
        {[["Biology",88,C.green],["Physics",76,C.accent],["Chemistry",72,C.orange],["Maths",65,C.blue],["English",48,C.pink]].map(([s,p,c]) => (
          <div key={s as string} style={{ marginBottom:14 }}>
            <div style={{ display:"flex", justifyContent:"space-between", fontSize:13, marginBottom:5 }}>
              <span style={{ color:C.textSecondary }}>{s}</span><span style={{ color:c as string, fontWeight:700 }}>{p}%</span>
            </div>
            <PBar pct={p as number} color={c as string}/>
          </div>
        ))}
      </Card>
    </div>
  </div>
);

const AdminSupport = () => (
  <div>
    <SectionTitle title="Support Tickets"/>
    {[
      {id:1,user:"Arjun Kumar",issue:"Cannot access live class recording",status:"open",priority:"high",time:"2h ago"},
      {id:2,user:"Sneha Rajan",issue:"Payment not reflected",status:"in-progress",priority:"high",time:"5h ago"},
      {id:3,user:"Vikram S",issue:"Video quality issues in class",status:"resolved",priority:"low",time:"1d ago"},
      {id:4,user:"Ananya P",issue:"Assignment submission error",status:"open",priority:"medium",time:"3h ago"},
    ].map(t => (
      <Card key={t.id} style={{ padding:"18px 22px", marginBottom:12, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <div style={{ display:"flex", gap:14, alignItems:"center" }}>
          <div style={{ width:42, height:42, borderRadius:10, background:C.accentGlow, display:"flex", alignItems:"center", justifyContent:"center" }}><I d={ic.shield} c={C.accentLight} s={17}/></div>
          <div>
            <div style={{ fontWeight:600, marginBottom:3 }}>{t.issue}</div>
            <div style={{ fontSize:12, color:C.textSecondary }}>{t.user} · {t.time}</div>
          </div>
        </div>
        <div style={{ display:"flex", gap:10, alignItems:"center" }}>
          <Badge label={t.priority} color={t.priority==="high"?C.red:t.priority==="medium"?C.orange:C.green}/>
          <Badge label={t.status} color={t.status==="resolved"?C.green:t.status==="in-progress"?C.blue:C.orange}/>
          <button style={{ padding:"7px 14px", borderRadius:8, background:"transparent", border:`1px solid ${C.border}`, color:C.textSecondary, fontWeight:600, fontSize:12, cursor:"pointer" }}>View</button>
        </div>
      </Card>
    ))}
  </div>
);

// ── Root App ──────────────────────────────────────────────────────────────────
export default function App() {
  const [view, setView] = useState("landing");
  const [role, setRole] = useState("Student");
  const [page, setPage] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  const handleEnter = (r: string) => {
    setRole(r);
    setPage(r==="Tutor"?"tdashboard":r==="Admin"?"adashboard":"dashboard");
    setView("app");
  };

  const goToSection = (section: string) => {
    setRole("Student");
    setPage(section);
    setView("app");
  };

  if (view==="landing") return <Landing onLogin={() => setView("login")} goToSection={goToSection}/>;
  if (view==="login")   return <LoginPage onBack={() => setView("landing")} onEnter={handleEnter}/>;

  const pageMap: Record<string, React.ReactNode> = {
    dashboard:<StudentDashboard/>, courses:<CoursesPage/>, live:<LivePage/>,
    assignments:<AssignmentsPage/>, progress:<ProgressPage/>, events:<EventsPage/>,
    blog:<BlogPage/>, neet:<NEETPage/>, essentials:<EssentialsPage/>,
    settings:<SettingsPage role={role}/>,
    tdashboard:<TutorDashboard/>, tstudents:<TutorStudents/>, tschedule:<TutorSchedule/>,
    tupload:<TutorUpload/>, tassign:<AssignmentsPage/>, tearnings:<TutorEarnings/>,
    adashboard:<AdminDashboard/>, ausers:<AdminUsers/>, acourses:<CoursesPage/>,
    aenroll:<AdminUsers/>, aanalytics:<AdminAnalytics/>, aevents:<EventsPage/>,
    asupport:<AdminSupport/>,
  };

  return (
    <div style={{ display:"flex", height:"100vh", background:C.bg, fontFamily:"'Segoe UI',sans-serif", color:C.textPrimary, overflow:"hidden" }}>
      <Sidebar role={role} active={page} setActive={(p:string) => { setPage(p); setNotifOpen(false); }} onLogout={() => setView("landing")} collapsed={collapsed} setCollapsed={setCollapsed}/>
      <div style={{ flex:1, display:"flex", flexDirection:"column", overflow:"hidden" }}>
        <Topbar page={page} role={role} notifOpen={notifOpen} setNotifOpen={setNotifOpen} collapsed={collapsed} setCollapsed={setCollapsed}/>
        <div style={{ flex:1, overflowY:"auto", padding:24 }} onClick={() => setNotifOpen(false)}>
          {pageMap[page] ?? <StudentDashboard/>}
        </div>
      </div>
    </div>
  );
}
