import React from 'react';
import styled from 'styled-components';

const sections = [
  {
    description: 'North Sea Jazz publiction',
    date: '12 March'
  },
  {
    description: 'North Sea Jazz publiction',
    date: '12 March'
  },
  {
    description: 'North Sea Jazz publiction',
    date: '12 March'
  },
  {
    description: 'North Sea Jazz publiction',
    date: '12 March'
  },
  {
    description: 'North Sea Jazz publiction',
    date: '12 March'
  }
];

const TimelineSection = ({ description, date }) => (
  <TimelineSectionStyles>
    <p>
      <h4>{description}</h4>
      <span>{date}</span>
    </p>
    <div className="node-container">
      <span className="node" />
    </div>
  </TimelineSectionStyles>
);

const TimelineSectionStyles = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 24px;

  .node-container {
    position: relative;
    width: 1px;
    height: auto;
    background: black;
    margin: 0 24px;
  }
  .node {
    border: 1px solid #444;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: white;

    &::after {
      content: '';
      width: 1px;
      height: 100%;
      bottom: 0;
      transform: translateY(-100%);
      background: black;
    }
  }
`;

const VerticalTimeline = () => (
  <VerticalTimelineStyles>
    {sections.map(({ description, date }, index) => (
      <TimelineSection key={index} description={description} date={date} />
    ))}
  </VerticalTimelineStyles>
);

const VerticalTimelineStyles = styled.div`
  margin-top: 12px;
`;

VerticalTimeline.propTypes = {};

export default VerticalTimeline;
