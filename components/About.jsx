import DevImg from "./DevImg";
import Image from "next/image";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import {} from 'lucide-react';
import {User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase} from 'lucide-react';

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Kayne Uriel Rodrigo'
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+63 966 226 1070'
    },
    {
        icon: <MailIcon size={20} />,
        text: 'kayne.rodrigo11@gmail.com'
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born on 2003'
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Bachelor of Science in Computer Science'
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Philippines, Manila'
    },
];

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'Pamantasan ng Lungsod ng Maynila (University of City of Manila)',
                qualitifcation: 'Bachelor of Science in Computer Science',
                years: '2021 - 2025'
            },
            
        ]
    },
    {
        title: 'experience',
        data: [
            {
                company: 'Synthillate',
                qualitifcation: 'Digital Marketing Intern',
                years: '2021-2021'
            },
            {
                company: 'S.P. Madrid & Associates',
                qualitifcation: 'Data Science Intern',
                years: '2024-2024'
            },

            
        ]
    }
];

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'HTML, CSS',
            },
            {
                name: 'Front-end Development',
            },
            {
                name: 'Python, Flutter, Laravel',
            },
            {
                name: 'HTML, CSS',
            }
        ] 
    }
];


const About = () => {
    const getData = (arr,title) => {
        return arr.find((item) => item.title === title)
    };
 
  return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
        <div className = "container mx-auto">
            <h2 className='section-title xl:mb-16 text-center mx-auto'>About me</h2>
            <div className='flex flex-col xl:flex-row'>
                {/* image */}
                <div className="hidden xl:flex flex-1 relative">
                    <DevImg containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] w-[505px] h-[505px] bg-no-repeat relative" imgSrc='/about/developer.png'/>
                </div>
                {/* tabs */}
                <div className='flex-1'>
                    <Tabs defaultValue='personal'>
                        <TabsList>
                            <TabsTrigger value="personal">Personal Info</TabsTrigger>
                            <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
                            <TabsTrigger value="skills">Skills</TabsTrigger>
                        </TabsList>
                        {/* tabs content*/}
                        <div>
                            {/* personal */}
                            <TabsContent value="personal">
                                personal info
                            </TabsContent>
                            <TabsContent value="qualifications">
                                qualifications
                            </TabsContent>
                            <TabsContent value="skills">
                                skills info
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    </section>
  )
}


//1:49:29
export default About