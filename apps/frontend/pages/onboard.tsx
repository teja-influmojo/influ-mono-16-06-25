import React from 'react';
import InfluencerOnboardingForm from '../src/components/InfluencerOnboardingForm';

const OnboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Become an Influencer
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Join our platform and start collaborating with brands
          </p>
        </div>
        
        <InfluencerOnboardingForm />
      </div>
    </div>
  );
};

export default OnboardPage; 