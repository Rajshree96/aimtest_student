import dynamic from 'next/dynamic';
import {
  faAddressCard,
  faDollar,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

import styles from './index.module.css';
import className from 'classnames/bind';

const options = {
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 4,
    dashArray: 0,
  },
  dataLabels: {
    enabled: false,
  },
  chart: {
    id: 'area',
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
};

const series = [
  {
    name: 'series-1',
    data: [30, 40, 45, 50, 49, 60, 70, 91],
  },
  {
    name: 'series-2',
    data: [10, 70, 35, 70, 29, 80, 90, 61],
  },
  {
    name: 'series-1',
    data: [23, 50, 5, 90, 29, 80, 90, 11],
  },
  {
    name: 'series-2',
    data: [1, 7, 5, 50, 19, 10, 54, 63],
  },
];
const Dashboard = () => {
  const cx = className.bind(styles);
  return (
    <>
      <div className={cx('flex-style')}>
        <div className={cx('parent-section')}>
          <h4>Dashboard</h4>
          <div className={cx('animate__animated animate__slideInRight')}>
            <div className="row my-3">
              <div className="col-xl-3 col-sm-6 col-12">
                <div className={cx('card')}>
                  <div className={cx('card-content')}>
                    <div className={cx('card-body')}>
                      <div
                        className={cx('media d-flex justify-content-between')}
                      >
                        <div className="align-self-center">
                          <FontAwesomeIcon
                            icon={faAddressCard}
                            className={cx('text-warning dashborad-box-icon')}
                          />
                        </div>
                        <div className={cx('media-body text-end')}>
                          <h3>278</h3>
                          <p className={cx('text-weight')}>AVALABLE EXAM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className={cx('card')}>
                  <div className={cx('card-content')}>
                    <div className={cx('card-body')}>
                      <div
                        className={cx('media d-flex justify-content-between')}
                      >
                        <div className="align-self-center">
                          <FontAwesomeIcon
                            icon={faAddressCard}
                            className={cx('text-success dashborad-box-icon')}
                          />
                        </div>
                        <div className={cx('media-body text-end')}>
                          <h3 className="danger">278</h3>
                          <p className={cx('text-weight')}>COMPLETED EXAM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className={cx('card')}>
                  <div className={cx('card-content')}>
                    <div className={cx('card-body')}>
                      <div
                        className={cx('media d-flex justify-content-between')}
                      >
                        <div className="align-self-center">
                          <FontAwesomeIcon
                            icon={faGraduationCap}
                            className={cx('text-primary dashborad-box-icon')}
                          />
                        </div>
                        <div className={cx('media-body text-end')}>
                          <h3 className="danger">278</h3>
                          <p className={cx('text-weight')}> STUDENTS</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className={cx('card')}>
                  <div className={cx('card-content')}>
                    <div className={cx('card-body')}>
                      <div
                        className={cx('media d-flex justify-content-between')}
                      >
                        <div className="align-self-center">
                          <FontAwesomeIcon
                            icon={faDollar}
                            className={cx('text-success dashborad-box-icon')}
                          />
                        </div>
                        <div className={cx('media-body text-end')}>
                          <h3 className="danger">278</h3>
                          <p className={cx('text-weight')}> TOTAL SALES</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('animate__animated animate__fadeInUpBig')}>
            <div className={cx('row mt-2 ')}>
              <div className={cx('col-xl-6 col-sm-6 col-12')}>
                <div className="card ">
                  <div className="pt-3">
                    <h6 className={cx('mx-3')}> Score of Student </h6>
                    <hr />
                  </div>
                  <Chart
                    options={options as unknown as undefined}
                    series={series}
                    type="area"
                    height={300}
                  />
                </div>
              </div>
              <div className={cx('col-xl-6 col-sm-6 col-12')}>
                <div className="card ">
                  <div className="pt-3">
                    <h6 className={cx('mx-3')}> Score of Student </h6>
                    <hr />
                  </div>
                  <Chart
                    options={options as unknown as undefined}
                    series={series}
                    type="bar"
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
