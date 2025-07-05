import React from 'react'
import Heading from './Heading'
import SkillLoadingBar from './SkillLoadingBar'

const Skills = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-max'>
       <Heading text='Skills'/>

       {/* main div  */}
       <div className='flex items-center justify-center flex-wrap gap-10 lg:gap-20 mb-20 px-5 lg:px-20 sm:px-10'>
        <SkillLoadingBar label="NextJS" percent={95} color="gray"/>
        <SkillLoadingBar label="JavaScript" percent={90} color="gray"/>
        <SkillLoadingBar label="TypeScript" percent={75} color="gray"/>
        <SkillLoadingBar label="Backend" percent={80} color="gray"/>
        <SkillLoadingBar label="MongoDB" percent={80} color="gray"/>
        <SkillLoadingBar label="Git & GitHub" percent={67} color="gray"/>
       </div>
    </div>
  )
}

export default Skills