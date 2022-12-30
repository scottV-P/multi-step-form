const listNumber = document.querySelectorAll('.list-num'); //lthe class list-active
const inputs = document.querySelectorAll('.inputs')
const nextBtn = document.querySelector('.next-step')
const errorField = document.querySelectorAll('[data-error-field]')

const stepOne = document.querySelector('.step-one-container')
const stepTwo = document.querySelector('.step-two-container')
const stepThree = document.querySelector('.step-three-container')
const stepFour = document.querySelector('.step-four-container')

function update(){
   if(inputs[0].value === ""){
    errorField[0].classList.add('error-field-both')
    inputs[0].classList.add('input-error')
    }else{
        errorField[0].classList.remove('error-field-both')
        inputs[0].classList.remove('input-error')
    }
    if(inputs[1].value === ""){
        errorField[1].classList.add('error-field-both')
        inputs[1].classList.add('input-error')
    }else{
        errorField[1].classList.remove('error-field-both')
        inputs[1].classList.remove('input-error')
    }
    if(inputs[2].value === ""){
        errorField[2].classList.add('error-field-both')
        inputs[2].classList.add('input-error')
    }else{
        errorField[2].classList.remove('error-field-both')
        inputs[2].classList.remove('input-error')
    listActive1()
    hideCardOne()
   }

    
}



function listActive1(){
    listNumber[0].classList.remove('lists-active')    
    listNumber[1].classList.add('lists-active')
}

function hideCardOne(){ 
    stepOne.classList.add('active')
    stepTwo.classList.remove('active')
}



const cards = document.querySelectorAll('.plans')
const toggler = document.querySelector('.toggler')
const nextBtnTwo = document.getElementById('btnTwo')
const GoBack = document.querySelector('#goBack')
const plansConMO = document.querySelector('.plans-container')
const plansConYR = document.querySelector('.plans-c-y')



const monthly = document.querySelector('.monthly')
const yearly = document.querySelector('.yearly')
const yearlyContainer = document.querySelector('.yearlyContainer')
const monthlyContainer = document.querySelector('.monthlyContainer')
toggler.addEventListener('click',()=>{
    const circle = document.querySelector('.circle')
    circle.classList.toggle('toggle-move')
    monthly.classList.toggle('toggle-active')
    yearly.classList.toggle('toggle-active')
    plansConMO.classList.toggle('plan-y-hidden')
    plansConYR.classList.toggle('plan-y-hidden')
    yearlyContainer.classList.toggle('active')
    monthlyContainer.classList.toggle('active')
})




cards.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        const target = e.target
        const lastCard = document.querySelectorAll('.selected')
        if(lastCard){
            lastCard[0].classList.remove('selected')
        }
        item.classList.add('selected');

        const priceMO = target.querySelector('.planPrice')
        const priceYR = target.querySelector('.planPriceYR')
        const title = target.querySelector('.plan-name')

        if(monthly.classList.contains('toggle-active')){
            document.querySelector('.last-time').innerHTML = "Monthly"
            document.querySelector('.total-t').innerHTML = "mo"
            document.querySelector('.service-title').innerHTML = title.innerHTML
            document.querySelector('.priceTotal').innerHTML = priceMO.innerHTML
        }
        if(yearly.classList.contains('toggle-active')){
            document.querySelector('.last-time').innerHTML = "Yearly"
            document.querySelector('.total-t').innerHTML = "yr"
            document.querySelector('.service-title').innerHTML = title.innerHTML
            document.querySelector('.priceTotal').innerHTML = priceYR.innerHTML
        }


        nextBtnTwo.addEventListener('click',()=>{
            stepTwo.classList.add('active')
            stepThree.classList.remove('active')
            listNumber[1].classList.remove('lists-active')    
            listNumber[2].classList.add('lists-active')

            
        })
    });
});



GoBack.addEventListener('click',()=>{
    stepOne.classList.remove('active')
    stepTwo.classList.add('active')
    listNumber[1].classList.remove('lists-active')    
    listNumber[0].classList.add('lists-active')
})




nextBtn.addEventListener('click',  ()=>{
    update()
});


const featureCon = document.querySelectorAll('.features')
const checkMark = document.querySelector('.checkboxes')
const pickBtn = document.getElementById('nextButton')
const linkFeature = document.querySelectorAll('.link')


   
featureCon.forEach(feature=>{
    feature.addEventListener('click',event =>{
        const target = event.target
        const input = target.querySelector('.checkboxes')
        input.toggleAttribute('checked')
        feature.classList.toggle('feature-active')

        if(input.hasAttribute('checked')){
        var title = target.querySelector('.header-feature').innerHTML
        var price = target.querySelector('.price-y').innerHTML  
        var parent = document.querySelector('.last-service-container')
        var featureCreate = document.createElement('div')
        featureCreate.classList.add('service')
        parent.appendChild(featureCreate)
        var featureContent = `<div class="service-title-s">${title}</div>
        <div class="total-price">+$<span class="sec-ser-p">${price}</span><span class="time"></span></div>`
        featureCreate.innerHTML = featureContent
        feature.addEventListener('click',()=>{featureCreate.remove()})


        if(yearly.classList.contains('toggle-active')){
            document.querySelectorAll('.time').forEach(time=>{
                time.innerHTML = "/yr"
            })

        }
        if(monthly.classList.contains('toggle-active')){
            document.querySelectorAll('.time').forEach(time=>{
                time.innerHTML = "/mo"
            })
        }
        
    }
 })
})
    
pickBtn.addEventListener('click',()=>{
        stepFour.classList.remove('active')
        stepThree.classList.add('active')
        listNumber[2].classList.remove('lists-active')    
        listNumber[3].classList.add('lists-active')    
        
       
        const finalTotalitem = document.querySelector('.finalTotal-n')//total price
        const finalTotalS = document.querySelectorAll('.sec-ser-p')
        const mainPrice = document.querySelector('.priceTotal')
        
        let totals = 0 

        finalTotalS.forEach(item=>{
            totals = eval (`${totals } + ${item.innerHTML}`)
            
        })
        
        if(yearly.classList.contains('toggle-active')){
            document.querySelectorAll('.time').forEach(time=>{
                time.innerHTML = "/yr"
            })

        }
        if(monthly.classList.contains('toggle-active')){
            document.querySelectorAll('.time').forEach(time=>{
                time.innerHTML = "/mo"
            })

        }
        finalTotalitem.innerHTML = eval(`${mainPrice.innerHTML} + ${totals}`)
           
           
       
        
})


const goBackLast = document.querySelector('#goBackButton')
goBackLast.addEventListener('click',()=>{
    stepTwo.classList.remove('active')
    stepThree.classList.add('active')
    listNumber[2].classList.remove('lists-active')    
    listNumber[1].classList.add('lists-active')
})



const confirmBtn = document.querySelector('#confirm')
const goBackConfirm = document.querySelector('#goBack_confirm')
const endSection = document.querySelector('.end-container')

confirmBtn.addEventListener('click',()=>{
    endSection.classList.remove('active')
    stepFour.classList.add('active')
})

goBackConfirm.addEventListener('click',()=>{
    stepThree.classList.remove('active')
    stepFour.classList.add('active')
     listNumber[3].classList.remove('lists-active')    
    listNumber[2].classList.add('lists-active')
})
