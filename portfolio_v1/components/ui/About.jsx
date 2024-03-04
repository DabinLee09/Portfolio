import { Tabs, TabsContent  } from '@/components/ui/tabs'
import { GraduationCap, MailIcon, PhoneCall, User2 } from 'lucide-react'



const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Dabin Lee',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '(267) 648 6233',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'dl3277@drexel.edu',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'B.S. MAJOR IN CULTURE TECHNOLOGY \n B.S. MAJOR IN DESIGN ENGINEERING',
    },
];


const qualificationData = [
{
    title: 'education',
    data: [
    {
        university: 'Hanyang University',
        qualification: 'Bachelor of Science',
        years: '2019 - 2024',
    },
    {
        university: 'Drexel University',
        qualification: 'Study Abroad',
        years: '2023 - 2024',
    },]
},
{
    title: 'experience',
    data: [
    {
        company: 'Hanyang University',
        qualification: 'Bachelor of Science',
        years: '2019 - 2024',
    },
    {
        company: 'Drexel University',
        qualification: 'Study Abroad',
        years: '2023 - 2024',
    },]
},
];




const skillData = [
{
    title: 'skills',
    data: [
        {
            name: 'HTML, CSS'    
        },
        {
            name: 'HTML, CSS'    
        },
        {
            name: 'HTML, CSS'    
        },
        {
            name: 'HTML, CSS'    
        },
    ]
},
{
    title: 'tools',
    data: [
        {
            imgPath: '/about/star.svg'    
        },
        {
            imgPath: '/about/star.svg'    
        },
        {
            imgPath: '/about/star.svg'    
        },
        {
            imgPath: '/about/star.svg'    
        },
      
    ]
},
];


const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title)
    };

    // console.log(getData(qualificationData, 'education'))

  return (
    <section>
      <div className='container mx-auto'>
        <h2 className='section-title' >About me</h2>
      </div>
    </section>
  )
}

export default About
