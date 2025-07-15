import { 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  GitBranch, 
  Palette,
  Server,
  Code2
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Sass']
    },
    {
      icon: Server,
      title: 'Backend',
      skills: ['Node.js', 'Python', 'Express', 'Django', 'RESTful APIs', 'GraphQL']
    },
    {
      icon: Database,
      title: 'Database',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Prisma', 'MySQL']
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel', 'Nginx']
    },
    {
      icon: Smartphone,
      title: 'Mobile',
      skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo', 'PWA']
    },
    {
      icon: GitBranch,
      title: 'Tools & Others',
      skills: ['Git', 'Jest', 'Webpack', 'Vite', 'Figma', 'Linux']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.title}
                className="card-elegant group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 mr-3 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;