// alert('hi')
let tabsBtn = document.querySelectorAll('.main__tab-elem');
tabsBtn.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        const path = event.currentTarget.dataset.path;

        tabsBtn.forEach(function (btn) {
            btn.classList.remove('main__tab-elem_on')
        })

        event.currentTarget.classList.add('main__tab-elem_on')

        document.querySelectorAll('.main__wrap').forEach(function (tabContent) {
            tabContent.classList.remove('main__wrap_active')
        })

        document.querySelector(`[data-target="${path}"]`).classList.add('main__wrap_active')
    })
})