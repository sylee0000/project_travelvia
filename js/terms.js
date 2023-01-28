document.addEventListener('DOMContentLoaded',()=>{
  const allTerms = document.getElementById('all_agree')
  const terms01 = document.getElementById('terms_01')
  const terms02 = document.getElementById('terms_02')
  const terms03 = document.getElementById('terms_03')
  const terms04 = document.getElementById('terms_04')
  const terms05 = document.getElementById('terms_05')

  allTerms.addEventListener('click',totalCheck)
  terms01.addEventListener('click',termsCheck)
  terms02.addEventListener('click',termsCheck)
  terms03.addEventListener('click',termsCheck)
  terms04.addEventListener('click',termsCheck)
  terms05.addEventListener('click',termsCheck)

  function totalCheck(){
    if(allTerms.checked == true){
      terms01.checked = true
      terms02.checked = true
      terms03.checked = true
      terms04.checked = true
      terms05.checked = true
    } else{
      terms01.checked = false
      terms02.checked = false
      terms03.checked = false
      terms04.checked = false
      terms05.checked = false
    }
  } //이거는 체크하면 다 체크가 되는것이고 아닐경우에는 다 체크가 떼어진다.

  function termsCheck(){
    if(terms01.checked && terms02.checked && terms03.checked && terms04.checked && terms05.checked){
      allTerms.checked = true 
    } else{
      allTerms.checked = false
    }
  } //이거는 다 눌러졌을때 하나라도 체크를 안하게 되면 모두동의 체크가 사라진다.
})


