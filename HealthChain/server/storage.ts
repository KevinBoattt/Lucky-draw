import { 
  type BlogPost, 
  type InsertBlogPost,
  type Project,
  type InsertProject,
  type ContactMessage,
  type InsertContactMessage,
  type Skill,
  type InsertSkill,
  type Experience,
  type InsertExperience,
  type Testimonial,
  type InsertTestimonial
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Blog Posts
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  
  // Projects
  getProjects(): Promise<Project[]>;
  getFeaturedProjects(): Promise<Project[]>;
  getProject(id: string): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  
  // Contact Messages
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  
  // Skills
  getSkills(): Promise<Skill[]>;
  createSkill(skill: InsertSkill): Promise<Skill>;
  
  // Experience
  getExperiences(): Promise<Experience[]>;
  createExperience(experience: InsertExperience): Promise<Experience>;
  
  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class MemStorage implements IStorage {
  private blogPosts: Map<string, BlogPost>;
  private projects: Map<string, Project>;
  private contactMessages: Map<string, ContactMessage>;
  private skills: Map<string, Skill>;
  private experiences: Map<string, Experience>;
  private testimonials: Map<string, Testimonial>;

  constructor() {
    this.blogPosts = new Map();
    this.projects = new Map();
    this.contactMessages = new Map();
    this.skills = new Map();
    this.experiences = new Map();
    this.testimonials = new Map();
    
    this.seedData();
  }

  private seedData() {
    // Seed blog posts
    const blogPost1: BlogPost = {
      id: randomUUID(),
      title: "Advanced Persistent Threats: Detection Strategies",
      excerpt: "Exploring modern APT tactics and implementing effective detection mechanisms using behavioral analysis and threat intelligence.",
      content: `Advanced Persistent Threats (APTs) represent one of the most sophisticated challenges in modern cybersecurity. These long-term, targeted attacks require advanced detection strategies that go beyond traditional signature-based approaches.

## Understanding APT Behavior

APTs typically follow a multi-stage attack lifecycle:
- **Initial Compromise**: Often through spear-phishing or supply chain attacks
- **Establish Foothold**: Installing backdoors and maintaining persistence
- **Escalate Privileges**: Moving laterally through the network
- **Internal Reconnaissance**: Mapping network topology and identifying high-value targets
- **Data Exfiltration**: Stealthily extracting sensitive information

## Behavioral Analysis Techniques

Effective APT detection relies on behavioral analysis rather than signature matching:

### 1. Network Traffic Analysis
Monitor for unusual communication patterns, including:
- Beaconing behavior to command and control servers
- Large data transfers during off-hours
- Connections to suspicious domains or IPs

### 2. Endpoint Behavior Monitoring
Track process execution patterns and system modifications:
- Unusual process spawning chains
- Modifications to system files or registry
- Persistence mechanism installations

### 3. User Activity Analysis
Identify anomalous user behavior patterns:
- Access to unusual resources or systems
- Login patterns outside normal working hours
- Privilege escalation attempts

## Threat Intelligence Integration

Combining internal telemetry with external threat intelligence enhances detection capabilities:
- IOC (Indicators of Compromise) matching
- TTPs (Tactics, Techniques, and Procedures) correlation
- Attribution analysis for threat actor identification

## Implementation Best Practices

1. **Multi-layered Detection**: Implement detection at network, endpoint, and application levels
2. **Machine Learning Integration**: Use ML algorithms to identify subtle behavioral anomalies
3. **Automated Response**: Develop playbooks for immediate threat containment
4. **Regular Updates**: Continuously update detection rules based on emerging threats

The key to successful APT detection lies in understanding that these attacks are designed to blend in with normal network activity. By focusing on behavioral patterns and leveraging threat intelligence, organizations can significantly improve their detection capabilities against these sophisticated threats.`,
      category: "Cybersecurity",
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      publishedAt: new Date("2024-12-15"),
      createdAt: new Date("2024-12-15"),
    };
    
    const blogPost2: BlogPost = {
      id: randomUUID(),
      title: "Design Systems for Security Applications",
      excerpt: "Creating intuitive interfaces for complex security tools while maintaining usability and accessibility standards.",
      content: "Content for design systems...",
      category: "Design",
      imageUrl: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      publishedAt: new Date("2024-12-12"),
      createdAt: new Date("2024-12-12"),
    };
    
    const blogPost3: BlogPost = {
      id: randomUUID(),
      title: "Risk Management in Algorithmic Trading",
      excerpt: "Implementing robust risk management frameworks for automated trading systems and portfolio optimization.",
      content: "Content for risk management...",
      category: "Trading",
      imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      publishedAt: new Date("2024-12-10"),
      createdAt: new Date("2024-12-10"),
    };
    
    this.blogPosts.set(blogPost1.id, blogPost1);
    this.blogPosts.set(blogPost2.id, blogPost2);
    this.blogPosts.set(blogPost3.id, blogPost3);
    
    // Seed projects
    const project1: Project = {
      id: randomUUID(),
      title: "SecureNet Monitoring Dashboard",
      description: "Real-time network security monitoring platform with AI-powered threat detection and automated response capabilities.",
      content: `SecureNet is a comprehensive network security monitoring solution designed for enterprise environments. This project demonstrates advanced threat detection capabilities through machine learning algorithms and real-time network traffic analysis.

## Key Features

### Real-time Threat Detection
- Network traffic analysis using deep packet inspection
- Machine learning algorithms for anomaly detection
- Integration with multiple threat intelligence feeds
- Automated incident response workflows

### Dashboard & Visualization
- Interactive network topology visualization
- Real-time security metrics and KPIs
- Customizable alert dashboards
- Historical trend analysis

### AI-Powered Analytics
- Behavioral analysis engine using TensorFlow
- Predictive threat modeling
- False positive reduction algorithms
- Advanced correlation rules

## Technical Implementation

The platform is built using a modern microservices architecture:
- **Frontend**: React with D3.js for data visualization
- **Backend**: Python with FastAPI for high-performance APIs
- **ML Engine**: TensorFlow for threat detection algorithms
- **Data Pipeline**: Apache Kafka for real-time data streaming
- **Storage**: InfluxDB for time-series data, PostgreSQL for metadata

## Security Features

- End-to-end encryption for all communications
- Role-based access control (RBAC)
- API rate limiting and authentication
- Audit logging for all security events

This project showcases the integration of traditional cybersecurity practices with modern AI/ML technologies to create a comprehensive security monitoring solution.`,
      technologies: ["React", "Python", "TensorFlow", "Docker", "FastAPI", "Apache Kafka"],
      projectUrl: "https://securenet-demo.example.com",
      githubUrl: "https://github.com/kevinboattt/securenet-dashboard",
      imageUrl: "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      featured: 1,
      createdAt: new Date(),
    };
    
    const project2: Project = {
      id: randomUUID(),
      title: "CryptoTrader Pro",
      description: "Advanced cryptocurrency trading bot with machine learning algorithms for market prediction and automated portfolio management.",
      content: "Detailed project information...",
      technologies: ["Node.js", "MongoDB", "WebSocket", "Chart.js"],
      projectUrl: "#",
      githubUrl: "#",
      imageUrl: null,
      featured: 1,
      createdAt: new Date(),
    };
    
    const project3: Project = {
      id: randomUUID(),
      title: "DesignFlow Studio",
      description: "Collaborative design platform for creating and sharing UI/UX prototypes with real-time collaboration features.",
      content: "Detailed project information...",
      technologies: ["Vue.js", "Firebase", "Canvas API", "WebRTC"],
      projectUrl: "#",
      githubUrl: "#",
      imageUrl: null,
      featured: 1,
      createdAt: new Date(),
    };
    
    this.projects.set(project1.id, project1);
    this.projects.set(project2.id, project2);
    this.projects.set(project3.id, project3);
    
    // Seed skills
    const skills = [
      { id: randomUUID(), name: "Cybersecurity", percentage: 92, category: "Technical" },
      { id: randomUUID(), name: "UI/UX Design", percentage: 85, category: "Design" },
      { id: randomUUID(), name: "Trading Analysis", percentage: 78, category: "Finance" },
      { id: randomUUID(), name: "Python", percentage: 90, category: "Programming" },
    ];
    
    skills.forEach(skill => this.skills.set(skill.id, skill));
    
    // Seed experiences
    const experiences = [
      {
        id: randomUUID(),
        title: "Senior Cybersecurity Analyst",
        company: "SecureTech Solutions",
        description: "Leading threat hunting initiatives and implementing advanced security monitoring systems. Reduced security incidents by 40% through proactive threat detection and response automation.",
        startDate: "2024-01-01",
        endDate: null,
        current: 1,
      },
      {
        id: randomUUID(),
        title: "UI/UX Designer",
        company: "DesignCorp Studio",
        description: "Designed user interfaces for enterprise security applications and financial trading platforms. Improved user engagement by 35% through data-driven design decisions and usability testing.",
        startDate: "2023-01-01",
        endDate: "2024-01-01",
        current: 0,
      },
      {
        id: randomUUID(),
        title: "Junior Security Engineer",
        company: "CyberGuard Inc.",
        description: "Developed security protocols and conducted vulnerability assessments for client networks. Implemented automated security testing frameworks and contributed to threat intelligence analysis.",
        startDate: "2022-01-01",
        endDate: "2023-01-01",
        current: 0,
      },
    ];
    
    experiences.forEach(exp => this.experiences.set(exp.id, exp));
    
    // Seed testimonials
    const testimonials = [
      {
        id: randomUUID(),
        name: "Michael Johnson",
        role: "CTO",
        company: "SecureTech Solutions",
        quote: "Kevin's expertise in cybersecurity is exceptional. His ability to identify vulnerabilities and implement robust security measures has been invaluable to our organization.",
        avatar: "M",
      },
      {
        id: randomUUID(),
        name: "Sarah Chen",
        role: "Product Manager",
        company: "FinanceFlow",
        quote: "Working with Kevin on our trading platform design was a game-changer. His understanding of both technical requirements and user experience is remarkable.",
        avatar: "S",
      },
    ];
    
    testimonials.forEach(testimonial => this.testimonials.set(testimonial.id, testimonial));
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort((a, b) => 
      new Date(b.publishedAt!).getTime() - new Date(a.publishedAt!).getTime()
    );
  }

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const post: BlogPost = {
      ...insertPost,
      id,
      publishedAt: new Date(),
      createdAt: new Date(),
      imageUrl: insertPost.imageUrl || null,
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).sort((a, b) => 
      new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).filter(p => p.featured === 1);
  }

  async getProject(id: string): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = randomUUID();
    const project: Project = {
      ...insertProject,
      id,
      createdAt: new Date(),
      imageUrl: insertProject.imageUrl || null,
      technologies: insertProject.technologies || null,
      projectUrl: insertProject.projectUrl || null,
      githubUrl: insertProject.githubUrl || null,
      featured: insertProject.featured || null,
    };
    this.projects.set(id, project);
    return project;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = {
      ...insertMessage,
      id,
      createdAt: new Date(),
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values()).sort((a, b) => 
      new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );
  }

  async getSkills(): Promise<Skill[]> {
    return Array.from(this.skills.values());
  }

  async createSkill(insertSkill: InsertSkill): Promise<Skill> {
    const id = randomUUID();
    const skill: Skill = { ...insertSkill, id };
    this.skills.set(id, skill);
    return skill;
  }

  async getExperiences(): Promise<Experience[]> {
    return Array.from(this.experiences.values()).sort((a, b) => {
      if (a.current && !b.current) return -1;
      if (!a.current && b.current) return 1;
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    });
  }

  async createExperience(insertExperience: InsertExperience): Promise<Experience> {
    const id = randomUUID();
    const experience: Experience = { 
      ...insertExperience, 
      id,
      current: insertExperience.current || null,
      endDate: insertExperience.endDate || null,
    };
    this.experiences.set(id, experience);
    return experience;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const testimonial: Testimonial = { 
      ...insertTestimonial, 
      id,
      avatar: insertTestimonial.avatar || null,
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
}

export const storage = new MemStorage();
