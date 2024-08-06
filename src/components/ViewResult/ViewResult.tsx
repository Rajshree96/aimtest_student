import React from 'react';
import dynamic from 'next/dynamic';
import { Table } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

import styles from './index.module.css';
import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
const dt = [
  {
    id: 1,
    level: 'Administrator',
    username: 'demo@gmail.com',
    name: 'className 5th Test 1st',
    email: '100',
    mobile: '90',
    groups: '90%',

    role: 'developer',
  },
  {
    id: 2,
    level: 'varun',
    username: 'demo@gmail.com',
    name: 'className 5th Test 1st',
    email: '100',
    mobile: '90',
    groups: '90%',

    role: 'developer',
  },
  {
    id: 3,
    level: 'tarun',
    username: 'demo@gmail.com',
    name: 'className 5th Test 1st',
    email: '100',
    mobile: '90',
    groups: '90%',

    role: 'developer',
  },
  {
    id: 4,
    level: 'akash',
    username: 'demo@gmail.com',
    name: 'className 5th Test 1st',
    email: '100',
    mobile: '90',
    groups: '90%',

    role: 'developer',
  },
  {
    id: 5,
    level: 'yash',
    username: 'demo@gmail.com',
    name: 'className 5th Test 1st',
    email: '100',
    mobile: '90',
    groups: '90%',

    role: 'developer',
  },
];
const options = {
  chart: {
    height: 350,
    type: 'bar',
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: '50%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 2,
  },

  grid: {
    row: {
      colors: ['#fff', '#f2f2f2'],
    },
  },
  xaxis: {
    labels: {
      rotate: -45,
    },
    categories: [
      '01/01/2011 GMT',
      '01/02/2011 GMT',
      '01/03/2011 GMT',
      '01/04/2011 GMT',
      '01/05/2011 GMT',
      '01/06/2011 GMT',
      '01/01/2011 GMT',
      '01/02/2011 GMT',
      '01/03/2011 GMT',
      '01/04/2011 GMT',
      '01/05/2011 GMT',
      '01/06/2011 GMT',
    ],
    tickPlacement: 'on',
  },
  yaxis: {
    title: {
      text: 'Servings',
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'horizontal',
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 0.85,
      opacityTo: 0.85,
      stops: [50, 0, 100],
    },
  },
};
const series = [
  {
    name: 'PRODUCT A',
    data: [44, 55, 41, 67, 22, 43],
  },

  {
    name: 'PRODUCT C',
    data: [11, 17, 15, 15, 21, 14],
  },
  {
    name: 'PRODUCT D',
    data: [21, 7, 25, 13, 22, 8],
  },
];

const doughnatOptions = {
  dataLabels: {
    enabled: true,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    pie: {
      donut: {
        size: '0%',
        labels: {
          // show: true,
          name: {
            show: true,
            fontSize: '22px',
            fontFamily: 'Rubik',
            color: '#dfsda',
            offsetY: -10,
          },
        },
      },
    },
  },

  series: [44, 55, 41, 17, 15],
  labels: ['A', 'B', 'C', 'D', 'E'],
};

const ViewResult = () => {
  const cx = className.bind(styles);

  return (
    <>
      <div className={cx('flex-style')}>
        <div className={cx('parent-section')}>
          <div className={cx('text-btn')}>
            <div className={cx('row my-2')}>
              <div className={cx('col-sm-6')}>
                <h4>My Result</h4>
              </div>
            </div>

            <Tabs
              defaultActiveKey='score'
              id='uncontrolled-tab-example'
              className='mb-3'
            >
              <Tab eventKey='score' title='Score Card'>
                <div className='row mb-3'>
                  <div className='col-sm-12'>
                    <div className={cx('card')}>
                      <div className={cx('card-table m-0')}>
                        <div className='pt-3'>
                          <h6 className={cx('mx-1')}>className 7th test 1 </h6>
                          <hr className='mb-0' />
                        </div>
                        <div className='table-scroll-result'>
                          <Table hover>
                            <tbody>
                              <tr>
                                <td>Total No. of Student</td>
                                <td>
                                  <strong className='text-primary'>11</strong>
                                </td>
                                <td>My Marks</td>
                                <td>
                                  <strong className='text-primary'>
                                    69.32%
                                  </strong>
                                </td>
                                <td>Correct Question</td>
                                <td>
                                  <strong className='text-primary'>33</strong>
                                </td>
                                <td>Incorrect Question</td>
                                <td>
                                  <strong className='text-danger'>117</strong>
                                </td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>Total Marks of Test</td>
                                <td>
                                  <strong className='text-primary'>
                                    187.50
                                  </strong>
                                </td>
                                <td>My Percentile</td>
                                <td>
                                  <strong className='text-primary'>
                                    90.91%
                                  </strong>
                                </td>
                                <td>Right Marks</td>
                                <td>
                                  <strong className='text-primary'>
                                    69.32
                                  </strong>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>Total Question in Test</td>
                                <td>
                                  <strong className='text-primary'>150</strong>
                                </td>
                                <td>Total Answered Question in Test</td>
                                <td>
                                  <strong className='text-primary'>150</strong>
                                </td>
                                <td>Left Question</td>
                                <td>
                                  <strong className='text-danger'>0</strong>
                                </td>
                                <td>Left Question Marks</td>
                                <td>
                                  <strong className='text-danger'>0</strong>
                                </td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>Total Time of Test</td>
                                <td>
                                  <strong className='text-primary'>
                                    3 Hours{' '}
                                  </strong>
                                </td>
                                <td>My Time</td>
                                <td>
                                  <strong className='text-primary'>
                                    1 Hours 52 Mins 52 Sec
                                  </strong>
                                </td>
                                <td>My Rank</td>
                                <td>
                                  <strong className='text-primary'>
                                    1<sup>st</sup>
                                  </strong>
                                </td>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='row mb-3'>
                  <div className='col-sm-6 mb-3'>
                    <div className={cx('card')}>
                      <div className={cx('card-table m-0')}>
                        <div className='pt-3'>
                          <h6 className={cx('mx-3')}>
                            Performance Report For className 7th test 1{' '}
                          </h6>
                          <hr />
                        </div>
                        <Chart
                          options={options as unknown as undefined}
                          series={series}
                          type='bar'
                          // width='500'
                          height={300}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6 mb-3'>
                    <div className={cx('card')}>
                      <div className={cx('card-table m-0')}>
                        <div className='pt-3'>
                          <h6 className={cx('mx-3')}>
                            {' '}
                            Question Marks Wise Report For className 7th test 1{' '}
                          </h6>
                          <hr />
                        </div>
                        <Chart
                          options={doughnatOptions}
                          series={doughnatOptions.series}
                          type='donut'
                          // width='500'
                          height={310}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey='subject' title=' Subject Report'>
                <div className='row mb-3'>
                  <div className='col-sm-12'>
                    <div className={cx('card')}>
                      <div className={cx('card-table m-0')}>
                        <div className='pt-3'>
                          <h6 className={cx('mx-1')}>
                            Subject Report For className 7th test 1{' '}
                          </h6>
                          <hr className='mb-0' />
                        </div>
                        <div className='table-scroll-result'>
                          <Table hover>
                            <thead className='thead-box'>
                              <tr>
                                <th>Group /Section</th>
                                <th>Name</th>
                                <th>Total Questions</th>
                                <th>Correct Incorrect Question</th>
                                <th>Marks Scored</th>
                              </tr>
                            </thead>
                            <tbody className='height-box-table'>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Interest </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Vq</strong>
                                </td>
                                <td>2 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>100 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Interest </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Cq</strong>
                                </td>
                                <td>2 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>75 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Interest </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Auditory Learning Style </strong>
                                </td>
                                <td>2 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>
                                    100<p></p>%{' '}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Interest </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Visual Learning Style </strong>
                                </td>
                                <td>2 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>
                                    25<p></p>%{' '}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Interest </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Emotional Thinker</strong>
                                </td>
                                <td>2 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>75 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Interest </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>
                                    Read &amp; Understand Learning Style{' '}
                                  </strong>
                                </td>
                                <td>2 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>
                                    100<p></p>%{' '}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Interest </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Aq</strong>
                                </td>
                                <td>2 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>75 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Interest </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Eq</strong>
                                </td>
                                <td>2 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>100 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Psychology </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Target On Work </strong>
                                </td>
                                <td>3 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>75 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Psychology </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Sense Of Humor</strong>
                                </td>
                                <td>3 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>50 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Psychology </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Competitive Approach</strong>
                                </td>
                                <td>3 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>50 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Psychology </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Acceptance Of Challenges</strong>
                                </td>
                                <td>3 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>75 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Interest </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Perception</strong>
                                </td>
                                <td>2 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>75 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Interest </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Negative Thinker</strong>
                                </td>
                                <td>2 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>75 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Interest </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Positive Thinker </strong>
                                </td>
                                <td>2 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>75 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Interest </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Kinesthetic Learning Style</strong>
                                </td>
                                <td>2 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>75 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Research </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Research Skills</strong>
                                </td>
                                <td>4 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>100 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Interest </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Designing</strong>
                                </td>
                                <td>2 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>100 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Science </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Chemistry</strong>
                                </td>
                                <td>5 </td>

                                <td>
                                  <span className='text-success'>4</span>/
                                  <span className='text-danger'>1</span>
                                </td>
                                <td>
                                  <span className='text-success'>80.00% </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Interest </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Self Study Potential</strong>
                                </td>
                                <td>1 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>25 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Research </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Inovative Skills</strong>
                                </td>
                                <td>3 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>67 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Research </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Creative Skills</strong>
                                </td>
                                <td>4 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>22 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Interest </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Business Approach Thinker </strong>
                                </td>
                                <td>2 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>100 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Science </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Scientific Thinker </strong>
                                </td>
                                <td>2 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>1</span>
                                </td>
                                <td>
                                  <span className='text-success'>50.00% </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Interest </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Logical Personality </strong>
                                </td>
                                <td>2 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>100 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Interest </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Creative Personality</strong>
                                </td>
                                <td>2 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>100% </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Interest </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Business </strong>
                                </td>
                                <td>2 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>100 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Psychology </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Avail Benefit Situation</strong>
                                </td>
                                <td>3 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>75 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Psychology </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Keep Upgrade</strong>
                                </td>
                                <td>3 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>100 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Logic </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Engineering</strong>
                                </td>
                                <td>2 </td>

                                <td>
                                  <span className='text-success'>2</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>100.00% </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Logic </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Iq</strong>
                                </td>
                                <td>2 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>1</span>
                                </td>
                                <td>
                                  <span className='text-success'>50.00% </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Knowledge </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Banking And Finance</strong>
                                </td>
                                <td>2 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>75 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Knowledge </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Management</strong>
                                </td>
                                <td>2 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>25 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Knowledge </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Education</strong>
                                </td>
                                <td>2 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>75 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Knowledge </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Political And Public Affairs</strong>
                                </td>
                                <td>2 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>
                                    25<p></p>%{' '}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Logic </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Cognitive Thinking Style </strong>
                                </td>
                                <td>2 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>1</span>
                                </td>
                                <td>
                                  <span className='text-success'>50.00% </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Logic </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Problem Solving</strong>
                                </td>
                                <td>6 </td>

                                <td>
                                  <span className='text-success'>6</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>100.00% </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>CRM </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Time Management Skills</strong>
                                </td>
                                <td>1 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>100.00% </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Interest </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Grasping Skills</strong>
                                </td>
                                <td>2 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>1</span>
                                </td>
                                <td>
                                  <span className='text-success'>50.00% </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>CRM </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Writing Skills</strong>
                                </td>
                                <td>1 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>100 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Logic </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Decision making </strong>
                                </td>
                                <td>1 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>100.00% </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Logic </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Observation Skills</strong>
                                </td>
                                <td>1 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>100.00% </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Knowledge </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Mass And Media Communication</strong>
                                </td>
                                <td>2 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>50 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Science </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Medical</strong>
                                </td>
                                <td>5 </td>

                                <td>
                                  <span className='text-success'>4</span>/
                                  <span className='text-danger'>1</span>
                                </td>
                                <td>
                                  <span className='text-success'>80.00% </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Psychology </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Fear Factor</strong>
                                </td>
                                <td>3 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>75 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Psychology </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Procastination</strong>
                                </td>
                                <td>3 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>50 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Psychology </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Hesitation</strong>
                                </td>
                                <td>3 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>100 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Psychology </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Doubt</strong>
                                </td>
                                <td>3 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>25 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Psychology </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Opportunity Conversion</strong>
                                </td>
                                <td>3 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>25 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Psychology </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Confusion</strong>
                                </td>
                                <td>3 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>25 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Psychology </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Convincing Skills</strong>
                                </td>
                                <td>3 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>100 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Psychology </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Leadership Quality</strong>
                                </td>
                                <td>3 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>50 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Science </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Physics</strong>
                                </td>
                                <td>5 </td>

                                <td>
                                  <span className='text-success'>4</span>/
                                  <span className='text-danger'>1</span>
                                </td>
                                <td>
                                  <span className='text-success'>80.00% </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Psychology </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Self Motivational</strong>
                                </td>
                                <td>3 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>25 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Psychology </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Managerial Skills</strong>
                                </td>
                                <td>3 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>75 % </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>Psychology </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Visual Perception</strong>
                                </td>
                                <td>3 </td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>
                                    75<p></p>%{' '}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className='text-primary-group'>
                                  <strong>CRM </strong>
                                </td>
                                <td className='text-primary'>
                                  <strong>Passage</strong>
                                </td>
                                <td>7 </td>

                                <td>
                                  <span className='text-success'>6</span>/
                                  <span className='text-danger'>1</span>
                                </td>
                                <td>
                                  <span className='text-success'>85.71% </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Total of All Element</strong>
                                </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> 4089.71</td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Overall %</strong>
                                </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> 69.32%</td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='row mb-3' >
                  <div className='col-sm-12'>
                    <div className={cx('card')}>
                      <div className={cx('card-table m-0')}>
                        <div className='pt-3'>
                          <h6 className={cx('mx-3')}>
                            Performance Report For className 7th test 1{' '}
                          </h6>
                          <hr />
                        </div>
                        <Chart
                          options={options as unknown as undefined}
                          series={series}
                          type='bar'
                          // width='500'
                          height={300}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey='time' title='Time Management'>
                <div className='row mb-3'>
                  <div className='col-sm-12'>
                    <div className={cx('card')}>
                      <div className={cx('card-table m-0')}>
                        <div className='pt-3'>
                          <h6 className={cx('mx-1')}>
                            Subject Report For className 7th test 1{' '}
                          </h6>
                          <hr className='mb-0' />
                        </div>
                        <div className='table-scroll-result'>
                          <Table hover>
                            <thead className='thead-box'>
                              <tr>
                                <th>Name</th>
                                <th>Total Questions</th>
                                <th>Correct/Incorrect Question</th>
                                <th>Marks Scored</th>
                                <th>Average (%)</th>

                                <th>Unattempted Questions/Marks</th>
                                <th>Total Time</th>
                              </tr>
                            </thead>
                            <tbody className='height-box-table'>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Vq</strong>
                                </td>
                                <td>2</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>100 </span>
                                </td>
                                <td>75</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>29 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Cq</strong>
                                </td>
                                <td>2</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>75 </span>
                                </td>
                                <td>50</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>59 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Auditory Learning Style </strong>
                                </td>
                                <td>2</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>100 </span>
                                </td>
                                <td>100</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>4 Mins 21 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Visual Learning Style </strong>
                                </td>
                                <td>2</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>25 </span>
                                </td>
                                <td>62.5</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>5 Mins 32 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Emotional Thinker</strong>
                                </td>
                                <td>2</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>75 </span>
                                </td>
                                <td>75</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>1 Mins 3 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>
                                    Read &amp; Understand Learning Style{' '}
                                  </strong>
                                </td>
                                <td>2</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>100 </span>
                                </td>
                                <td>87.5</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>1 Mins 33 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Aq</strong>
                                </td>
                                <td>2</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>75 </span>
                                </td>
                                <td>50</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>1 Mins 2 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Eq</strong>
                                </td>
                                <td>2</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>100 </span>
                                </td>
                                <td>100</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>58 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Target On Work </strong>
                                </td>
                                <td>3</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>1.08 </span>
                                </td>
                                <td>58.33</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>40 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Sense Of Humor</strong>
                                </td>
                                <td>3</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>0.72 </span>
                                </td>
                                <td>41.67</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>56 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Competitive Approach</strong>
                                </td>
                                <td>3</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>0.72 </span>
                                </td>
                                <td>50</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>1 Mins 42 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Acceptance Of Challenges</strong>
                                </td>
                                <td>3</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>1.08 </span>
                                </td>
                                <td>91.67</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>1 Mins 5 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Perception</strong>
                                </td>
                                <td>2</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>75 </span>
                                </td>
                                <td>50</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>47 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Negative Thinker</strong>
                                </td>
                                <td>2</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>75 </span>
                                </td>
                                <td>62.5</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>46 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Positive Thinker </strong>
                                </td>
                                <td>2</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>75 </span>
                                </td>
                                <td>75</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>30 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Kinesthetic Learning Style</strong>
                                </td>
                                <td>2</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>75 </span>
                                </td>
                                <td>50</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>36 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Research Skills</strong>
                                </td>
                                <td>4</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>100 </span>
                                </td>
                                <td>50</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>4 Mins 23 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Designing</strong>
                                </td>
                                <td>2</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>100 </span>
                                </td>
                                <td>87.5</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>25 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Chemistry</strong>
                                </td>
                                <td>5</td>

                                <td>
                                  <span className='text-success'>4</span>/
                                  <span className='text-danger'>1</span>
                                </td>
                                <td>
                                  <span className='text-success'>5.00 </span>
                                </td>
                                <td>1.25</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>1 Mins 23 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Self Study Potential</strong>
                                </td>
                                <td>1</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>25 </span>
                                </td>
                                <td>25</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>35 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Inovative Skills</strong>
                                </td>
                                <td>3</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>67 </span>
                                </td>
                                <td>54</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>2 Mins 2 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Creative Skills</strong>
                                </td>
                                <td>4</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>22 </span>
                                </td>
                                <td>44.75</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>1 Mins 10 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Business Approach Thinker </strong>
                                </td>
                                <td>2</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>100 </span>
                                </td>
                                <td>100</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>24 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Scientific Thinker </strong>
                                </td>
                                <td>2</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>1</span>
                                </td>
                                <td>
                                  <span className='text-success'>1.25 </span>
                                </td>
                                <td>1.25</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>42 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Logical Personality </strong>
                                </td>
                                <td>2</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>100 </span>
                                </td>
                                <td>100</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>41 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Creative Personality</strong>
                                </td>
                                <td>2</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>100 </span>
                                </td>
                                <td>87.5</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>41 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Business </strong>
                                </td>
                                <td>2</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>100 </span>
                                </td>
                                <td>87.5</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>43 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Avail Benefit Situation</strong>
                                </td>
                                <td>3</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>1.08 </span>
                                </td>
                                <td>66.67</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>55 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Keep Upgrade</strong>
                                </td>
                                <td>3</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>1.44 </span>
                                </td>
                                <td>58.33</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>45 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Engineering</strong>
                                </td>
                                <td>2</td>

                                <td>
                                  <span className='text-success'>2</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>2.50 </span>
                                </td>
                                <td>1.25</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>5 Mins 44 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Iq</strong>
                                </td>
                                <td>2</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>1</span>
                                </td>
                                <td>
                                  <span className='text-success'>1.25 </span>
                                </td>
                                <td>1.25</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>1 Mins 9 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Banking And Finance</strong>
                                </td>
                                <td>2</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>75 </span>
                                </td>
                                <td>50</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>39 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Management</strong>
                                </td>
                                <td>2</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>25 </span>
                                </td>
                                <td>50</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>54 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Education</strong>
                                </td>
                                <td>2</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>75 </span>
                                </td>
                                <td>87.5</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>44 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Political And Public Affairs</strong>
                                </td>
                                <td>2</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>25 </span>
                                </td>
                                <td>62.5</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>1 Mins 5 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Cognitive Thinking Style </strong>
                                </td>
                                <td>2</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>1</span>
                                </td>
                                <td>
                                  <span className='text-success'>1.25 </span>
                                </td>
                                <td>1.25</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>1 Mins 39 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Problem Solving</strong>
                                </td>
                                <td>6</td>

                                <td>
                                  <span className='text-success'>6</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>7.50 </span>
                                </td>
                                <td>1.25</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>5 Mins 24 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Time Management Skills</strong>
                                </td>
                                <td>1</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>1.25 </span>
                                </td>
                                <td>1.25</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>32 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Grasping Skills</strong>
                                </td>
                                <td>2</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>1</span>
                                </td>
                                <td>
                                  <span className='text-success'>1.25 </span>
                                </td>
                                <td>1.25</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>37 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Writing Skills</strong>
                                </td>
                                <td>1</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>100 </span>
                                </td>
                                <td>100</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>19 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Decision making </strong>
                                </td>
                                <td>1</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>1.25 </span>
                                </td>
                                <td>1.25</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>23 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Observation Skills</strong>
                                </td>
                                <td>1</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>1.25 </span>
                                </td>
                                <td>1.25</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>1 Mins 34 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Mass And Media Communication</strong>
                                </td>
                                <td>2</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>50 </span>
                                </td>
                                <td>50</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>41 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Medical</strong>
                                </td>
                                <td>5</td>

                                <td>
                                  <span className='text-success'>4</span>/
                                  <span className='text-danger'>1</span>
                                </td>
                                <td>
                                  <span className='text-success'>5.00 </span>
                                </td>
                                <td>1.25</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>1 Mins 13 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Fear Factor</strong>
                                </td>
                                <td>3</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>1.08 </span>
                                </td>
                                <td>58.33</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>1 Mins 18 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Procastination</strong>
                                </td>
                                <td>3</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>0.72 </span>
                                </td>
                                <td>50</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>47 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Hesitation</strong>
                                </td>
                                <td>3</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>1.44 </span>
                                </td>
                                <td>83.33</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>1 Mins 21 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Doubt</strong>
                                </td>
                                <td>3</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>0.36 </span>
                                </td>
                                <td>33.33</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>1 Mins 13 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Opportunity Conversion</strong>
                                </td>
                                <td>3</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>0.36 </span>
                                </td>
                                <td>66.67</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>2 Mins 4 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Confusion</strong>
                                </td>
                                <td>3</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>0.36 </span>
                                </td>
                                <td>33.33</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>1 Mins 6 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Convincing Skills</strong>
                                </td>
                                <td>3</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>1.44 </span>
                                </td>
                                <td>100</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>56 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Leadership Quality</strong>
                                </td>
                                <td>3</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>0.72 </span>
                                </td>
                                <td>58.33</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>1 Mins 10 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Physics</strong>
                                </td>
                                <td>5</td>

                                <td>
                                  <span className='text-success'>4</span>/
                                  <span className='text-danger'>1</span>
                                </td>
                                <td>
                                  <span className='text-success'>5.00 </span>
                                </td>
                                <td>1.25</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>1 Mins 42 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Self Motivational</strong>
                                </td>
                                <td>3</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>0.36 </span>
                                </td>
                                <td>58.33</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>1 Mins 13 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Managerial Skills</strong>
                                </td>
                                <td>3</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>1.08 </span>
                                </td>
                                <td>91.67</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>1 Mins 22 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Visual Perception</strong>
                                </td>
                                <td>3</td>

                                <td>
                                  <span className='text-success'>1</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>
                                  <span className='text-success'>1.08 </span>
                                </td>
                                <td>75</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>1 Mins 50 Sec</td>
                              </tr>
                              <tr>
                                <td className='text-primary'>
                                  <strong>Passage</strong>
                                </td>
                                <td>7</td>

                                <td>
                                  <span className='text-success'>6</span>/
                                  <span className='text-danger'>1</span>
                                </td>
                                <td>
                                  <span className='text-success'>7.50 </span>
                                </td>
                                <td>1.25</td>

                                <td>
                                  <span className='text-warning'>0</span>/
                                  <span className='text-danger'>0</span>
                                </td>
                                <td>1 Hours 47 Mins 33 Sec</td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Total of All Element</strong>
                                </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> 4089.71</td>
                                <td> </td>
                                <td> </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Overall %</strong>
                                </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> 69.32%</td>
                                <td> </td>
                                <td> </td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-sm-12'>
                    <div className={cx('card')}>
                      <div className={cx('card-table m-0')}>
                        <div className='pt-3'>
                          <h6 className={cx('mx-3')}>
                            Performance Report For className 7th test 1{' '}
                          </h6>
                          <hr />
                        </div>
                        <Chart
                          options={options as unknown as undefined}
                          series={series}
                          type='bar'
                          // width='500'
                          height={300}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey='compare' title='Compare Report'>
                <div className='row mb-3'>
                  <div className='col-sm-12'>
                    <div className={cx('card')}>
                      <div className={cx('card-table m-0')}>
                        <div className='pt-3'>
                          <h6 className={cx('mx-1')}>
                            Compare Report For className 7th test 1
                          </h6>
                          <hr className='mb-0' />
                        </div>
                        <div className='row'>
                          <div className='col-sm-6'>
                            <div className='table-scroll-result'>
                              <Table hover>
                                <tbody>
                                  <tr>
                                    <td>Total Ques.</td>
                                    <td>
                                      <strong>150</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Maximum Marks</td>
                                    <td>
                                      <strong>187.50</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Attempted Ques.</td>
                                    <td>
                                      <strong className='text-success'>
                                        150
                                      </strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Unattempted Ques.</td>
                                    <td>
                                      <strong className='text-danger'>0</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Correct Ques.</td>
                                    <td>
                                      <strong className='text-success'>
                                        33
                                      </strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Incorrect Ques.</td>
                                    <td>
                                      <strong className='text-danger'>
                                        117
                                      </strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Total Score</td>
                                    <td>
                                      <strong className='text-primary'>
                                        69.32 /187.50
                                      </strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Percentage</td>
                                    <td>
                                      <strong>69.32%</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Percentile</td>
                                    <td>
                                      <strong>90.91%</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Total Time</td>
                                    <td>
                                      <strong>1 Hours 52 Mins 52 Sec</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Rank</td>
                                    <td valign='top'>
                                      <div className='rank'>
                                        1<sup>st</sup>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </Table>
                            </div>
                          </div>
                          <div className='col-sm-6'>
                            <div className='table-scroll-result'>
                              <Table hover>
                                <tbody>
                                  <tr>
                                    <td>Total Ques.</td>
                                    <td>
                                      <strong>150</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Maximum Marks</td>
                                    <td>
                                      <strong>187.50</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Attempted Ques.</td>
                                    <td>
                                      <strong className='text-success'>
                                        150
                                      </strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Unattempted Ques.</td>
                                    <td>
                                      <strong className='text-danger'>0</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Correct Ques.</td>
                                    <td>
                                      <strong className='text-success'>
                                        33
                                      </strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Incorrect Ques.</td>
                                    <td>
                                      <strong className='text-danger'>
                                        117
                                      </strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Total Score</td>
                                    <td>
                                      <strong className='text-primary'>
                                        69.32 /187.50
                                      </strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Percentage</td>
                                    <td>
                                      <strong>69.32%</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Percentile</td>
                                    <td>
                                      <strong>90.91%</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Total Time</td>
                                    <td>
                                      <strong>1 Hours 52 Mins 52 Sec</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Rank</td>
                                    <td valign='top'>
                                      <div className='rank'>
                                        2<sup>nd</sup>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </Table>
                            </div>
                          </div>
                        </div>
                        <hr className='mb-0' />
                        <div className='py-3'>
                          <div
                            className={cx(
                              'action-btn justify-content-end me-4'
                            )}
                          >
                            <div>
                              <div className='con'>
                                <div className='con-tooltip top'>
                                  <div className={cx('edit-icon')}>
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                    <div className='tooltip '>
                                      <p>Previous</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <div className='con'>
                                <div className='con-tooltip top'>
                                  <div className={cx('edit-icon')}>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                    <div className='tooltip '>
                                      <p>Next </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row mb-3'>
                  <div className='col-sm-12'>
                    <div className={cx('card')}>
                      <div className={cx('card-table m-0')}>
                        <div className='pt-3'>
                          <h6 className={cx('mx-3')}>
                            Compare Report For className 7th test 1{' '}
                          </h6>
                          <hr />
                        </div>
                        <Chart
                          options={options as unknown as undefined}
                          series={series}
                          type='bar'
                          // width='500'
                          height={300}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey='group' title=' Group Total'>
                <div className='row mb-3'>
                  <div className='col-sm-12'>
                    <div className={cx('card')}>
                      <div className={cx('card-table m-0')}>
                        <div className='pt-3'>
                          <h6 className={cx('mx-1')}>
                            Group Wise Total For className 7th test 1
                          </h6>
                          <hr className='mb-0' />
                        </div>
                        <div className='table-scroll-result'>
                          <Table hover>
                            <thead>
                              <tr>
                                <td>#</td>
                                <td>Group Name </td>
                                <th>Group Total</th>
                                <th>Group %</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Interest </td>
                                <th>1575</th>
                                <th>82.89</th>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Psychology </td>
                                <th>1050</th>
                                <th>61.76</th>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Research </td>
                                <th>189</th>
                                <th>63</th>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Science </td>
                                <th>290</th>
                                <th>72.5</th>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>Logic </td>
                                <th>500</th>
                                <th>71.43</th>
                              </tr>
                              <tr>
                                <td>6</td>
                                <td>Knowledge </td>
                                <th>250</th>
                                <th>41.67</th>
                              </tr>
                              <tr>
                                <td>7</td>
                                <td>CRM </td>
                                <th>185.71</th>
                                <th>30.95</th>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey='memory' title=' Memory Test'>
                <div className='row mb-3'>
                  <div className='col-sm-12'>
                    <div className={cx('card')}>
                      <div className={cx('card-table m-0')}>
                        <div className='pt-3'>
                          <h6 className={cx('mx-1')}>
                            Student Compare Report className 7th test 1{' '}
                          </h6>
                          <hr className='mb-0' />
                        </div>
                        <div className='table-scroll-result'>
                        <Table hover>
                          <thead>
                            <tr>
                              <th>Test Name</th>
                              <th>No. of Questions</th>
                              <th>Correct Answers</th>
                              <th>Wrong Answers</th>
                              <th>Your Percentage</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className='text-danger'>
                                <strong>Number Test</strong>
                              </td>
                              <td>12</td>
                              <td>7</td>
                              <td>5</td>
                              <td>58%</td>
                              <td>
                                <div className='con'>
                                  <div className='con-tooltip top'>
                                    <div className={cx('edit-icon')}>
                                      <FontAwesomeIcon icon={faEye} />
                                      <div className='tooltip '>
                                        <p>View</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className='text-danger'>
                                <strong>Letter Test</strong>
                              </td>
                              <td>12</td>
                              <td>3</td>
                              <td>9</td>
                              <td>25%</td>
                              <td>
                                <div className='con'>
                                  <div className='con-tooltip top'>
                                    <div className={cx('edit-icon')}>
                                      <FontAwesomeIcon icon={faEye} />
                                      <div className='tooltip '>
                                        <p>View</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className='text-danger'>
                                <strong>Word Test</strong>
                              </td>
                              <td>1</td>
                              <td>9</td>
                              <td>31</td>
                              <td>22.5%</td>
                              <td>
                                <div className='con'>
                                  <div className='con-tooltip top'>
                                    <div className={cx('edit-icon')}>
                                      <FontAwesomeIcon icon={faEye} />
                                      <div className='tooltip '>
                                        <p>View</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className='text-danger'>
                                <strong>Calculation Test</strong>
                              </td>
                              <td>12</td>
                              <td>6</td>
                              <td>6</td>
                              <td>50%</td>
                              <td>
                                <div className='con'>
                                  <div className='con-tooltip top'>
                                    <div className={cx('edit-icon')}>
                                      <FontAwesomeIcon icon={faEye} />
                                      <div className='tooltip '>
                                        <p>View</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className='text-danger'>
                                <strong>Writing Test</strong>
                              </td>
                              <td>1</td>
                              <td>NA</td>
                              <td>NA</td>
                              <td>97.13%</td>
                              <td>
                                <div className='con'>
                                  <div className='con-tooltip top'>
                                    <div className={cx('edit-icon')}>
                                      <FontAwesomeIcon icon={faEye} />
                                      <div className='tooltip '>
                                        <p>View</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className='text-danger'>
                                <strong>Humanity Test</strong>
                              </td>
                              <td>6</td>
                              <td>NA</td>
                              <td>NA</td>
                              <td>
                                Acting or Drama - 20%
                                <br /> Sports - 100%
                                <br /> Music &amp; Dance - 60%
                                <br /> Art &amp; craft or Designing - 20%
                                <br /> Entertainment &amp; Recreation - 20%
                                <br /> Education &amp; guidance - 20%
                                <br />{' '}
                              </td>
                              <td>
                                <div className='con'>
                                  <div className='con-tooltip top'>
                                    <div className={cx('edit-icon')}>
                                      <FontAwesomeIcon icon={faEye} />
                                      <div className='tooltip '>
                                        <p>View</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey='student' title=' Student Compare Report'>
                <div className='row mb-3'>
                  <div className='col-sm-12'>
                    <div className={cx('card')}>
                      <div className={cx('card-table m-0')}>
                        <div className='pt-3'>
                          <h6 className={cx('mx-1')}>
                            Student Compare Report className 7th test 1{' '}
                          </h6>
                          <hr className='mb-0' />
                        </div>
                        <Table hover>
                          <thead className='thead-box'>
                            <tr>
                              <th>Name</th>
                              <th>Current</th>
                              <th>1st</th>
                              <th>2nd</th>
                              <th>3rd</th>
                              <th>4th</th>
                              <th>5th</th>
                              <th>Total .</th>
                            </tr>
                          </thead>
                          <tbody className='height-box-table'>
                            <tr>
                              <td className='text-primary'>
                                <strong>Vq</strong>
                              </td>
                              <td>100%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 50% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Cq</strong>
                              </td>
                              <td>75%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 37.5% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Auditory Learning Style </strong>
                              </td>
                              <td>100%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 50% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Visual Learning Style </strong>
                              </td>
                              <td>25%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 12.5% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Emotional Thinker</strong>
                              </td>
                              <td>75%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 37.5% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>
                                  Read &amp; Understand Learning Style{' '}
                                </strong>
                              </td>
                              <td>100%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 50% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Aq</strong>
                              </td>
                              <td>75%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 37.5% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Eq</strong>
                              </td>
                              <td>100%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 50% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Target On Work </strong>
                              </td>
                              <td>75%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 37.5% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Sense Of Humor</strong>
                              </td>
                              <td>50%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 25% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Competitive Approach</strong>
                              </td>
                              <td>50%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 25% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Acceptance Of Challenges</strong>
                              </td>
                              <td>75%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 37.5% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Perception</strong>
                              </td>
                              <td>75%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 37.5% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Negative Thinker</strong>
                              </td>
                              <td>75%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 37.5% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Positive Thinker </strong>
                              </td>
                              <td>75%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 37.5% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Kinesthetic Learning Style</strong>
                              </td>
                              <td>75%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 37.5% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Research Skills</strong>
                              </td>
                              <td>100%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 50% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Designing</strong>
                              </td>
                              <td>100%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 50% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Chemistry</strong>
                              </td>
                              <td>80.00%</td>
                              <td>0.00%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 40% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Self Study Potential</strong>
                              </td>
                              <td>25%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 12.5% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Inovative Skills</strong>
                              </td>
                              <td>67%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 33.5% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Creative Skills</strong>
                              </td>
                              <td>22%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 11% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Business Approach Thinker </strong>
                              </td>
                              <td>100%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 50% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Scientific Thinker </strong>
                              </td>
                              <td>50.00%</td>
                              <td>0.00%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 25% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Logical Personality </strong>
                              </td>
                              <td>100%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 50% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Creative Personality</strong>
                              </td>
                              <td>100%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 50% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Business </strong>
                              </td>
                              <td>100%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 50% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Avail Benefit Situation</strong>
                              </td>
                              <td>75%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 37.5% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Keep Upgrade</strong>
                              </td>
                              <td>100%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 50% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Engineering</strong>
                              </td>
                              <td>100.00%</td>
                              <td>0.00%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 50% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Iq</strong>
                              </td>
                              <td>50.00%</td>
                              <td>0.00%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 25% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Banking And Finance</strong>
                              </td>
                              <td>75%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 37.5% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Management</strong>
                              </td>
                              <td>25%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 12.5% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Education</strong>
                              </td>
                              <td>75%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 37.5% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Political And Public Affairs</strong>
                              </td>
                              <td>25%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 12.5% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Cognitive Thinking Style </strong>
                              </td>
                              <td>50.00%</td>
                              <td>0.00%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 25% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Problem Solving</strong>
                              </td>
                              <td>100.00%</td>
                              <td>0.00%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 50% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Time Management Skills</strong>
                              </td>
                              <td>100.00%</td>
                              <td>0.00%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 50% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Grasping Skills</strong>
                              </td>
                              <td>50.00%</td>
                              <td>0.00%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 25% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Writing Skills</strong>
                              </td>
                              <td>100%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 50% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Decision making </strong>
                              </td>
                              <td>100.00%</td>
                              <td>0.00%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 50% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Observation Skills</strong>
                              </td>
                              <td>100.00%</td>
                              <td>0.00%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 50% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Mass And Media Communication</strong>
                              </td>
                              <td>50%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 25% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Medical</strong>
                              </td>
                              <td>80.00%</td>
                              <td>0.00%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 40% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Fear Factor</strong>
                              </td>
                              <td>75%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 37.5% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Procastination</strong>
                              </td>
                              <td>50%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 25% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Hesitation</strong>
                              </td>
                              <td>100%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 50% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Doubt</strong>
                              </td>
                              <td>25%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 12.5% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Opportunity Conversion</strong>
                              </td>
                              <td>25%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 12.5% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Confusion</strong>
                              </td>
                              <td>25%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 12.5% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Convincing Skills</strong>
                              </td>
                              <td>100%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 50% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Leadership Quality</strong>
                              </td>
                              <td>50%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 25% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Physics</strong>
                              </td>
                              <td>80.00%</td>
                              <td>0.00%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 40% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Self Motivational</strong>
                              </td>
                              <td>25%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 12.5% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Managerial Skills</strong>
                              </td>
                              <td>75%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 37.5% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Visual Perception</strong>
                              </td>
                              <td>75%</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 37.5% </td>
                            </tr>
                            <tr>
                              <td className='text-primary'>
                                <strong>Passage</strong>
                              </td>
                              <td>85.71%</td>
                              <td>0.00%</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td> 42.86% </td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Total of All Element</strong>
                              </td>
                              <td>4089.71 </td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>2044.86</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Overall %</strong>
                              </td>
                              <td> 69.32%</td>
                              <td> 0%</td>
                              <td> 0%</td>
                              <td> 0%</td>
                              <td> 0%</td>
                              <td> 0%</td>
                              <td> 34.66%</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Avg. %</strong>
                              </td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td> 34.66%</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey='contact' title='Formula Value'>
                <div className='row mb-3  '>
                  <div className='col-sm-12'>
                    <div className={cx('card')}>
                      <div className={cx('card-table m-0')}>
                        <div className='pt-3'>
                          <h6 className={cx('mx-1')}>Memory Test Results </h6>
                          <hr className='mb-0' />
                        </div>
                        <Table hover>
                          <thead className='thead-box'>
                            <tr>
                              <th>Element</th>
                              <th>Formula</th>
                              <th>Percentage</th>
                            </tr>
                          </thead>
                          <tbody className='height-box-table'>
                            <tr>
                              <td>Passage</td>
                              <td>
                                ((125/100)+(0/100)+(0/100)+(0/100)+(0/100)) / 1
                              </td>
                              <td>1.25</td>
                            </tr>
                            <tr>
                              <td>Grasping Skills</td>
                              <td>
                                ((6781/100)+(0/100)+(125/100)+(0/100)+(0/100)) /
                                2
                              </td>
                              <td>34.53</td>
                            </tr>
                            <tr>
                              <td>Time Management Skills</td>
                              <td>
                                ((6781/100)+(5000/100)+(125/100)+(0/100)+(0/100))
                                / 3
                              </td>
                              <td>39.69</td>
                            </tr>
                            <tr>
                              <td>Writing Skills</td>
                              <td>
                                ((10000/100)+(2500/100)+(0/100)+(0/100)+(0/100))
                                / 2
                              </td>
                              <td>62.5</td>
                            </tr>
                            <tr>
                              <td>Decision making </td>
                              <td>
                                ((125/100)+(9167/100)+(125/100)+(7143/100)+(0/100))
                                / 4
                              </td>
                              <td>41.4</td>
                            </tr>
                            <tr>
                              <td>Observation Skills</td>
                              <td>
                                ((125/100)+(6781/100)+(5000/100)+(7143/100)+(6300/100))
                                / 5
                              </td>
                              <td>50.7</td>
                            </tr>
                            <tr>
                              <td>Analytical Skills</td>
                              <td>
                                ((0/100)+(125/100)+(7500/100)+(0/100)+(0/100)) /
                                3
                              </td>
                              <td>25.42</td>
                            </tr>
                            <tr>
                              <td>Problem Solving</td>
                              <td>
                                ((7500/100)+(10000/100)+(6781/100)+(7143/100)+(7250/100))
                                / 5
                              </td>
                              <td>77.35</td>
                            </tr>
                            <tr>
                              <td>Cognitive Thinking Style </td>
                              <td>
                                ((125/100)+(125/100)+(6781/100)+(7143/100)+(6300/100))
                                / 5
                              </td>
                              <td>40.95</td>
                            </tr>
                            <tr>
                              <td>Iq</td>
                              <td>
                                ((125/100)+(6781/100)+(125/100)+(7143/100)+(6300/100))
                                / 5
                              </td>
                              <td>40.95</td>
                            </tr>
                            <tr>
                              <td>Engineering</td>
                              <td>
                                ((125/100)+(7143/100)+(125/100)+(7250/100)+(6300/100))
                                / 5
                              </td>
                              <td>41.89</td>
                            </tr>
                            <tr>
                              <td>Banking And Finance</td>
                              <td>
                                ((5000/100)+(5000/100)+(6781/100)+(7143/100)+(4167/100))
                                / 5
                              </td>
                              <td>56.18</td>
                            </tr>
                            <tr>
                              <td>Management</td>
                              <td>
                                ((5000/100)+(8750/100)+(10000/100)+(3095/100)+(0/100))
                                / 4
                              </td>
                              <td>67.11</td>
                            </tr>
                            <tr>
                              <td>Political And Public Affairs</td>
                              <td>
                                ((6250/100)+(0/100)+(0/100)+(6300/100)+(0/100))
                                / 2
                              </td>
                              <td>62.75</td>
                            </tr>
                            <tr>
                              <td>Education</td>
                              <td>
                                ((8750/100)+(4746.7/100)+(4230.6833333333/100)+(5000.1/100)+(0/100))
                                / 4
                              </td>
                              <td>56.82</td>
                            </tr>
                            <tr>
                              <td>Mass And Media Communication</td>
                              <td>
                                ((5000/100)+(5000/100)+(10000/100)+(3095/100)+(0/100))
                                / 4
                              </td>
                              <td>57.74</td>
                            </tr>
                            <tr>
                              <td>Medical</td>
                              <td>
                                ((125/100)+(2034.3/100)+(0/100)+(0/100)+(0/100))
                                / 2
                              </td>
                              <td>10.8</td>
                            </tr>
                            <tr>
                              <td>Physics</td>
                              <td>
                                ((125/100)+(0/100)+(0/100)+(7143/100)+(0/100)) /
                                2
                              </td>
                              <td>36.34</td>
                            </tr>
                            <tr>
                              <td>Leadership Quality</td>
                              <td>
                                ((5833/100)+(5000/100)+(0/100)+(0/100)+(0/100))
                                / 2
                              </td>
                              <td>54.17</td>
                            </tr>
                            <tr>
                              <td>Self Motivational</td>
                              <td>
                                ((5833/100)+(0/100)+(0/100)+(0/100)+(3095/100))
                                / 2
                              </td>
                              <td>44.64</td>
                            </tr>
                            <tr>
                              <td>Managerial Skills</td>
                              <td>
                                ((5000/100)+(125/100)+(125/100)+(3095/100)+(0/100))
                                / 4
                              </td>
                              <td>20.86</td>
                            </tr>
                            <tr>
                              <td>Visual Perception</td>
                              <td>
                                ((6250/100)+(0/100)+(0/100)+(0/100)+(0/100)) / 1
                              </td>
                              <td>62.5</td>
                            </tr>
                            <tr>
                              <td>Convincing Skills</td>
                              <td>
                                ((10000/100)+(6781/100)+(8750/100)+(6176/100)+(0/100))
                                / 4
                              </td>
                              <td>79.27</td>
                            </tr>
                            <tr>
                              <td>Confusion</td>
                              <td>
                                ((3333/100)-(6781/100)+(3333/100)+(7143/100)+(3095/100))
                                / 3
                              </td>
                              <td>33.74</td>
                            </tr>
                            <tr>
                              <td>Procastination</td>
                              <td>
                                ((5000/100)+(0/100)+(0/100)+(0/100)+(0/100)) / 1
                              </td>
                              <td>50</td>
                            </tr>
                            <tr>
                              <td>Fear Factor</td>
                              <td>
                                ((5833/100)+(0/100)+(0/100)+(0/100)+(0/100)) / 1
                              </td>
                              <td>58.33</td>
                            </tr>
                            <tr>
                              <td>Hesitation</td>
                              <td>
                                ((8333/100)+(3333/100)+(3333/100)+(0/100)+(0/100))
                                / 3
                              </td>
                              <td>50</td>
                            </tr>
                            <tr>
                              <td>Doubt</td>
                              <td>
                                ((3333/100)+(3333/100)+(6781/100)+(7250/100)+(6300/100))
                                / 5
                              </td>
                              <td>53.99</td>
                            </tr>
                            <tr>
                              <td>Opportunity Conversion</td>
                              <td>
                                ((6667/100)+(0/100)+(0/100)+(0/100)+(0/100)) / 1
                              </td>
                              <td>66.67</td>
                            </tr>
                            <tr>
                              <td>Keep Upgrade</td>
                              <td>
                                ((5833/100)+(0/100)+(0/100)+(4167/100)+(6176/100))
                                / 3
                              </td>
                              <td>53.92</td>
                            </tr>
                            <tr>
                              <td>Avail Benefit Situation</td>
                              <td>
                                ((6667/100)+(5000/100)+(5833/100)+(3095/100)+(7143/100))
                                / 5
                              </td>
                              <td>55.48</td>
                            </tr>
                            <tr>
                              <td>Sense Of Humor</td>
                              <td>
                                ((4167/100)+(125/100)+(0/100)+(7143/100)+(0/100))
                                / 3
                              </td>
                              <td>38.12</td>
                            </tr>
                            <tr>
                              <td>Target On Work </td>
                              <td>
                                ((5833/100)+(0/100)+(0/100)+(0/100)+(0/100)) / 1
                              </td>
                              <td>58.33</td>
                            </tr>
                            <tr>
                              <td>Competitive Approach</td>
                              <td>
                                ((5000/100)+(2500/100)+(6781/100)+(6176/100)+(0/100))
                                / 4
                              </td>
                              <td>51.14</td>
                            </tr>
                            <tr>
                              <td>Acceptance Of Challenges</td>
                              <td>
                                ((9167/100)+(125/100)+(0/100)+(0/100)+(0/100)) /
                                2
                              </td>
                              <td>46.46</td>
                            </tr>
                            <tr>
                              <td>Perception</td>
                              <td>
                                ((5000/100)+(0/100)+(0/100)+(6300/100)+(0/100))
                                / 2
                              </td>
                              <td>56.5</td>
                            </tr>
                            <tr>
                              <td>Eq</td>
                              <td>
                                ((10000/100)+(8750/100)+(0/100)+(0/100)+(0/100))
                                / 2
                              </td>
                              <td>93.75</td>
                            </tr>
                            <tr>
                              <td>Aq</td>
                              <td>
                                ((5000/100)+(5833/100)+(0/100)+(6176/100)+(7632/100))
                                / 4
                              </td>
                              <td>61.6</td>
                            </tr>
                            <tr>
                              <td>Cq</td>
                              <td>
                                ((5000/100)+(0/100)+(6781/100)+(7143/100)+(6300/100))
                                / 4
                              </td>
                              <td>63.06</td>
                            </tr>
                            <tr>
                              <td>Vq</td>
                              <td>
                                ((7500/100)+(6250/100)+(8750/100)+(0/100)+(0/100))
                                / 3
                              </td>
                              <td>75</td>
                            </tr>
                            <tr>
                              <td>Auditory Learning Style </td>
                              <td>
                                ((10000/100)+(0/100)+(0/100)+(0/100)+(0/100)) /
                                1
                              </td>
                              <td>100</td>
                            </tr>
                            <tr>
                              <td>Visual Learning Style </td>
                              <td>
                                ((6250/100)+(7500/100)+(0/100)+(0/100)+(0/100))
                                / 2
                              </td>
                              <td>68.75</td>
                            </tr>
                            <tr>
                              <td>Read &amp; Understand Learning Style </td>
                              <td>
                                ((8750/100)+(125/100)+(0/100)+(0/100)-(0/100)) /
                                2
                              </td>
                              <td>44.38</td>
                            </tr>
                            <tr>
                              <td>Emotional Thinker</td>
                              <td>
                                ((7500/100)+(10000/100)+(0/100)+(0/100)+(0/100))
                                / 2
                              </td>
                              <td>87.5</td>
                            </tr>
                            <tr>
                              <td>Negative Thinker</td>
                              <td>
                                ((6250/100)+(0/100)+(0/100)+(0/100)+(0/100)) / 1
                              </td>
                              <td>62.5</td>
                            </tr>
                            <tr>
                              <td>Positive Thinker </td>
                              <td>
                                ((7500/100)+(0/100)+(0/100)+(0/100)+(0/100)) / 1
                              </td>
                              <td>75</td>
                            </tr>
                            <tr>
                              <td>Scientific Thinker </td>
                              <td>
                                ((125/100)+(0/100)+(0/100)+(7250/100)+(7143/100))
                                / 3
                              </td>
                              <td>48.39</td>
                            </tr>
                            <tr>
                              <td>Business Approach Thinker </td>
                              <td>
                                ((8750/100)+(10000/100)+(5000/100)+(6176/100)+(7632/100))
                                / 5
                              </td>
                              <td>75.12</td>
                            </tr>
                            <tr>
                              <td>Logical Personality </td>
                              <td>
                                ((5000/100)+(0/100)+(10000/100)+(7143/100)+(6300/100))
                                / 5
                              </td>
                              <td>56.89</td>
                            </tr>
                            <tr>
                              <td>Creative Personality</td>
                              <td>
                                ((10000/100)-(0/100)+(0/100)+(0/100)+(0/100)) /
                                1
                              </td>
                              <td>100</td>
                            </tr>
                            <tr>
                              <td>Business </td>
                              <td>
                                ((8750/100)+(125/100)+(10000/100)+(0/100)+(0/100))
                                / 3
                              </td>
                              <td>62.92</td>
                            </tr>
                            <tr>
                              <td>Creative Skills</td>
                              <td>
                                ((4475/100)+(5400/100)+(8750/100)+(7250/100)+(0/100))
                                / 4
                              </td>
                              <td>64.69</td>
                            </tr>
                            <tr>
                              <td>Inovative Skills</td>
                              <td>
                                ((5000/100)+(5400/100)+(4475/100)+(7250/100)+(7143/100))
                                / 5
                              </td>
                              <td>58.54</td>
                            </tr>
                            <tr>
                              <td>Research Skills</td>
                              <td>
                                ((6781/100)+(5000/100)+(125/100)+(6300/100)+(7143/100))
                                / 5
                              </td>
                              <td>50.7</td>
                            </tr>
                            <tr>
                              <td>Kinesthetic Learning Style</td>
                              <td>
                                ((5000/100)+(0/100)+(0/100)+(0/100)+(3095/100))
                                / 2
                              </td>
                              <td>40.48</td>
                            </tr>
                            <tr>
                              <td>Designing</td>
                              <td>
                                ((8750/100)+(4475/100)+(6781/100)+(0/100)+(0/100))
                                / 3
                              </td>
                              <td>66.69</td>
                            </tr>
                            <tr>
                              <td>Chemistry</td>
                              <td>
                                ((125/100)+(125/100)+(7250/100)+(0/100)+(0/100))
                                / 3
                              </td>
                              <td>25</td>
                            </tr>
                            <tr>
                              <td>Self Study Potential</td>
                              <td>
                                ((2500/100)+(5833/100)+(125/100)+(3095/100)+(0/100))
                                / 4
                              </td>
                              <td>28.88</td>
                            </tr>
                            <tr>
                              <td>Acting or Drama</td>
                              <td>
                                ((2000/100)+(4475/100)+(0/100)+(0/100)+(0/100))
                                / 2
                              </td>
                              <td>32.38</td>
                            </tr>
                            <tr>
                              <td>Sports</td>
                              <td>
                                ((10000/100)+(4475/100)+(0/100)+(0/100)+(0/100))
                                / 2
                              </td>
                              <td>72.38</td>
                            </tr>
                            <tr>
                              <td>Music &amp; Dance</td>
                              <td>
                                ((6000/100)+(4475/100)+(0/100)+(0/100)+(0/100))
                                / 2
                              </td>
                              <td>52.38</td>
                            </tr>
                            <tr>
                              <td>Art &amp; craft or Designing</td>
                              <td>
                                ((2000/100)+(4475/100)+(0/100)+(0/100)+(0/100))
                                / 2
                              </td>
                              <td>32.38</td>
                            </tr>
                            <tr>
                              <td>Entertainment &amp; Recreation</td>
                              <td>
                                ((2000/100)+(0/100)+(0/100)+(0/100)+(0/100)) / 1
                              </td>
                              <td>20</td>
                            </tr>
                            <tr>
                              <td>Education &amp; guidance</td>
                              <td>
                                ((2000/100)+(6781/100)+(0/100)+(7143/100)+(0/100))
                                / 3
                              </td>
                              <td>53.08</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};
export default ViewResult;
