import { Phone, Mail, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Agent } from '../../types/Agent';

type AgentCardProps = {
  agent: Agent;
  featured?: boolean;
};

const AgentCard = ({ agent, featured = false }: AgentCardProps) => {
  const { id, name, photo, role, phone, email, bio, properties, rating } = agent;

  return (
    <div className={`bg-white rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-lg ${
      featured ? 'border-2 border-accent-500' : ''
    }`}>
      <div className="relative">
        <img
          src={photo}
          alt={name}
          className="w-full h-64 object-cover object-top"
        />
        {featured && (
          <div className="absolute top-4 right-4 bg-accent-500 text-white text-xs px-3 py-1 rounded-full font-medium">
            Featured Agent
          </div>
        )}
        {rating && (
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-primary-600 px-3 py-1 rounded-full font-medium flex items-center">
            <Star size={16} className="text-accent-500 mr-1 fill-accent-500" />
            <span>{rating}</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary-600">{name}</h3>
        <p className="text-gray-600 font-medium">{role}</p>
        
        <div className="mt-4 space-y-2">
          <a 
            href={`tel:${phone}`} 
            className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
          >
            <Phone size={16} className="mr-2 text-accent-500" />
            <span>{phone}</span>
          </a>
          <a 
            href={`mailto:${email}`} 
            className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
          >
            <Mail size={16} className="mr-2 text-accent-500" />
            <span>{email}</span>
          </a>
        </div>
        
        <p className="mt-4 text-gray-600 line-clamp-3">{bio}</p>
        
        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm text-gray-600">{properties?.length || 0} Properties</span>
          <Link 
            to={`/agents/${id}`} 
            className="text-primary-600 font-medium hover:text-accent-500 transition-colors"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;