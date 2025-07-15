import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, label: 'Lines of Code', value: '50K+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1,337' },
    { icon: Lightbulb, label: 'Projects Built', value: '25+' },
    { icon: Users, label: 'Happy Clients', value: '15+' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about technology and driven by curiosity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="slide-up">
            <h3 className="text-2xl font-semibold mb-6">Hello there! 👋</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a full-stack software engineer with 5+ years of experience crafting 
                digital solutions that make a difference. My journey in tech started with 
                a simple "Hello World" and has evolved into a passion for building 
                scalable, user-centric applications.
              </p>
              <p>
                I specialize in modern web technologies, with expertise in React, Node.js, 
                and cloud platforms. I believe in writing clean, maintainable code and 
                creating intuitive user experiences that solve real-world problems.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or enjoying a good cup of coffee 
                while planning my next big idea.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={stat.label}
                  className="card-elegant text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;