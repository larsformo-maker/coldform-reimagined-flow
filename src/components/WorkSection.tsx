
import { Calendar, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const WorkSection = () => {
  const caseStudies = [
    {
      id: 1,
      title: "SaaS Startup - 47 Qualified Meetings",
      category: "Technology",
      description: "Helped a B2B SaaS startup book 47 qualified meetings with enterprise decision-makers in 3 months.",
      metrics: {
        meetings: "47",
        timeline: "3 months",
        conversionRate: "12%"
      },
      featured: true
    },
    {
      id: 2,
      title: "Marketing Agency - €85k Revenue",
      category: "Agency",
      description: "Generated €85k in new revenue for a digital marketing agency through targeted outreach.",
      metrics: {
        revenue: "€85k",
        timeline: "4 months", 
        meetingRate: "8.3%"
      },
      featured: false
    },
    {
      id: 3,
      title: "Consulting Firm - 32 Enterprise Meetings",
      category: "Consulting",
      description: "Booked 32 high-value meetings with Fortune 500 companies for a management consulting firm.",
      metrics: {
        meetings: "32",
        timeline: "2 months",
        avgDealSize: "€45k"
      },
      featured: false
    }
  ];

  const recentCampaigns = [
    { metric: "156", label: "Meetings Booked", period: "This Month" },
    { metric: "23%", label: "Response Rate", period: "Average" },
    { metric: "€2.3M", label: "Revenue Generated", period: "For Clients" },
    { metric: "94%", label: "Show-up Rate", period: "Qualified Meetings" }
  ];

  return (
    <section id="work" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            CASE <span className="text-green-400">STUDIES</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real clients. See how we've helped businesses fill their calendars with qualified meetings.
          </p>
        </div>

        {/* Featured Case Study */}
        <div className="mb-12">
          {caseStudies.filter(study => study.featured).map((study) => (
            <Card key={study.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 border border-border bg-card">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-gradient-to-br from-green-400 to-green-500 p-10 text-black flex flex-col justify-center">
                  <div className="text-black/70 font-medium mb-2 text-lg">{study.category}</div>
                  <h3 className="text-4xl font-bold mb-4">
                    {study.title}
                  </h3>
                  <p className="text-xl mb-6 opacity-90">
                    {study.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <div className="text-4xl font-bold">{study.metrics.meetings}</div>
                      <div className="opacity-70">Meetings</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold">{study.metrics.timeline}</div>
                      <div className="opacity-70">Timeline</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold">{study.metrics.conversionRate}</div>
                      <div className="opacity-70">Conversion</div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-10 flex flex-col justify-center bg-card">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Calendar className="h-8 w-8 text-green-400" />
                      <span className="text-muted-foreground text-lg">Qualified meetings booked directly into calendar</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Users className="h-8 w-8 text-green-400" />
                      <span className="text-muted-foreground text-lg">Decision-makers only - no gatekeepers</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <TrendingUp className="h-8 w-8 text-green-400" />
                      <span className="text-muted-foreground text-lg">Performance-based pricing model</span>
                    </div>
                  </div>
                  
                  <Button className="mt-8 bg-green-400 hover:bg-green-500 text-black font-semibold text-lg px-8 py-4 rounded-full">
                    Book a similar campaign
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {caseStudies.filter(study => !study.featured).map((study) => (
            <Card key={study.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border border-border bg-card hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="text-green-400 font-medium mb-2">{study.category}</div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {study.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-lg">
                  {study.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {Object.entries(study.metrics).map(([key, value], index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-foreground">{value}</div>
                      <div className="text-sm text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>

                <Button size="sm" className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold rounded-full text-lg py-3">
                  View Case Study
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Campaigns Stats */}
        <div className="bg-gradient-to-r from-card to-muted/50 border border-border rounded-2xl p-10">
          <div className="text-center mb-10">
            <h3 className="text-4xl font-bold text-foreground mb-4">RECENT CAMPAIGNS</h3>
            <p className="text-muted-foreground text-xl">Live performance metrics from our active campaigns</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {recentCampaigns.map((campaign, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-green-400 mb-2">
                  {campaign.metric}
                </div>
                <div className="text-xl font-medium text-foreground mb-1">{campaign.label}</div>
                <div className="text-muted-foreground">{campaign.period}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
