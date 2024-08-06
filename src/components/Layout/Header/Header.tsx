import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { AnyAction } from 'redux';
import { useRouter } from 'next/router';
import {
  faTrophy,
  faCartShopping,
  faChalkboardUser,
  faCircleInfo,
  faLock,
  faBookmark,
  faRightFromBracket,
  faCreditCard,
  faUser,
  faInfo,
  faEnvelope,
  faBars,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
// import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from 'Images/mainLogo.png';
import userimg from 'Images/user.jpeg';

import { RootState } from 'redux/store';
import { resetLogin } from 'redux/reducer/Login';
import showToaster from 'components/Toaster/Toaster';
import { logoutSuccess, success } from 'components/Toaster/ToasterMessage';
import { Dropdown, ButtonToolbar } from 'rsuite';
import { Button } from 'react-bootstrap';

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const sideBar = useSelector((state: RootState) => state.sideBar.sideBar);

  const [showToggle, setShowToggle] = useState(false);

  const logout = () => {
    showToaster(success, logoutSuccess);
    dispatch(resetLogin() as unknown as AnyAction);
    setTimeout(async () => {
      (await router.push('/')) && router.reload();
    }, 1000);
  };

  return (
    <>
      <div>
        <div className="bg-header">
          <>
            <div className="menu">
              <div className="logo-style headerLeft">
                <Link href="/dashboard">
                  <div className="logo-size">
                    <Image
                      src={logo}
                      alt="logo"
                      // height={sideBar ? '45px' : '30px'}
                    />
                  </div>
                </Link>
              </div>
              <div className={showToggle ? 'nav-bar showtoggle' : 'nav-bar'}>
                <ul
                  className={
                    showToggle ? 'nav level-one showMenu' : 'nav level-one'
                  }
                >
                  <ButtonToolbar
                    className="animate__animated animate__fadeInUp"
                    onClick={() => setShowToggle(false)}
                  >
                    <div className="vertical-line">
                      <Link href="/package">
                        <div className="dash">
                          <div className="element">
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span>Buy Package</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </ButtonToolbar>

                  <ButtonToolbar
                    className="animate__animated animate__fadeInUp"
                    onClick={() => setShowToggle(false)}
                  >
                    <div className="vertical-line">
                      <Link href="/exam">
                        <div className="dash">
                          <div className="element">
                            <FontAwesomeIcon icon={faChalkboardUser} />
                            <span>My Exam</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </ButtonToolbar>

                  <ButtonToolbar
                    className="animate__animated animate__fadeInUp"
                    onClick={() => setShowToggle(false)}
                  >
                    <div className="vertical-line">
                      <Link href="/result">
                        <div className="dash">
                          <div className="element">
                            <FontAwesomeIcon icon={faTrophy} />
                            <span>My Result</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </ButtonToolbar>
                  <ButtonToolbar
                    className="animate__animated animate__fadeInUp"
                    onClick={() => setShowToggle(false)}
                  >
                    <div className="vertical-line">
                      <Link href="/bookmark">
                        <div className="dash">
                          <div className="element">
                            <FontAwesomeIcon icon={faBookmark} />
                            <span>My Bookmark</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </ButtonToolbar>
                  <ButtonToolbar
                    className="animate__animated animate__fadeInUp"
                    onClick={() => setShowToggle(false)}
                  >
                    <div className="vertical-line">
                      <Link href="/payment">
                        <div className="dash">
                          <div className="element">
                            <FontAwesomeIcon icon={faCreditCard} />
                            <span> Payment</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </ButtonToolbar>
                  <ButtonToolbar
                    className="animate__animated animate__fadeInUp"
                    onClick={() => setShowToggle(false)}
                  >
                    <div className="vertical-line">
                      <Link href="/help">
                        <div className="dash">
                          <div className="element">
                            <FontAwesomeIcon icon={faInfo} />
                            <span> Help</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </ButtonToolbar>
                </ul>
              </div>
              <div className="toggle-flex">
                {/* <div className="mail-relative">
                  <FontAwesomeIcon icon={faCartShopping} className="mail" />
                </div>
                <div>
                  <div className="notifiction-shoping">
                    <p>3</p>
                  </div>
                </div> */}
                <ButtonToolbar
                  className="animate__animated animate__fadeInUp"
                  onClick={() => setShowToggle(false)}
                >
                  <div>
                    <Dropdown
                      title={<FontAwesomeIcon icon={faCartShopping} />}
                      activeKey="e-2"
                      className="animate__animated animate__fadeInUp box-drop "
                    >
                      <Link href="/profile">
                        <Dropdown.Item eventKey="a">
                          <div className="header-logout">
                            <Image
                              src={userimg}
                              alt="logo"
                              className="user-img "
                              height="80px"
                              width="80px"
                            />
                            <div>
                              <h6>Megha Singh </h6>
                              <p>megha.aimtest@gmail.com</p>
                              <div className="btn-col">
                                <Button className="custom-btn btn-3">
                                  Change vPassword
                                </Button>
                                <div className="d-flex gap-3">
                                  <Button className="custom-btn btn-3">
                                    Profile
                                  </Button>

                                  <Button className="custom-btn btn-3">
                                    Signout
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Dropdown.Item>
                      </Link>
                      {/* <Link href="/profile">
                          <Dropdown.Item eventKey="a">
                            <div className="header-logout">
                              <FontAwesomeIcon
                                icon={faUser}
                                className="text-black"
                              />
                              <span>Profile </span>
                            </div>
                          </Dropdown.Item>
                        </Link>
                        <Link href="/help">
                          <Dropdown.Item eventKey="a">
                            <div className="header-logout">
                              <FontAwesomeIcon
                                icon={faCircleInfo}
                                className="text-black"
                              />
                              <span>Help </span>
                            </div>
                          </Dropdown.Item>
                        </Link>
                        <Link href="/password">
                          <Dropdown.Item eventKey="b">
                            <div className="header-logout">
                              <FontAwesomeIcon icon={faLock} />
                              <span>Change Password </span>
                            </div>
                          </Dropdown.Item>
                        </Link> */}
                      {/* <Dropdown.Item eventKey="b">
                          <div
                            className="header-logout"
                            onClick={() => logout()}
                          >
                            <FontAwesomeIcon
                              icon={faRightFromBracket}
                              className="text-black"
                            />
                            <span>Logout </span>
                          </div>
                        </Dropdown.Item> */}
                    </Dropdown>
                  </div>
                </ButtonToolbar>
                <div>
                  <div className="mail-relative">
                    <FontAwesomeIcon icon={faEnvelope} className="mail" />
                  </div>
                  <div>
                    <div className="notification">
                      <p>3</p>
                    </div>
                  </div>
                </div>

                <FontAwesomeIcon
                  icon={faBars}
                  className="text-black hidetoggle"
                  onClick={() => setShowToggle((prev) => !prev)}
                />
                <div className="icon-hover">
                  <ButtonToolbar
                    className="animate__animated animate__fadeInUp"
                    onClick={() => setShowToggle(false)}
                  >
                    <div>
                      <Dropdown
                        title={<FontAwesomeIcon icon={faUser} />}
                        activeKey="e-2"
                        className="animate__animated animate__fadeInUp box-drop "
                      >
                        <Link href="/profile">
                          <Dropdown.Item eventKey="a">
                            <div className="header-logout">
                              <Image
                                src={userimg}
                                alt="logo"
                                className="user-img "
                                height="80px"
                                width="80px"
                              />
                              <div>
                                <h6>Megha Singh </h6>
                                <p>megha.aimtest@gmail.com</p>
                                <div className="btn-col">
                                  <Button className="custom-btn btn-3">
                                    Change vPassword
                                  </Button>
                                  <div className="d-flex gap-3">
                                    <Button className="custom-btn btn-3">
                                      Profile
                                    </Button>

                                    <Button className="custom-btn btn-3">
                                      Signout
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Dropdown.Item>
                        </Link>
                        {/* <Link href="/profile">
                          <Dropdown.Item eventKey="a">
                            <div className="header-logout">
                              <FontAwesomeIcon
                                icon={faUser}
                                className="text-black"
                              />
                              <span>Profile </span>
                            </div>
                          </Dropdown.Item>
                        </Link>
                        <Link href="/help">
                          <Dropdown.Item eventKey="a">
                            <div className="header-logout">
                              <FontAwesomeIcon
                                icon={faCircleInfo}
                                className="text-black"
                              />
                              <span>Help </span>
                            </div>
                          </Dropdown.Item>
                        </Link>
                        <Link href="/password">
                          <Dropdown.Item eventKey="b">
                            <div className="header-logout">
                              <FontAwesomeIcon icon={faLock} />
                              <span>Change Password </span>
                            </div>
                          </Dropdown.Item>
                        </Link> */}
                        {/* <Dropdown.Item eventKey="b">
                          <div
                            className="header-logout"
                            onClick={() => logout()}
                          >
                            <FontAwesomeIcon
                              icon={faRightFromBracket}
                              className="text-black"
                            />
                            <span>Logout </span>
                          </div>
                        </Dropdown.Item> */}
                      </Dropdown>
                    </div>
                  </ButtonToolbar>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Header;
