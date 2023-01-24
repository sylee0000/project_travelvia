
 $(function(){
  $('#user_id').focus();

  let id = 'tmddus9632'
  let pw = '1234'
  let userId
  let userPw
  let count = 0

  $('#user_id').change(function(){
    userId = $('#user_id').val()
  })

  $('#user_pw').change(function(){
    userPw = $('#user_pw').val()
  })


  $("#btn_login").click(function(){

    if(id == userId && pw == userPw){
      alert(userId + '님 ' + '로그인 되었습니다.')
      count = 0
    } else if(count < 5){
      count++

      if(id == userId){
        alert(count + '회' + ' 로그인(비밀번호 오류)에 실패했습니다.(5회 이상 로그인 실패시 계정 보호조치)')
      } else{
          if(pw == userPw){
            alert(count + '회' + ' 로그인(아이디 오류)에 실패했습니다.(5회 이상 로그인 실패시 계정 보호조치)')
          } else{
            alert(count + '회' + ' 로그인(아이디 비밀번호 오류)에 실패했습니다.(5회 이상 로그인 실패시 계정 보호조치)')
          } 
        } 
      
      if(count == 5){
        alert('트래블비아 회원이신가요? 회원이시면 아이디/패스워드 찾기를 이용해주세요 비회원이시면 회원가입 하기를 이용해주세요.')
      } 
    } else {
      alert('5회이상 ID/PW오류로 계정이 보호되었습니다. 고객센터로 문의해주세요.')
    }
  })

})

