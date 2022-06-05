const steps = document.querySelectorAll('.progress_bar-step');
const steps_container = document.querySelector('.progress_bar-steps');
const steps_progress = document.querySelector('.progress_bar-progress');
const prev_btn = document.querySelector('.progress_bar-nav .prev');
const next_btn = document.querySelector('.progress_bar-nav .next');

function init(){
  const cur_step = steps_container.getAttribute('data-cur_step_index');
  if(!cur_step){
    steps_container.setAttribute('data-cur_step_index', 0)
  }
  changeProgress(cur_step);
}
init();

steps.forEach((step, index) => {
  step.setAttribute('data-step', index);

  step.addEventListener('click', () => {
    const step_index = step.getAttribute('data-step')
    changeProgress(step_index)
  })
})

prev_btn.addEventListener('click', ()=>{
  if(!prev_btn.classList.contains('active')){
    return;
  }

  const cur_step = steps_container.getAttribute('data-cur_step_index');
  changeProgress(+cur_step - 1)
})

next_btn.addEventListener('click', ()=>{
  if(!next_btn.classList.contains('active')){
    return;
  }

  const cur_step = steps_container.getAttribute('data-cur_step_index');
  changeProgress(+cur_step + 1)
})

function changeProgress(targetStepIndex){
  const step_length = steps.length;
  steps_container.setAttribute('data-cur_step_index', targetStepIndex)

  // add progress percentage
  steps_progress.style.width = `${targetStepIndex/(step_length-1)*100}%`

  // add before
  if(targetStepIndex > 0){
    for(i = 0; i <= targetStepIndex; i++){
      steps[i].classList.add('active')
    }
    prev_btn.classList.add('active')
  } else {
    prev_btn.classList.remove('active')
  }

  // remove after
  if(targetStepIndex < (step_length-1)){
    for(i = (+targetStepIndex + 1); i< step_length; i++){
      steps[i].classList.remove('active')
    }

    next_btn.classList.add('active')
  } else {
    next_btn.classList.remove('active')
  }
}