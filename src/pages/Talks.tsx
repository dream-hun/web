import { Calendar, MapPin, Users, ExternalLink, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const Talks = () => {
  const upcomingTalks = [
    {
      id: 1,
      title: "Building Modern Web Applications with React 18",
      event: "React Conference 2024",
      date: "2024-03-15",
      location: "San Francisco, CA",
      attendees: "500+",
      type: "Conference",
      status: "upcoming"
    },
    {
      id: 2,
      title: "TypeScript Best Practices for Large Teams",
      event: "DevMeetup SF",
      date: "2024-02-20",
      location: "San Francisco, CA",
      attendees: "100+",
      type: "Meetup",
      status: "upcoming"
    }
  ];

  const pastTalks = [
    {
      id: 3,
      title: "From Monolith to Microservices: A Practical Journey",
      event: "TechTalk 2023",
      date: "2023-11-10",
      location: "Online",
      attendees: "300+",
      type: "Webinar",
      status: "past",
      videoUrl: "https://youtube.com/watch?v=example",
      slidesUrl: "https://slides.com/example"
    },
    {
      id: 4,
      title: "Performance Optimization in React Applications",
      event: "JavaScript Summit 2023",
      date: "2023-09-22",
      location: "New York, NY",
      attendees: "800+",
      type: "Conference",
      status: "past",
      slidesUrl: "https://slides.com/example"
    },
    {
      id: 5,
      title: "Introduction to Modern CSS Grid",
      event: "CSS Meetup",
      date: "2023-07-15",
      location: "San Francisco, CA",
      attendees: "80+",
      type: "Meetup",
      status: "past",
      videoUrl: "https://youtube.com/watch?v=example"
    }
  ];

  const TalkCard = ({ talk, isPast = false }: { talk: any; isPast?: boolean }) => (
    <div className="card-elegant hover:shadow-elegant transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
            talk.type === 'Conference' 
              ? 'bg-primary/10 text-primary' 
              : talk.type === 'Webinar'
              ? 'bg-blue-500/10 text-blue-500'
              : 'bg-green-500/10 text-green-500'
          }`}>
            {talk.type}
          </span>
          {!isPast && (
            <span className="inline-block px-2 py-1 text-xs font-medium bg-orange-500/10 text-orange-500 rounded-full">
              Upcoming
            </span>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold mb-2">{talk.title}</h3>
      <p className="text-primary font-medium mb-4">{talk.event}</p>

      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
        <span className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          {new Date(talk.date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </span>
        <span className="flex items-center">
          <MapPin className="h-4 w-4 mr-1" />
          {talk.location}
        </span>
        <span className="flex items-center">
          <Users className="h-4 w-4 mr-1" />
          {talk.attendees} attendees
        </span>
      </div>

      {isPast && (talk.videoUrl || talk.slidesUrl) && (
        <div className="flex space-x-3">
          {talk.videoUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={talk.videoUrl} target="_blank" rel="noopener noreferrer">
                <Play className="h-4 w-4 mr-2" />
                Watch Video
              </a>
            </Button>
          )}
          {talk.slidesUrl && (
            <Button variant="ghost" size="sm" asChild>
              <a href={talk.slidesUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Slides
              </a>
            </Button>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Speaking <span className="text-gradient">Engagements</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I love sharing knowledge and experiences with the developer community through talks, workshops, and presentations.
            </p>
          </div>

          {/* Upcoming Talks */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Upcoming Talks</h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {upcomingTalks.map((talk) => (
                <TalkCard key={talk.id} talk={talk} />
              ))}
            </div>
          </div>

          {/* Past Talks */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Past Talks</h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {pastTalks.map((talk) => (
                <TalkCard key={talk.id} talk={talk} isPast />
              ))}
            </div>
          </div>

          {/* Speaking Request */}
          <div className="mt-16 text-center">
            <div className="card-elegant max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Interested in having me speak?</h3>
              <p className="text-muted-foreground mb-6">
                I'm always excited to share my knowledge and experience with fellow developers. 
                Whether it's a conference, meetup, workshop, or podcast, I'd love to hear from you.
              </p>
              <Button className="btn-hero" asChild>
                <a href="/contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Talks;