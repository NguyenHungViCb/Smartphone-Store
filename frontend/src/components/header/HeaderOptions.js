import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import {Link, useHistory} from "react-router-dom";
import {logoutAction} from '../../actions/UserActions'
import ProfileDropdown from './ProfileDropdown'

const HeaderOptions = () => {
    const history = useHistory()
  const dispatch = useDispatch()
  const slideDown = () => {
    const elemnt = document.querySelector('.options-container')
    elemnt.classList.toggle('active')
  }
  const showDropdown = (e) => {
    document.querySelector(".dropdown-box").classList.toggle("active")
  }
  const logoutHandler = () => {
    dispatch(logoutAction())
    history.push("/")
  }

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  return (
    <div>
      <div className="burger-btn" onClick={e => slideDown(e)}>
        <div/>
        <div/>
        <div/>
      </div>
      <div className="options-container">
        <div className="header-options" style={{ position:"relative" }}>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"/> GIỎ HÀNG
          </Link>
          {userInfo
            ?
            <ProfileDropdown userInfo={userInfo}
                             logoutHandler={logoutHandler} />
            :
            (<Link to="/login">
              <i className="fas fa-user"/> ĐĂNG NHẬP
            </Link>)
          }
        </div>
      </div>
    </div>
  );
};

export default HeaderOptions;
