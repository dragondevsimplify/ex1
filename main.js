const tabItems = document.querySelectorAll('.tab-item')
const productCard = document.querySelector('#product-card')
const productImages = document.querySelectorAll('.product-image')
const productHeaders = document.querySelectorAll('.product-header')

function toggleClassNameByStyleNumber(elementList, styleNumber, className) {
   (elementList && styleNumber && className) &&
   elementList.forEach(item => {
      const _styleNumber = +item.dataset.style
      if (_styleNumber === styleNumber) {
         item.classList.remove(className)
      } else {
         item.classList.add(className)
      }
   })
}

tabItems.forEach((tab, _, array) => {
   tab.addEventListener('click', function () {
      if (!this.dataset.style) return
      const styleNumber = +this.dataset.style
      // Switch product style
      productCard.className = `card product-style-${styleNumber}`
      // Active color for tab is activating
      toggleClassNameByStyleNumber(array, styleNumber, 'inactive')
      // Only display image of tag is activating
      toggleClassNameByStyleNumber(productImages, styleNumber, 'hidden')
      // Only display header of tag is activating
      toggleClassNameByStyleNumber(productHeaders, styleNumber, 'hidden')
   })
})
