import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserSearch } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import AgentCard from '../components/common/AgentCard';
import { Agent } from '../types/Agent';
import { agents } from '../data/agents';

const AgentsPage = () => {
  const [teamMembers, setTeamMembers] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setTeamMembers(agents);
      setLoading(false);
    }, 800);
  }, []);

  const filteredAgents = teamMembers.filter(agent => 
    agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    agent.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <SectionTitle
          title="Meet Our Expert Agents"
          subtitle="Our team of experienced real estate professionals is dedicated to helping you find your perfect property"
        />
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search agents by name or role..."
              className="w-full px-4 py-3 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <UserSearch className="absolute left-3 top-3 text-gray-400" size={20} />
          </div>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse flex flex-col items-center">
              <div className="w-16 h-16 border-4 border-accent-500 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-gray-600">Loading our team...</p>
            </div>
          </div>
        ) : (
          <>
            {filteredAgents.length === 0 ? (
              <div className="text-center py-12 bg-secondary-50 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-600 mb-2">No agents found</h3>
                <p className="text-gray-600 mb-4">
                  We couldn't find any agents matching your search criteria.
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="btn btn-primary"
                >
                  View All Agents
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAgents.map((agent) => (
                  <AgentCard key={agent.id} agent={agent} featured={agent.featured} />
                ))}
              </div>
            )}
          </>
        )}
        
        {/* Join Our Team CTA */}
        <div className="mt-20 bg-primary-600 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-4">Join Our Growing Team</h3>
              <p className="text-gray-200 mb-6">
                Are you passionate about real estate and committed to exceptional client service? We're always looking for talented professionals to join our team.
              </p>
              <div>
                <Link to="/careers" className="btn btn-accent">
                  View Open Positions
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Real estate team collaboration"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentsPage;