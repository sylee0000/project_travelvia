
//아이디와 비밀번호 조건에 안맞을시 알람생기게 하는 기능

document.addEventListener('DOMContentLoaded',()=>{

  let userId = document.getElementById('user_id')
  let userPw = document.getElementById('user_pw')
  let userpwChk = document.getElementById('user_pw_chk')
  let pwchkBtn = document.getElementById('btn_pw')

  userId.addEventListener('change',checkID)
  userPw.addEventListener('change',checkPW)
  pwchkBtn.addEventListener('click',pwBtn)

  function checkID(){
    if(userId.value.length < 8 || userId.value.length > 16){
      document.querySelector('.id_message').textContent = '아이디는 8~16자리로 입력해주세요.'
      userId.value = ''
      userId.focus()
    } else{
      document.querySelector('.id_message').textContent = '사용가능한 아이디입니다.'
      userPw.focus()
    }
  }

  function checkPW(){
    if(userPw.value.length < 8 || userPw.value.length > 16){
      document.querySelector('.pw_message').textContent = '비밀번호는 8~16자리로 입력해주세요.'
      userPw.value = ''
      userPw.focus()
    } else{
      document.querySelector('.pw_message').textContent = '사용가능한 비밀번호입니다.'
      userpwChk.focus()
    }
  }

  function pwBtn(){
    if(userPw.value != userpwChk.value){
      alert('비밀번호가 다릅니다. 다시 입력해 주세요.')
      userpwChk.focus()
    } else{
      alert('비밀번호가 일치합니다.')
    }
  }
})



