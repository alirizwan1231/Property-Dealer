import { useState, useEffect } from 'react';
import { UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';

import AgentCard from '../common/AgentCard';
import SectionTitle from '../common/SectionTitle';
import { Agent } from '../../types/Agent';
import { agents } from '../../data/agents';

const FeaturedAgents = () => {
  const [featuredAgents, setFeaturedAgents] = useState<Agent[]>([]);
  
  useEffect(() => {
    // Get top 3 agents
    const featured = agents.filter(agent => agent.featured).slice(0, 3);
    setFeaturedAgents(featured);
  }, []);

  return (
    <section className="section bg-primary-600 text-white">
      <div className="container-custom">
        <SectionTitle
          title="Meet Our Expert Agents"
          subtitle="Our professional team of real estate experts is dedicated to helping you find your perfect nest"
          lightMode={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredAgents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} featured={true} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/agents" 
            className="btn btn-accent flex items-center gap-2 mx-auto"
          >
            <UserRound size={18} />
            <span>View All Agents</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAgents;