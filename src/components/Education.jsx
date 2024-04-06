import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { education } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({education}) =>(
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={education.date}
    iconStyle={{ background: education.iconBg}}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={education.image}
          alt={education.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    } 
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{education.program}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>{education.school}</p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      <li className="text-white-100 text-[14px] pl-1 tracking-wider">
        {education.description}
      </li>
    </ul>
  </VerticalTimelineElement>
)

const Education = () => {
  return (
    <div className="mt-6 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding},bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Where I have studied so far</p>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>

        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {education.map((education, index) => (
              <ExperienceCard key={index} education={education}/>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Education, "education");