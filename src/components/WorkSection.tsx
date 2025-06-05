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
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-navy-900 mb-4">
            Case <span className="gradient-text">Studies</span>
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            Real results from real clients. See how we've helped businesses fill their calendars with qualified meetings.
          </p>
        </div>

        {/* Featured Case Study */}
        <div className="mb-16">
          {caseStudies.filter(study => study.featured).map((study) => (
            <Card key={study.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-gradient-to-br from-electric-500 to-navy-600 p-12 text-white flex flex-col justify-center">
                  <div className="text-electric-200 font-medium mb-2">{study.category}</div>
                  <h3 className="text-3xl font-playfair font-semibold mb-4">
                    {study.title}
                  </h3>
                  <p className="text-lg mb-8 opacity-90">
                    {study.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <div className="text-3xl font-bold">{study.metrics.meetings}</div>
                      <div className="text-sm opacity-80">Meetings</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">{study.metrics.timeline}</div>
                      <div className="text-sm opacity-80">Timeline</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">{study.metrics.conversionRate}</div>
                      <div className="text-sm opacity-80">Conversion</div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-12 flex flex-col justify-center bg-navy-50">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Calendar className="h-6 w-6 text-electric-500" />
                      <span className="text-navy-700">Qualified meetings booked directly into calendar</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Users className="h-6 w-6 text-electric-500" />
                      <span className="text-navy-700">Decision-makers only - no gatekeepers</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <TrendingUp className="h-6 w-6 text-electric-500" />
                      <span className="text-navy-700">Performance-based pricing model</span>
                    </div>
                  </div>
                  
                  <Button className="mt-8 bg-electric-500 hover:bg-electric-600 text-white">
                    Book a similar campaign
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {caseStudies.filter(study => !study.featured).map((study) => (
            <Card key={study.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="text-electric-500 font-medium mb-2 text-sm">{study.category}</div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">
                  {study.title}
                </h3>
                <p className="text-navy-600 mb-6 leading-relaxed">
                  {study.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(study.metrics).map(([key, value], index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-navy-900">{value}</div>
                      <div className="text-xs text-navy-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>

                <Button size="sm" className="w-full bg-electric-500 hover:bg-electric-600 text-white">
                  View Case Study
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Campaigns Stats */}
        <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-playfair font-semibold mb-4">Recent Campaigns</h3>
            <p className="text-navy-300 text-lg">Live performance metrics from our active campaigns</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {recentCampaigns.map((campaign, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-electric-400 mb-2">
                  {campaign.metric}
                </div>
                <div className="text-lg font-medium mb-1">{campaign.label}</div>
                <div className="text-navy-400 text-sm">{campaign.period}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-navy-900 mb-4">
            Ready to fill your calendar?
          </h3>
          <Button size="lg" className="bg-electric-500 hover:bg-electric-600 text-white">
            Book a call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
