
import { useState } from 'react';
import MBTIDichotomies from './mbti/MBTIDichotomies';
import MBTICareerTypes from './mbti/MBTICareerTypes';

interface MBTITypeInfoProps {
  className?: string;
}

const MBTITypeInfo = ({ className = "" }: MBTITypeInfoProps) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="space-y-8">
        <MBTIDichotomies />
        <MBTICareerTypes />
      </div>
    </div>
  );
};

export default MBTITypeInfo;
