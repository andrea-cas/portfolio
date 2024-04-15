import React from 'react'
import type { IconType } from 'react-icons/lib';

interface SkillCardProps {
  name: string;
  icon: IconType;

}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon: Icon }) => {
  return (
    <div className='border rounded-md drop-shadow-sm flex flex-col justify-center items-center'>
      <div className='flex justify-center items-center bg-neutral-800 aspect-square w-full h-auto text-neutral-100 rounded-md'>
        <Icon size={40} />
      </div>
      <span className='text-center p-2 font-semibold text-sm md:text-lg'>{name}</span>
    </div>
  )
}

export default SkillCard;
