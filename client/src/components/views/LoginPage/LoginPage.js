import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_actions";
import axios from 'axios';
import './LoginPage.css'

function LoginPage(props) {

  let history = useHistory();
  const [user, setUser] = useState({
    userId: '',
    userPwd: ''
  });
  const [userId, setUserId] = useState("");
  const [userPwd, setUserPwd] = useState("");

  const dispatch = useDispatch();

  const onIdHandeler = (e) => {
    setUserId(e.currentTarget.value);
  };

  const onPwdHandeler = (e) => {
    setUserPwd(e.currentTarget.value);
  };


  const onSubmit = (e) => {
    e.preventDefault();

    var frmData = new FormData(document.login);

    axios.post('http://localhost:8080/loginCheck',frmData)
    .then(
        response => {
          if (response.data==="success") {
            console.log("성공",response);
            alert("로그인 성공!\n메인화면으로 이동합니다");
            history.push("/");
          } else {
            console.log("실패",response);
            alert("아이디 또는 비밀번호를 확인해주세요!");
          }
        })
        .catch((err) => {
          console.log(err);
        });

        //   console.log(response);
        //   if (response.payload.loginSuccess) {
        //     props.history.push("/");
        //   } else {
        //     alert(response.payload.message);
        //   }
        // })
        // .catch((err) => {
        //   console.log(err);
        // });





    // axios.post('http://localhost:8080/login', frmData)
    //     .then(
    //         response => {
    //           console.log(response)
    //             alert("로그인 성공!");
    //             history.push('/'); //상품 정보 조회 화면으로 이동
    //         }
    //     );
         
}
// console.log("id",userId)
    // console.log("pwd",userPwd)
    // //로그인을 진행하기위해서
    // //첫번째 useDispatch(액션) 을 활용해서 액션을 dispatch해준다
    // const body = {
    //   id: userId,
    //   password: userPwd,
    // };

    // dispatch(loginUser(body))
    //   .then((response) => {


 
    return(
      <>
       <div class='login' style={{ display: 'flex', justifyContent: 'center' }}>
      <form name='login' onSubmit={onSubmit}>
      <div>
            <h2>로그인</h2>
            <div>
              <h4>아이디</h4>
              <input class='input' id ='userId' type='text' name='userId' value={userId} onChange={onIdHandeler} />

            </div>

            <div>
              <h4>비밀번호</h4>
              <input class='input' id='userPwd' type='password' name='userPwd' value={userPwd} onChange={onPwdHandeler} />
            </div>

            <div>
              <button class='button' type='submit'>로그인</button>
            </div>


        </div>

        </form>
        </div></>

  
    )
    }
  
  
export default LoginPage;