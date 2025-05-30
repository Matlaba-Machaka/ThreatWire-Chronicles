import { FaBug, FaShieldAlt, FaLock, FaGlobe, FaDatabase } from "react-icons/fa";

export const CATEGORIES = [
  { label: "Malware", color: "bg-red-600", icon: <FaBug /> },
  { label: "Phishing", color: "bg-blue-600", icon: <FaShieldAlt /> },
  { label: "Ransomware", color: "bg-yellow-500", icon: <FaLock /> },
  { label: "Network Attacks", color: "bg-green-600", icon: <FaGlobe /> },
  { label: "Data Breach", color: "bg-purple-600", icon: <FaDatabase /> },
];

export const posts = [
  {
    _id: "1",
    slug: "darkgate-malware-new-campaign",
    title: "DarkGate Malware Returns in New Global Campaign",
    desc: "A new wave of DarkGate malware attacks has emerged, targeting enterprises in the finance and healthcare sectors. Threat actors are leveraging sophisticated obfuscation techniques to bypass endpoint protection tools. Analysts have identified new C2 infrastructures linked to these campaigns. Here’s what you need to know to protect your systems.",
    img: "https://plus.unsplash.com/premium_photo-1700830452509-6e206a0d44d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cat: "Malware",
    createdAt: "2025-05-18T12:00:00Z",
    user: {
      name: "Ava Cross",
      avatar: "https://randomuser.me/api/portraits/women/21.jpg"
    },
  },
  {
    _id: "2",
    slug: "ai-phishing-trends-2025",
    title: "AI-Powered Phishing: What to Expect in 2025",
    desc: "Phishing attacks are evolving with AI-generated emails and deepfake voice calls becoming more convincing than ever. Cybersecurity firms have reported a 120% increase in phishing attempts in Q1 2025. This report outlines emerging trends and how companies can better train their staff to detect AI-powered social engineering.",
    img: "https://plus.unsplash.com/premium_photo-1682310098267-b89c6601aab8?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cat: "Phishing",
    createdAt: "2025-05-15T09:00:00Z",
    user: {
      name: "Leo Ramsey",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  },
  {
    _id: "3",
    slug: "medusa-ransomware-hits-hospitals",
    title: "Medusa Ransomware Targets Healthcare Facilities",
    desc: "The Medusa ransomware group has launched coordinated attacks on several hospitals across Europe. These attacks are disrupting electronic health record systems and delaying critical care services. Analysts suspect the use of zero-day exploits in unpatched VPN appliances.",
    img: "https://plus.unsplash.com/premium_photo-1714618835760-5b2175ad3249?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cat: "Ransomware",
    createdAt: "2025-05-14T11:00:00Z",
    user: {
      name: "Rina Patel",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
  },
  {
    _id: "4",
    slug: "iot-botnets-surge-2025",
    title: "Massive Surge in IoT Botnet Activity Detected",
    desc: "Threat researchers have identified a 200% increase in DDoS attacks originating from vulnerable IoT devices. The botnets, dubbed 'HydraNet', are spreading via outdated firmware on smart cameras and routers. This article explores mitigation strategies for network administrators.",
    img: "https://images.unsplash.com/photo-1639815188498-e23242c9c796?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cat: "Network Attacks",
    createdAt: "2025-05-12T08:00:00Z",
    user: {
      name: "Malik Navarro",
      avatar: "https://randomuser.me/api/portraits/men/47.jpg",
    },
  },
  {
    _id: "5",
    slug: "data-leak-crypto-exchange",
    title: "Data Leak at Major Crypto Exchange Exposes Millions",
    desc: "A major cryptocurrency exchange has suffered a data breach, leaking sensitive information of over 4 million users. Initial reports suggest that the breach stemmed from a misconfigured S3 bucket. Read on to understand the implications and lessons learned.",
    img: "https://plus.unsplash.com/premium_photo-1681400668073-a1947604dd36?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cat: "Data Breach",
    createdAt: "2025-05-10T14:00:00Z",
    user: {
      name: "Jared Young",
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    },
  },
  {
    _id: "6",
    slug: "zero-day-vulnerability-windows",
    title: "Zero-Day Vulnerability Found in Latest Windows Update",
    desc: "Security researchers have disclosed a zero-day vulnerability in the latest Windows 11 update that allows privilege escalation via the Task Scheduler. Microsoft is aware of the issue and a patch is expected within 48 hours. Learn how to apply mitigations in the meantime.",
    img: "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=2100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cat: "Malware",
    createdAt: "2025-05-08T15:00:00Z",
    user: {
      name: "Dana Ruiz",
      avatar: "https://randomuser.me/api/portraits/women/11.jpg",
    },
  },
  {
    _id: "7",
    slug: "ransomware-trends-2025",
    title: "Ransomware-as-a-Service: The Business of Cybercrime in 2025",
    desc: "The ransomware landscape is shifting toward industrialized operations through RaaS platforms. This trend lowers the barrier to entry for cybercriminals and increases the frequency of targeted attacks. We examine the major players and defensive frameworks to adopt.",
    img: "https://plus.unsplash.com/premium_photo-1674669009418-2643aa58b11b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cat: "Ransomware",
    createdAt: "2025-05-06T13:00:00Z",
    user: {
      name: "Kai Ishikawa",
      avatar: "https://randomuser.me/api/portraits/men/88.jpg",
    },
  },
];

export const COMMENTS = posts.map((p) => p.comments || []).flat();

export const popular = {
  posts: posts.slice(0, 5),
  writers: [
    {
      name: "Ava Cross",
      avatar: "https://randomuser.me/api/portraits/women/21.jpg",
      postCount: 15,
      bio: "Threat intel specialist focused on malware trends.",
    },
    {
      name: "Leo Ramsey",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      postCount: 12,
      bio: "Phishing attack researcher and SOC analyst.",
    },
    {
      name: "Rina Patel",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      postCount: 10,
      bio: "Ransomware response expert at CyberSecOps.",
    },
    {
      name: "Malik Navarro",
      avatar: "https://randomuser.me/api/portraits/men/47.jpg",
      postCount: 8,
      bio: "IoT and infrastructure vulnerability analyst.",
    },
    {
      name: "Jared Young",
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
      postCount: 6,
      bio: "Cloud and data breach incident responder.",
    },
  ],
};
