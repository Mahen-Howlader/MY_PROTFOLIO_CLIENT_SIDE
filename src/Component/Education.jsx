import { FaSchool } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function Education(props) {
    return (
        <div id='education' className="mt-20 text-white">
            <h1 className="text-4xl text-center pb-10 font-bold ">Education</h1>

            <div>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work "
                        contentStyle={{ background: 'black', color: '#fff', }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2022-26 - present"
                        iconStyle={{ background: '#16F2B3', color: '#0D1224' }}
                        icon={<FaSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">Govt. Gournadi University</h3>
                        <h4 className="vertical-timeline-element-subtitle">Bachelor of Arts or</h4>

                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work "
                        contentStyle={{ background: 'black', color: '#fff', }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2020-22 - past"
                        iconStyle={{ background: '#16F2B3', color: '#0D1224' }}

                        icon={<FaSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">Govt. Gournadi College</h3>
                        <h4 className="vertical-timeline-element-subtitle"> Higher Secondary School Certificate.</h4>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work "
                        contentStyle={{ background: 'black', color: '#fff', }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2018-19 - past"
                        iconStyle={{ background: '#16F2B3', color: '#0D1224' }}

                        icon={<FaSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">Pinglakatihi High Sechool</h3>
                        <h4 className="vertical-timeline-element-subtitle">Secondary School Certificate</h4>

                    </VerticalTimelineElement>

                </VerticalTimeline>



            </div>
        </div>
    );
}

export default Education;