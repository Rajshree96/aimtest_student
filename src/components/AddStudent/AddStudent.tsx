import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './index.module.css';
import classNames from 'classnames/bind';

const Student = () => {
  const cx = classNames.bind(styles);

  return (
    <>
      <div className={cx('flex-style')}>
        <div className={cx('parent-section')}>
          <div className={cx('text-btn')}>
            <div className={cx('container')}>
              <h4>Student Profile</h4>
              <div className={cx('cards card-form')}>
                <div className={cx('row no-gutters')}>
                  <div className={cx('col-lg-4 card-body')}>
                    <div className={cx('avatar-upload')}>
                      <div className={cx('avatar-edit')}>
                        <input
                          type="file"
                          id="imageUpload"
                          accept=".png, .jpg, .jpeg"
                        />
                        <label htmlFor="imageUpload">
                          {' '}
                          <FontAwesomeIcon icon={faPencilAlt} />
                        </label>
                      </div>
                      <div className={cx('avatar-preview')}>
                        <img id="imagePreview" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 card-form__body card-body">
                    <div className={cx('row mx-2')}>
                      <div className={cx('col-sm-6 mb-3')}>
                        <label htmlFor="fullname">Full Name</label>
                        <input
                          type="text"
                          placeholder="Enter the Full Name"
                          className={cx('form-control')}
                          disabled
                        />
                      </div>
                      <div className={cx('col-sm-6 mb-3')}>
                        <label htmlFor="fullname">Phone Number</label>
                        <input
                          type="text"
                          placeholder="Enter the Contact Number"
                          className={cx('form-control')}
                          disabled
                        />
                      </div>

                      <div className={cx('col-sm-6 mb-3')}>
                        <label htmlFor="fullname">Registered Email</label>
                        <input
                          type="text"
                          placeholder="Enter the Contact Number"
                          className={cx('form-control')}
                          disabled
                        />
                      </div>

                      <div className={cx('col-sm-6 mb-3')}>
                        <label htmlFor="fullname">Alternate Number</label>
                        <input
                          type="text"
                          placeholder="Enter the Contact Number"
                          className={cx('form-control')}
                          disabled
                        />
                      </div>

                      <div className={cx('col-sm-6 mb-3')}>
                        <label htmlFor="fullname">Enrollment Number</label>
                        <input
                          type="text"
                          placeholder="Enter the Contact Number"
                          className={cx('form-control')}
                          disabled
                        />
                      </div>

                      <div className={cx('col-sm-6 mb-3')}>
                        <label htmlFor="fullname">Admission Date</label>
                        <input
                          type="text"
                          placeholder="Enter the Contact Number"
                          className={cx('form-control')}
                          disabled
                        />
                      </div>

                      <div className={cx('col-sm-6 mb-3')}>
                        <label htmlFor="fullname">Expiry Days</label>
                        <input
                          type="text"
                          placeholder="Enter the Contact Number"
                          className={cx('form-control')}
                          disabled
                        />
                      </div>
                      <div className={cx('col-sm-6 mb-3')}>
                        <label htmlFor="fullname">Last Login</label>
                        <input
                          type="text"
                          placeholder="Enter the Contact Number"
                          className={cx('form-control')}
                          disabled
                        />
                      </div>
                      <div className={cx('col-sm-12 mb-3')}>
                        <label htmlFor="fullname">Groups</label>
                        <textarea
                          name=""
                          id=""
                          className={cx('form-control')}
                          rows={2}
                          disabled
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Student;
