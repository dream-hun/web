import { Code2, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold text-gradient">DevPortfolio</span>
          </div>
          
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>© {currentYear} Alex Chen. Built with</span>
            <Heart className="h-4 w-4 text-red-500 mx-1" />
            <span>using React & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;