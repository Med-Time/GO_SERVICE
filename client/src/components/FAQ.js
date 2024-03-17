import React from 'react'

export default function FAQ() {
  return (
    <div className="container my-3">
      <h1>Frequently Asked Questions</h1>
      <div class="accordion" id="accordionExample">
  <div class="accordion-item mb-4">
    <h2 class="accordion-header">
      <button class="accordion-button fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What is GoService ?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>GoService is a platform for integrated service delivery that addresses diverse societal needs, providing a streamlined, user
          centric experience.</strong></div>
    </div>
  </div>
  <div class="accordion-item mb-4">
    <h2 class="accordion-header">
      <button class="accordion-button fs-4 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Is it effective ?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Our focus is to response to the complaints as fast as possible.</strong>  </div>
    </div>
  </div>
  <div class="accordion-item mb-4">
    <h2 class="accordion-header">
      <button class="accordion-button fs-4 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Do I get response?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Yes, If you checked (want to hear from us).</strong> We will inform you about your complaint status. But If you leave that check box without checked then we won't inform you.</div>
       </div>
    </div>
    <div class="accordion-item mb-4">
    <h2 class="accordion-header">
      <button class="accordion-button fs-4 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
      Do I need to spend more time to resolve registered complaint?
      </button>
    </h2>
    <div id="collapsefour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>No, If you don't need to spend time.</strong> We (and respective department) will resolve your registered issues.</div>
       </div>
    </div>
  </div>
</div>
  )
}