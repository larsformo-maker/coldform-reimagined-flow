
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
    <section id="work" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            CASE <span className="text-green-400">STUDIES</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real clients. See how we've helped businesses fill their calendars with qualified meetings.
          </p>
        </div>

        {/* Featured Case Study */}
        <div className="mb-16">
          {caseStudies.filter(study => study.featured).map((study) => (
            <Card key={study.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-700 bg-gray-800">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-gradient-to-br from-green-400 to-green-500 p-12 text-black flex flex-col justify-center">
                  <div className="text-black/70 font-medium mb-2">{study.category}</div>
                  <h3 className="text-3xl font-bold mb-4">
                    {study.title}
                  </h3>
                  <p className="text-lg mb-8 opacity-90">
                    {study.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <div className="text-3xl font-bold">{study.metrics.meetings}</div>
                      <div className="text-sm opacity-70">Meetings</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">{study.metrics.timeline}</div>
                      <div className="text-sm opacity-70">Timeline</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">{study.metrics.conversionRate}</div>
                      <div className="text-sm opacity-70">Conversion</div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-12 flex flex-col justify-center bg-gray-800">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Calendar className="h-6 w-6 text-green-400" />
                      <span className="text-gray-300">Qualified meetings booked directly into calendar</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Users className="h-6 w-6 text-green-400" />
                      <span className="text-gray-300">Decision-makers only - no gatekeepers</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <TrendingUp className="h-6 w-6 text-green-400" />
                      <span className="text-gray-300">Performance-based pricing model</span>
                    </div>
                  </div>
                  
                  <Button className="mt-8 bg-green-400 hover:bg-green-500 text-black font-semibold rounded-full">
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
            <Card key={study.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-700 bg-gray-800 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="text-green-400 font-medium mb-2 text-sm">{study.category}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {study.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {study.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(study.metrics).map(([key, value], index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-white">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>

                <Button size="sm" className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold rounded-full">
                  View Case Study
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Campaigns Stats */}
        <div className="bg-gradient-to-r from-black to-gray-900 border border-gray-700 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">RECENT CAMPAIGNS</h3>
            <p className="text-gray-300 text-lg">Live performance metrics from our active campaigns</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {recentCampaigns.map((campaign, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                  {campaign.metric}
                </div>
                <div className="text-lg font-medium text-white mb-1">{campaign.label}</div>
                <div className="text-gray-400 text-sm">{campaign.period}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Ready to fill your calendar?
          </h3>
          <Button size="lg" className="bg-green-400 hover:bg-green-500 text-black font-semibold px-8 py-4 rounded-full">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
